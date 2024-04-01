'use client';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
	const [isMembersDropdownOpen, setIsMembersDropdownOpen] = useState(false);
	const [companyDropdownIconSrc, setCompanyDropdownIconSrc] = useState(
		'assets/images/icons/icon-dropdown.svg'
	);
	const [membersDropdownIconSrc, setMembersDropdownIconSrc] = useState(
		'assets/images/icons/icon-dropdown.svg'
	);

	const toggleCompanyDropdown = () => {
		setIsCompanyDropdownOpen(!isCompanyDropdownOpen);
		setCompanyDropdownIconSrc(
			isCompanyDropdownOpen
				? 'assets/images/icons/icon-dropdown.svg'
				: 'assets/images/icons/dropdown-up.svg'
		);
	};

	const toggleMembersDropdown = () => {
		setIsMembersDropdownOpen(!isMembersDropdownOpen);
		setMembersDropdownIconSrc(
			isMembersDropdownOpen
				? 'assets/images/icons/icon-dropdown.svg'
				: 'assets/images/icons/dropdown-up.svg'
		);
	};

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header className="shadow-[rgba(0,0,15,0.5)_10px_5px_4px_0px] bg-[#FFFFFF]">
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
						<div className="nav-link">
							<div className="relative w-full inline-block text-left">
								<button
									type="button"
									className="w-full text-[16px] font-medium leading-[21px] font-primary  flex justify-between items-center"
									onClick={toggleCompanyDropdown}
								>
									<span className="">Company</span>
									<Image
										className="ml-[9px]"
										src={companyDropdownIconSrc}
										alt="icon dropdown"
										width={13.5}
										height={7.5}
									/>
								</button>

								{isCompanyDropdownOpen && (
									<div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
										<div
											className="py-1"
											role="menu"
											aria-orientation="vertical"
											aria-labelledby="options-menu"
										>
											<a
												href="/"
												className="block pl-3 py-2 text-[14px] font-primary font-normal leading-[21px] text-[#1F1E20] hover:bg-gray-100"
												role="menuitem"
											>
												About Us
											</a>
											<a
												href="/"
												className="block pl-3 py-2 text-[14px] font-primary font-normal leading-[21px] text-[#1F1E20] hover:bg-gray-100"
												role="menuitem"
											>
												Contact Us
											</a>
										</div>
									</div>
								)}
							</div>
						</div>
						<div className="nav-link">
							<div className="relative w-full inline-block text-left">
								<button
									type="button"
									className="w-full text-[16px] font-medium leading-[21px] font-primary  flex justify-between items-center"
									onClick={toggleMembersDropdown}
								>
									<span className="">For Members</span>
									<Image
										className="ml-[9px]"
										src={membersDropdownIconSrc}
										alt="icon dropdown"
										width={13.5}
										height={7.5}
									/>
								</button>

								{isMembersDropdownOpen && (
									<div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
										<div
											className="py-1"
											role="menu"
											aria-orientation="vertical"
											aria-labelledby="options-menu"
										>
											<a
												href="/"
												className="block pl-3 py-2 text-[14px] font-primary font-normal leading-[21px] text-[#1F1E20] hover:bg-gray-100"
												role="menuitem"
											>
												Members Portal
											</a>
											<a
												href="/"
												className="block pl-3 py-2 text-[14px] font-primary font-normal leading-[21px] text-[#1F1E20] hover:bg-gray-100"
												role="menuitem"
											>
												Find a Provider
											</a>
											<a
												href="/"
												className="block px-3 py-2 text-[14px] font-primary font-normal leading-[21px] text-[#1F1E20] hover:bg-gray-100"
												role="menuitem"
											>
												Support
											</a>
										</div>
									</div>
								)}
							</div>
						</div>

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
								<div className="nav-link">
									<div className="relative w-full inline-block text-left">
										<button
											type="button"
											className="w-full text-[16px] font-medium leading-[21px] font-primary  flex justify-between items-center"
											onClick={toggleCompanyDropdown}
										>
											<span className="">Company</span>
											<Image
												className="ml-[9px]"
												src={companyDropdownIconSrc}
												alt="icon dropdown"
												width={13.5}
												height={7.5}
											/>
										</button>

										{isCompanyDropdownOpen && (
											<div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-[9999]">
												<div
													className="py-1"
													role="menu"
													aria-orientation="vertical"
													aria-labelledby="options-menu"
												>
													<a
														href="/"
														className="block pl-3 py-2 text-[14px] font-primary font-normal leading-[21px] text-[#1F1E20] hover:bg-gray-100"
														role="menuitem"
													>
														About Us
													</a>
													<a
														href="/"
														className="block pl-3 py-2 text-[14px] font-primary font-normal leading-[21px] text-[#1F1E20] hover:bg-gray-100"
														role="menuitem"
													>
														Contact Us
													</a>
												</div>
											</div>
										)}
									</div>
								</div>
								<div className="nav-link">
									<div className="relative w-full inline-block text-left">
										<button
											type="button"
											className="w-full text-[16px] font-medium leading-[21px] font-primary  flex justify-between items-center"
											onClick={toggleMembersDropdown}
										>
											<span className="">
												For Members
											</span>
											<Image
												className="ml-[9px]"
												src={membersDropdownIconSrc}
												alt="icon dropdown"
												width={13.5}
												height={7.5}
											/>
										</button>

										{isMembersDropdownOpen && (
											<div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-[9999]">
												<div
													className="py-1"
													role="menu"
													aria-orientation="vertical"
													aria-labelledby="options-menu"
												>
													<a
														href="/"
														className="block pl-3 py-2 text-[14px] font-primary font-normal leading-[21px] text-[#1F1E20] hover:bg-gray-100"
														role="menuitem"
													>
														Members Portal
													</a>
													<a
														href="/"
														className="block pl-3 py-2 text-[14px] font-primary font-normal leading-[21px] text-[#1F1E20] hover:bg-gray-100"
														role="menuitem"
													>
														Find a Provider
													</a>
													<a
														href="/"
														className="block px-3 py-2 text-[14px] font-primary font-normal leading-[21px] text-[#1F1E20] hover:bg-gray-100"
														role="menuitem"
													>
														Support
													</a>
												</div>
											</div>
										)}
									</div>
								</div>
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
