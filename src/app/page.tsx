import Image from "next/image";
import Next from "../../public/next.svg"

export default function Home() {
  return (
    <div className="font-sans grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] items-center sm:items-start">
        <h1 className="font-mono text-6xl text-center sm:text-center">
          TERRAFORM x INFRASTRUCTURE x NEXT.JSa
        </h1>
        <Image
          src={Next}
          alt="NextLogo"
        />
      </main>
    </div>
    // <div className="flex flex-col h-screen justify-center">
    // <div className="flex justify-evenly w-full">
    //   <div>Item 1</div>
    //   <div>Item 2</div>
    // </div>
    // <div className="flex justify-around w-full">
    //   <div>Item 1</div>
    //   <div>Item 2</div>
    // </div>
    // </div>
  );
}
