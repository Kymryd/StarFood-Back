import {Role} from './role.model';

export class User {

  userId: number;
  userFirstname: string;
  userLastname: string;
  userEmail: string;
  userPhone: string;
  roleByRoleId: Role;
  statusId: number;
  userPassword: string;
}
