import { Route } from "javel-jcc/Support/Facades/Route";

Route.get("/health", () => ({ ok: true }));
