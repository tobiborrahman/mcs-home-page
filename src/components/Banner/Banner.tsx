import Image from 'next/image';
import React from 'react';

const Banner = () => {
	return (
		<div className="pt-[19px] mb-[95px] bg-[#FFFFFF]">
			<div className="custom-container">
				<div className="flex sm:flex-col items-center gap-[10px]">
					<div className="sm:text-center items-center sm:py-10">
						<h6 className="text-primary">
							Became part of a great community
						</h6>
						<h1 className="font-primary w-[590px] md:text-[35px] sm:w-full py-4">
							Medical Cost Sharing Christian Healthcare
						</h1>
						<p className="w-[438px] sm:w-full pb-9">
							MCS Medical Cost Sharing is a 501 C3 Non-Profit
							Christian Healthcare Sharing Ministry.
						</p>
						<div className="flex items-center gap-8">
							<button className="button-primary">
								Check our Plans
							</button>
							<div className="flex items-center gap-4">
								<div className="w-[56px] h-[56px] bg-[#EFF9F4] rounded-full flex justify-center items-center">
									<Image
										src="/assets/images/icons/phone.svg"
										alt="phone icon"
										width={23.33}
										height={23.33}
									/>
								</div>
								<div>
									<p className="text-[13px] font-normal leading-[19.5px] ">
										Contact us:
									</p>
									<p className="text-[15px] font-medium leading-[22.5px] ">
										(800) 860-9913
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="mr-[-70px] mb-[-57px] sm:mr-0">
						<Image
							src="/assets/images/banner-image.svg"
							alt="banner image"
							width={686.23}
							height={740.39}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
