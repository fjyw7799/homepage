import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { siteData } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = siteData("关于我 | cater");

const socials = [
  {
    icon: <Twitter size={20} />,
    href: "https://twitter.com/caterx",
    label: "Twitter",
    handle: "@caterx",
  },
  {
    icon: <Mail size={20} />,
    href: "mailto:tom8881818@gmail.com",
    label: "Email",
    handle: "tom8881818@gmail.com",
  },
  {
    icon: <Github size={20} />,
    href: "https://github.com/fjyw7799",
    label: "Github",
    handle: "cater",
  },
];

export default function Example() {
  return (
    <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container min-h-screen px-4 mx-auto py-24">
        <div className="text-zinc-200 text-center mb-10">
          <h2 className="text-zinc-200 font-bold text-xl mb-6">关于我</h2>
          <p className="mb-1">🐱 编程魔法师 ‣ AI探索者 ‣ 数字世界的构建者</p>
          <p className="mb-1">🔍 资源收集控 ‣ 信息的猎人 ‣ 知识的守护者</p>
          <p className="mb-1">🧘‍♂️ 佛教徒 ‣ 心灵的修行者 ‣ 平和的寻求者</p>
        </div>
        <div className="text-center">
          <h2 className="text-zinc-200 font-bold text-xl mb-6">联系我</h2>
          <div className="grid w-full grid-cols-1 gap-8 mx-auto sm:mt-0 sm:grid-cols-3 lg:gap-16">
            {socials.map((s) => (
              <Card>
                <Link
                  href={s.href}
                  target="_blank"
                  className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16">
                  <span
                    className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                    aria-hidden="true"
                  />
                  <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                    {s.icon}
                  </span>{" "}
                  <div className="z-10 flex flex-col items-center">
                    <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                      {s.handle}
                    </span>
                    <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                      {s.label}
                    </span>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
