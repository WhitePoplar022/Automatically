using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using J.Entities;

namespace J.MainWeb.Controllers
{
	public class HomeController : Controller
	{
		public ActionResult Index()
		{
			//using (DBEntities db = new DBEntities())
			//{
			//	Entities.Single s = new Entities.Single();
			//	s.SingleDatetime = DateTime.Now;
			//	s.SingleTinyintBool = false;
			//	s.SingleTinyintEnum = ESingleTinyintEnum.B;
			//	db.Singles.Add(s);
			//	db.SaveChanges();
			//}

			return View();
		}
	}
}
