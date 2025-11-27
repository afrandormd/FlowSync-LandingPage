import { Logo } from "@/src/assets";
import Image from "next/image";
import Button from "../button/Button";

const Navbar = (props: {}) => {
  return (
    <div className="w-screen relative">
      <nav className="max-w-[100vw] w-full mx-auto flex justify-between items-center p-[50px]">
        <Image src={Logo} alt="Logo" />

        <div className="flex gap- items-center gap-[60px]">
          <a
            href="#"
            className="text-[20px] text-black hover:text-primary hover:font-bold"
          >
            Home
          </a>
          <a
            href="#"
            className="text-[20px] text-black hover:text-primary hover:font-bold"
          >
            About
          </a>
          <a
            href="#"
            className="text-[20px] text-black hover:text-primary hover:font-bold"
          >
            Contact
          </a>
          <Button label="Get Started" variant="solid" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
