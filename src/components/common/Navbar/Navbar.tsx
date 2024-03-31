import Image from 'next/image';

const Navbar = () => {
	return (
		<header className="shadow-md sm:hidden md:hidden bg-[#FFFFFF]">
			<div className="max-w-[1440px] mx-auto px-[80px]">
				<nav className="h-[100px] flex justify-between items-center ">
					<div>
						<Image
							src="/assets/images/logo.svg"
							alt="logo image"
							width={111}
							height={52}
						/>
					</div>
					<ul className="nav-items flex justify-center items-center gap-[52px]">
						<li className="nav-link">
							<a
								href="/"
								className="text-[14px] font-primary leading-[21px] font-normal "
							>
								Our Plans
							</a>
						</li>
						<li className="nav-link">
							<a
								href="/"
								className="text-[14px] font-primary leading-[21px] font-normal "
							>
								Benefits
							</a>
						</li>
						<li className="nav-link">
							<a
								href="/"
								className="text-[14px] font-primary leading-[21px] font-normal "
							>
								How It Works
							</a>
						</li>
						<li className="nav-link">
							<a
								href="/"
								className="text-[14px] font-primary leading-[21px] font-normal "
							>
								FAQ
							</a>
						</li>
						<li className="nav-link">
							<a
								href="/"
								className="text-[14px] font-primary leading-[21px] font-normal "
							>
								Brokers
							</a>
						</li>
						<li className="nav-link">
							<a
								href="/"
								className="text-[14px] font-primary leading-[21px] font-normal "
							>
								Company
							</a>
						</li>
						<li className="nav-link">
							<a
								href="/"
								className="text-[14px] font-primary leading-[21px] font-normal "
							>
								For Members
							</a>
						</li>
					</ul>
					<a
						href="#"
						className="w-[92px] h-[40px] bg-primary text-white rounded-[30px] py-2 px-6 "
					>
						Enroll
					</a>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
