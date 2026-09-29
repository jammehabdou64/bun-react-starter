import type { MiddlewareContext } from "bun-jcc/Http/type";

/**
 * Sends a signed-in user to the dashboard.
 * The published guest middleware returns a redirect object the Inertia middleware cannot read.
 */
export class RedirectIfAuthenticated {
  async handle({ request, next }: MiddlewareContext): Promise<Response> {
    if (await request.user()) {
      return response().redirect("/dashboard").toResponse();
    }
    return next();
  }
}
