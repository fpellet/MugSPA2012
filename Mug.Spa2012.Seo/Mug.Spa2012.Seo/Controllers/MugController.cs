using System.Collections.Generic;
using System.Web;
using System.Web.Http;
using System.IO;
using System.Linq;
using Mug.Spa2012.Seo.Models;

namespace Mug.Spa2012.Seo.Controllers
{
    public class MugController : ApiController
    {
        public IEnumerable<MugViewModel> Get()
        {
            return (new DirectoryInfo(HttpContext.Current.Server.MapPath("~/Images/Mug/"))).EnumerateFiles().Select(f => new MugViewModel(f));
        }

        public IEnumerable<MugViewModel> Search(string keyword)
        {
            if (string.IsNullOrWhiteSpace(keyword)) return Get();

            var keywords = keyword.Split(' ');
            return Get().Where(m => keywords.Any(m.Name.Contains));
        }
    }
}