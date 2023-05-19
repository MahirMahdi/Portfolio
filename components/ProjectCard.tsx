import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import getIcon from "./Icon";

interface project {
  featured: boolean;
  name: string;
  image: StaticImageData;
  description: any;
  stack: string[];
  github_repo: string;
  project_link: string;
}

type ComponentProps = {
  project: project;
  i: number;
};

export default function ProjectCard({ project, i }: ComponentProps) {
  const {
    featured,
    name,
    image,
    description,
    stack,
    github_repo,
    project_link,
  } = project;

  const BsGithub = getIcon("BsGithub");
  const HiOutlineExternalLink = getIcon("HiOutlineExternalLink");

  return (
    <div
      className={`grid gap-y-4 mb-[3.5rem] lg:mb-[5rem] w-full h-fit lg:flex ${
        i % 2 === 1 && "lg:flex-row-reverse"
      }`}
    >
      <Image
        src={image}
        alt="plataserv"
        width={600}
        height={280}
        className="border border-solid border-slate-200 rounded-md dark:border-slate-900"
      />
      <div
        className={`${
          i % 2 === 0 ? "lg:text-right lg:pl-10" : "lg:pr-10"
        } space-y-3`}
      >
        <div>
          {featured && (
            <p className="font-calibre text-cyan-700 font-semibold text-[16px] lg:text-[18px]">
              Featured Project
            </p>
          )}
          <p className="font-calibre font-semibold text-[22px] lg:text-[26px] text-[#52616B] dark:text-slate-300">
            {name}
          </p>
        </div>
        {description}
        <div
          className={`flex text-[#52616B] dark:text-slate-300 items-center ${
            i % 2 === 0 && "lg:justify-end"
          } gap-x-2 flex-wrap font-mono`}
        >
          {stack.map((value, i) => (
            <p key={i}>{value}</p>
          ))}
        </div>
        <div
          className={`flex w-fit gap-x-2 text-[1.35rem] ${
            i % 2 === 0 && "lg:float-right"
          }`}
        >
          <Link
            className={`w-[48px] h-[48px] grid ${
              i % 2 === 0 && "lg:justify-items-end"
            }`}
            aria-label="Github repository url"
            href={github_repo}
          >
            <BsGithub />
          </Link>
          <Link
            className={`w-[48px] h-[48px] grid ${
              i % 2 === 0 && "lg:justify-items-end"
            }`}
            aria-label="Project url"
            href={project_link}
          >
            <HiOutlineExternalLink />
          </Link>
        </div>
      </div>
    </div>
  );
}

export class Project {
  featured: boolean;
  name: string;
  image: StaticImageData;
  description: any;
  stack: string[];
  github_repo: string;
  project_link: string;
  constructor(
    featured: boolean,
    name: string,
    image: StaticImageData,
    description: any,
    stack: string[],
    github_repo: string,
    project_link: string
  ) {
    this.featured = featured;
    this.name = name;
    this.image = image;
    this.description = description;
    this.stack = stack;
    this.github_repo = github_repo;
    this.project_link = project_link;
  }
}
