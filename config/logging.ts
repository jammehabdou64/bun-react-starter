import { env } from "javel-jcc/helpers";

export const logging = {
  level: env("LOG_LEVEL", "debug"),
};
