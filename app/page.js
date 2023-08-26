import Image from "next/image";
import akhil from "@/public/akhil_tripathi_niser.webp";
import omkar from "@/public/dr_omkar.webp";
import vivek from "@/public/vivek_dwivedi_niser.webp";
import { FaTelegramPlane } from "react-icons/fa";
const arr = [
  "University of Oxford",
  "University of Cambridge",
  "University College London",
  "Imperial College London",
  "ETH Zurich",
  "King's College London",
  "University of Edinburgh",
  "University of Amsterdam",
  "University of Oxford",
  "University of Cambridge",
  "University College London",
  "Imperial College London",
];

const prof = [
  "Emilio Bizzi",
  "Noam Chomsky",
  "John M. Deutch",
  "Peter A. Diamond",
  "Jerome I. Friedman",
  "John Harbison",
  "Barbara Liskov",
  "John D.C. Little",
  "Joel Moses",
  "Ron Rivest",
  "Jerome I. Friedman",
  "John Harbison",
];
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 space-y-40">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple-600 to-purple-800 px-10">
          Learn from Scientists,research scholars from the top institutes of the world.
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  max-w-[80vw] gap-10 py-10">
          {arr.map((item) => {
            return (
              <div
                key={item}
                className="text-center border border-1 flex items-center justify-center p-8 hover:scale-105 duration-300 shadow-xl rounded-2xl"
              >
                <h1 className="text-xl cursor-default font-semibold">{item}</h1>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="self-start text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple-600 to-purple-800">
          Meet your mentors
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  max-w-[80vw] gap-10 py-10">
          {prof.map((item, i) => {
            return (
              <div
                key={item}
                className="flex flex-col text-center border border-1 items-center justify-evenly p-8 space-y-2  hover:scale-105 duration-300 shadow-xl rounded-[3rem]"
              >
                <Image
                  src={"/default.svg"}
                  height={150}
                  width={150}
                  alt="default"
                  className="rounded-full"
                ></Image>
                <h1 className="text-xl cursor-default font-semibold">{item}</h1>
                <h2 className="text-sm cursor-default font-light">{arr[i]}</h2>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl self-start font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple-600 to-purple-800">
          Mentor & Advisor
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 max-w-[80vw] gap-10 py-10">
          <div className="flex flex-col text-center border border-1 items-center justify-evenly p-8 space-y-2 shadow-xl rounded-[3rem]">
            <Image
              src={omkar}
              height={150}
              width={150}
              alt="default"
              className="rounded-full"
            ></Image>
            <h1 className="text-xl cursor-default font-semibold">Dr. Omkar</h1>
            <h2 className="text-sm cursor-default font-light">
              Principal Project Scientist at Indian Institute of Technology, Madras
            </h2>
          </div>
          <div className="flex flex-col text-center border border-1 items-center justify-evenly p-8 space-y-2 shadow-xl rounded-[3rem]">
            <Image
              src={akhil}
              height={150}
              width={150}
              alt="default"
              className="rounded-full"
            ></Image>
            <h1 className="text-xl cursor-default font-semibold">Akhil Tripathi</h1>
            <button className="flex  items-center space-x-1 p-2 px-4 text-white bg-gradient-to-r from-purple-600 to-purple-400 rounded-xl hover:scale-110 hover:from-purple-700 hover:to-purple-500 duration-300">
              <p>Message him now</p>
              <FaTelegramPlane />
            </button>
          </div>
          <div className="flex flex-col text-center border border-1 items-center justify-evenly p-8 space-y-3 shadow-xl rounded-[3rem]">
            <Image
              src={vivek}
              height={150}
              width={150}
              alt="default"
              className="rounded-full max-h-[150px]"
            ></Image>
            <h1 className="text-xl cursor-default font-semibold">Vivek Dwivedi</h1>
            <button className="flex  items-center space-x-1 p-2 px-4 text-white bg-gradient-to-r from-purple-600 to-purple-400 rounded-xl hover:scale-110 hover:from-purple-700 hover:to-purple-500 duration-300">
              <p>Message him now</p>
              <FaTelegramPlane />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
