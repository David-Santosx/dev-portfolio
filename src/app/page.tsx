import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { TextAnimate } from "@/components/ui/text-animate";
import { TypingAnimation } from "@/components/ui/type-animation";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import { Badge } from "@/components/ui/badge";
import { Press_Start_2P } from "next/font/google";
import { Separator } from "@/components/ui/separator";

const decorationFont = Press_Start_2P({ subsets: ["latin"], weight: "400" });

export function HeroSection() {
  return (
    <section className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-0">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)] opacity-30"
        )}
      />
      <div className="text-center md:text-left flex flex-col gap-y-4">
        <TypingAnimation
          as="h1"
          duration={100}
          className="text-4xl md:text-5xl lg:text-7xl mb-4 font-bold"
        >
          Hello, I&apos;m David Santos
        </TypingAnimation>
        <TextAnimate
          className="dark:text-neutral-400 text-neutral-800 max-w-3xl tracking-normal text-lg md:text-xl lg:text-2xl"
          animation="blurIn"
          by="word"
        >
          During these 3 years as Front-End Software Engineer. My role has
          extended beyond coding to effective communication with various
          departments, to define new features and spearheading the development
          of new apps.
        </TextAnimate>
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 mt-6">
          <Button className="rounded-sm w-full sm:w-auto">Download CV</Button>
          <Link href="/projects">
            <Button
              variant={"ghost"}
              className="dark:text-orange-300 text-orange-400 w-full sm:w-auto"
            >
              See projects
            </Button>
          </Link>
        </div>
      </div>
      <div className="w-[280px] md:w-[380px]">
        <Image
          src="/images/avatar.svg"
          alt="David Santos"
          width={380}
          height={380}
          className="drop-shadow-lg w-full h-auto"
        />
      </div>
    </section>
  );
}

const TechsCard = ({
  img,
  name,
  stack,
  description,
}: {
  img: string;
  name: string;
  stack: "backend" | "frontend" | "fullstack";
  description: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 overflow-hidden rounded-xl border p-4",
        // light styles
        "border-neutral-950/[.1] bg-neutral-800/[.2] hover:bg-neutral-950/[.4]",
        // dark styles
        "dark:border-neutral-50/[.1] dark:bg-neutral-800/[.3] dark:hover:bg-neutral-950/[.4]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          width="32"
          height="32"
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40 line-clamp-3">
            {description}
          </p>
          <Badge
            variant={"outline"}
            className="text-xs font-semibold dark:text-orange-300 text-black border-black dark:border-white/10 capitalize mt-3"
          >
            {stack}
          </Badge>
        </div>
      </div>
    </figure>
  );
};

export function TechsCarousel() {
  const technologies: Array<{
    name: string;
    description: string;
    img: string;
    stack: "backend" | "frontend" | "fullstack";
  }> = [
    {
      name: "Next.js",
      description:
        "Next.js is my go-to framework for building React applications. Its server-side rendering and static site generation capabilities make it perfect for performance and SEO.",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      stack: "fullstack",
    },
    {
      name: "React",
      description:
        "I love building user interfaces with React. Its component-based architecture allows for reusable and maintainable code.",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      stack: "frontend",
    },
    {
      name: "TypeScript",
      description:
        "TypeScript enhances my JavaScript development with static typing, making my code more robust and easier to maintain.",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      stack: "fullstack",
    },
    {
      name: "Mantine UI",
      description:
        "Mantine UI is a modern React component library that helps me build beautiful and accessible interfaces quickly.",
      img: "https://raw.githubusercontent.com/mantinedev/mantine/refs/heads/master/apps/mantine.dev/public/favicon.svg",
      stack: "frontend",
    },
    {
      name: "Postgres",
      description:
        "Postgres is my preferred relational database for building scalable and reliable backend systems.",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      stack: "backend",
    },
    {
      name: "Prisma ORM",
      description:
        "Prisma ORM simplifies database access and management with its type-safe and intuitive API.",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
      stack: "backend",
    },
    {
      name: "Git",
      description:
        "Git is an essential tool for version control, enabling me to collaborate effectively and manage codebases.",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      stack: "fullstack",
    },
    {
      name: "Figma",
      description:
        "Figma is my go-to design tool for creating and collaborating on UI/UX designs.",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
      stack: "frontend",
    },
    {
      name: "JavaScript",
      description:
        "JavaScript is the foundation of my web development skills, enabling me to create dynamic and interactive applications.",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      stack: "fullstack",
    },
    {
      name: "HTML",
      description:
        "HTML is the backbone of web development, allowing me to structure content effectively.",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      stack: "frontend",
    },
    {
      name: "CSS",
      description:
        "CSS enables me to style and layout web pages, creating visually appealing designs.",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      stack: "frontend",
    },
    {
      name: "Node.js",
      description:
        "Node.js allows me to build scalable and efficient server-side applications using JavaScript.",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      stack: "backend",
    },
    {
      name: "Express",
      description:
        "Express is my go-to framework for building RESTful APIs and server-side applications with Node.js.",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      stack: "backend",
    },
  ];

  return (
    <div className="flex flex-col w-full mt-15 gap-8">
      <div className="text-center flex flex-col items-center">
        {/* <span className="dark:text-neutral-400 text-neutral-800 tracking-normal">
          3 years of
        </span> */}
        <span
          className={
            "font-bold text-4xl ml-2 uppercase " + decorationFont.className
          }
        >
          3 years of XP
        </span>
        <span className="dark:text-neutral-400 text-neutral-800 mt-2">
          with the most popular and modern technologies
        </span>
      </div>
      <div className="w-full overflow-hidden">
        <div className="relative flex flex-col items-center justify-center">
          <Marquee pauseOnHover className="[--duration:30s] py-4">
            {technologies
              .slice(0, Math.ceil(technologies.length / 2))
              .map((technology) => (
                <TechsCard key={technology.name} {...technology} />
              ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:30s] py-4">
            {technologies
              .slice(Math.ceil(technologies.length / 2))
              .map((technology) => (
                <TechsCard key={technology.name} {...technology} />
              ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </div>
  );
}

function WordsOfInspiration() {
  return (
    <div className="text-center">
      <p className="mt-2 italic text-sm tracking-tighter">
        &apos;Those who turn ideas into action don&apos;t wait for the right
        moment &minus; they create it and build the future with their own
        hands.&apos;
      </p>
    </div>
  );
}

export default function Page() {
  return (
    <div className="container mt-20 md:mt-40 lg:mt-60 mx-auto px-4 py-8 space-y-20">
      <HeroSection />
      <Separator className="my-8" />
      <TechsCarousel />
      <WordsOfInspiration />
    </div>
  );
}
