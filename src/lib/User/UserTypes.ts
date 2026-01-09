export type User = {
  id: any;
  name: string;
  username: string;
  created_at: string;
  updated_at: string;
};

export type StoreUser = {
  name: string;
  username: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export type UpdateUser = {
  name: string;
  username: string;
  email: string;
  password: string;
  password_confirmation: string;
  is_active: boolean;
}