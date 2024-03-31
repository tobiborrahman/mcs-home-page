import Image from 'next/image';
import React from 'react';

const AboutUs = () => {
	return (
		<div>
			<div className="custom-container-2">
				<div className="flex sm:flex-col-reverse md:flex-col-reverse items-center gap-[102px] sm:gap-[40px] md:gap-14 bg-[#FFFFFF] p-10 md:p-5 sm:p-2 rounded-[30px] relative">
					<div>
						<Image
							className="rounded-[20px] md:w-full sm:w-full"
							src="/assets/images/about-image.svg"
							alt="about image"
							width={508}
							height={705}
						/>
						<Image
							className="sm:hidden absolute left-0 bottom-0"
							src="/assets/images/branch-leaf.svg"
							alt="branch image"
							width={146.93}
							height={347.42}
						/>
						<Image
							className="sm:hidden absolute right-[-45px] md:right-0 bottom-[-45px]"
							src="assets/images/pink-star.svg"
							alt="pink branch"
							width={181.17}
							height={182.46}
						/>
					</div>
					<div className="sm:text-center md:text-center">
						<h6 className="text-primary">About Us</h6>
						<h3 className="w-[590px] md:w-full sm:w-full pt-5 pb-6 ">
							Medical Cost Sharing, Inc., gives Christians the
							opportunity to minister to the Body of Christ while
							being thrifty and seeing to their own medical needs.
						</h3>
						<p className="w-[590px] md:w-full sm:w-full">
							The concept has grown in popularity since the 1960’s
							when the Older Order Amish Church Fund began the
							modern-era of burden-bearing. These days,
							participants include a broad spectrum of Christian
							denominations that support each other’s medical
							needs, not only across all fifty states but across
							the world. Please contact us in the event you want a
							clearer explanation of how Medical Cost Sharing,
							Inc. works. We are a fully-accredited 501 C3
							Non-Profit organization.
						</p>
						<button className="button-primary mt-10">
							Learn More
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
