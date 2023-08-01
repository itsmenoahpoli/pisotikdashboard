// import { $http } from "@/api";
import type { TCredentials } from "@/types/auth";

export class AuthService {
  public static login = async (credentials: TCredentials) => {
    console.log(credentials)
  }
}