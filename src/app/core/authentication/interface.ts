export interface User {
  [prop: string]: any;

  id?: number | string | null;
  name?: string;
  email?: string;
  avatar?: string;
  roles?: any[];
  permissions?: any[];
}
export enum Role {
  User = 'user',
  Admin = 'admin',
}

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
}
export interface UserInterface {
  [prop: string]: any;

  id?: number | string;
  firstname?: string;
  lastname?: string;
  email?: string;
  gender?: Gender.MALE | Gender.FEMALE | Gender.OTHER | null | string;
  dateOfBirth?: Date | null | string;
  avatarUrl?: string | null;
  roles?: Role.Admin | Role.User;
}

export interface Token {
  [prop: string]: any;

  access_token: string;
  token_type?: string;
  expires_in?: number;
  exp?: number;
  refresh_token?: string;
}
