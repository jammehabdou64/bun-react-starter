import { Route } from "javel-jcc";
import { DashboardController } from "@Controllers/DashboardController";
import { WelcomeController } from "@Controllers/WelcomeController";

Route.get("/", [WelcomeController, "index"]);

Route.get("/dashboard", [DashboardController, "show"]).middleware("verified");
Route.redirect("/home", "/dashboard").middleware("verified");

await import("./auth");
