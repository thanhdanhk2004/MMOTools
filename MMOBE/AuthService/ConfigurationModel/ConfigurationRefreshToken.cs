using AuthService.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AuthService.ConfigurationModel
{
    public class ConfigurationRefreshToken : IEntityTypeConfiguration<RefreshToken>
    {
        public void Configure(EntityTypeBuilder<RefreshToken> builder)
        {
            builder.ToTable("RefreshTokens");
            builder.HasKey(rt => rt.RefreshTokenId);
            builder.Property(rt => rt.Token).IsRequired();
            builder.Property(rt => rt.ExpiresAt).IsRequired();
            builder.Property(rt => rt.CreateAt).IsRequired().HasDefaultValue(DateTime.UtcNow);
            builder.HasOne(rt => rt.Credential)
                   .WithMany(c => c.RefreshTokens)
                   .HasForeignKey(rt => rt.CeredentialId)
                   .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
