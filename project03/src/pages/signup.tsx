import HeroSection from "@/components/reusable/HeroSection";
import OrangeBtn from "@/components/reusable/OrangeBtn";
import BenefitsOfSigningUp from "@/components/signup/BenefitsOfSigningUp";
import SignUpRegisterComponent from "@/components/signup/SignUpRegisterComponent";
import { SignupData } from "@/interfaces/types";
import { GetStaticProps, NextPage } from "next";
import React from "react";

interface SignupProps {
  signupData: SignupData;
}

const Signup: NextPage<SignupProps> = ({ signupData }) => {

  const { image1, image2, title, description } = signupData.heroSection;
  const { image1benefits, image2benefits, corporate, individual } =
    signupData.benefitsOfSigningup;

  return (
    <>
      <HeroSection imageOne={image1} imageTwo={image2}>
        <div className="signupHeroSectionHeading">
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="signupHeroSectionButton">
            <OrangeBtn text="Прочитај повеќе" href="/" />
          </div>
        </div>
      </HeroSection>
      <SignUpRegisterComponent />
      <BenefitsOfSigningUp
        image1={image1benefits}
        image2={image2benefits}
        corporate={corporate}
        individual={individual}
      />
    </>
  );
};

export const getStaticProps: GetStaticProps<SignupProps> = async () => {
  const [signupResponse] = await Promise.all([
    fetch("https://json-server-project03.onrender.com/signupPage"),
  ]);

  const signupData: SignupData[] = await signupResponse.json();

  return {
    props: {
      signupData: signupData[0],
    },
    revalidate: 10,
  };
};

export default Signup;
