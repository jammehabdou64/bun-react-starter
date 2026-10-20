import { Route } from "javel-jcc";

Route.get("/health", () => ({ ok: true }));
