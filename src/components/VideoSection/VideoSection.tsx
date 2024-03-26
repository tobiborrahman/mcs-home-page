import Image from 'next/image';
import React from 'react';

const VideoSection = () => {
	return (
		<div className="mt-[100px] mb-[-370px]">
			<div className="custom-container-2">
				<div className="text-center">
					<h6 className="text-secondary">Who is MCS for?</h6>
					<h3 className="pt-5 pb-6 sm:hidden">
						Cost-Effective Alternative to Traditional <br /> Health
						Insurance
					</h3>
					<h3 className="pt-5 pb-6 hidden sm:block">
						Cost-Effective Alternative to Traditional Health
						Insurance
					</h3>
					<p className="sm:hidden md:hidden">
						MCS Medical Cost Sharing is a community of like-minded
						people who rely on each other to pay their medical
						bills. <br /> Our ministry is ideal for those who find
						traditional healthcare costly, lost healthcare coverage,
						or do not like dealing with ObamaCare.
					</p>
					<p className="hidden md:block text-center">
						MCS Medical Cost Sharing is a community of like-minded
						people who rely on each other to pay their medical
						bills. Our ministry is ideal for those who find
						traditional healthcare costly, lost healthcare coverage,
						or do not like dealing with ObamaCare.
					</p>
					<button className="button-secondary mt-10 mb-16">
						Check our Benefits
					</button>
					<Image
						src="assets/images/video-image.svg"
						alt="video-image"
						width={1280}
						height={720}
					/>
				</div>
			</div>
		</div>
	);
};

export default VideoSection;
