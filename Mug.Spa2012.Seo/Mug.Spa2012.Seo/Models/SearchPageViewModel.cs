using System.Collections.Generic;
using System.Linq;

namespace Mug.Spa2012.Seo.Models
{
    public class SearchPageViewModel : ViewModelBase
    {
        public string SearchValue { get; set; }

        public IEnumerable<MugViewModel> Results { get; set; }

        public bool HasResults { get { return Results.Any(); } }

        public override string Title
        {
            get
            {
                return "MUG Lyon";
            }
        }
    }
}