import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Home - A react shopping app with nextjs",
  description:
    "A react shopping app built with nextjs, typescript, tailwind and more developed by @thedevsouvik",
  authors: [
    {
      name: "Souvik Mandal - @thedevsouvik",
      url: "https://github.com/thedevsouvik",
    },
  ],
  keywords: [
    "nextjs",
    "react",
    "typescript",
    "tailwind",
    "shopping",
    "ecommerce",
    "@thedevsouvik",
    "thedevsouvik",
    "thedevsouvik apps",
  ],
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} overscroll-y-auto bg-slate-200 scroll-smooth motion-reduce:scroll-auto`}
      >
        <header className="sticky top-0 w-full h-14 md:h-16 md:px-1 lg:px-2 flex items-center bg-white shadow-md md:shadow-lg">
          <p>App header component</p>
        </header>

        {children}

        <footer className="mt-2 pb-1">
          <p className="bg-white p-1 mb-0.5">App footer component</p>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <p key={i} className="p-1 bg-white my-0.5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nisi
              veniam quos nemo, dicta odio, ea sequi et praesentium minus soluta
              veritatis molestiae maiores facere laborum cum suscipit est
              perferendis, nulla reprehenderit! Reprehenderit illum deleniti,
              facilis ducimus culpa totam. Tenetur?
            </p>
          ))}
        </footer>
      </body>
    </html>
  );
}
