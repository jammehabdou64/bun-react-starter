import { env } from "javel-jcc/helpers";
import { User } from "@Models/User";

export const auth = {
  /*
    |--------------------------------------------------------------------------
    | Authentication Defaults
    |--------------------------------------------------------------------------
    |
    | The session guard stores the user id in the session. The eloquent
    | provider loads that user from the users table.
    |
    */

  defaults: {
    guard: env("AUTH_GUARD", "web"),
  },

  guards: {
    web: {
      driver: "session",
      provider: "users",
    },

    sanctum: {
      driver: "sanctum",
      provider: "users",
    },
  },

  providers: {
    users: {
      driver: "eloquent",
      model: User,
    },
  },

  passwords: {
    users: {
      provider: "users",
      table: "password_reset_tokens",
      expire: 60,
    },
  },

  verification: {
    expire: 60,
  },

  /*
    | Minutes until an API token expires. null keeps the token until it is
    | deleted. createToken() can pass its own expiry instead.
    */
  tokens: {
    expiration: null as number | null,
  },
};
