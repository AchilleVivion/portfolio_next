import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const matcher = [String.raw`/((?!api|_next|_vercel|.*\..*).*)`];
