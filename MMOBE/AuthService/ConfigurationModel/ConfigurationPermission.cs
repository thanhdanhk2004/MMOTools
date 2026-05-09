using AuthService.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AuthService.ConfigurationModel
{
    public class ConfigurationPermission : IEntityTypeConfiguration<Permission>
    {
        public void Configure(EntityTypeBuilder<Permission> builder)
        {
            builder.ToTable("Pemrission");
            builder.HasKey(x => x.PermissionId);
            builder.Property(x => x.Name).IsRequired().HasMaxLength(100);
        }
    }
}
