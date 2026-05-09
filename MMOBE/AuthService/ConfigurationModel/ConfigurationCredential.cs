using AuthService.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AuthService.ConfigurationModel
{
    public class ConfigurationCredential : IEntityTypeConfiguration<Credential>
    {
        public void Configure(EntityTypeBuilder<Credential> builder)
        {
            builder.ToTable("Credentials");
            builder.HasKey(c => c.CredentialId);
            builder.Property(c => c.Username)
                .IsRequired()
                .HasMaxLength(100);
            builder.Property(c => c.PasswordHash).IsRequired();
            builder.Property(c => c.IsActive).HasDefaultValue(true);
            builder.Property(c => c.CreatedAt).HasDefaultValue(DateTime.UtcNow);
            builder.Property(c => c.UserId).IsRequired();
            builder.HasIndex(c => c.Username).IsUnique();
        }
    }
}
