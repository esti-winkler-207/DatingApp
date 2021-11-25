using Microsoft.AspNetCore.Mvc;
using API.Data;
using System.Threading.Tasks;
using API.Entities;
using API.DTOs;
using System.Security.Cryptography;
using System.Text;
using Microsoft.EntityFrameworkCore;
using API.Interfaces;

namespace API.Controllers
{
    public class AccountController : BaseApiController
    {
        private readonly ITokenService _tokenService;
        private readonly DataContext _context;
       public AccountController(DataContext context , ITokenService tokenService)
       {
           _tokenService = tokenService;
           _context = context;

       }

       [HttpPost("register")]
       public async Task<ActionResult<UserDTO>> Register(RegisterDTO registerDTO)
       {
           if(await UserExists(registerDTO.Username)){
               return BadRequest("username is taken");
           }
           using var hmac = new HMACSHA512();
           var user = new AppUser
           {
               UserName = registerDTO.Username.ToLower(),
               PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDTO.Password)),
               PasswordSalt = hmac.Key

           };
           _context.Users.Add(user);
           await _context.SaveChangesAsync();
           var userDTO = new UserDTO{
               UserName = user.UserName,
               Token = _tokenService.CreateToken(user) 
           };
           return userDTO;
        
       }

       private async Task<bool> UserExists(string username){
            return await _context.Users.AnyAsync(u=> u.UserName == username.ToLower());
       }

       [HttpPost("login")]

       public async Task<ActionResult<UserDTO>> Login(LoginDTO loginDTO){
            var user = await _context.Users
            .SingleOrDefaultAsync(x => x.UserName == loginDTO.Username);
            if(user == null){
                return Unauthorized("Invalid UserName");
            }
            using var hmac = new HMACSHA512(user.PasswordSalt);

            var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDTO.Password));
            for(int i = 0; i < computedHash.Length; i++){
                if(computedHash[i] != user.PasswordHash[i]){
                    return Unauthorized("Invalid Passord");
                }
               
            }
            return new UserDTO{
               UserName = user.UserName,
               Token = _tokenService.CreateToken(user)
           };
        

       }
        
    }
}