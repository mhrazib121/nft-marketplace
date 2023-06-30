"use client";

import { CommonText } from "@Components/Common";
import { HeroSection } from "@Components/HeroSection";
import {
  AboutHome,
  CollectionFeature,
  CollectionSection,
} from "@Components/Home";

const Home = () => (
  <main>
    <HeroSection />
    <AboutHome />
    <CollectionSection />
    <CollectionFeature />
  </main>
);

export default Home;
