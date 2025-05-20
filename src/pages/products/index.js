import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaAmazon } from "react-icons/fa";
import MainNav from "../../components/MainNav";
import FooterNav from "../../components/FooterNav";

function Products({ showMainAndFootNav = true }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const csvUrl = "https://vazee-slippers.s3.us-east-1.amazonaws.com/products.csv"
    useEffect(() => {
        fetch(csvUrl)
            .then((res) => res.text())
            .then((text) => {
                const lines = text.trim().split("\n");
                const [headerLine, ...dataLines] = lines;
                const headers = headerLine.split(",");
                const parsed = dataLines.map((line) => {
                    const cells = line.split(",");
                    const product = {};
                    headers.forEach((header, index) => {
                        product[header] = cells[index];
                    });
                    return product;
                });
                setProducts(parsed);
                setLoading(false);
            })
            .catch(() => {
                setProducts([]);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            {showMainAndFootNav && <MainNav />}
            <section className="w-full mx-auto px-4 py-16 bg-[#f2e9f0] min-h-[60vh]">
                <h2 className="text-3xl font-bold text-center mb-10 text-[#ae1198]">
                    Products
                </h2>

                {/* Skeleton Loader */}
                {loading && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 animate-pulse">
                        {[...Array(6)].map((_, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-xl shadow-md overflow-hidden h-80"
                            >
                                <div className="bg-gray-200 h-48 w-full" />
                                <div className="p-4 space-y-2">
                                    <div className="h-4 bg-gray-300 rounded w-3/4" />
                                    <div className="h-4 bg-gray-300 rounded w-5/6" />
                                    <div className="h-4 bg-gray-300 rounded w-1/2" />
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Empty state */}
                {!loading && products.length === 0 && (
                    <div className="flex flex-col items-center justify-center text-center text-gray-500">
                        <Image
                            src="/assets/empty-state-3d.png"
                            alt="No Products"
                            layout="responsive"
                            width={300}       // specify actual image width
                            height={300}      // specify actual image height
                            className="mb-6"
                        />
                        {/* <p className="text-xl font-semibold text-[#ae1198]">No products found</p>
                        <p className="text-sm text-gray-600">Please check back later!</p> */}
                    </div>
                )}

                {/* Product List */}
                {!loading && products.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <div
                                key={product.productId}
                                className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
                            >
                                <Image
                                    src={product.imageUrl}
                                    alt={product.title}
                                    className="w-full h-48 object-cover"
                                    width={100}
                                    height={100}
                                />
                                <div className="p-4 flex flex-col flex-1">
                                    <h3 className="text-lg font-semibold mb-1 text-gray-800">{product.title}</h3>
                                    <p className="text-sm text-gray-600 mb-3 flex-1">{product.description}</p>
                                    <p className="text-md font-medium text-[#ae1198] mb-4">
                                        {product.currency} {product.price}
                                    </p>
                                    <div className="flex flex-start gap-2">
                                        <a
                                            href={product.amazonLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 px-4 py-2 bg-[#ae1198] hover:bg-[#d8b1d3] text-white rounded transition"
                                        >
                                            <FaAmazon /> Amazon
                                        </a>
                                        <a
                                            href={product.flipkartLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 px-4 py-2 bg-[#ae1198] hover:bg-[#d8b1d3] text-white rounded transition"
                                        >
                                            <FaAmazon /> Flipkart
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
            {showMainAndFootNav && <FooterNav />}
        </div>
    );
}

export default Products;