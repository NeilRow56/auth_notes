import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";

export async function Navbar() {
  const userId = "Neil";

  return (
    <nav className=" flex h-[10vh] items-center border-b bg-slate-200 dark:bg-slate-700">
      <div className="container mx-auto  flex items-center justify-between">
        <Link href="/">
          <h1 className="text-3xl font-bold">Sass Notes</h1>
        </Link>
        <div className="flex items-center gap-x-5">
          <ThemeToggle />

          {!userId ? (
            <div>User Nav</div>
          ) : (
            <div className="flex items-center gap-x-5">
              <Button asChild>
                <Link href="/auth/sign-in">Sign in</Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link href="/auth/sign-up">Sign up</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
