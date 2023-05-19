import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import PageHead from "@/components/PageHead";
import Logo from "@/components/Logo";
import getIcon from "@/components/Icon";
import plataservImage from "../assets/plataserv.png";
import bazingaImage from "../assets/bazinga.png";
import bingehubImage from "../assets/bingehub.png";
import ProjectCard, { Project } from "@/components/ProjectCard";
import StackCard, { Stack } from "@/components/StackCard";
import dp from "../assets/dp.png";
import Image from "next/image";

type testId = string;

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsButtonVisible(!entry.isIntersecting);
      },
      { root: null }
    );

    const section = document.getElementById("home");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleThemeChange = (theme: string) => {
    setIsOpen(false);
    setTheme(theme);
  };

  const horizontalPadding = "px-6 sm:px-8 lg:px-16";

  const renderThemeChanger = () => {
    if (!mounted) {
      return null;
    }

    const BsFillBrightnessHighFill = getIcon("BsFillBrightnessHighFill");
    const BsFillMoonFill = getIcon("BsFillMoonFill");

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button
          className="bg-slate-500 py-2 px-3 rounded-md hover:bg-cyan-700"
          onClick={() => handleThemeChange("light")}
          aria-label="Toggle Theme"
        >
          <BsFillBrightnessHighFill />
        </button>
      );
    }

    return (
      <button
        className="bg-slate-400 py-1 px-2 text-2 lg:py-2 px-3 rounded-md text-white hover:bg-cyan-700"
        onClick={() => handleThemeChange("dark")}
        aria-label="Toggle Theme"
      >
        <BsFillMoonFill />
      </button>
    );
  };

  const BsSendFill = getIcon("BsSendFill");
  const HiMenuAlt3 = getIcon("HiMenuAlt3");
  const IoClose = getIcon("IoClose");
  const HiArrowUp = getIcon("HiArrowUp");
  const SiLinkedin = getIcon("SiLinkedin");
  const SiGithub = getIcon("SiGithub");
  const SiTwitter = getIcon("SiTwitter");

  return (
    <>
      <PageHead />
      <header>
        <nav
          className="bg-white dark:bg-black w-full py-4 sm:py-8 lg:py-10"
          id="nav"
        >
          <div
            className={`w-full h-fit flex items-center justify-between ${horizontalPadding}`}
          >
            <div className="z-10">
              <Link href="/">
                <Logo />
              </Link>
            </div>
            <div className="hidden lg:flex w-1/3 xl:w-1/4 items-center justify-between font-calibre text-slate-500 dark:text-slate-200">
              <p
                className="cursor-pointer hover:text-black dark:hover:text-cyan-700"
                onClick={() => scrollToSection("#about")}
                id="test-about"
              >
                About
              </p>
              <p
                className="cursor-pointer hover:text-black dark:hover:text-cyan-700"
                onClick={() => scrollToSection("#projects")}
              >
                Projects
              </p>
              <p
                className="cursor-pointer hover:text-black dark:hover:text-cyan-700"
                onClick={() => scrollToSection("#stack")}
              >
                Stack
              </p>
              {renderThemeChanger()}
            </div>
            <div className="z-10 text-[#52616B] dark:text-white lg:hidden">
              <HiMenuAlt3
                onClick={() => setIsOpen(!isOpen)}
                className={isOpen ? "hidden" : "block"}
                size="2rem"
              />
              <IoClose
                onClick={() => setIsOpen(false)}
                className={isOpen ? "block" : "hidden"}
                size="2rem"
              />
            </div>
          </div>
          <div
            className={`bg-white dark:bg-black transform ${
              isOpen
                ? "opacity-100 -translate-y-0"
                : "opacity-0 -translate-y-96"
            } lg:hidden z-5 absolute transition-all duration-700 ease-in-out w-full ${horizontalPadding}`}
          >
            <div className="px-2 pt-5 pb-4 space-y-3 font-inter text-[#8892b0] dark:text-slate-300 font-medium sm:px-3">
              <p onClick={() => scrollToSection("#about")}>About</p>
              <p onClick={() => scrollToSection("#projects")}>Projects</p>
              <p onClick={() => scrollToSection("#stack")}>Stack</p>
              {renderThemeChanger()}
            </div>
          </div>
        </nav>
      </header>
      <main
        className={`flex flex-col items-center ${horizontalPadding}`}
        onClick={() => setIsOpen(false)}
      >
        <section
          id="home"
          className="w-full min-h-[75vh] my-[4.5rem] lg:my-[5.5rem] md:max-w-[90%] md:min-h-[50vh] lg:min-h-[75vh] lg:w-full xl:max-w-[75%]"
        >
          <h1 className="font-calibre mb-2 font-semibold text-[#52616B] text-[40px] leading-[44px] lg:text-[80px] lg:leading-[88px] dark:text-slate-300">
            Mahir Mahdi
          </h1>
          <h2 className="font-calibre mb-[30px] font-semibold text-[#8892b0] text-[36px] leading-[40px] lg:text-[72px] lg:leading-[72px]">
            Building things for the{" "}
            <span className="text-cyan-700 font-bold">web.</span>
          </h2>
          <p className="font-calibre mb-[45px] font-normal text-slate-500 text-[16px] leading-[23px] lg:text-[20px] lg:leading-[26px] lg:mb-[35px] dark:text-slate-300">
            Looking for a developer who&apos;s always on the cutting edge?
            You&apos;ve come to the right place! Let&apos;s talk about your
            needs and see if we are the right fit.
          </p>
          <Link href="mailto:mahdimahir45@gmail.com">
            <button className="font-calibre px-4 py-2 bg-cyan-700 rounded-md flex items-center gap-x-3">
              <p className="text-slate-100 dark: text-black">Get In Touch</p>
              <BsSendFill color="white" />
            </button>
          </Link>
        </section>
        <section
          className="w-full grid lg:gap-y-[3.5rem] md:max-w-[90%] lg:w-full xl:max-w-[75%]"
          id="projects"
        >
          <div className="flex gap-x-5 font-calibre mb-[30px] font-medium text-[#52616B] dark:text-slate-300 text-[28px] leading-[32px] lg:text-[36px] lg:leading-[40px]">
            Projects
            <hr className="dark:border-t-slate-600 w-[7.5rem] lg:w-[15rem] mt-5" />
          </div>
          {project_data.map((project, i) => (
            <ProjectCard project={project} key={i} i={i} />
          ))}
        </section>
        <section
          className="w-full grid place-items-center mt-[7.5rem] lg:gap-y-[3.5rem] md:max-w-[90%] lg:w-full xl:max-w-[75%]"
          id="stack"
        >
          <div className="flex gap-x-5 font-calibre mb-[30px] font-medium text-[#52616B] dark:text-slate-300 text-[28px] leading-[32px] lg:text-[36px] lg:leading-[40px]">
            Stack
            <hr className="dark:border-t-slate-600 w-[7.5rem] lg:w-[15rem] mt-5" />
          </div>
          <div className="w-full flex items-center justify-center gap-7 flex-wrap">
            {stack_data.map((stack, i) => (
              <StackCard stack={stack} key={i} />
            ))}
          </div>
        </section>
        <section
          className="w-full grid mt-[12.5rem] mb-[7.5rem] gap-y-[1.5rem] md:max-w-[90%] lg:w-full xl:max-w-[75%]"
          id="about"
        >
          <div className="flex gap-x-5 font-calibre mb-[30px] font-medium text-[#52616B] dark:text-slate-300 text-[28px] leading-[32px] lg:text-[36px] lg:leading-[40px]">
            About Me
            <hr className="dark:border-t-slate-600 w-[7.5rem] lg:w-[15rem] mt-5" />
          </div>
          <div className="w-full flex flex-col-reverse items-center md:justify-between md:flex-row gap-10">
            <div className="grid gap-y-5 font-calibre">
              <p>
                Hello! My name is Mahir, and I enjoy building real-world
                projects. I believe that the best way to develop skills is
                through hands-on experience. That&apos;s why my main focus these
                days is on breaking into the industry to challenge myself and
                level up.
              </p>
              <p>
                Besides coding, I&apos;m interested in finance and psychology.
                Diverse knowledge helps me view problems from different
                perspectives and come up with unique solutions.
              </p>
              <p>
                I&apos;m excited to see where my passion for turning ideas into
                reality will take me next. I hope we can work together to build
                something amazing.
              </p>
              <div className="w-fit gap-x-4 text-[20px] flex items-center">
                <Link href="https://github.com/MahirMahdi" target="_blank">
                  <SiGithub className="hover:text-cyan-700" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/mahirmahdi/"
                  target="_blank"
                >
                  <SiLinkedin className="hover:text-cyan-700" />
                </Link>
                <Link href="https://twitter.com/_MahirMahdi" target="_blank">
                  <SiTwitter className="hover:text-cyan-700" />
                </Link>
              </div>
            </div>
            <Image
              src={dp}
              alt="dp"
              width={300}
              height={300}
              className="rounded-[5px]"
            />
          </div>
        </section>
        <footer className="w-full text-center font-calibre font-light py-5">
          2023 © All Rights Reserved
        </footer>
        {isButtonVisible && (
          <button
            className="fixed bottom-4 z-100 right-4 py-3 px-2 text-[24px] text-white bg-cyan-700 rounded-md"
            onClick={() => scrollToSection("#nav")}
          >
            <HiArrowUp />
          </button>
        )}
      </main>
    </>
  );
}

