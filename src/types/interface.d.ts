/** 禁用状态 1 - 启用  0 - 禁用 */
type DisabledStatus = 0 | 1;

/** 角色类型 */
type RoleType = "master" | "guest" | "developer" | "reporter";

/** 性别类型 */
type GenderType = "Male" | "Famale" | "Unknown";

/** 用户 interface */
interface IUser {
  userId: string;
  username: string;
  password: string;
  gender: GenderType;
  age: number;
  address: string;
  phone: string;
  disabled: DisabledStatus;
  roles: IRole[];
}

/** 角色 interface */
interface IRole {
  code: number;
  name: RoleType;
  disabled: DisabledStatus;
  presmission: string;
  desc: string;
}

/** 菜单 interface */
interface IMenu {
  key: string;
  name: string;
  path: string;
  icon: string;
  children: IMenu[];
}
