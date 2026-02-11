import type { NextAuthConfig } from "next-auth"

export const authConfig = {
    pages: {
        signIn: "/",
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user
            const isOnLoginPage = nextUrl.pathname === "/"

            // Protected route prefixes
            const protectedPrefixes = ["/admin", "/principal", "/teacher", "/parent", "/student", "/settings"]
            const isOnProtectedPage = protectedPrefixes.some((prefix) => nextUrl.pathname.startsWith(prefix))

            if (isOnProtectedPage) {
                if (isLoggedIn) return true
                return false // Redirect unauthenticated users to login page
            }

            // If logged in and on login page, redirect to dashboard based on role
            if (isLoggedIn && isOnLoginPage) {
                const role = auth.user.role
                const redirectMap: Record<string, string> = {
                    admin: "/admin/dashboard",
                    principal: "/principal/dashboard",
                    teacher: "/teacher/dashboard",
                    parent: "/parent/dashboard",
                    student: "/student/dashboard",
                }
                const redirectTo = redirectMap[role ?? ""] ?? "/admin/dashboard"
                return Response.redirect(new URL(redirectTo, nextUrl))
            }

            return true
        },
    },
    providers: [], // configured in auth.ts
} satisfies NextAuthConfig
