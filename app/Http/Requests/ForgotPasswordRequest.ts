import { FormRequest } from "javel-jcc";

export class ForgotPasswordRequest extends FormRequest {
  override authorize(): boolean {
    return true;
  }

  override rules() {
    return {
      email: "required|email",
    };
  }
}
