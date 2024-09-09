"use client";

import TawkToComponent from "@/components/TawkToComponent";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import "./page.css";

export default function Page() {
  const url = "https://embed.tawk.to/6082a08d62662a09efc16533/1f3v46arb";
  const href = "https://arada.bet/lander";
  useEffect(() => {
    const script = document.createElement("script");

    script.src = url;
    script.setAttribute("chat", "true");
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);
    console.log(script);
  }, []);
  return (
    <div className="bg-tertiary">
      <div className="w-screen flex justify-start lg:justify-center flex-col items-center py-16 px-4 lg:px-36 h-screen mx-auto bg-gray-800/80 ">
        <Image
          src="/image/arada-logo.png"
          alt="Vamos Logo"
          width={100}
          height={100}
          className=""
        />
        <h1 className="text-primary text-2xl lg:text-5xl pt-6 pb-3 text-center">
          Official Notice!
        </h1>

        <p className="max-w-md lg:max-w-5xl text-center text-[12px] lg:text-2xl  py-3 text-white tracking-wider font-medium">
          Due to failure to meet their payment obligation, Vamos Entertainment
          PLC. lost their access to this domain as well as the software. We
          regret to inform you that the software the company was using is no
          longer operational.
        </p>

        <h1 className="text-primary text-2xl lg:text-5xl py-3 text-center">
          Good news!
        </h1>

        <p className="max-w-md lg:max-w-5xl text-center text-[12px] lg:text-2xl  py-3 text-white tracking-wider font-medium">
          You can now go to{" "}
          <Link href={href} className="text-primary text font-bold text-sm lg:text-2xl">
            {" "}
            arada.bet
          </Link>{" "}
          and find the same software with better odds and bonuses. You can log
          in using your previous phone number password, Arada has agreed to even
          keep your old wallet balance so your money is not lost.
        </p>

        <h1 className="text-primary text-xl lg:text-2xl py-3 text-center">
          Arada Bet - We always pay (even to our suppliers)
        </h1>

        <div className="flex space-x-3 justify-center items-center pt-10">
          <Link
            href={href}
            className="btn rounded-md bg-yellow-400 hover:bg-yellow-400 text-gray-950 text-lg animate-bounce border-primary border"
          >
            New Login
          </Link>
          <TawkToComponent />
        </div>
      </div>
    </div>
  );
}
