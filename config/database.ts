import { env } from "javel-jcc/helpers";

export const database = {
  /*
    |--------------------------------------------------------------------------
    | Default Database Connection Name
    |--------------------------------------------------------------------------
    |
    | Here you may specify which of the database connections below you wish
    | to use as your default connection for all database work. Of course
    | you may use many connections at once using the Database library.
    |
    */

  default: env("DB_CONNECTION", "sqlite"),

  /*
    |--------------------------------------------------------------------------
    | Query Log
    |--------------------------------------------------------------------------
    |
    | When true, every SQL statement is logged with bindings and duration,
    | for example: select * from "users" [1] 2.15ms. Defaults to APP_DEBUG.
    |
    */

  log_queries: env("DB_LOG_QUERIES", env("APP_DEBUG", false)),

  connections: {
    mysql: {
      driver: "mysql",
      host: env("DB_HOST", "localhost"),
      port: env("DB_PORT", 3306),
      database: env("DB_DATABASE", "jcc"),
      username: env("DB_USERNAME", "root"),
      password: env("DB_PASSWORD", ""),
    },

    postgres: {
      driver: "postgres",
      host: env("DB_HOST", "localhost"),
      port: env("DB_PORT", 5432),
      database: env("DB_DATABASE", "jcc"),
      username: env("DB_USERNAME", "root"),
      password: env("DB_PASSWORD", ""),
    },

    sqlite: {
      driver: "sqlite",
      database: env("DB_DATABASE", "database/database.sqlite"),
    },
  },

  /*
    |--------------------------------------------------------------------------
    | Redis
    |--------------------------------------------------------------------------
    |
    | Named Redis servers. The queue's redis connection uses "default".
    | options.prefix is added to every key.
    |
    */

  redis: {
    options: {
      prefix: env("REDIS_PREFIX", "jcc_"),
    },
    default: {
      url: env("REDIS_URL", "redis://127.0.0.1:6379"),
    },
  },
};
