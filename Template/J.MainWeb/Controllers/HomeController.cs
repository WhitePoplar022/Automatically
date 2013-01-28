using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using J.Entities;
using System.IO;

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

		[HttpPost]
		public ActionResult UploadFile()
		{
			HttpPostedFileBase file = Request.Files["Filedata"]; //获取单独文件的访问
			var fileGuid = Guid.NewGuid().ToString();//生成随机的guid
			if (file != null)
			{
				var uploadPath = Server.MapPath("~/Files") + "/Temp/" + fileGuid;
				if (!Directory.Exists(uploadPath))
				{ //判断上传的文件夹是否存在 
					Directory.CreateDirectory(uploadPath);
				}
				file.SaveAs(uploadPath + '/' + file.FileName);
			}
			return Content(fileGuid);
		}
	}
}
