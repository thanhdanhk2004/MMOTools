using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using UserService.Model;

namespace UserService.ConfigurationModel
{
    public class AccountConfiguration : IEntityTypeConfiguration<Account>
    {
        public void Configure(EntityTypeBuilder<Account> builder)
        {
            builder.ToTable("Accounts");
            builder.HasKey(a => a.AccountId);
            builder.Property(a => a.Username)
                .IsRequired()
                .HasMaxLength(100);
            builder.Property(a => a.PasswordHash).IsRequired().HasMaxLength(255);
            builder.HasIndex(a => a.Username).IsUnique();
        }
    }
}
