import AboutUs from '@/components/AboutUs/AboutUs';
import Banner from '@/components/Banner/Banner';
import BenefitsSection from '@/components/BenefitsSection/BenefitsSection';
import FaqSection from '@/components/FaqSection/FaqSection';
import JoinCommunity from '@/components/JoinCommunity/JoinCommunity';
import PlanSection from '@/components/PlanSection/PlanSection';
import VideoSection from '@/components/VideoSection/VideoSection';
import React from 'react';

const HomePage = () => {
	return (
		<>
			<Banner />
			<AboutUs />
			<VideoSection />
			<BenefitsSection />
			<PlanSection />
			<FaqSection />
			<JoinCommunity />
		</>
	);
};

export default HomePage;
