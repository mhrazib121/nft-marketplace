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
  <Container>
    <HeroSection />
    <AboutHome />
    <CollectionSection />
    <CollectionFeature />
    <CreateAndSellSection />
  </Container>
);

export default Home;
