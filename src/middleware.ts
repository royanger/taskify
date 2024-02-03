import { NextResponse } from "next/server";
import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  publicRoutes: ["/"],
  afterAuth(auth, req) {
    // if user is logged but on a public route...
    if (auth.userId && auth.isPublicRoute) {
      let path = "/select-org";

      // if user is logged and has an orgId from Clerk...
      if (auth.orgId) {
        path = `/organization/${auth.orgId}`;
      }

      // redirect to the correct path.
      const orgSelection = new URL(path, req.url);
      return NextResponse.redirect(orgSelection);
    }

    // if user is not logged and not on a public route, we simply
    // redirect to the sign in page (Clerk has a module for this)
    // and return the user to the current page after sign in.
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }

    // if the user is logged in but doesn't have an organisation
    // we redirect them to the organisation selection page.
    if (auth.userId && !auth.orgId && req.nextUrl.pathname !== "/select-org") {
      const orgSelection = new URL("/select-org", req.url);
      return NextResponse.redirect(orgSelection);
    }
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
