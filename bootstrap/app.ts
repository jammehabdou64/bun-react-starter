import {
  AddQueuedCookiesToResponse,
  Application,
  EncryptCookies,
  StartSession,
  VerifyCsrfToken,
} from "bun-jcc";
import { HandleInertiaRequests } from "../app/Http/Middleware/HandleInertiaRequests";
import { RedirectIfAuthenticated } from "../app/Http/Middleware/RedirectIfAuthenticated";
import { config } from "../config";
import { providers } from "./providers";

const app = Application.create();

await app
  .withConfig(config)
  .withMiddleware((middleware) => {
    middleware.alias({ guest: RedirectIfAuthenticated });
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
