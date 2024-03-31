import Image from 'next/image';
import React from 'react';

const JoinCommunity = () => {
	return (
		<div className="py-[60px] sm:pb-5">
			<div className="custom-container-2">
				<div className="flex sm:flex-col md:flex-col sm:text-center md:text-center justify-between items-center gap-[121px] sm:gap-[50px] md:gap-[70px] bg-white rounded-[30px] p-10 sm:p-0">
					<div>
						<h6 className="text-secondary">Join the community</h6>
						<h2 className="pt-4 pb-6">Ready to get started?</h2>
						<p>
							Sign up today to start saving and become part <br />{' '}
							of a great community.
						</p>
						<button className="button-primary mt-8">Sign Up</button>
					</div>
					<div className="relative">
						<Image
							className="sm:hidden absolute top-[-40px] left-[-40px]"
							src="assets/images/circle.svg"
							alt="circle image"
							width={124}
							height={110}
						/>
						<Image
							className="rounded-[20px] sm:w-full sm:h-full"
							src="assets/images/join-community.svg"
							alt="join community image"
							width={692}
							height={420}
						/>
						<Image
							className="sm:hidden absolute bottom-[-75px] left-[-75px]"
							src="assets/images/green-star.svg"
							alt="green star"
							width={175}
							height={175}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default JoinCommunity;
