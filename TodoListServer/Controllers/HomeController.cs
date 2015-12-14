using System.Web.Mvc;

namespace TodoListServer.Controllers
{
    [RoutePrefix("")]
    public class HomeController : Controller
    {
        //
        // GET: /Home/
        [Route("")]
        public ActionResult Index()
        {
            return View();
        }

    }
}
