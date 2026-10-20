import { env } from "javel-jcc/helpers";

export const logging = {
  /*
    |--------------------------------------------------------------------------
    | Default Log Channel
    |--------------------------------------------------------------------------
    |
    | stack writes to the console and storage/logs/javel.log (Laravel-shaped).
    | Use "single", "daily", or "stderr" alone when you want one destination.
    |
    */

  default: env("LOG_CHANNEL", "stack"),

  level: env("LOG_LEVEL", "debug"),

  channels: {
    stack: {
      driver: "stack",
      channels: ["single", "stderr"],
    },
    single: {
      driver: "single",
      path: "logs/javel.log",
    },
    daily: {
      driver: "daily",
      path: "logs/javel.log",
    },
    stderr: {
      driver: "stderr",
    },
  },
};
