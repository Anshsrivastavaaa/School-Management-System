"use client";

import { useState } from "react";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  GraduationCap,
  UserCog,
  School,
  Users,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { signIn } from "next-auth/react";

type UserRole = "admin" | "principal" | "teacher" | "parent";

interface RoleOption {
  id: UserRole;
  label: string;
  icon: React.ElementType;
  description: string;
  href: string;
}

const roles: RoleOption[] = [
  {
    id: "admin",
    label: "Admin",
    icon: UserCog,
    href: "/admin/dashboard",
    description: "System Administrator"
  },
  { id: "principal", label: "Principal", icon: School, description: "School Principal", href: "/principal/dashboard" },
  { id: "teacher", label: "Teacher", icon: GraduationCap, description: "Teaching Staff", href: "/teacher/dashboard" },
  { id: "parent", label: "Parent", icon: Users, description: "Student Parent", href: "/parent/dashboard" },
];

import { useRouter } from "next/navigation";
// ... imports

// ... roles definition

export default function LoginPage() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<UserRole>("admin");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [activeTab, setActiveTab] = useState("signin");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const roleData = roles.find((r) => r.id === selectedRole);
      const result = await signIn("credentials", {
        email,
        password,
        role: selectedRole,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid email or password. Please try again.");
      } else {
        router.push(roleData?.href ?? "/admin/dashboard");
      }
    } catch {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const selectedRoleData = roles.find((r) => r.id === selectedRole);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">

      {/* Background video */}
      <video
        className="fixed inset-0 w-full h-full object-cover"
        src="/bg.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark overlay */}
      <div className="fixed inset-0 bg-black/50" />

      {/* Login card */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-md w-full 
  bg-white/10 backdrop-blur-xl 
  border border-black/30 
  rounded-2xl shadow-2xl p-8">


          {/* LOGO */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl flex items-center justify-center">
              <BookOpen className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">EDUNEEV</span>
          </div>

          {/* HEADING */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {activeTab === "signin" ? "Welcome Back!" : "Create Account"}
            </h1>
            <p className="text-gray-900 font-bold" >
              {activeTab === "signin"
                ? "Sign in to access your dashboard"
                : "Register to get started with EDUNEEV"}
            </p>
          </div>

          {/* TABS */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
            <TabsList className="grid w-full h-10 grid-cols-2 bg-gray-300 p-1 rounded-full">
              <TabsTrigger
                value="signin"
                className="
                     focus-visible:ring-2
    focus-visible:ring-emerald-400
    focus-visible:ring-offset-0
    rounded-full
    data-[state=active]:bg-teal-500
    data-[state=active]:text-white
    data-[state=active]:shadow-sm
  "
              >
                Sign In
              </TabsTrigger>
              <TabsTrigger
                value="signup"
                className="
    rounded-full
    data-[state=active]:bg-teal-500
    data-[state=active]:text-white
    data-[state=active]:shadow-sm
  "
              >
                Sign Up
              </TabsTrigger>
            </TabsList>
          </Tabs>

          {/* ROLES */}
          <div className="mb-6">
            <label className="block text-white font-medium text-gray-900 mb-3">
              Select Your Role
            </label>
            <div className="grid grid-cols-2 gap-4">
              {roles.map((role) => {
                const Icon = role.icon;
                const isSelected = selectedRole === role.id;
                return (
                  <button
                    key={role.id}
                    onClick={() => setSelectedRole(role.id)}
                    className={`flex items-center gap-3 p-3 rounded-xl border-1 text-left ${isSelected
                      ? "border-teal-600 bg-teal-5"
                      : "border-white"
                      }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${isSelected ? "bg-teal-600" : "bg-gray-10"
                        }`}
                    >
                      <Icon
                        className={`w-5 h-5 ${isSelected ? "text-gray-50" : "text-gray-50"
                          }`}
                      />
                    </div>
                    <div>
                      <p className="font-bold text-white">{role.label}</p>
                      <p className="text-xs text-white">{role.description}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* FORM */}
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-white   font-medium mb-2">
                Email Address
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className=" text-white
    focus-visible:ring-2 
    focus-visible:ring-teal-500 
    focus-visible:border-teal-500
  "
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2">
                Password
              </label>
              <Input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="
    focus-visible:ring-2 
    focus-visible:ring-teal-500 
    focus-visible:border-teal-500
  "
              />
            </div>

            {error && (
              <div className="p-3 rounded-lg bg-red-500/20 border border-red-500/50 text-red-200 text-sm">
                {error}
              </div>
            )}

            <Button
              className="w-full h-12 bg-teal-600 hover:bg-teal-700 text-white"
              disabled={isLoading}
            >
              {isLoading
                ? "Signing in..."
                : activeTab === "signin"
                  ? "Sign In"
                  : "Create Account"}
            </Button>
          </form>

        </div>
      </div>
    </div>
  );

}
