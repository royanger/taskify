import { Plus } from "lucide-react";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="flex items-center fixed z-50 top-0 w-full h-14 border-b shadow-sm bg-white px-4">
      <div className="flex items-center gap-x-4">
        <div className="hidden md:flex">
          <Logo />
        </div>
        <Button
          size="sm"
          className="hidden md:block h-auto py-1.5 px-2 rounded-sm"
        >
          Create
        </Button>
        <Button size="sm" className="rounded-sm block md:hidden">
          <Plus className="w-4 h-4" />
        </Button>
      </div>
      <div className="flex items-center gap-x-2 ml-auto">
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl="/organization/:id"
          afterSelectOrganizationUrl="/organization/:id"
          afterLeaveOrganizationUrl="/select-org"
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
            },
          }}
        />
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: {
                width: 30,
                height: 30,
              },
            },
          }}
        />
      </div>
    </nav>
  );
}
