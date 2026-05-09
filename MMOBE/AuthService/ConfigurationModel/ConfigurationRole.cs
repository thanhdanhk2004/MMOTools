using AuthService.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AuthService.ConfigurationModel
{
    public class ConfigurationRole : IEntityTypeConfiguration<Role>
    {
        public void Configure(EntityTypeBuilder<Role> builder)
        {
            builder.ToTable("Role");
            builder.HasKey(r => r.RoleId);
            builder.Property(r => r.Name)
                .IsRequired()
                .HasMaxLength(20).HasDefaultValue("User");
        }
    }
}
