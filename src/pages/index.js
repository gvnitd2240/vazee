import React from "react";
import Image from "next/image";
import FooterNav from "../components/FooterNav";
import MainNav from "../components/MainNav";
import Products from "./products";

function HeroSection({ content, imgPath }) {
    return (
        <section className="w-full px-6 py-16 bg-[#EECAE9]">
            <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
                <div className="flex-1">{content}</div>
                <div className="flex-1 flex justify-center" style={{ backgroundImage: `url(${imgPath})` }}>
                    <Image
                        src={imgPath}
                        alt="Hero Illustration"
                        width={500}
                        height={400}
                        className="w-full h-auto"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}

function HomePage() {
    return (
        <div>
            <MainNav />
            <HeroSection
                content={
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#ae1198" }}>
                            Vazee - The Comfort You Deserve.
                        </h2>
                        <a
                            href="/products"
                            className="inline-block bg-[#ae1198] hover:bg-[#9c0e89] text-white px-6 py-3 rounded-lg"
                        >
                            Explore Products
                        </a>
                    </div>
                }
                imgPath="/assets/hero-section-image.png"
            />
            <Products showMainAndFootNav={false} />
            <FooterNav />
        </div>
    );
}

export default HomePage;
