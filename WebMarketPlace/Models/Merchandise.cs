using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace WebMarketPlace.Models
{
	[DataContract]
    public class Merchandise
    {
		
		public int Id { get; set; }

		[DataMember]
		[Required]
		public string Name { get; set; }

		[DataMember]
		[Required]
		public string Description { get; set; }

		[DataMember]
		[Required]
		public string Price { get; set; }

		[DataMember]
		public string ImgSource { get; set; }
	}
}
