using System.Web;
using System.Web.Mvc;

namespace Mug.Spa2012.Seo
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}