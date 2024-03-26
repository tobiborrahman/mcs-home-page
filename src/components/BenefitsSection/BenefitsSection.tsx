import Image from 'next/image';
import React from 'react';

const BenefitsSection = () => {
	return (
		<div className="bg-[#FFFFFF] pt-[438px] pb-[76.29px]">
			<div className="custom-container">
				<div className="flex items-center gap-[82px] relative py-6">
					<div className="w-[610px]">
						<h6 className="text-primary">Our Premium Benefits</h6>
						<h3 className="pt-5 pb-6">
							Affordable Health Care for Christians
						</h3>
						<div className="benefit-card-shadow px-[30px] py-6 rounded-[20px]">
							<h5>TeleMedicine</h5>
							<p className="text-[14px] font-normal leading-[24px] text-[#828282] pt-[10px] pb-[14px] ">
								Our TeleMedicine program gives you 24/7 access
								to Board Certified Physicians within the United
								States.
							</p>
							<div className="flex items-center gap-[10px]">
								<h6 className="text-secondary leading-[24px]">
									Learn More
								</h6>
								<Image
									src="assets/images/icons/arrow-right-yellow.svg"
									alt="right yellow arrow"
									width={20}
									height={20}
								/>
							</div>
						</div>
						<div className="benefit-card-shadow px-[30px] py-6 rounded-[20px] my-3">
							<h5>24/7 Nurse Line</h5>
							<p className="text-[14px] font-normal leading-[24px] text-[#828282] pt-[10px] pb-[14px] ">
								Finding the right answers at the right time is
								at the heart of what we do. Unlimited access to
								highly trained Nurses for help and information,
								24/7.
							</p>
							<div className="flex items-center gap-[10px]">
								<h6 className="text-secondary leading-[24px]">
									Learn More
								</h6>
								<Image
									src="assets/images/icons/arrow-right-yellow.svg"
									alt="right yellow arrow"
									width={20}
									height={20}
								/>
							</div>
						</div>
						<div className="benefit-card-shadow px-[30px] py-6 rounded-[20px]">
							<h5>Cleveland Clinic MyConsult</h5>
							<p className="text-[14px] font-normal leading-[24px] text-[#828282] pt-[10px] pb-[14px] ">
								Access to the nation's leading specialists for
								expert second opinions.
							</p>
							<div className="flex items-center gap-[10px]">
								<h6 className="text-secondary leading-[24px]">
									Learn More
								</h6>
								<Image
									src="assets/images/icons/arrow-right-yellow.svg"
									alt="right yellow arrow"
									width={20}
									height={20}
								/>
							</div>
						</div>

						<button className="button-primary mt-10 !w-[285px]">
							See All Our Premium Benefits
						</button>
					</div>

					<div className="">
						<Image
							className="absolute top-[5px] left-[52.5%] z-[9999]"
							src="assets/images/yellow-star.svg"
							alt="yellow star"
							width={130}
							height={132}
						/>
						<Image
							className="absolute bottom-0 right-[-150px] rotate-img py-[-20px]"
							src="assets/images/benefit-img.svg"
							alt="benefit image"
							width={629}
							height={770}
						/>
						<Image
							className="absolute bottom-[-70px] right-[-200px] overflow-hidden"
							src="assets/images/pink-design.svg"
							alt="pink design"
							width={194}
							height={256}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BenefitsSection;
