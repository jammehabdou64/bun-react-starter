import {
  AddQueuedCookiesToResponse,
  Application,
  EncryptCookies,
  StartSession,
  VerifyCsrfToken,
} from "javel-jcc";
import { HandleInertiaRequests } from "../app/Http/Middleware/HandleInertiaRequests";
import { config } from "../config";
import { providers } from "./providers";

const app = Application.create();

await app
  .withConfig(config)
  .withMiddleware((middleware) => {
    middleware.alias();
    middleware.web([
      HandleInertiaRequests,
      VerifyCsrfToken,
      StartSession,
      AddQueuedCookiesToResponse,
      EncryptCookies,
    ]);
  })
  .providers(providers);

export { app };
