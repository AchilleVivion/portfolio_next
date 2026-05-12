import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // eslint-disable-next-line sonarjs/no-hardcoded-content
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"], // NOSONAR
};
