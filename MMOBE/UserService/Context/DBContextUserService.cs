using Microsoft.EntityFrameworkCore;
using UserService.ConfigurationModel;

namespace UserService.Context
{
    public class DBContextUserService:DbContext
    {
        public DBContextUserService(DbContextOptions<DBContextUserService> options) : base(options) { }
        public DBContextUserService() { }

        public virtual DbSet<Model.User> Users { get; set; }
        public virtual DbSet<Model.Account> Accounts { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new UserConfiguration());
            modelBuilder.ApplyConfiguration(new AccountConfiguration());
        }

    }
}
