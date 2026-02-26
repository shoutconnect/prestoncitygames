// Design and images
import Link from "next/link";
import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiTwitterXFill,
} from "react-icons/ri";
// Libraries
// Components
// Outside data

/////////////////////////////

export default function Footer() {
  const year = new Date().getFullYear();
  const navigation = [
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/company/prestoncitygames",
      icon: <RiLinkedinFill className="h-6 w-6" />,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/prestoncitygames",
      icon: <RiFacebookCircleFill className="h-6 w-6" />,
    },
    // {
    //   name: "Instagram",
    //   href: "https://www.instagram.com/shoutconnecthq/",
    //   icon: <RiInstagramFill className="h-6 w-6" />,
    // },
    // {
    //   name: "Twitter",
    //   href: "https://twitter.com/pr_citygames",
    //   icon: <RiTwitterXFill className="h-6 w-6" />,
    // },
  ];

  return (
    <footer className="">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              className="text-slate-400 hover:text-slate-500"
            >
              <span className="sr-only">{item.name}</span>
              {item.icon}
            </a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0 text-xs leading-5 text-slate-400">
          <p className="mb-2">
            &copy; {year} Shout Connect, ltd. All rights reserved.
          </p>
          <div className="flex gap-4 font-bold ">
            <Link
              href="/terms-and-conditions"
              target="_blank"
              className="hover:text-white"
            >
              Terms and Conditions
            </Link>
            <Link
              href="/privacy-policy"
              target="_blank"
              className="hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookie-policy"
              target="_blank"
              className="hover:text-white"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
