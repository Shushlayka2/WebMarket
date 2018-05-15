using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
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
	}
}
