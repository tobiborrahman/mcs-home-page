import Image from 'next/image';
import React from 'react';

const JoinCommunity = () => {
	return (
		<div className="py-[60px]">
			<div className="custom-container-2">
				<div className="flex justify-between items-center bg-white rounded-[30px] p-10">
					<div>
						<h6 className="text-secondary">Join the community</h6>
						<h2 className="pt-4 pb-6">
							Ready to get <br /> started?
						</h2>
						<p>
							Sign up today to start saving and become part <br />{' '}
							of a great community.
						</p>
						<button className="button-primary mt-8">Sign Up</button>
					</div>
					<div className="relative">
						<Image
							className="absolute top-[-40px] left-[-40px]"
							src="assets/images/circle.svg"
							alt="circle image"
							width={124}
							height={110}
						/>
						<Image
							className="rounded-[20px]"
							src="assets/images/join-community.svg"
							alt="join community image"
							width={692}
							height={420}
						/>
						<Image
							className="absolute bottom-[-75px] left-[-75px]"
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
