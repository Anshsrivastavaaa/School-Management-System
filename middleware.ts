export { auth as middleware } from "./auth"

export const config = {
    // Match all routes except static files and API auth routes
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.svg$|.*\\.mp4$).*)"],
}
