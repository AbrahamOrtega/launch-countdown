import Counterdown from "@/components/Counterdown";
import Image from "next/image";
import { IoLogoFacebook } from "react-icons/io";
import { FaPinterest, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen relative justify-center items-center bg-gradient-to-b from-veryDarkBlue to-darkPurple">
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
          <h1 className="text-white text-[24px] tracking-[0.3em] my-28 text-center">
            WE&apos;RE LAUNCHING SOON
          </h1>
          <Counterdown targetDate={"2024-12-25T00:00:00"} /> {/* Time format */}
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
