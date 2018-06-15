using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace WebMarketPlace
{
    public class AuthOptions
    {
		public const string ISSUER = "MyAuthServer";
		public const string AUDIENCE = "http://localhost:64385/";
		const string KEY = "542541241241545154655424";
		public const int LIFETIME = 30;

		public static SymmetricSecurityKey GetSymmetricSecurityKey()
		{
			return new SymmetricSecurityKey(Encoding.ASCII.GetBytes(KEY));
		}
	}
}
