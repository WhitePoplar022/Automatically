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
    public class SingleController : Controller
    {
        private DBEntities db = new DBEntities();

        //
        // GET: /Single/

        public ActionResult Index()
        {
            return View(db.Singles.OrderBy(s => s.ID).ToList());
        }

        //
        // GET: /Single/Details/5

        public ActionResult Details(int id)
        {
            J.Entities.Single single = db.Singles.Single(s => s.ID == id);
            return View(single);
        }

        //
        // GET: /Single/Create

        public ActionResult Create()
        {
            return View();
        }

        //
        // POST: /Single/Create

        [HttpPost]
        public ActionResult Create(J.Entities.Single single)
        {
            if (ModelState.IsValid)
            {
                db.Singles.Add(single);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(single);
        }

        //
        // GET: /Single/Edit/5

        public ActionResult Edit(int id = 0)
        {
            J.Entities.Single single = db.Singles.Find(id);
            if (single == null)
            {
                return HttpNotFound();
            }
            return View(single);
        }

        //
        // POST: /Single/Edit/5

        [HttpPost]
        public ActionResult Edit(J.Entities.Single single)
        {
            if (ModelState.IsValid)
            {
                db.Entry(single).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(single);
        }

        //
        // GET: /Single/Delete/5

        public ActionResult Delete(int id = 0)
        {
            J.Entities.Single single = db.Singles.Find(id);
            if (single == null)
            {
                return HttpNotFound();
            }
            return View(single);
        }

        //
        // POST: /Single/Delete/5

        [HttpPost, ActionName("Delete")]
        public ActionResult DeleteConfirmed(int id)
        {
            J.Entities.Single single = db.Singles.Find(id);
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