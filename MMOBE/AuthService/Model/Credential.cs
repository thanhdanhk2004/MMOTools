namespace AuthService.Model
{
    public class Credential
    {
        public int CredentialId { get; set; }
        public int UserId { get; set; }
        public string? Username { get; set; }
        public string? PasswordHash { get; set; }
        public bool IsActive { get; set; }
        public DateTime CreatedAt { get; set; }
        public List<RefreshToken>? RefreshTokens { get; set; }

    }
}
