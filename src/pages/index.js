import { Inter } from "next/font/google";
import Question from "./question";
import data from "./data";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
  }, [data]);


  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Question questions={data} />
    </main>
  );
}
