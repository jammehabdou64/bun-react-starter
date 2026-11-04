import {
  AddQueuedCookiesToResponse,
  Application,
  EncryptCookies,
  StartSession,
  VerifyCsrfToken,
  LogRequest,
  HandleInertiaRequests,
} from "javel-jcc";
import { config } from "../config";
import { providers } from "./providers";

const app = Application.create();

await app
  .withConfig(config)
  .withMiddleware((middleware) => {
    middleware.alias();
    middleware.global([LogRequest]);

    //
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
