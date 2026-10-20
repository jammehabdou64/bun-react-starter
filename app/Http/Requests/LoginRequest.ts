import { FormRequest } from "javel-jcc";

export class LoginRequest extends FormRequest {
  override authorize(): boolean {
    return true;
  }

  override rules() {
    return {
      email: "required|email",
      password: "required",
    };
  }
}
