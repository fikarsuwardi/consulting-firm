import sourceSansPro from "@/components/ui/sourceSansPro";
import React from "react";

export default function Page() {
  return (
    <div className="flex flex-col items-center gap-12 px-8 py-20 lg:py-32 md:px-8 lg:px-16 bg-black/70 text-white ">
      <div className="w-full md:w-3/4 ">
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
          Beyond Strategy. It&apos;s a Lifestyle.
        </h1>
        <p
          className={
            sourceSansPro.className +
            " text-sm md:text-base lg:text-lg leading-snug"
          }
        >
          We understand the demands of leading a successful business and offer a
          comprehensive suite of services that includes strategic guidance and
          lifestyle solutions. Our team works to refine your business strategy
          while providing access to exclusive lifestyle services supporting
          well-being and peak performance.
          <br />
          <br />
          Success is a Journey, Not a Destination. We&apos;re Here for Every
          Step. We are your one-stop shop for business consulting, seamlessly
          integrated with premium lifestyle services. We serve influential
          visionaries by crafting strategic solutions, unlocking their
          potential, and providing curated lifestyle experiences enhancing
          well-being and success.
        </p>
      </div>
    </div>
  );
}
