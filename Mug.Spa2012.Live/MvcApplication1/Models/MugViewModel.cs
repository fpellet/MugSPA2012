using System;
using System.Collections.Generic;
using System.IO;
using System.Web;

namespace MvcApplication1.Models
{
    public class MugViewModel
    {
        public MugViewModel()
        {
        }

        public MugViewModel(FileInfo file)
        {
            Key = Path.GetFileNameWithoutExtension(file.Name);
            Name = Key.Replace('_', ' ');
            Keywords = Key.Split('_');
            CreationDate = file.CreationTime;
            ImageUri = file.FullName.Replace(HttpContext.Current.Request.PhysicalApplicationPath, "\\");
        }

        public string ImageUri { get; set; }

        public string Name { get; set; }

        public string Key { get; set; }

        public IEnumerable<string> Keywords { get; set; }

        public DateTime CreationDate { get; set; }
    }
}