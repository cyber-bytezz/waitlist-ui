import Image from "next/image";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";
import PlanetTagImg01 from "@/public/images/planet-tag-01.png";
import PlanetTagImg02 from "@/public/images/planet-tag-02.png";
import PlanetTagImg03 from "@/public/images/planet-tag-03.png";
import PlanetTagImg04 from "@/public/images/planet-tag-04.png";


export default function FeaturesPlanet() {
  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
              Empower Your Search & Insights with AI-Driven Precision
            </h2>
          </div>
          {/* Planet */}
          <div className="pb-16 md:pb-20" data-aos="zoom-y-out">
            <div className="text-center">
              <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-gradient-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,theme(colors.blue.500),transparent)]">
                <Image
                  className="rounded-full bg-gray-900"
                  src={PlanetImg}
                  width={400}
                  height={400}
                  alt="Planet"
                />
                <div className="pointer-events-none" aria-hidden="true">
                  <Image
                    className="absolute -right-64 -top-20 z-10 max-w-none"
                    src={PlanetOverlayImg}
                    width={789}
                    height={755}
                    alt="Planet decoration"
                  />
                  <div>
                    <Image
                      className="absolute -left-28 top-16 z-10 animate-[float_4s_ease-in-out_infinite_both] opacity-80 transition-opacity duration-500"
                      src={PlanetTagImg01}
                      width={253}
                      height={56}
                      alt="Tag 01"
                    />
                    <Image
                      className="absolute left-56 top-7 z-10 animate-[float_4s_ease-in-out_infinite_1s_both] opacity-30 transition-opacity duration-500"
                      src={PlanetTagImg02}
                      width={241}
                      height={56}
                      alt="Tag 02"
                    />
                    <Image
                      className="absolute -left-20 bottom-24 z-10 animate-[float_4s_ease-in-out_infinite_2s_both] opacity-25 transition-opacity duration-500"
                      src={PlanetTagImg03}
                      width={243}
                      height={56}
                      alt="Tag 03"
                    />
                    <Image
                      className="absolute bottom-32 left-64 z-10 animate-[float_4s_ease-in-out_infinite_3s_both] opacity-80 transition-opacity duration-500"
                      src={PlanetTagImg04}
                      width={251}
                      height={56}
                      alt="Tag 04"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Grid */}
          <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:p-6 [&>*]:before:absolute [&>*]:before:bg-gray-800 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-gray-800 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] md:[&>*]:p-10">
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                >
                  <path d="M12 2a10 10 0 0 0-7.12 2.88A10 10 0 0 0 2 12a10 10 0 0 0 2.88 7.12A10 10 0 0 0 12 22a10 10 0 0 0 7.12-2.88A10 10 0 0 0 22 12a10 10 0 0 0-2.88-7.12A10 10 0 0 0 12 2zm0 3a7 7 0 0 1 7 7 7 7 0 0 1-7 7 7 7 0 0 1-7-7 7 7 0 0 1 7-7zm0 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
                </svg>
                <span>AI-Powered Search</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Leverage AI to enhance search capabilities with precise and relevant results. Hyperflux integrates advanced algorithms to deliver high-accuracy answers and insights from a wide range of sources.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                >
                  <path d="M15.5 3a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5H8.5a.5.5 0 0 1-.5-.5V6.5a.5.5 0 0 1 .5-.5h7zm-.5 1H9v11h5V4zm-6 1v11h-3v-7.5L1 7V3h8v1.5L9.5 6H15V4z" />
                </svg>
                <span>Interactive Video Integration</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Integrate dynamic video content seamlessly into your searches. Hyperflux offers interactive video features that enhance user engagement and provide deeper insights through multimedia.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                >
                  <path d="M2 12c0-1.44.58-2.74 1.52-3.68A5.65 5.65 0 0 1 5.52 8c1.67-1.67 3.99-2.5 6.48-2.5 1.69 0 3.31.35 4.8.98A5.963 5.963 0 0 1 22 12a5.963 5.963 0 0 1-2.88 7.12A6.275 6.275 0 0 1 16 18.5c-2.49 0-4.8-.83-6.48-2.5-1.43-1.43-2.4-3.18-2.82-5.02A5.662 5.662 0 0 1 2 12zm6.27 3.84c1.17 1.4 2.74 2.27 4.48 2.27 2.12 0 4.12-.78 5.65-2.27a5.755 5.755 0 0 0 1.48-2.67A5.747 5.747 0 0 0 16 12c0-1.14-.34-2.24-.94-3.16-1.01-1.35-2.35-2.21-3.91-2.8a5.679 5.679 0 0 0-2.91-.68C9.26 5.32 8 6.5 8 8v4.22l-.4.44c-1.07 1.14-1.67 2.6-1.67 4.34a5.754 5.754 0 0 0 1.67 4.16c1.18 1.19 2.69 1.91 4.38 1.91 1.28 0 2.58-.47 3.55-1.32z" />
                </svg>
                <span>Global Data Insights</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Gain access to real-time, data-driven insights from a global perspective. Hyperflux aggregates and analyzes data to provide valuable metrics and trends across various domains.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                >
                  <path d="M19.8 10.6l-1.4-1.2 1.2-1.4c.3-.4.2-1-.2-1.3l-1.8-1.4c-.4-.3-1-.2-1.3.2l-1.2 1.4-1.4-1.2c-.4-.3-1-.2-1.3.2l-1.8 1.4c-.4.3-.5.9-.2 1.3l1.2 1.4-1.2 1.4c-.3.4-.2 1 .2 1.3l1.8 1.4c.4.3 1 .2 1.3-.2l1.2-1.4 1.4 1.2c.4.3 1 .2 1.3-.2l1.8-1.4c.4-.3.5-.9.2-1.3z" />
                </svg>
                <span>Advanced RAG Techniques</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Enhance search results with advanced Retrieval-Augmented Generation (RAG) techniques. Hyperflux employs keyword search and question rephrasing to deliver more accurate and contextually relevant answers.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                >
                  <path d="M12 2a10 10 0 0 0-7.12 2.88A10 10 0 0 0 2 12a10 10 0 0 0 2.88 7.12A10 10 0 0 0 12 22a10 10 0 0 0 7.12-2.88A10 10 0 0 0 22 12a10 10 0 0 0-2.88-7.12A10 10 0 0 0 12 2zm0 3a7 7 0 0 1 7 7 7 7 0 0 1-7 7 7 7 0 0 1-7-7 7 7 0 0 1 7-7zm0 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
                </svg>
                <span>User Authentication and Sessions</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Secure user authentication and session management ensure a personalized experience. Hyperflux integrates authentication with Clerk and uses Postgres/Prisma for secure user session storage and management.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
