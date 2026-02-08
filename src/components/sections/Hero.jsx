"use client";

import HomeBg from "@/components/design/HomeBg";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-screen md:h-dvh flex items-center justify-center overflow-hidden">
      {/* Call To Action */}
      <div className="relative container mx-auto px-6 items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          exit={{
            opacity: 0,
            x: -30,
            transition: { ease: "easeIn", duration: 0.3 },
          }}
          className="text-white max-w-xl"
        >
          <h1 className="font-michroma text-4xl md:text-6xl font-bold mb-4">
            I'M PAWEL
          </h1>
          <p className="font-michroma text-lg md:text-2xl mb-6">
            Full-stack developer
          </p>
          <Link href="/about">
            <Button className={"text-xl"}>See More</Button>
          </Link>
        </motion.div>
      </div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{
          opacity: 0,
          y: 30,
          transition: { ease: "easeIn", duration: 0.3 },
        }}
        transition={{ duration: 0.6 }}
        className="absolute left-1/2 -translate-x-1/2 bottom-0 md:-ml-25 lg:-ml-31.25 xl:-ml-37.5 2xl:-ml-40"
      >
        {/* <GlitchImage
              src={heroImage}
              alt="Hero"
              className="w-full md:w-[200px] lg:w-[250px] xl:w-[300px] 2xl:w-[320px]"
            /> */}
      </motion.div>

      {/* Portfolio Preview */}
      <div className="absolute right-32 bottom-32 space-y-20 max-lg:hidden z-10">
        <PortfolioPrev />

        <InterfacesBlock />
      </div>

      <div className="absolute bottom-12 left-16">{/* <SocialsHero /> */}</div>
      <HomeBg />
    </section>
  );
}

const PortfolioPrev = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      exit={{
        opacity: 0,
        x: 30,
        transition: { ease: "easeIn", duration: 0.3 },
      }}
      className="flex w-full relative pb-12"
    >
      {/* Left section */}
      <div className="flex flex-col justify-center items-center w-[25%] relative">
        <div className="-rotate-90 absolute -left-8 bottom-6 xl:-left-16 xl:bottom-9">
          <h4 className="lg:text-2xl xl:text-3xl font-bold tracking-wider font-michroma whitespace-nowrap">
            Let’s See
          </h4>
          <p className="font-michroma ls:text-xl xl:text-2xl whitespace-nowrap">
            My Portfolio
          </p>
        </div>
      </div>

      {/* Right section */}
      <div className="flex justify-center items-center w-[75%] relative">
        <Image
          src="/portfolio_stripes.svg"
          alt="Portfolio stripes"
          width={100}
          height={100}
          className="absolute -bottom-10 xl:-bottom-12 lg:-left-2 xl:-left-4 lg:w-[6rem] xl:w-[8rem] -z-10"
        />

        <Link href="/portfolio">
          <Image
            src="/images/Anyfab.webp"
            alt="Portfolio preview"
            width={500}
            height={300}
            className="pl-6 md:w-[175px] lg:w-[275px] xl:w-[350px] 2xl:w-[375px] h-auto relative z-10 pointer-events-auto transition-transform duration-300 ease-in-out hover:scale-110 cursor-hover"
          />
        </Link>
      </div>
    </motion.div>
  );
};

const InterfacesBlock = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      exit={{
        opacity: 0,
        x: 30,
        transition: { ease: "easeIn", duration: 0.3 },
      }}
      className="flex items-start space-x-4 max-w-lg"
    >
      <div className="h4 font-normal mt-1">›</div>

      <div>
        <h3 className="h5 font-michroma font-normal">
          Build the interfaces <br /> of tomorrow
        </h3>
        <p className="font-michroma mt-3 text-sm font-normal">
          Clean code. Bold design. Real impact. <br />
          I craft seamless digital experiences <br />
          using React — for web, mobile, and <br />
          whatever comes next. <br />
          Let’s shape the future, one interface <br />
          at a time.
        </p>
      </div>
    </motion.div>
  );
};
