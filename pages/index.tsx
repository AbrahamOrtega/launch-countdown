import Counterdown from "@/components/Counterdown";
import Image from "next/image";
import { IoLogoFacebook } from "react-icons/io";
import { FaPinterest, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  const getFutureDate = () => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);
    currentDate.setHours(currentDate.getHours() + 5);

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    const hours = String(currentDate.getHours()).padStart(2, "0");
    const minutes = String(currentDate.getMinutes()).padStart(2, "0");
    const seconds = String(currentDate.getSeconds()).padStart(2, "0");

    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
  };

  useEffect(() => {}, []);

  return (
    <div className="flex flex-col w-full h-screen relative justify-center items-center bg-gradient-to-b from-veryDarkBlue to-darkPurple overflow-hidden">
      {/* Bg buttom */}
      <div className="flex w-full h-48 absolute bottom-0 z-20 items-end justify-center">
        <Image
          src={"/images/pattern-hills.svg"}
          alt=""
          width={1000}
          height={1000}
          className="flex w-full h-full object-right-top object-cover"
        />
      </div>

      {/* Bg particles */}
      <div className="flex w-full h-full absolute z-10 items-end justify-center">
        <Image
          src={"/images/bg-stars.svg"}
          alt=""
          width={1000}
          height={1000}
          className="flex w-full h-full object-right-top object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col w-full h-full items-center justify-center p-8 z-30">
        <div className="flex flex-col h-full">
          <h1 className="text-white text-[16px] md:text-[20px] lg:text-[24px] tracking-[0.3em] my-28 text-center">
            WE&apos;RE LAUNCHING SOON
          </h1>
          <Counterdown targetDate={getFutureDate()} /> {/* Time format */}
        </div>

        {/* Social media */}
        <div className="flex gap-x-6">
          <Link href={"/"} className="text-grayishBlue hover:text-softRed">
            <IoLogoFacebook size={32} />
          </Link>
          <Link href={"/"} className="text-grayishBlue hover:text-softRed">
            <FaPinterest size={32} />
          </Link>
          <Link href={"/"} className="text-grayishBlue hover:text-softRed">
            <FaInstagram size={32} />
          </Link>
        </div>
      </div>
    </div>
  );
}
