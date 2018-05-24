using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;

namespace WebMarketPlace.Models
{
	[DataContract]
    public class Merchandise
    {	
		public int Id { get; set; }

		[Required]
		[DataMember]
		public string Name { get; set; }

		[Required]
		[DataMember]
		public string Description { get; set; }

		[Required]
		[DataMember]
		public string Price { get; set; }

		[DataMember]
		public string ImgSource { get; set; }

		public List<Basket> Basket { get; set; }

		public Merchandise()
		{
			Basket = new List<Basket>();
		}
	}
}
