import Link from "next/link";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <div className="flex items-center fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white">
      <div className="flex items-center justify-between w-full md:max-w-screen-2xl mx-auto">
        <Logo />
        <div className="flex md:block items-center justify-between space-x-4 w-full md:w-auto">
          <Button size="sm" variant="outline" asChild>
            <Link href="/sign-in">Sign in</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/sign-up">Get Taskify for free</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
