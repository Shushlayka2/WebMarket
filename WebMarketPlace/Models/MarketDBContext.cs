using Microsoft.EntityFrameworkCore;

namespace WebMarketPlace.Models
{
    public class MarketDBContext : DbContext
    {
		public DbSet<Merchandise> Merchandises { get; set; }

		public DbSet<User> Users { get; set; }

		public MarketDBContext(DbContextOptions<MarketDBContext> options) 
			: base(options)
		{ }

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			modelBuilder.Entity<Basket>()
			.HasOne(sc => sc.Merchandise)
			.WithMany(s => s.Basket)
			.HasForeignKey(sc => sc.MerchandiseId);

			modelBuilder.Entity<Basket>()
			.HasOne(sc => sc.User)
			.WithMany(c => c.Basket)
			.HasForeignKey(sc => sc.UserId);
		}
	}
}
