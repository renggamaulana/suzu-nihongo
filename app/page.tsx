import Image from "next/image";
import study from './public/images/study.svg'
import animeBg from './public/images/anime-bg.jpg'

export default function Home() {
  return (
   <main>
    {/* Banner */}
    <section className="flex gap-5 flex-wrap-reverse md:flex-nowrap items-center p-16">
      <div className="md:w-1/2 relative">
        <h1 className="text-6xl md:text-6xl md:whitespace-wrap lg:text-8xl font-bold text-gray-800">SUZU NIHONGO</h1>
        <h3 className="text-2xl italic tracking-wide text-gray-600 whitespace-wrap">Belajar bahasa jepang sedikit demi sedikit.</h3>
        <div className="hidden md:block bg-red-600 h-36 w-36 rounded-full absolute top-[-100px] right-20 "></div>
      </div>
      <Image 
        src={study}
        alt="study"
        className="md:w-1/2"
        width={300}
        height={300}
      />
    </section>

    <section className="min-h-screen p-5 border shadow-2xl m-5 rounded">
      <h1 className="text-4xl font-bold text-gray-600">Pilih Level</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 place-items-center p-5">
        <div className="relative h-fit border border-gray-400 bg-white rounded-xl w-56 p-5 flex justify-center items-center hover:translate-y-[-10px] transition-all cursor-pointer">
          <h1 className="text-5xl font-bold text-white z-10">N5</h1>
          <Image src={animeBg} alt="bg" className="h-full absolute rounded-xl w-full object-cover"/>
        </div>
        <div className="relative h-fit border border-gray-400 bg-white rounded-xl w-56 p-5 flex justify-center items-center hover:translate-y-[-10px] transition-all cursor-pointer">
          <h1 className="text-5xl font-bold text-white z-10">N4</h1>
          <Image src={animeBg} alt="bg" className="h-full absolute rounded-xl w-full object-cover"/>
        </div>
        <div className="relative h-fit border border-gray-400 bg-white rounded-xl w-56 p-5 flex justify-center items-center hover:translate-y-[-10px] transition-all cursor-pointer">
          <h1 className="text-5xl font-bold text-white z-10">N3</h1>
          <Image src={animeBg} alt="bg" className="h-full absolute rounded-xl w-full object-cover"/>
        </div>
        <div className="relative h-fit border border-gray-400 bg-white rounded-xl w-56 p-5 flex justify-center items-center hover:translate-y-[-10px] transition-all cursor-pointer">
          <h1 className="text-5xl font-bold text-white z-10">N2</h1>
          <Image src={animeBg} alt="bg" className="h-full absolute rounded-xl w-full object-cover"/>
        </div>
        <div className="relative h-fit border border-gray-400 bg-white rounded-xl w-56 p-5 flex justify-center items-center hover:translate-y-[-10px] transition-all cursor-pointer">
          <h1 className="text-5xl font-bold text-white z-10">N1</h1>
          <Image src={animeBg} alt="bg" className="h-full absolute rounded-xl w-full object-cover"/>
        </div>

      </div>
    </section>
   </main>
  );
}
