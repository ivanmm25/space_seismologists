using Microsoft.Data.Analysis;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;


namespace SpaceSeismologists.AppCode
{
    public class ReadCSV
    {

        public static DataFrame GetDataFrame()
        {
            return DataFrame.LoadCsv("./wwwroot/csv/lognonne_2003_catalog_adapted_sep_point.csv",';',true,null,null,-1,10,false,System.Text.Encoding.UTF8);
        }

    }
}