const scrollToSection = (section: string) => {
  document.querySelector<any>(section).scrollIntoView({
    behavior: "smooth",
  });
};

const span_class = "text-[#52616B] font-medium dark:text-white";

const plataserv_description = (
  <p className="font-calibre text-slate-500 dark:text-slate-300">
    A comprehensive restaurant management system that includes a{" "}
    <span className={span_class}>POS system</span>,{" "}
    <span className={span_class}>speed of service</span> tracking,{" "}
    <span className={span_class}>financial reporting</span>,{" "}
    <span className={span_class}>inventory management</span>, and a{" "}
    <span className={span_class}>PAR builder</span>.
  </p>
);

const bazinga_description = (
  <p className="font-calibre text-slate-500 dark:text-slate-300">
    A <span className={span_class}>chat</span> app, built from scratch with{" "}
    <span className={span_class}>Socket.IO</span> and integrated with the{" "}
    <span className={span_class}>CometChat API</span> for{" "}
    <span className={span_class}>voice</span> and{" "}
    <span className={span_class}>video</span> calling features.
  </p>
);

const bingehb_description = (
  <p className="font-calibre text-slate-500 dark:text-slate-300">
    Bingehub is a <span className={span_class}>Movie</span> &{" "}
    <span className={span_class}>TV Shows</span>-focused website powered by{" "}
    <span className={span_class}>The MovieDB API</span>. On Bingehub, you can
    access information about all the movies,{" "}
    <span className={span_class}>rate</span> them, write{" "}
    <span className={span_class}>reviews</span>, and create a{" "}
    <span className={span_class}>watchlist</span>.
  </p>
);

