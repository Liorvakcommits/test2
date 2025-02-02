export type Role = "user" | "admin" | "master_admin"

export type UserStatus = "active" | "suspended" | "blocked" | "internal_employee" | "manager"

export type DeviceType = "Android" | "iOS" | "Windows" | "Mac"

export type Permission =
  | "create_markets"
  | "edit_markets"
  | "delete_markets"
  | "manage_users"
  | "manage_admins"
  | "view_financial_data"
  | "modify_financial_data"
  | "access_all_reports"
  | "access_basic_reports"
  | "configure_system"
  | "manage_roles"
  | "override_admin_actions"
  | "access_audit_logs"
  | "modify_fee_structure"
  | "suspend_users"
  | "manage_support_tickets"
  | "moderate_content"
  | "view_system_logs"
  | "manage_marketing_campaigns"
  | "resolve_markets"

export type User = {
  id: string
  fullName: string
  email: string
  registrationDate: string
  lastLoginDate: string
  accountStatus: UserStatus
  authMethod: string
  role: Role
  permissions: Permission[]
  isInternalUser: boolean
  balance: number
  activeMarkets: number
  walletBalance: number
  registrationDevice: DeviceType
  lastAppVersion: string
  walletAddress: string
  tokenId: string
}

export type DeleteRequest = {
  id: string
  userId: string
  requestingAdminId: string
  status: "pending" | "approved" | "rejected"
  userDetails: User
}

