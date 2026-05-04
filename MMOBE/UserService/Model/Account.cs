namespace UserService.Model
{
    public class Account
    {
        public int AccountId { get; set; }
        public string Username { get; set; }
        public string PasswordHash { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
    }
}
