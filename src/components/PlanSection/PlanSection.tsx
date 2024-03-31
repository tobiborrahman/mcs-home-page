'use client';

import Image from 'next/image';
import React, { useState } from 'react';

const PlanSection = () => {
	const [isTooltipVisible, setIsTooltipVisible] = useState(false);

	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [dropdownIconSrc, setDropdownIconSrc] = useState(
		'assets/images/icons/icon-dropdown.svg'
	);

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
		setDropdownIconSrc(
			isDropdownOpen
				? 'assets/images/icons/icon-dropdown.svg'
				: 'assets/images/icons/dropdown-up.svg'
		);
	};

	return (
		<div className="py-[99px] sm:pt-0 md:pt-0 sm:mt-[100px] md:mt-[100px]">
			<div className="custom-container">
				<div>
					<div className="text-center">
						<h6 className="text-primary">Our Plans</h6>
						<h3 className="pt-5 pb-6 sm:hidden md:hidden">
							Our plans offer tailor-made medical cost-sharing to{' '}
							<br />
							individuals, families, and businesses.
						</h3>
						<h3 className="pt-5 pb-6 hidden sm:block md:block">
							Our plans offer tailor-made medical cost-sharing to
							individuals, families, and businesses.
						</h3>
						<p className="sm:hidden md:hidden pb-[58px]">
							Our community is strong, and every one of us -
							whether young or old - has the same benefits and
							rights as everyone else <br /> who's on the same
							plan. Our monthly contribution structure depends
							only on the plan of choice, and the total number of{' '}
							<br /> members being enrolled under one application.
						</p>
						<p className="hidden md:block text-center">
							Our community is strong, and every one of us -
							whether young or old - has the same benefits and
							rights as everyone else who's on the same plan. Our
							monthly contribution structure depends only on the
							plan of choice, and the total number of members
							being enrolled under one application.
						</p>
					</div>

					{/* pricing cards starts here */}
					<div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-1 gap-[19px] sm:mt-10 md:mt-12">
						{/* first card */}
						<div className="p-8 rounded-[20px] bg-white price-card-shadow">
							<Image
								src="assets/images/cross-green.svg"
								alt="green cross"
								width={32}
								height={32}
							/>
							<h5 className="text-[20px] font-semibold leading-[32px] font-primary text-[#1F1E20] pt-4 pb-1 ">
								Premier Plus
							</h5>
							<p className="text-[14px] font-normal leading-[22.4px] font-primary text-[#1F1E20]">
								Monthly share
							</p>
							<div className="border-[1px] border-[#F3F3F3] my-5"></div>
							<div className="flex items-center gap-[10px]">
								<h5 className="text-[16px] leading[25.6px] font-medium font-primary text-[#1F1E20]">
									Starting
								</h5>
								<div className="relative">
									<Image
										src="/assets/images/icons/notice.svg"
										alt="notice image"
										width={20}
										height={20}
										className="cursor-pointer"
										onMouseEnter={() =>
											setIsTooltipVisible(true)
										}
										onMouseLeave={() =>
											setIsTooltipVisible(false)
										}
									/>
									{isTooltipVisible && (
										<div className="absolute top-0 left-[30px]  bg-white p-5 rounded-[8px] w-[323px]">
											<h5 className="text-[14px] font-normal font-primary leading-[22.4px] text-[#1F1E20]">
												The monthly contribution is the
												amount that you will be charged
												every month to maintain your
												membership.
											</h5>
										</div>
									)}
								</div>
							</div>
							<h1 className="pt-[2px] pb-5">
								$90{' '}
								<span className='text-[14px] font-normal leading-[22.4px] font-primary text-[#1F1E20]"'>
									/month
								</span>
							</h1>
							<h5 className="text-[20px] font-semibold leading-[32px] font-primary text-[#1F1E20] pt-4 pb-1 ">
								Benefits
							</h5>
							<p className="text-[14px] font-normal leading-[22.4px] font-primary text-[#1F1E20]">
								Access to our premium Reference-Based Pricing
								(RBP) feature.
							</p>
							<div className="flex items-center gap-[10px] pt-4 pb-[25px]">
								<h6 className="text-primary leading-[24px]">
									Learn More
								</h6>
								<Image
									src="assets/images/icons/arrow-right-green.svg"
									alt="right green arrow"
									width={20}
									height={20}
								/>
							</div>
							<div className="flex items-center gap-[10px] pb-4">
								<Image
									src="assets/images/icons/check.svg"
									alt="check icon"
									width={20}
									height={20}
								/>
								<p className="text-[14px] font-primary font-medium leading-[24px] text-[#1F1E20]">
									TeleMedicine
								</p>
							</div>
							<div className="flex items-center gap-[10px] pb-4">
								<Image
									src="assets/images/icons/check.svg"
									alt="check icon"
									width={20}
									height={20}
								/>
								<p className="text-[14px] font-primary font-medium leading-[24px] text-[#1F1E20]">
									24/7 Nurse Line
								</p>
							</div>
							<div className="flex items-center gap-[10px] pb-4">
								<Image
									src="assets/images/icons/check.svg"
									alt="check icon"
									width={20}
									height={20}
								/>
								<p className="text-[14px] font-primary font-medium leading-[24px] text-[#1F1E20]">
									Cleveland Clinic MyConsult
								</p>
							</div>
							<div className="flex items-center gap-[10px] pb-4">
								<Image
									src="assets/images/icons/check.svg"
									alt="check icon"
									width={20}
									height={20}
								/>
								<p className="text-[14px] font-primary font-medium leading-[24px] text-[#1F1E20]">
									Health Cost Estimator
								</p>
							</div>
							<div className="flex items-center gap-[10px] pb-4">
								<Image
									src="assets/images/icons/check.svg"
									alt="check icon"
									width={20}
									height={20}
								/>
								<p className="text-[14px] font-primary font-medium leading-[24px] text-[#1F1E20]">
									Medical Bill Saver
								</p>
							</div>
							<div className="flex items-center gap-[10px] pb-4">
								<Image
									src="assets/images/icons/check.svg"
									alt="check icon"
									width={20}
									height={20}
								/>
								<p className="text-[14px] font-primary font-medium leading-[24px] text-[#1F1E20]">
									Financial Wellness
								</p>
							</div>
							<div className="flex items-center gap-[10px] pb-4">
								<Image
									src="assets/images/icons/check.svg"
									alt="check icon"
									width={20}
									height={20}
								/>
								<p className="text-[14px] font-primary font-medium leading-[24px] text-[#1F1E20]">
									Other benefits
								</p>
							</div>

							<p className="text-[14px] font-normal leading-[22.4px] font-primary text-[#1F1E20] pb-6">
								Discounted Physician Office Visits including Lab
								and X-Ray ran through our PPO networks.
							</p>

							{/* dropdown items */}
							<div className="relative w-full inline-block text-left mb-6">
								<button
									type="button"
									className="w-full text-[14px] font-normal leading-[22.4px] font-primary text-[#1F1E20] flex justify-between items-center bg-[#F3F3F3] h-[48px] rounded-[8px] px-[20px]"
									onClick={toggleDropdown}
								>
									Single
									<Image
										src={dropdownIconSrc}
										alt="icon dropdown"
										width={12}
										height={6}
									/>
								</button>

								{isDropdownOpen && (
									<div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
										<div
											className="py-1"
											role="menu"
											aria-orientation="vertical"
											aria-labelledby="options-menu"
										>
											<a
												href="/"
												className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
												role="menuitem"
											>
												Single
											</a>
											<a
												href="/"
												className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
												role="menuitem"
											>
												Family
											</a>
										</div>
									</div>
								)}
							</div>

							<button className="bg-primary w-full h-[56px] rounded-[8px] text-[16px] font-primary font-medium text-[#FFFFFF] leading-[25.6px] text-center">
								Choose Premier Plus
							</button>
						</div>

						{/* second card */}
						<div className="p-8 rounded-[20px] bg-white price-card-shadow">
							<Image
								src="assets/images/cross-yellow.svg"
								alt="green cross"
								width={32}
								height={32}
							/>
							<h5 className="text-[20px] font-semibold leading-[32px] font-primary text-[#1F1E20] pt-4 pb-1 ">
								Diamond Plus
							</h5>
							<p className="text-[14px] font-normal leading-[22.4px] font-primary text-[#1F1E20]">
								Monthly share
							</p>
							<div className="border-[1px] border-[#F3F3F3] my-5"></div>
							<div className="flex items-center gap-[10px]">
								<h5 className="text-[16px] leading[25.6px] font-medium font-primary text-[#1F1E20]">
									Starting
								</h5>
								<div className="relative">
									<Image
										src="/assets/images/icons/notice.svg"
										alt="notice image"
										width={20}
										height={20}
										className="cursor-pointer"
										onMouseEnter={() =>
											setIsTooltipVisible(true)
										}
										onMouseLeave={() =>
											setIsTooltipVisible(false)
										}
									/>
									{isTooltipVisible && (
										<div className="absolute top-0 left-[30px]  bg-white p-5 rounded-[8px] w-[323px]">
											<h5 className="text-[14px] font-normal font-primary leading-[22.4px] text-[#1F1E20]">
												The monthly contribution is the
												amount that you will be charged
												every month to maintain your
												membership.
											</h5>
										</div>
									)}
								</div>
							</div>
							<h1 className="pt-[2px] pb-5">
								$175{' '}
								<span className='text-[14px] font-normal leading-[22.4px] font-primary text-[#1F1E20]"'>
									/month
								</span>
							</h1>
							<h5 className="text-[20px] font-semibold leading-[32px] font-primary text-[#1F1E20] pt-4 pb-1 ">
								Benefits
							</h5>
							<div className="flex items-center gap-[10px] pb-4">
								<Image
									src="assets/images/icons/check.svg"
									alt="check icon"
									width={20}
									height={20}
								/>
								<p className="text-[14px] font-primary font-medium leading-[24px] text-[#1F1E20]">
									Premier Benefits Included
								</p>
							</div>
							<div className="flex items-center gap-[17px] mb-4">
								<div className="border-[1px] border-[#F3F3F3] w-full"></div>
								<p className="text-[14px] font-semibold leading-[24px]">
									And
								</p>
								<div className="border-[1px] border-[#F3F3F3] w-full"></div>
							</div>
							<div className="flex items-center gap-[10px] pb-4">
								<Image
									src="assets/images/icons/check.svg"
									alt="check icon"
									width={20}
									height={20}
								/>
								<p className="text-[14px] font-primary font-medium leading-[24px] text-[#1F1E20]">
									$10,000 Personal Responsibility (PR)
								</p>
							</div>
							<div className="flex gap-[10px] pb-4">
								<Image
									src="assets/images/icons/check.svg"
									alt="check icon"
									width={20}
									height={20}
								/>
								<p className="text-[14px] font-primary font-medium leading-[24px] text-[#1F1E20]">
									For families: Maximum two PR per calendar
									year
								</p>
							</div>
							<div className="border-[1px] border-[#F3F3F3] w-full mb-5 mt-[25]"></div>
							<h5 className="text-[20px] font-semibold leading-[32px] font-primary text-[#1F1E20] pb-[10px]">
								Limits
							</h5>
							<div className="flex items-center gap-[10px] pb-4">
								<Image
									src="assets/images/icons/spark-yellow.svg"
									alt="check icon"
									width={20}
									height={20}
								/>
								<p className="text-[14px] font-primary font-medium leading-[24px] text-[#1F1E20]">
									Membership Limit: $50,000 per incident
								</p>
							</div>
							<div className="flex items-center gap-[10px] pb-4">
								<Image
									src="assets/images/icons/spark-yellow.svg"
									alt="check icon"
									width={20}
									height={20}
								/>
								<p className="text-[14px] font-primary font-medium leading-[24px] text-[#1F1E20]">
									Maximum Sharing Benefits Eligible
								</p>
							</div>
							<div className="flex items-center gap-[10px] pb-[36px]">
								<Image
									src="assets/images/icons/spark-yellow.svg"
									alt="check icon"
									width={20}
									height={20}
								/>
								<p className="text-[14px] font-primary font-medium leading-[24px] text-[#1F1E20]">
									Maximum Lifetime Benefit: $2,000,000
								</p>
							</div>

							<p className="text-[14px] font-normal leading-[22.4px] font-primary text-[#1F1E20] pb-6">
								Discounted Physician Office Visits including Lab
								and X-Ray ran through our PPO networks.
							</p>

							{/* dropdown items */}
							<div className="relative w-full inline-block text-left mb-6">
								<button
									type="button"
									className="w-full text-[14px] font-normal leading-[22.4px] font-primary text-[#1F1E20] flex justify-between items-center bg-[#F3F3F3] h-[48px] rounded-[8px] px-[20px]"
									onClick={toggleDropdown}
								>
									Single
									<Image
										src={dropdownIconSrc}
										alt="icon dropdown"
										width={12}
										height={6}
									/>
								</button>

								{isDropdownOpen && (
									<div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
										<div
											className="py-1"
											role="menu"
											aria-orientation="vertical"
											aria-labelledby="options-menu"
										>
											<a
												href="/"
												className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
												role="menuitem"
											>
												Single
											</a>
											<a
												href="/"
												className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
												role="menuitem"
											>
												Family
											</a>
										</div>
									</div>
								)}
							</div>

							<button className="bg-primary w-full h-[56px] rounded-[8px] text-[16px] font-primary font-medium text-[#FFFFFF] leading-[25.6px] text-center">
								Choose Diamond Plus
							</button>
						</div>

						{/* Third card */}
						<div className="p-8 rounded-[20px] bg-white price-card-shadow">
							<Image
								src="assets/images/cross-blue.svg"
								alt="green cross"
								width={32}
								height={32}
							/>
							<h5 className="text-[20px] font-semibold leading-[32px] font-primary text-[#1F1E20] pt-4 pb-1 ">
								Diamond 5 Plus
							</h5>
							<p className="text-[14px] font-normal leading-[22.4px] font-primary text-[#1F1E20]">
								Monthly share
							</p>
							<div className="border-[1px] border-[#F3F3F3] my-5"></div>
							<div className="flex items-center gap-[10px]">
								<h5 className="text-[16px] leading[25.6px] font-medium font-primary text-[#1F1E20]">
									Starting
								</h5>
								<div className="relative">
									<Image
										src="/assets/images/icons/notice.svg"
										alt="notice image"
										width={20}
										height={20}
										className="cursor-pointer"
										onMouseEnter={() =>
											setIsTooltipVisible(true)
										}
										onMouseLeave={() =>
											setIsTooltipVisible(false)
										}
									/>
									{isTooltipVisible && (
										<div className="absolute top-0 left-[30px]  bg-white p-5 rounded-[8px] w-[323px]">
											<h5 className="text-[14px] font-normal font-primary leading-[22.4px] text-[#1F1E20]">
												The monthly contribution is the
												amount that you will be charged
												every month to maintain your
												membership.
											</h5>
										</div>
									)}
								</div>
							</div>
							<h1 className="pt-[2px] pb-5">
								$275{' '}
								<span className='text-[14px] font-normal leading-[22.4px] font-primary text-[#1F1E20]"'>
									/month
								</span>
							</h1>
							<h5 className="text-[20px] font-semibold leading-[32px] font-primary text-[#1F1E20] pt-4 pb-1 ">
								Benefits
							</h5>
							<div className="flex items-center gap-[10px] pb-4">
								<Image
									src="assets/images/icons/check.svg"
									alt="check icon"
									width={20}
									height={20}
								/>
								<p className="text-[14px] font-primary font-medium leading-[24px] text-[#1F1E20]">
									Premier Benefits Included
								</p>
							</div>
							<div className="flex items-center gap-[17px] mb-4">
								<div className="border-[1px] border-[#F3F3F3] w-full"></div>
								<p className="text-[14px] font-semibold leading-[24px]">
									And
								</p>
								<div className="border-[1px] border-[#F3F3F3] w-full"></div>
							</div>
							<div className="flex items-center gap-[10px] pb-4">
								<Image
									src="assets/images/icons/check.svg"
									alt="check icon"
									width={20}
									height={20}
								/>
								<p className="text-[14px] font-primary font-medium leading-[24px] text-[#1F1E20]">
									$10,000 Personal Responsibility (PR)
								</p>
							</div>
							<div className="flex gap-[10px] pb-4">
								<Image
									src="assets/images/icons/check.svg"
									alt="check icon"
									width={20}
									height={20}
								/>
								<p className="text-[14px] font-primary font-medium leading-[24px] text-[#1F1E20]">
									For families: Maximum two PR per calendar
									year
								</p>
							</div>
							<div className="border-[1px] border-[#F3F3F3] w-full mb-5 mt-[25]"></div>
							<h5 className="text-[20px] font-semibold leading-[32px] font-primary text-[#1F1E20] pb-[10px]">
								Limits
							</h5>
							<div className="flex items-center gap-[10px] pb-4">
								<Image
									src="assets/images/icons/spark-blue.svg"
									alt="check icon"
									width={20}
									height={20}
								/>
								<p className="text-[14px] font-primary font-medium leading-[24px] text-[#1F1E20]">
									Membership Limit: $50,000 per incident
								</p>
							</div>
							<div className="flex items-center gap-[10px] pb-4">
								<Image
									src="assets/images/icons/spark-blue.svg"
									alt="check icon"
									width={20}
									height={20}
								/>
								<p className="text-[14px] font-primary font-medium leading-[24px] text-[#1F1E20]">
									Maximum Sharing Benefits Eligible
								</p>
							</div>
							<div className="flex items-center gap-[10px] pb-[36px]">
								<Image
									src="assets/images/icons/spark-blue.svg"
									alt="check icon"
									width={20}
									height={20}
								/>
								<p className="text-[14px] font-primary font-medium leading-[24px] text-[#1F1E20]">
									Maximum Lifetime Benefit: $2,000,000
								</p>
							</div>

							<p className="text-[14px] font-normal leading-[22.4px] font-primary text-[#1F1E20] pb-6">
								Discounted Physician Office Visits including Lab
								and X-Ray ran through our PPO networks.
							</p>

							{/* dropdown items */}
							<div className="relative w-full inline-block text-left mb-6">
								<button
									type="button"
									className="w-full text-[14px] font-normal leading-[22.4px] font-primary text-[#1F1E20] flex justify-between items-center bg-[#F3F3F3] h-[48px] rounded-[8px] px-[20px]"
									onClick={toggleDropdown}
								>
									Single
									<Image
										src={dropdownIconSrc}
										alt="icon dropdown"
										width={12}
										height={6}
									/>
								</button>

								{isDropdownOpen && (
									<div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
										<div
											className="py-1"
											role="menu"
											aria-orientation="vertical"
											aria-labelledby="options-menu"
										>
											<a
												href="/"
												className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
												role="menuitem"
											>
												Single
											</a>
											<a
												href="/"
												className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
												role="menuitem"
											>
												Family
											</a>
										</div>
									</div>
								)}
							</div>

							<button className="bg-primary w-full h-[56px] rounded-[8px] text-[16px] font-primary font-medium text-[#FFFFFF] leading-[25.6px] text-center">
								Choose Diamond 5 Plus
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PlanSection;
