import { Action, Auth, Controller, Inject, Inertia } from "javel-jcc";

@Inject()
export class EmailVerificationPromptController extends Controller {
  @Action()
  async show() {
    const user = await Auth.user(request());
    if (user?.hasVerifiedEmail()) {
      return response().redirect("/dashboard").toResponse();
    }
    return Inertia.render("Auth/VerifyEmail");
  }
}
