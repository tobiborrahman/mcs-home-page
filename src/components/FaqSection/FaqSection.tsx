import Image from 'next/image';
import React from 'react';

const FaqSection = () => {
	return (
		<div className="py-[65px] bg-white">
			<div className="custom-container">
				<div>
					<div className="text-center">
						<h6 className="text-secondary">FAQ</h6>
						<h2 className="pt-5 pb-[52px]">
							Frequently <br /> Asked Questions
						</h2>
					</div>

					<div className="bg-[#FCFCFC] rounded-[20px] flex justify-between items-center px-8 h-[90px] mb-3">
						<p className="text-[18px] font-medium leading-[32px] font-primary text-[#1F1E20]">
							When did the opportunity become available?
						</p>
						<Image
							src="assets/images/icons/plus.svg"
							alt="plus icon"
							width={18}
							height={18}
						/>
					</div>
					<div className="bg-[#FCFCFC] rounded-[20px] flex justify-between items-center px-8 h-[90px] mb-3">
						<p className="text-[18px] font-medium leading-[32px] font-primary text-[#1F1E20]">
							Who is eligible for Medical Cost Sharing?
						</p>
						<Image
							src="assets/images/icons/plus.svg"
							alt="plus icon"
							width={18}
							height={18}
						/>
					</div>
					<div className="bg-[#FCFCFC] rounded-[20px] flex justify-between items-center px-8 h-[90px] mb-3">
						<p className="text-[18px] font-medium leading-[32px] font-primary text-[#1F1E20]">
							What is the age requirement for a child to be on the
							partner’s plan?
						</p>
						<Image
							src="assets/images/icons/plus.svg"
							alt="plus icon"
							width={18}
							height={18}
						/>
					</div>
					<div className="bg-[#FCFCFC] rounded-[20px] flex justify-between items-center px-8 h-[90px]">
						<p className="text-[18px] font-medium leading-[32px] font-primary text-[#1F1E20]">
							Is this an insurance plan?
						</p>
						<Image
							src="assets/images/icons/plus.svg"
							alt="plus icon"
							width={18}
							height={18}
						/>
					</div>

					<div className="flex justify-center items-center mt-10">
						<button className="button-secondary !w-[386px]">
							See all Frequently Asked Questions
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FaqSection;
