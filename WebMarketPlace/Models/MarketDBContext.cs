using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebMarketPlace.Models
{
    public class MarketDBContext : DbContext
    {
		public DbSet<Merchandise> Merchandises { get; set; }

		public DbSet<User> Users { get; set; }

		public MarketDBContext(DbContextOptions<MarketDBContext> options) 
			: base(options)
		{ }
    }
}
