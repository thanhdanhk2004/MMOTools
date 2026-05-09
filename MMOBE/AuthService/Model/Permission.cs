namespace AuthService.Model
{
    public class Permission
    {
        public int PermissionId { get; set; }
        public string? Name { get; set; }
        public List<RolePermission>? RolePermissions { get; set; }
    }
}
