using System.ComponentModel.DataAnnotations;

namespace WebMarketPlace.ViewModels
{
    public class RegisterModel
    {
		[Required(ErrorMessage = "Name is not specified")]
		public string Name { get; set; }

		[Required(ErrorMessage = "Email is not specified")]
		public string Email { get; set; }

		[Required(ErrorMessage = "Password is not specified")]
		[DataType(DataType.Password)]
		public string Password { get; set; }

		[DataType(DataType.Password)]
		[Compare("Password", ErrorMessage = "Passwords don't match")]
		public string Confirmpassword { get; set; }
	}
}
