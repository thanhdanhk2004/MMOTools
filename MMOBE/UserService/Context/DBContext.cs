using Microsoft.EntityFrameworkCore;
using UserService.ConfigurationModel;

namespace UserService.Context
{
    public class DBContext:DbContext
    {
        public DBContext(DbContextOptions<DBContext> options) : base(options) { }
        public DBContext() { }

        public virtual DbSet<Model.User> Users { get; set; }
        public virtual DbSet<Model.Account> Accounts { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new UserConfiguration());
            modelBuilder.ApplyConfiguration(new AccountConfiguration());
        }

    }
}
