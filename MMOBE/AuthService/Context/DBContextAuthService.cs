using Microsoft.EntityFrameworkCore;
using AuthService.ConfigurationModel;

namespace AuthService.Context
{
    public class DBContextAuthService : DbContext
    {
        public DBContextAuthService(DbContextOptions<DBContextAuthService> options) : base(options)
        {
        }
        public DBContextAuthService() { }
        public virtual DbSet<Model.Credential> Credentials { get; set; }
        public virtual DbSet<Model.RefreshToken> RefreshTokens { get; set; }
        public virtual DbSet<Model.Role> Roles { get; set; }
        public virtual DbSet<Model.Permission> Permissions { get; set; }
        public virtual DbSet<Model.UserRole> UserRoles { get; set; }
        public virtual DbSet<Model.RolePermission> RolePermissions { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new ConfigurationCredential());
            modelBuilder.ApplyConfiguration(new ConfigurationRefreshToken());
            modelBuilder.ApplyConfiguration(new ConfigurationRole());
            modelBuilder.ApplyConfiguration(new ConfigurationPermission());
            modelBuilder.ApplyConfiguration(new ConfigurationRolePermission());
            modelBuilder.ApplyConfiguration(new ConfigurationUserRole());   
        }
    }
}
