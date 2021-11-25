using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using API.Data;
using Microsoft.EntityFrameworkCore;
using API.Services;
using API.Interfaces;
namespace API.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config){
            services.AddDbContext<DataContext> (options=>{
                options.UseSqlite(config.GetConnectionString("DefaultConnection"));
            });
            services.AddScoped<ITokenService, TokenService>();
            return services;
        }
        
    }
}