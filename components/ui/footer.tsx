import Link from "next/link";
import { FaLinkedinIn, FaGithub } from "react-icons/fa"; // Import icons from react-icons
import Image from "next/image";
import DecorationImg from "@/public/images/1.png";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div
          className={`grid gap-10 py-8 sm:grid-cols-12 md:py-12 ${border ? "border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200),transparent)1]" : ""}`}
        >
          {/* 1st block */}
          <div className="space-y-2 sm:col-span-12 lg:col-span-4">
            <div>
              <Image
                className="rounded-full"
                src={DecorationImg}
                width={48}
                height={48}
                alt="Large testimonial"
              />
            </div>
            <div className="text-sm text-gray-600">
              &copy; HyperFlux.ai - All rights reserved.
            </div>
          </div>

          {/* Social block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Social</h3>
            <ul className="flex gap-4">
              <li>
                <Link
                  className="flex items-center justify-center text-blue-500 transition duration-300 ease-in-out hover:text-blue-700"
                  href="https://linkedin.com/in/-aro-barath-chandru--12725622a/?originalSubdomain=in"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="h-6 w-6" />
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center justify-center text-gray-900 transition duration-300 ease-in-out hover:text-gray-700"
                  href="https://github.com/cyber-bytezz"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="h-6 w-6" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Big text */}
      <div className="relative -mt-16 h-60 w-full" aria-hidden="true">
        <div className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[348px] font-bold leading-none before:bg-gradient-to-b before:from-gray-200 before:to-gray-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['AI'] after:absolute after:inset-0 after:bg-gray-300/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['Simple'] after:[text-shadow:0_1px_0_white]"></div>
        {/* Glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3"
          aria-hidden="true"
        >
          <div className="h-56 w-56 rounded-full border-[20px] border-blue-700 blur-[80px]"></div>
        </div>
      </div>
    </footer>
  );
}
