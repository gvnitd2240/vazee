import React from "react";
import Link from "next/link";
import MainNav from "../../components/MainNav";
import FooterNav from "../../components/FooterNav";
import Image from "next/image";

const ContactUs = () => {
  return (
    <div className="bg-[#edddeb] flex flex-col min-h-screen">
      <MainNav />

      {/* Page Heading */}
      <div className="max-w-7xl w-full mx-auto px-4 md:px-6 pt-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#ae1198] text-left mb-4">
          Contact Us
        </h2>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl w-full mx-auto px-4 md:px-6 flex flex-col md:flex-row items-start gap-12 pb-16">

        {/* Text Content */}
        <div className="md:w-2/3 text-gray-700 text-base leading-relaxed space-y-6 text-justify">
          <p className="text-lg">
            <strong>Behind every Vazee product is a person who truly cares — and that’s you.</strong>
          </p>

          <p>
            Whether you have a question about your order, want help choosing the perfect pair, or simply wish to share your thoughts —
            <strong> we’d love to hear from you.</strong> Your trust and feedback mean the world to us.
          </p>

          <p>
            You can email us anytime at{" "}
            <strong>support@vazee.com</strong>, or simply fill out our{" "}
            <Link
              href="https://forms.gle/your-google-form-link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ae1198] font-semibold underline"
            >
              contact form here
            </Link>.
          </p>

          <p>
            We aim to respond within <strong>24–48 hours</strong>, but know that we read and value every message.
          </p>

          <p className="italic text-[#ae1198]">
            Because this isn’t just business — it’s a relationship built on trust, comfort, and care.
          </p>

          <p className="font-semibold text-[rgba(26,38,85,1)]">
            Thank you for choosing Vazee. We’re just a message away.
          </p>
        </div>
      </div>

      <FooterNav />
    </div>
  );
};

export default ContactUs;