const project_data = [
  new Project(
    true,
    "PlataServ",
    plataservImage,
    plataserv_description,
    ["React", "Express", "Node.js", "MongoDB", "Chakra UI", "Imagekit"],
    "https://github.com/MahirMahdi/PlataServ/tree/v2.0",
    "https://github.com/MahirMahdi/PlataServ/tree/v2.0"
  ),
  new Project(
    true,
    "Bazinga",
    bazingaImage,
    bazinga_description,
    [
      "React",
      "Express",
      "Node.js",
      "MongoDB",
      "CometChat API",
      "Material UI",
      "Imagekit",
    ],
    "https://github.com/MahirMahdi/Bazinga",
    "https://bazingaa.netlify.app/"
  ),
  new Project(
    false,
    "BingeHub",
    bingehubImage,
    bingehb_description,
    ["React", "Firebase", "The MovieDB API", "Material UI", "Bootstrap"],
    "https://github.com/MahirMahdi/BingeHub",
    "https://binge-hub.netlify.app/"
  ),
];

const SiJavascript = getIcon("SiJavascript");
const SiTypescript = getIcon("SiTypescript");
const SiHtml5 = getIcon("SiHtml5");
const SiCss3 = getIcon("SiCss3");
const SiReact = getIcon("SiReact");
const SiNextdotjs = getIcon("SiNextdotjs");
const SiTailwindcss = getIcon("SiTailwindcss");
const SiMui = getIcon("SiMui");
const SiChakraui = getIcon("SiChakraui");
const SiNodedotjs = getIcon("SiNodedotjs");
const SiExpress = getIcon("SiExpress");
const SiMongodb = getIcon("SiMongodb");
const SiFirebase = getIcon("SiFirebase");
const SiGit = getIcon("SiGit");
const SiDocker = getIcon("SiDocker");

const stack_data = [
  new Stack(<SiJavascript />, "Javascript"),
  new Stack(<SiTypescript />, "Typescript"),
  new Stack(<SiHtml5 />, "HTML"),
  new Stack(<SiCss3 />, "CSS"),
  new Stack(<SiReact />, "React"),
  new Stack(<SiNextdotjs />, "Next.js"),
  new Stack(<SiTailwindcss />, "Tailwind"),
  new Stack(<SiMui />, "Material UI"),
  new Stack(<SiChakraui />, "Chakra UI"),
  new Stack(<SiNodedotjs />, "Node.js"),
  new Stack(<SiExpress />, "Express"),
  new Stack(<SiMongodb />, "MongoDB"),
  new Stack(<SiFirebase />, "Firebase"),
  new Stack(<SiGit />, "Git"),
  new Stack(<SiDocker />, "Docker"),
];
