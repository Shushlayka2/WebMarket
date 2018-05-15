using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace WebMarketPlace.Models
{
	[DataContract]
    public class User
	{
		public int Id { get; set; }

		[DataMember]
		[Required]
		public string Email { get; set; }

		[DataMember]
		[Required]
		public string Password { get; set; }

		[DataMember]
		public string Name { get; set; }
	}
}
