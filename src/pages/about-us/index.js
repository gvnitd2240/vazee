import React from "react";
import Link from "next/link";
import MainNav from "@/components/MainNav";
import FooterNav from "@/components/FooterNav";
import Image from "next/image";

const AboutUs = () => {
    return (
        <div className="bg-[#edddeb] flex flex-col min-h-screen">
            <MainNav />

            {/* Heading */}
            <div className="max-w-7xl w-full mx-auto px-4 md:px-6 pt-10">
                <h2 className="text-3xl md:text-4xl font-bold text-[#ae1198] text-left mb-4">
                    About Us
                </h2>
            </div>

            {/* Content + Image side by side */}
            <div className="max-w-7xl w-full mx-auto px-4 md:px-6 flex flex-col md:flex-row items-start gap-12 pb-16">

                {/* Text Content */}
                <div className="md:w-2/3 text-gray-700 text-base leading-relaxed space-y-6 text-justify">
                    <p className="text-lg">
                        <strong>Welcome to Vazee</strong> — a brand born from resilience, tradition, and the spirit of Agra.
                    </p>

                    <p>
                        Agra is world-renowned for the Taj Mahal, its delicious petha, and its heritage of fine leather craftsmanship. Our family has been part of this rich tradition for generations — handcrafting quality shoes with pride and passion.
                    </p>

                    <p>
                        But in 2020, as the world shut down due to COVID-19, so did our local shop. Orders stopped, streets went silent, and like many small businesses, we faced uncertainty. That’s when we decided to take a leap — <strong>to take our footwear online</strong>.
                    </p>

                    <p>
                        What started as a survival decision soon became our transformation story. With support from our loyal customers and the belief that comfort and style should be accessible, we launched <strong>Vazee</strong> — a modern brand rooted in legacy.
                    </p>

                    <p>
                        Today, we proudly ship over <strong>2,000 pairs of slippers, sandals, and shoes every month</strong> across India. Every pair carries the craftsmanship of Agra and the trust of those who helped us grow.
                    </p>

                    <p className="italic text-[#ae1198]">
                        From handmade leather sandals to trendy daily wear slippers — we make footwear for real women, with real lives.
                    </p>

                    <p>
                        Our focus has always been on <strong>comfort, quality, and design</strong>. Whether it's a casual day at home or a festive outing, Vazee has something for every step of your journey.
                    </p>

                    <p className="font-semibold text-[#ae1198]">
                        Thank you for walking this journey with us. ❤️<br />
                        <strong>Vazee</strong> — Crafted in Agra, Loved Everywhere.
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/products"
                            className="px-6 py-3 bg-[#ae1198] text-white rounded-lg hover:bg-[#9c0e89] transition font-semibold text-center"
                        >
                            Explore Products
                        </Link>
                        <Link
                            href="/contact-us"
                            className="px-6 py-3 border border-[#ae1198] text-[#ae1198] rounded-lg hover:bg-[#fce9f8] transition font-semibold text-center"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>

            <FooterNav />
        </div>
    );
};

export default AboutUs;
