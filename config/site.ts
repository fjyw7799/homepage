import { Metadata } from "next";

export const siteData = (title: string): Metadata => {
  return {
    title: {
      default: title,
      template: "%s | cater",
    },
    description: "Co-founder of inke.app",
    openGraph: {
      title: "cater",
      description: "Co-founder of inke.app",
      url: "https://dev.851158.xyz",
      siteName: "cater",
      images: [
        {
          url: "https://dev.851158.xyz/og.png",
          width: 1920,
          height: 1080,
        },
      ],
      locale: "zh-CN",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    twitter: {
      title: "Cater",
      card: "summary_large_image",
    },
    icons: {
      shortcut: "/favicon.png",
    },
  };
};
