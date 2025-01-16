"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface Slide {
	image: string;
	title: string;
	description: string;
	buttonText: string;
	buttonLink: string;
}

export default function Carousel() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const slides: Slide[] = [
		{
			image: "/onBoard1.png",
			title: "Discover Innovation",
			description: "Explore the latest in tech and innovation.",
			buttonText: "Learn More",
			buttonLink: "/learn-more",
		},
		{
			image: "/shop.png",
			title: "Boost Productivity",
			description: "Tools to help you work smarter, not harder.",
			buttonText: "Get Started",
			buttonLink: "/get-started",
		},
		{
			image: "/farmer.png",
			title: "Harvest Growth",
			description: "Achieve your goals with our proven solutions.",
			buttonText: "Explore",
			buttonLink: "/explore",
		},
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
		}, 3000); // Change slide every 3 seconds
		return () => clearInterval(interval); // Cleanup interval on unmount
	}, [slides.length]);

	const handlePrev = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? slides.length - 1 : prevIndex - 1
		);
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
	};

	return (
		<div className="relative">
			{/* Image Section */}
			<div className="relative h-[150px] w-[150px] mx-auto mt-[20%] object-contain overflow-hidden rounded-lg md:h-48">
				{slides.map((slide, index) => (
					<Image
						key={index}
						src={slide.image}
						fill
						priority
						className={`absolute block transition-opacity duration-700 ease-in-out ${
							index === currentIndex ? "opacity-100" : "opacity-0"
						}`}
						alt={slide.title}
					/>
				))}
			</div>

			{/* Text and Button Section */}
			<div className="absolute mt-[100px] left-1/2 transform -translate-x-1/2 text-center text-black">
				<h2 className="text-4xl font-bold md:text-4xl">
					{slides[currentIndex].title}
				</h2>
				<p className="mt-2 text-sm md:text-lg">
					{slides[currentIndex].description}
				</p>
				<a
					href="/Home"
					className="mt-4 inline-block px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600"
				>
					{slides[currentIndex].buttonText}
				</a>
			</div>

			{/* Navigation Dots */}
			<div className="absolute z-30 flex -translate-x-1/2 bottom-[-320px] left-1/2 space-x-3">
				{slides.map((_, index) => (
					<button
						key={index}
						type="button"
						className={`w-3 h-3 rounded-full ${
							index === currentIndex ? "bg-blue-500" : "bg-gray-300"
						}`}
						onClick={() => setCurrentIndex(index)}
					></button>
				))}
			</div>

			{/* Previous Button */}
			<button
				type="button"
				className="absolute top-[-20%] left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
				onClick={handlePrev}
			>
				<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30">
					<svg
						className="w-4 h-4 text-white"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 6 10"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M5 1 1 5l4 4"
						/>
					</svg>
					<span className="sr-only">Previous</span>
				</span>
			</button>

			{/* Next Button */}
			<button
				type="button"
				className="absolute top-[-20%]  right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
				onClick={handleNext}
			>
				<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30">
					<svg
						className="w-4 h-4 text-white"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 6 10"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="m1 9 4-4-4-4"
						/>
					</svg>
					<span className="sr-only">Next</span>
				</span>
			</button>
		</div>
	);
}
