namespace AuthService.Model
{
    public class RefreshToken
    {
        public int RefreshTokenId { get; set; }
        public string Token { get; set; }
        public DateTime ExpiresAt { get; set; }
        public DateTime CreateAt { get; set; }
        public int CeredentialId { get; set; }
        public Credential Credential { get; set; }
    }
}
