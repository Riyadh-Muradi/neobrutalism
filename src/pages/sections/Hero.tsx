import { Button, buttonVariants } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="inset-0 flex w-full flex-col items-center justify-center gap-10 border-2 border-black bg-white bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] py-20 font-base md:py-32">
      <div className="max-w-7xl space-y-6 text-center">
        <main className="text-center text-5xl font-bold md:text-6xl">
          <h1 className="inline">Neobrutalism design</h1>
        </main>
        <div className="text-xl">
          <p>
            A minimalistic design system for your next project. Created using
          </p>
          <div className="flex flex-col items-center md:flex-row md:justify-center">
            <Link
              href="https://www.neobrutalism.dev/"
              target="_blank"
              className="mx-1 font-bold duration-300 hover:tracking-wide"
            >
              Neobrutalism
            </Link>
            <span className="hidden md:inline">and</span>
            <Link
              href="https://ui.shadcn.com/"
              target="_blank"
              className="mx-1 font-bold duration-300 hover:tracking-wide"
            >
              Shadcn/ui
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 md:flex-row">
          <Button>Get Started</Button>

          <Link
            href="https://github.com/leoMirandaa/shadcn-landing-page.git"
            target="_blank"
            className={`bg-white hover:bg-main ${buttonVariants({
              variant: "default",
            })}`}
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

export default Hero;
