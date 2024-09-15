import Image from "next/image";
import TestimonialImg from "@/public/images/large-testimonial.jpg";
import DecorationImg from "@/public/images/1.png"; // Import the new image

export default function LargeTestimonial() {
  return (
    <section>
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="space-y-3 text-center">
            <div className="relative inline-flex">
              <Image
                className="rounded-full"
                src={DecorationImg}
                width={48}
                height={48}
                alt="Large testimonial"
              />
            </div>
            <p className="text-2xl font-bold text-gray-900">
              “<em>Hyperflux</em> has empowered our decision-making with advanced AI-driven insights. <em>‘The future is here — an AI Search-Engine.’</em>
            </p>
            <div className="text-sm font-medium text-gray-500">
              <span className="text-gray-700">HyperFlux</span>{" "}
              <span className="text-gray-400">/</span>{" "}
              <a className="text-blue-500" href="#0">
                CEO, CTO
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
