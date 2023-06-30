"use client";

import { CommonText } from "@Components/Common";
import { HeroSection } from "@Components/HeroSection";
import { AboutHome, CollectionSection } from "@Components/Home";

const Home = () => (
  <main>
    <HeroSection />
    <AboutHome />
    <CollectionSection />
  </main>
);

export default Home;
