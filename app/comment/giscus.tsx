"use client";
import Giscus from "@giscus/react";

export default function GiscusComment() {
  return (
    <Giscus
      id="comments"
      repo="fjyw7799/homepage"
      repoId="R_kgDOLW9WAA"
      category="Announcements"
      categoryId="DIC_kwDOLW9WAM4Cdemg"
      mapping="title"
      term="Hi"
      reactionsEnabled="0"
      emitMetadata="0"
      inputPosition="bottom"
      theme="noborder_dark"
      lang="zh-CN"
      loading="lazy"
    />
  );
}
