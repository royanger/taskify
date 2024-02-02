import Link from "next/link";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <div className="bg-slate-100 fixed bottom-0 w-full px-4 py-3 border-t">
      <div className="flex items-center justify-between w-full md:max-w-screen-2xl mx-auto">
        <Logo />
        <div className="flex md:block items-center justify-between space-x-4 w-full md:w-auto">
          <Button size="sm" variant="ghost">
            Privacy policy
          </Button>
          <Button size="sm" variant="ghost">
            Terms of service
          </Button>
        </div>
      </div>
    </div>
  );
}
