using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using J.Entities;
using System.IO;
using Newtonsoft.Json;
using J.MainWeb.Models;

namespace J.MainWeb.Controllers
{
    public class SingleController :Controller
    {
        private DBEntities db = new DBEntities();

        //
        // GET: /Single/

        public ActionResult Index()
        {
            return View(db.Singles.ToList());
        }

        //public ActionResult TableData(int PageSize, int PageIndex)
        //{
        //    int RecordCount = db.Singles.Count();
        //    if (RecordCount <= (PageIndex - 1) * PageSize)
        //        PageIndex = 1;
        //    var SingleList = db.Singles
            //    .Select(l => new
            //{
            //    ID=l.ID,
            //    //SingleBinary = l.SingleBinary,
            //    SingleBit = l.SingleBit,
            //    SingleDatetime = l.SingleDatetime,
            //    SingleIntEnum = l.SingleIntEnum,
            //    SingleIntNumber = l.SingleIntNumber,
            //    SingleLongVarchar = l.SingleLongVarchar,
            //    SingleMoney = l.SingleMoney,
            //    SingleText = l.SingleText,
            //    //SingleTinyintBool = l.SingleTinyintBool==true?"true":"false",
            //    SingleTinyintEnum = l.SingleTinyintEnum,
            //    SingleVarchar = l.SingleVarchar
            //})
            //.OrderBy(l => l.ID).Skip((PageIndex - 1) * PageSize).Take(PageSize).ToList();
            //var result = new { Count = RecordCount, Source = SingleList };
            //return Content(SingleList);
        //}

        //
        // GET: /Single/Details/5

        public ActionResult Details(int id)
        {
            J.Entities.Single single = db.Singles.Single(s => s.ID == id);
            return Content(JsonConvert.SerializeObject(new {
                SingleBit = single.SingleBit,
                SingleDatetime = single.SingleDatetime,
                SingleIntEnum = single.SingleIntEnum,
                SingleIntNumber = single.SingleIntNumber,
                SingleLongVarchar = single.SingleLongVarchar,
                SingleMoney = single.SingleMoney,
                SingleText = single.SingleText,
                SingleTinyintBool = single.SingleTinyintBool,
                SingleTinyintEnum = single.SingleTinyintEnum,
                SingleVarchar = single.SingleVarchar                 
            }));
        }
        ////将数据库图片显示 
        //public FileResult Image(int id)
        //{
        //    J.Entities.Single single = db.Singles.Single(s => s.ID == id);
        //    return new FileContentResult(single.SingleBinary, "image/jpeg");
        //}

        //图片转二进制
        public static byte[] ImageDatabytes(string FilePath)
        {
            if (!System.IO.File.Exists(FilePath))
                return null;
            System.Drawing.Bitmap myBitmap = new System.Drawing.Bitmap(System.Drawing.Image.FromFile(FilePath));

            using (System.IO.MemoryStream curImageStream = new System.IO.MemoryStream())
            {
                myBitmap.Save(curImageStream, System.Drawing.Imaging.ImageFormat.Png);
                curImageStream.Flush();

                byte[] bmpBytes = curImageStream.ToArray();
                //如果转字符串的话
                //string BmpStr = Convert.ToBase64String(bmpBytes);
                return bmpBytes;
            }
        }


        //public static System.Drawing.Image ReturnPhoto(byte[] streamByte)
        //{
        //    System.IO.MemoryStream ms = new System.IO.MemoryStream(streamByte);
        //    System.Drawing.Image img = System.Drawing.Image.FromStream(ms);
        //    return img;
        //}


