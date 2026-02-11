import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { authConfig } from "./auth.config"
import { getUserByEmail } from "@/lib/db"

export const { handlers, auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
                role: { label: "Role", type: "text" },
            },
            async authorize(credentials) {
                const email = credentials?.email as string
                const password = credentials?.password as string
                const role = credentials?.role as string

                if (!email || !password) return null

                const user = await getUserByEmail(email)

                if (user) {
                    // In production, use bcrypt to compare hashed passwords
                    if (user.password !== password) return null

                    return {
                        id: user.id,
                        email: user.email,
                        name: `${user.firstName} ${user.lastName}`,
                        role: user.role,
                        schoolId: user.schoolId,
                    }
                }

                // For demo purposes: if no user is found, allow login with any credentials
                // and use the selected role. Remove this in production!
                return {
                    id: `demo-${Date.now()}`,
                    email: email,
                    name: "Demo User",
                    role: role || "admin",
                    schoolId: "school-1",
                }
            },
        }),
    ],
    callbacks: {
        ...authConfig.callbacks,
        async jwt({ token, user }) {
            if (user) {
                token.role = user.role
                token.schoolId = user.schoolId
            }
            return token
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.sub!
                session.user.role = token.role as string
                session.user.schoolId = token.schoolId as string
            }
            return session
        },
    },
    session: {
        strategy: "jwt",
    },
})
