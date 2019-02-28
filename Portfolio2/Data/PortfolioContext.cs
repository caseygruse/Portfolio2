using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Portfolio2.Models;

namespace Portfolio2.Data
{
    public class PortfolioContext : DbContext
    {
        public PortfolioContext(DbContextOptions options)
            : base(options)
        {
        }

        public DbSet<Project> Projects { get; set; }
    }
}


 

        
