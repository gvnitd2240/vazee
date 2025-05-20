import React from "react";
import Image from "next/image";

const HeroSection = ({ content = null, imgPath }) => {
  return (
    <section className="w-full py-16 px-4 md:px-8 overflow-hidden relative">
      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        {/* Content Left */}
        <div className="w-full max-w-2xl mx-auto md:mx-0 text-center md:text-left">
          {content}
        </div>

        {/* Image Right (Desktop only) */}
        <div className="hidden md:flex justify-end relative z-0">
          <div className="relative w-full max-w-md">
            <Image
              src={imgPath}
              alt="Illustration"
              width={500}
              height={600}
              className="object-contain absolute inset-0 opacity-20 blur-md pointer-events-none"
              priority
            />
          </div>
        </div>

      </div>

      {/* Mobile Image Below Content (Only visible on mobile, hidden on desktop) */}
      <div className="md:hidden mt-10 flex justify-center z-0 hidden">
        <Image
          src={imgPath}
          alt="Mobile Illustration"
          width={300}
          height={400}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default HeroSection;
