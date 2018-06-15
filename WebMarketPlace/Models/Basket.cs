namespace WebMarketPlace.Models
{
    public class Basket
    {
		public int Id { get; set; }

		public int UserId { get; set; }

		public User User { get; set; }

		public int MerchandiseId { get; set; }

		public Merchandise Merchandise { get; set; }
    }
}
