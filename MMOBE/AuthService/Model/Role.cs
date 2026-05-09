namespace AuthService.Model
{
    public class Role
    {
        public int RoleId { get; set; }
        public string? Name { get; set; }
        public List<RolePermission>? RolePermissions { get; set; }
        public List<UserRole>? UserRoles { get; set; }
    }
}
