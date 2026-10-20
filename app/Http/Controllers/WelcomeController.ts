import { Controller, Inject, Inertia } from "javel-jcc";

@Inject()
export class WelcomeController extends Controller {
  //
  index() {
    return Inertia.render("Welcome");
  }
}
