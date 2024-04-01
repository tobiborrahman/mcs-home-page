'use client';

import Image from 'next/image';
import React from 'react';

const Footer = () => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<div className="bg-[#1F1E20] mt-[100px] sm:mt-[50px] md:mt-[70px]">
			<div className="custom-container">
				<div className="flex sm:flex-col sm:items-center md:flex-col md:items-center justify-between gap-[203px] sm:gap-10 md:gap-10 py-10">
					<div>
						<div className="sm:items-center md:items-center sm:text-center md:text-center">
							<div className="sm:flex md:flex justify-center items-center">
								<Image
									src="assets/images/logo.svg"
									alt="banner logo"
									width={111}
									height={52}
								/>
							</div>
							<div className="w-[285px]">
								<p className="text-[#FFFFFF] text-[14px] urbanist leading-[19.6px] font-medium mt-6 mb-3">
									MCS Medical Cost Sharing is a 501 C3
									Non-Profit Faith-Based Corporation.
								</p>
								<p className="text-[#FFFFFF] text-[14px] urbanist leading-[19.6px] font-medium">
									For full and complete plan details, please
									always refer to your member guide.
								</p>
								s
							</div>
						</div>
					</div>
					<div className="flex sm:flex-col sm:items-center md:flex-col md:items-center sm:text-center md:text-center sm:gap-8 md:gap-8">
						<div className="mr-[29px] sm:mr-0 md:mr-0">
							<h6 className="text-[14px] font-primary font-semibold leading-[21px] text-[#FFFFFF]">
								Benefits
							</h6>
							<li className="text-[14px] font-primary font-normal leading-[33.3px] text-[#828282] underline">
								Find a Provider
							</li>
							<li className="text-[14px] font-primary font-normal leading-[33.3px] text-[#828282] underline">
								TeleMedicine
							</li>
							<li className="text-[14px] font-primary font-normal leading-[33.3px] text-[#828282] underline">
								24/7 Nurse Line
							</li>
							<li className="text-[14px] font-primary font-normal leading-[33.3px] text-[#828282] underline">
								Cleveland Clinic MyConsult
							</li>
							<li className="text-[14px] font-primary font-normal leading-[33.3px] text-[#828282] underline">
								Health Cost Estimator
							</li>
							<li className="text-[14px] font-primary font-normal leading-[33.3px] text-[#828282] underline">
								Medical Bill Saver
							</li>
							<li className="text-[14px] font-primary font-normal leading-[33.3px] text-[#828282] underline">
								Financial Wellness
							</li>
						</div>
						<div className="mr-[69px] sm:mr-0 md:mr-0">
							<h6 className="text-[14px] font-primary font-semibold leading-[21px] text-[#FFFFFF]">
								Legal
							</h6>
							<li className="text-[14px] font-primary font-normal leading-[33.3px] text-[#828282] underline">
								Legal Notices
							</li>
							<li className="text-[14px] font-primary font-normal leading-[33.3px] text-[#828282] underline">
								Privacy Policy
							</li>
							<li className="text-[14px] font-primary font-normal leading-[33.3px] text-[#828282] underline">
								Terms & Conditions
							</li>
						</div>
						<div>
							<h6 className="text-[14px] font-primary font-semibold leading-[21px] text-[#FFFFFF]">
								Contact Us
							</h6>
							<div className="mb-4 mt-[14px]">
								<p className="text-[14px] font-primary font-normal leading-[22.4px] text-[#FFFFFF]">
									Address:
								</p>
								<p className="text-[14px] font-primary font-normal leading-[22.4px] text-[#828282]">
									1202 Village Drive, St Joseph, MO 64506
								</p>
							</div>
							<div className="mb-4">
								<p className="text-[14px] font-primary font-normal leading-[22.4px] text-[#FFFFFF]">
									Email:
								</p>
								<p className="text-[14px] font-primary font-normal leading-[22.4px] text-[#828282]">
									support@mcsmedicalcostsharing.com
								</p>
							</div>
							<div className="mb-4">
								<p className="text-[14px] font-primary font-normal leading-[22.4px] text-[#FFFFFF]">
									Phone:
								</p>
								<p className="text-[14px] font-primary font-normal leading-[22.4px] text-[#828282]">
									(800) 860-9913
								</p>
							</div>
							<div className="mb-4">
								<p className="text-[14px] font-primary font-normal leading-[22.4px] text-[#FFFFFF]">
									Fax:
								</p>
								<p className="text-[14px] font-primary font-normal leading-[22.4px] text-[#828282]">
									(866) 875-8226
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<hr className="text-[#FCFCFC] mb-[33px] h-[.2px]" />
			{/* copyright */}
			<div className="custom-container">
				<div className="flex sm:flex-col md:flex-col justify-between items-center pb-8">
					<p className="text-[14px] font-primary font-normal leading-[24px] text-[#828282] sm:text-center sm:mb-5 md:text-center md:mb-7">
						Copyright © 2021 · MCS Medical Cost Sharing · All Rights
						Reserved
					</p>
					<button
						onClick={scrollToTop}
						className="bg-[#333333] px-5 py-[10px] sm:px-[10px] md:px-[10px] text-[#FFFFFF] rounded-[10px] flex items-center gap-2"
					>
						<Image
							className="sm:w-[30px] sm:h-[30px]"
							src="assets/images/icons/arrow-up.svg"
							alt="arrow up icon"
							width={20}
							height={20}
						/>
						<span className="sm:hidden md:hidden">
							Go to the top
						</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Footer;
