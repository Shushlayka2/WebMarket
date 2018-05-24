using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;

namespace WebMarketPlace.Models
{
	[DataContract]
    public class User
	{
		public int Id { get; set; }

		[Required]
		[DataMember]
		public string Email { get; set; }

		[Required]
		public string Password { get; set; }

		[Required]
		[DataMember]
		public string Name { get; set; }

		[DataMember]
		public string Address { get; set; }

		[DataMember]
		public string TelephoneNum { get; set; }

		[DataMember]
		public List<Basket> Basket { get; set; }

		public User()
		{
			Basket = new List<Basket>();
		}
	}
}
