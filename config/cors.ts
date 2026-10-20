import { env } from "javel-jcc/helpers";

export const cors = {
  /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS)
    |--------------------------------------------------------------------------
    |
    | Used by HandleCors when you register that middleware. Paths are matched
    | with * as a wildcard. Allowed origins may include * or exact origins.
    |
    */

  paths: ["api/*", "sanctum/csrf-cookie"],

  allowed_methods: ["*"],

  allowed_origins: String(env("CORS_ALLOWED_ORIGINS", "*"))
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean),

  allowed_origins_patterns: [] as string[],

  allowed_headers: ["*"],

  exposed_headers: [] as string[],

  max_age: 0,

  supports_credentials: false,
};
