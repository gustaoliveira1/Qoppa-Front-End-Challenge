import { api } from "../services/api";

type User = {
  username: string;
  email: string;
  password: string;
}

export async function useUserRegistration(user: User) {
  const response = await api.post("/singUp", user); 
  const data = response.data;
  const status = response.status;

  return { status, data };
}
