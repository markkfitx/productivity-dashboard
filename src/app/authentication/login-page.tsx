import { GalleryVerticalEnd } from "lucide-react";
import LoginForm from "@/app/authentication/forms/login-form";

// This is the login page component that renders the login form and company logo
export default function LoginPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10 w-full">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <GalleryVerticalEnd className="size-4" />
          </div>
          Keystone Information Systems
        </a>
        <LoginForm />
      </div>
    </div>
  )
}