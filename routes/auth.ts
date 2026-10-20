import { Route } from "javel-jcc/Support/Facades/Route";

import { AuthenticatedSessionController } from "javel-jcc/Auth/Controllers/AuthenticatedSessionController";
import { PasswordResetLinkController } from "javel-jcc/Auth/Controllers/PasswordResetLinkController";
import { NewPasswordController } from "javel-jcc/Auth/Controllers/NewPasswordController";
import { EmailVerificationPromptController } from "javel-jcc/Auth/Controllers/EmailVerificationPromptController";
import { RegisteredUserController } from "@Controllers/RegisteredUserController";
import { EmailVerificationNotificationController } from "javel-jcc/Auth/Controllers/EmailVerificationNotificationController";
import { VerifyEmailController } from "javel-jcc/Auth/Controllers/VerifyEmailController";
import { ProfileController } from "@Controllers/ProfileController";

Route.get("/login", [AuthenticatedSessionController, "create"])
  .middleware("guest")
  .name("login");

//
Route.post("/login", [AuthenticatedSessionController, "store"]).middleware(
  "guest",
);

//
Route.get("/register", [RegisteredUserController, "create"]).middleware(
  "guest",
);

//
Route.post("/register", [RegisteredUserController, "store"]).middleware(
  "guest",
);

//
Route.get("/forgot-password", [
  PasswordResetLinkController,
  "create",
]).middleware("guest");

//
Route.post("/forgot-password", [
  PasswordResetLinkController,
  "store",
]).middleware("guest");

//
Route.get("/reset-password/{token}", [NewPasswordController, "create"])
  .middleware("guest")
  .name("password.reset");

//
Route.post("/reset-password", [NewPasswordController, "store"]).middleware(
  "guest",
);
//
Route.post("/logout", [AuthenticatedSessionController, "destroy"]).middleware(
  "auth",
);
//
Route.get("/email/verify", [
  EmailVerificationPromptController,
  "show",
]).middleware("auth");

//
Route.get("/email/verify/{id}/{hash}", [VerifyEmailController, "verify"])
  .middleware("auth")
  .name("verification.verify");
Route.post("/email/verification-notification", [
  EmailVerificationNotificationController,
  "store",
]).middleware("auth");

//
Route.get("/profile", [ProfileController, "edit"]).middleware("verified");
Route.patch("/profile", [ProfileController, "update"]).middleware("verified");
Route.put("/password", [ProfileController, "password"]).middleware("verified");
Route.delete("/profile", [ProfileController, "destroy"]).middleware("verified");
