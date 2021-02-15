import Link from "next/link";
// import { useState, useEffect } from "react";
// import { useTheme } from "next-themes";

const NavBar = ({ slug }) => {
	// const [mounted, setMounted] = useState(false);
	// const { theme, setTheme } = useTheme();
	// After mounting, we have access to the theme
	// useEffect(() => setMounted(true), []);
	const shareUrl = (slug) =>
		`https://mobile.twitter.com/search?q=${encodeURIComponent(
			`https://artlex-app.eslamheshamm.vercel.app/blog/${slug}`
		)}`;

	return (
		<header className="bg-accent py-16 flex justify-center items-center">
			<div className=" mx-auto flex w-11/12 justify-between items-center">
				<h1 className="font-black text-4xl text-white dark:text-red">
					<Link href="/">
						<a href="/">artlex</a>
					</Link>
				</h1>
				{/* Dark mode switch wating for design */}
				{/* <div>
					<button
						aria-label="Toggle Dark Mode"
						type="button"
						className="bg-gray-200 dark:bg-gray-800 rounded p-3 h-10 w-10"
						onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
					>
						{mounted && (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								stroke="currentColor"
								className="h-4 w-4 text-gray-800 dark:text-gray-200"
							>
								{theme === "dark" ? (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
									/>
								) : (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
									/>
								)}
							</svg>
						)}
					</button>
				</div>
				 */}
				<button className="p-3 md:p-4 rounded-2xl text-primary bg-primary-shd1 bg-opacity-30   focus:outline-none">
					<a
						href={shareUrl(slug)}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center justify-center"
					>
						<i className="mx-2">{Heart}</i>
						<span className="uppercase font-bold  sm:text-2xl">share love</span>
					</a>
				</button>
			</div>
		</header>
	);
};
const Heart = (
	<svg
		width="20"
		height="17"
		viewBox="0 0 20 17"
		fill="#FF6C6C"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M1.80674 1.70635C2.70687 0.806489 3.92755 0.300975 5.20034 0.300975C6.47313 0.300975 7.69381 0.806489 8.59394 1.70635L10.0003 3.11155L11.4067 1.70635C11.8495 1.2479 12.3792 0.882226 12.9648 0.630663C13.5504 0.3791 14.1803 0.246686 14.8176 0.241148C15.455 0.23561 16.087 0.357058 16.6769 0.598406C17.2668 0.839754 17.8028 1.19617 18.2534 1.64685C18.7041 2.09754 19.0605 2.63347 19.3019 3.22337C19.5432 3.81327 19.6647 4.44533 19.6591 5.08268C19.6536 5.72002 19.5212 6.34987 19.2696 6.93549C19.0181 7.52111 18.6524 8.05077 18.1939 8.49355L10.0003 16.6883L1.80674 8.49355C0.906881 7.59342 0.401367 6.37274 0.401367 5.09995C0.401367 3.82716 0.906881 2.60648 1.80674 1.70635Z"
			fill="#FF6C6C"
		/>
	</svg>
);

export default NavBar;