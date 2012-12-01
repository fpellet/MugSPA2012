using System.Linq;
using System.Web.Mvc;
using Mug.Spa2012.Seo.Models;

namespace Mug.Spa2012.Seo.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            var vm = new HomePageViewModel();
            return Result(vm);
        }

        public ActionResult Search(string keyword)
        {
            var vm = new SearchPageViewModel();
            vm.SearchValue = keyword;
            vm.Results = (new MugController()).Search(keyword);
            return Result(vm);
        }

        private ActionResult Result<T>(T vm) where T : ViewModelBase
        {
            if (Request.AcceptTypes == null || !Request.AcceptTypes.Any()) return View(vm);

            var firstAcceptType = Request.AcceptTypes.First();
            return firstAcceptType.ToLowerInvariant().Contains("json") ? (ActionResult)Json(vm, JsonRequestBehavior.AllowGet) : View(vm);
        }
    }
}
