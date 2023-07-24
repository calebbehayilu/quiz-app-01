import Link from "next/link";

const Navbar = () => {
  return (
    <nav className=" mt-5 mx-10 justify-between flex text-textColor sm:mx-40  ">
        <section className="">
          <Link className=" text-4xl" href="/">
            🪲
          </Link>
        </section>
        <ul className="flex flex-col sm:flex-row ">
          <li className="">
            <Link className=" m-2 hover:text-accent mt-2 " href="/">
              Home
            </Link>
          </li>
          <li className="">
            <Link className=" m-2 hover:text-accent mt-2 " href="/about">
              About
            </Link>
          </li>
          <li className="">
            <Link className=" m-2 hover:text-accent mt-2 " href="/contact">
              Contact
            </Link>
          </li>
        </ul>
    </nav>
  );
};

export default Navbar;
