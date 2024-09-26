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

    <section className="min-h-screen p-10 bg-gray-50">
      <div className="flex gap-10">
      <Image 
        src={animeBg}
        alt="bg"
        className="w-96 object-cover rounded"
      />
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-semibold">Tempat dimana kamu memulai perjalanan belajar bahasa Jepangmu!</h1>
        <p className="text-gray-600 tracking-wide leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ea, vitae officia earum ut soluta, voluptate consectetur porro libero vel vero labore minus. Ex nobis, totam exercitationem aliquam officia cumque minus explicabo suscipit quisquam magni facere similique placeat sequi cupiditate sapiente. Reprehenderit esse, cumque repudiandae iure recusandae laboriosam, rerum in dolorum, blanditiis deserunt voluptate sed. Architecto maxime animi ipsa vero libero enim. Commodi dicta ea dolore, et in temporibus! Cumque officia odit tempora in sunt perspiciatis? Et laborum dolores est iusto corrupti. Repudiandae quo animi illo quis asperiores omnis, excepturi nihil repellat autem delectus voluptatum iusto corrupti facere ratione at!</p>
        <button className="text-xl p-3 text-[#80BCBD] border-4 border-[#80BCBD] self-baseline uppercase font-bold">mulai belajar</button>
      </div>
      </div>
    </section>

    <section className="flex flex-col items-center justify-center min-h-screen p-5 rounded">
      <h1 className="text-4xl font-bold text-gray-600">Pilih Level</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 place-items-center p-5">
        <div className="relative h-36 bg-[#80BCBD] rounded-lg w-56 p-5 flex justify-center items-center hover:translate-y-[-10px] transition-all cursor-pointer">
          <h1 className="text-5xl font-bold text-white z-10">N5</h1>
        </div>
        <div className="relative h-36 bg-[#80BCBD] rounded-lg w-56 p-5 flex justify-center items-center hover:translate-y-[-10px] transition-all cursor-pointer">
          <h1 className="text-5xl font-bold text-white z-10">N4</h1>
        </div>
        <div className="relative h-36 bg-[#80BCBD] rounded-lg w-56 p-5 flex justify-center items-center hover:translate-y-[-10px] transition-all cursor-pointer">
          <h1 className="text-5xl font-bold text-white z-10">N3</h1>
        </div>
        <div className="relative h-36 bg-[#80BCBD] rounded-lg w-56 p-5 flex justify-center items-center hover:translate-y-[-10px] transition-all cursor-pointer">
          <h1 className="text-5xl font-bold text-white z-10">N2</h1>
        </div>
        <div className="relative h-36 bg-[#80BCBD] rounded-lg w-56 p-5 flex justify-center items-center hover:translate-y-[-10px] transition-all cursor-pointer">
          <h1 className="text-5xl font-bold text-white z-10">N1</h1>
        </div>

      </div>
    </section>
   </main>
  );
}
