using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
using WebMarketPlace.Models;

namespace WebMarketPlace.Controllers
{
    public class MerchandiseServicePointController : Controller
    {
		private MarketDBContext db;

		public MerchandiseServicePointController(MarketDBContext context) {
			db = context;
		}

		[HttpGet]
		[AllowAnonymous]
		public JsonResult GetMerchandises()
		{
			return Json(db.Merchandises.ToList());
		}

		[HttpGet]
		[Authorize(AuthenticationSchemes = "Bearer")]
		public JsonResult GetBasketItems()
		{
			User user = db.Users.Include(u => u.Basket).ThenInclude(b => b.Merchandise).Where(u => u.Email == User.Identity.Name).FirstOrDefault();
			return Json(user.Basket.Select(b => b.Merchandise).ToList());
		}

		[HttpGet]
		[Authorize(AuthenticationSchemes = "Bearer")]
		public void BuyItems()
		{
			//TODO: Create transaction processing
			User user = db.Users.Include(u => u.Basket).ThenInclude(b => b.Merchandise).Where(u => u.Email == User.Identity.Name).FirstOrDefault();
			user.Basket.Clear();
			db.SaveChanges();
		}

		[HttpPost]
		[Authorize(AuthenticationSchemes = "Bearer")]
		public void AddMerchandiseToBasket([FromBody]Merchandise merchandise)
		{
			User user = db.Users.Include(u => u.Basket).ThenInclude(b => b.Merchandise).Where(u => u.Email == User.Identity.Name).FirstOrDefault();
			user.Basket.Add(new Basket { UserId = user.Id, MerchandiseId = merchandise.Id });
			db.SaveChanges();
		}

		[HttpPost]
		[Authorize(AuthenticationSchemes = "Bearer")]
		public void DeleteMerchandiseFromBasket([FromBody]Merchandise merchandise)
		{
			User user = db.Users.Include(u => u.Basket).ThenInclude(b => b.Merchandise).Where(u => u.Email == User.Identity.Name).FirstOrDefault();
			Basket basket = user.Basket.Where(b => b.MerchandiseId == merchandise.Id).FirstOrDefault();
			user.Basket.Remove(basket);
			db.SaveChanges();
		}
	}
}
