"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const HeroSection = () => {

  return (
    <div className="pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">
          Manage Your Finances <br /> With Intelligence
        </h1>
        <p className="text-xl text-gray-600 mg-8 max-w-2xl mx-auto">
          An AI-Powered financial management platform that helps you track,
          analysis, and optimize your spending with real-time insights.
        </p>
        <div className="flex justify-center space-x-4 mt-5">
          <Link href={"/dashboard"}>
            <Button size={"lg"} className={"px-8"}>
              Get Started
            </Button>
          </Link>
          <Link href={"/dashboard"}>
            <Button size={"lg"} variant={"outline"} className={"px-8"}>
              Watch Demo
            </Button>
          </Link>
        </div>
        <div>
          <div>
            <Image
              src={"/banner.jpg"}
              width={1280}
              height={720}
              alt="Dashboar Preview"
              className="rounded-lg shadow-2xl mx-auto mt-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
