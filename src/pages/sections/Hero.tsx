import { Button, buttonVariants } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="inset-0 flex w-full flex-col place-items-center items-center justify-center gap-10 bg-white bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] py-20 font-base md:py-32">
      <div className="space-y-6 text-center lg:text-start">
        <main className="text-center text-5xl font-bold md:text-6xl">
          <h1 className="inline">Neobrutalism design</h1>
        </main>
        <p className="flex justify-center text-center text-xl">
          A modern and minimalist design system for your next project. Created
          using
          <Link
            href="https://www.neobrutalism.dev/"
            target="_blank"
            className="mx-1 font-bold duration-300 hover:tracking-wide"
          >
            Neobrutalism
          </Link>
          and
          <Link
            href="https://ui.shadcn.com/"
            target="_blank"
            className="ml-1 font-bold duration-300 hover:tracking-wide"
          >
            Shadcn/ui
          </Link>
        </p>

        <div className="flex flex-col items-center justify-center gap-2 md:flex-row">
          <Button className="w-full md:w-1/3">Get Started</Button>

          <Link
            href="https://github.com/leoMirandaa/shadcn-landing-page.git"
            target="_blank"
            className={`w-full bg-white hover:bg-main md:w-1/3 ${buttonVariants(
              {
                variant: "default",
              },
            )}`}
          >
            Github Repository
            <GitHubLogoIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
