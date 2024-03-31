'use client';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header className="shadow-md bg-[#FFFFFF]">
			<div className="max-w-[1440px] mx-auto sm:px-[20px] px-[80px] md:px-[30px]">
				<nav className="flex justify-between items-center h-[100px]">
					<div>
						<Image
							src="/assets/images/logo.svg"
							alt="logo image"
							width={111}
							height={52}
						/>
					</div>

					{/* Desktop Navigation Links */}
					<div className="sm:hidden md:hidden flex items-center gap-[52px]">
						<a href="/" className="nav-link">
							Our Plans
						</a>
						<a href="/" className="nav-link">
							Benefits
						</a>
						<a href="/" className="nav-link">
							How It Works
						</a>
						<a href="/" className="nav-link">
							FAQ
						</a>
						<a href="/" className="nav-link">
							Brokers
						</a>
						<a href="/" className="nav-link">
							Company
						</a>
						<a href="/" className="nav-link">
							For Members
						</a>
						<a
							href="#"
							className="w-[92px] h-[40px] bg-primary text-white rounded-[30px] py-2 px-6"
						>
							Enroll
						</a>
					</div>

					{/* Mobile Navigation Menu */}
					{isOpen && (
						<div
							className={`absolute top-0 left-0 w-full bg-[#f0f0f0] shadow-md py-10 duration-1000 ease-in-out ${
								isOpen ? 'translate-y-0' : '-translate-x-full'
							}`}
						>
							<ul className={`flex flex-col items-center gap-4`}>
								<li>
									<a href="/" className="nav-link">
										Our Plans
									</a>
								</li>
								<li>
									<a href="/" className="nav-link">
										Benefits
									</a>
								</li>
								<li>
									<a href="/" className="nav-link">
										How It Works
									</a>
								</li>
								<li>
									<a href="/" className="nav-link">
										FAQ
									</a>
								</li>
								<li>
									<a href="/" className="nav-link">
										Brokers
									</a>
								</li>
								<li>
									<a href="/" className="nav-link">
										Company
									</a>
								</li>
								<li>
									<a href="/" className="nav-link">
										For Members
									</a>
								</li>
								<li className="mt-5">
									<a
										href="#"
										className="w-full bg-primary text-white rounded-[30px] py-2 px-6"
									>
										Enroll
									</a>
								</li>
							</ul>
						</div>
					)}

					{/* Mobile Hamburger Menu Button */}
					<div className="hidden sm:block md:block z-[9999]">
						{/* <button onClick={toggleMenu}>
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h16"
								></path>
							</svg>
						</button> */}
						<button onClick={toggleMenu}>
							{isOpen ? (
								<svg
									className="w-6 md:w-10 h-6 md:h-10"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M6 18L18 6M6 6l12 12"
									></path>
								</svg>
							) : (
								<svg
									className="w-6 md:w-10 h-6 md:h-10"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h16"
									></path>
								</svg>
							)}
						</button>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
