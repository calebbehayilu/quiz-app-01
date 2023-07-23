import { Roboto ,Montserrat } from "next/font/google";
import Question from "./question";
import data from "./data";
import { useEffect } from "react";

const roboto = Roboto({ weight: ['400' , '300' , '100'] ,subsets: ["latin"] });
const montserrat = Montserrat({
  weight: ['400' , '700'],
  subsets: ['latin'],
  variable: '--font-montserrat'

})
export default function Home() {
  useEffect(() => {
  }, [data]);


  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${montserrat.className}`}
    >
      <Question questions={data} />
    </main>
  );
}
