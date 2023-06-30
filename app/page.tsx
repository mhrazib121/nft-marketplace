"use client";

import { Container } from "@Components/Common";
import { HeroSection } from "@Components/HeroSection";
import {
  AboutHome,
  CollectionFeature,
  CollectionSection,
  CreateAndSellSection,
} from "@Components/Home";

const Home = () => (
  <main>
    <HeroSection />
    <AboutHome />
    <CollectionSection />
    <CollectionFeature />
    <CreateAndSellSection />
  </main>
);

export default Home;
