import { Inter, Montserrat } from "next/font/google";

import Navbar from "./navbar";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const Layout = ({ children }) => {
  return (
    <div className={` ${montserrat.className} overflow-hidden bg-background`}>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
