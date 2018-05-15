using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebMarketPlace.Models;
using WebMarketPlace.ViewModels;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebMarketPlace.Controllers
{
    public class AccountController : Controller
    {
		MarketDBContext db;

		public AccountController(MarketDBContext context)
		{
			db = context;
		}

		[HttpPost]
		[ValidateAntiForgeryToken]
		public async Task<IActionResult> Login(LoginModel model)
		{
			if (ModelState.IsValid)
			{
				User user = await db.Users.FirstOrDefaultAsync(u => u.Email == model.Email && u.Password == model.Password);
				if (user != null)
				{
					await Authenticate(model.Email);

					return RedirectToAction("Index", "Home");
				}
				ModelState.AddModelError("", "Некорректные логин и(или) пароль");
			}
			return View(model);
		}

		private async Task Authenticate(string userName)
		{
			var claims = new List<Claim>
			{
				new Claim(ClaimsIdentity.DefaultNameClaimType, userName)
			};
			ClaimsIdentity id = new ClaimsIdentity(claims, "ApplicationCookie", ClaimsIdentity.DefaultNameClaimType, ClaimsIdentity.DefaultRoleClaimType);
			await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(id));
		}

		[HttpPost]
		//[ValidateAntiForgeryToken]
		public async Task<IActionResult> Register([FromBody] RegisterModel  model)
		{
			if (ModelState.IsValid)
			{
				User user = await db.Users.FirstOrDefaultAsync(u => u.Email == model.Email);
				if (user == null)
				{
					db.Users.Add(new User { Email = model.Email, Password = model.Password, Name = model.Name });
					await db.SaveChangesAsync();

					await Authenticate(model.Email);

					return Ok();
				}
				else
					ModelState.AddModelError("", "Некорректные логин и(или) пароль");
			}
			return BadRequest(ModelState);
		}
	}
}
