import { Inter , Montserrat } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({
  weight: ['400' , '700'],
  subsets: ['latin'],
  variable: '--font-montserrat'

})

const Layout = ({ children }) => {
  return <div className={` ${ montserrat.className} bg-background`} >{children}</div>;
};

export default Layout;
