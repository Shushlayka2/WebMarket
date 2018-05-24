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

		public JsonResult GetMerchandise()
		{
			return Json(db.Merchandises.ToList());
		}

		[HttpGet]
		[Authorize(AuthenticationSchemes = "Bearer")]
		public async Task<JsonResult> GetCurrentUserBasket()
		{
			User user = await db.Users.FirstOrDefaultAsync(u => u.Email == User.Identity.Name);
			return Json(user.Basket);
		}
	}
}
