using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using WebMarketPlace.Models;
using WebMarketPlace.ViewModels;

namespace WebMarketPlace.Controllers
{
	public class AccountController : Controller
	{
		MarketDBContext db;

		public AccountController(MarketDBContext context)
		{
			db = context;
		}

		[HttpGet]
		[Authorize(AuthenticationSchemes ="Bearer")]
		public async Task<IActionResult> GetCurrentUser()
		{
			User user = await db.Users.FirstOrDefaultAsync(u => u.Email == User.Identity.Name);
			return Json(user);	
		}

		[HttpPost]
		[Authorize(AuthenticationSchemes = "Bearer")]
		public IActionResult UpdateUser([FromBody]User userInfo)
		{
			User user = (from u in db.Users
						 where u.Email == User.Identity.Name
						 select u).First();
			user.Name = userInfo.Name ?? user.Name;
			user.Address = userInfo.Address ?? user.Address;
			user.TelephoneNum = userInfo.TelephoneNum ?? user.TelephoneNum;
			db.Users.Update(user);
			db.SaveChanges();
			return Ok();
		}

		[HttpPost]
		public async Task<IActionResult> Login([FromBody]LoginModel model)
		{
			if (ModelState.IsValid)
			{
				User user = await db.Users.FirstOrDefaultAsync(u => u.Email == model.Email && u.Password == model.Password);
				if (user != null)
				{
					var identity = GetIdentity(model.Email);
					return SendToken(identity);
				}
				ModelState.AddModelError("", "Incorrect login or passwords");
			}
			return BadRequest(ModelState);
		}

		[HttpPost]
		public async Task<IActionResult> Register([FromBody] RegisterModel  model)
		{
			if (ModelState.IsValid)
			{
				User user = await db.Users.FirstOrDefaultAsync(u => u.Email == model.Email);
				if (user == null)
				{
					db.Users.Add(new User { Email = model.Email, Password = model.Password, Name = model.Name });
					await db.SaveChangesAsync();
					var identity = GetIdentity(model.Email);
					return SendToken(identity);
				}
				ModelState.AddModelError("", "You are registered yet");
			}
			return BadRequest(ModelState);
		}

		private ClaimsIdentity GetIdentity(string userName)
		{
			var claims = new List<Claim>
			{
				new Claim(ClaimsIdentity.DefaultNameClaimType, userName)
			};
			ClaimsIdentity id = new ClaimsIdentity(claims, "Token", ClaimsIdentity.DefaultNameClaimType, ClaimsIdentity.DefaultRoleClaimType);
			return id;
		}

		private IActionResult SendToken(ClaimsIdentity identity)
		{
			var now = DateTime.UtcNow;
			var jwt = new JwtSecurityToken(
				issuer: AuthOptions.ISSUER,
				audience: AuthOptions.AUDIENCE,
				notBefore: now,
				claims: identity.Claims,
				expires: now.Add(TimeSpan.FromMinutes(AuthOptions.LIFETIME)),
				signingCredentials: new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256));
			var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);
			return Json(encodedJwt);
		}
	}
}