        //上传文件
        [HttpPost]
        public ActionResult UploadFile()
        {
            HttpPostedFileBase file = Request.Files["Filedata"]; //获取单独文件的访问
            var fileGuid = Guid.NewGuid().ToString();//生成随机的guid
            try
            {
                if (file != null)
                {
                    var uploadPath = Server.MapPath("~\\Files") + "\\Single\\" + fileGuid;
                    if (!Directory.Exists(uploadPath))
                    { //判断上传的文件夹是否存在 
                        Directory.CreateDirectory(uploadPath);
                    }
                    file.SaveAs(uploadPath + '\\' + file.FileName);
                    return Content(JsonConvert.SerializeObject(new { state = "success", msg = uploadPath + '\\' + file.FileName }));
                }
                return Content(JsonConvert.SerializeObject(new { state = "error", msg = "文件不存在，请重新上传！" }));
            }
            catch (Exception e)
            {
                return Content(JsonConvert.SerializeObject(new { state = "error", msg = e.Message }));
            }
        }

        //
        // GET: /Single/Create

        public ActionResult Create(int singleIntNumber, int singleIntEnum, decimal singleMoney, DateTime singleDatetime,
            string singleVarchar, string singleLongVarchar, int singleBit, int singleTinyintBool, int singleTinyintEnum, string singleText,string photoPath)
        {
            try
            {
                J.Entities.Single sg = new J.Entities.Single();
                sg.SingleIntNumber = singleIntNumber;
                sg.SingleIntEnum = (ESingleIntEnum)singleIntEnum;
                sg.SingleMoney = singleMoney;
                sg.SingleDatetime = singleDatetime;
                sg.SingleVarchar = singleVarchar;
                sg.SingleLongVarchar = singleLongVarchar;
                sg.SingleBit = singleBit==1?true:false;
                sg.SingleTinyintBool = singleTinyintBool!=0?true:false;
                sg.SingleTinyintEnum = (ESingleTinyintEnum)singleTinyintEnum;
                sg.SingleText = singleText;
                sg.SingleBinary = ImageDatabytes(photoPath);
                db.Singles.Add(sg);
                db.SaveChanges();
                return Content("Y");
            }
            catch
            {
                return Content("N");
            }
        }


        //
        // GET: /Single/Edit/5

        public ActionResult Edit(int id, int singleIntNumber, int singleIntEnum, decimal singleMoney, DateTime singleDatetime,
            string singleVarchar, string singleLongVarchar, int singleBit, int singleTinyintBool, int singleTinyintEnum, string singleText, string photoPath)
        {
            try
            {
                J.Entities.Single sg = db.Singles.Where(a => a.ID == id).FirstOrDefault();
                sg.SingleIntNumber = singleIntNumber;
                sg.SingleIntEnum = (ESingleIntEnum)singleIntEnum;
                sg.SingleMoney = singleMoney;
                sg.SingleDatetime = singleDatetime;
                sg.SingleVarchar = singleVarchar;
                sg.SingleLongVarchar = singleLongVarchar;
                sg.SingleBit = singleBit == 1 ? true : false;
                sg.SingleTinyintBool = singleTinyintBool != 0 ? true : false;
                sg.SingleTinyintEnum = (ESingleTinyintEnum)singleTinyintEnum;
                sg.SingleText = singleText;
                sg.SingleBinary = ImageDatabytes(photoPath);
                if (db.SaveChanges() > 0)
                {
                    return Content("Y");
                }
                return Content("Y");
                //else {
                //    return Content("N");
                //}
            }
            catch (Exception e)
            {
                return Content(e.Message.ToString());
            }
        }

        //
        // POST: /Single/Edit/5

        [HttpPost]
        public ActionResult Edit(J.Entities.Single single)
        {
            if (ModelState.IsValid)
            {
                db.Entry(single).State = EntityState.Modified;
                db.Singles.Attach(single);
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(single);
        }

        //
        // GET: /Single/Delete/5

        public ActionResult Delete(int id)
        {
            J.Entities.Single single = db.Singles.Single(d => d.ID == id);
            db.Singles.Remove(single);
            if (db.SaveChanges() > 0)
            {
                return Content("Y");
            }
            return Content("N");
        }

        //
        // POST: /Single/Delete/5

        [HttpPost, ActionName("Delete")]
        public ActionResult DeleteConfirmed(int id)
        {
            J.Entities.Single single = db.Singles.Single(d => d.ID == id);
            db.Singles.Remove(single);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            db.Dispose();
            base.Dispose(disposing);
        }
    }
}