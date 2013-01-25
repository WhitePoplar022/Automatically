using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using J.Entities;

namespace J.MainWeb.Controllers
{
    public class ParentController :Controller
    {
        private DBEntities db = new DBEntities();

        //
        // GET: /Parent/

        public ActionResult Index()
        {


            return View(db.Parents.ToList());
        }
        public ActionResult IndexList() {

            return Json(db.Parents.ToList(),JsonRequestBehavior.AllowGet);
        }

        //
        // GET: /Parent/Details/5

        public ActionResult Details(string id = null)
        {
            Parent parent = db.Parents.Find(id);
            if (parent == null)
            {
                return HttpNotFound();
            }
            return View(parent);
        }

        //
        // GET: /Parent/Create

        public ActionResult Create()
        {
            return View();
        }

        //
        // POST: /Parent/Create

        [HttpPost]
        public ActionResult Create(Parent parent)
        {
            if (ModelState.IsValid)
            {
                db.Parents.Add(parent);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(parent);
        }

        //
        // GET: /Parent/Edit/5

        public ActionResult Edit(string id = null)
        {
            Parent parent = db.Parents.Find(id);
            if (parent == null)
            {
                return HttpNotFound();
            }
            return View(parent);
        }

        //
        // POST: /Parent/Edit/5

        [HttpPost]
        public ActionResult Edit(Parent parent)
        {
            if (ModelState.IsValid)
            {
                db.Entry(parent).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(parent);
        }

        //
        // GET: /Parent/Delete/5

        public ActionResult Delete(string id = null)
        {
            Parent parent = db.Parents.Find(id);
            if (parent == null)
            {
                return HttpNotFound();
            }
            return View(parent);
        }

        //
        // POST: /Parent/Delete/5

        [HttpPost, ActionName("Delete")]
        public ActionResult DeleteConfirmed(string id)
        {
            Parent parent = db.Parents.Find(id);
            db.Parents.Remove(parent);
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