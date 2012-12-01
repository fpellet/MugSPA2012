using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Http;
using MvcApplication1.Models;

namespace MvcApplication1.Controllers
{
    public class MugController : ApiController
    {
        public IEnumerable<MugViewModel> Get()
        {
            return (new DirectoryInfo(HttpContext.Current.Server.MapPath("~/Images/Mug/"))).EnumerateFiles().Select(f => new MugViewModel(f));
        }
    }
}