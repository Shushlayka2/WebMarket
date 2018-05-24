using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace WebMarketPlace.Controllers
{
	public class HomeController : Controller
	{
		[AllowAnonymous]
		public IActionResult Index()
		{
			return View();
		}
    }
}
