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
};

export type UpdateUser = {
  name: string;
  username: string;
  email: string;
  password: string;
  password_confirmation: string;
  is_active: boolean;
};

export type GetIndexUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
};

export type userIndexParams = {
  email?: string;
  name?: string;
  page?: string | number;
  per_page?: string | number;
  search?: string;
  sort_by?: "id" | "name" | "username" | "email" | "created_at";
  sort_dir?: "Not Set" | "asc" | "desc";
  username?: string;
};
