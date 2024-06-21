import { Button, buttonVariants } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Hero = () => {
  return (
    <section className="inset-0 flex w-full flex-col place-items-center items-center justify-center gap-10 bg-white bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] py-20 font-base md:py-32">
      <div className="space-y-6 text-center lg:text-start">
        <main className="text-center text-5xl font-bold md:text-6xl">
          <h1 className="inline dark:text-black">neobrutalism design</h1>
        </main>
        <p className="flex justify-center text-center text-xl dark:text-black">
          A modern and minimalist design system for your next project.
        </p>

        <div className="flex items-center justify-center space-x-2">
          <Button className="w-full dark:border-black md:w-1/3">
            Get Started
          </Button>

          <a
            rel="noreferrer noopener"
            href="https://github.com/leoMirandaa/shadcn-landing-page.git"
            target="_blank"
            className={`w-full dark:border-black md:w-1/3 ${buttonVariants({
              variant: "default",
            })}`}
          >
            Github Repository
            <GitHubLogoIcon className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
