import Button from "./Button";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div className="bg-hero 2xl:h-[712px] xl:h-[600px] lg:h-[550px] md:h-[500px] pb-20">
      <div className="container mx-auto px-10 2xl:p-0">
        <Navbar />
        <div className="text-center xl:mt-20 lg:mt-10 md:mt-6">
          <h1 className="md:text-3xl text-2xl text-white font-semibold font-mono 2xl:w-6/12 xl:w-8/12 lg:w-10/12 mx-auto leading-relaxed">
            Saya Seorang Backend Engineer, Full Stack Developer & Network Engineer
          </h1>
          <p className="text-white text-opacity-60 md:text-lg 2xl:w-3/12 xl:w-4/12 lg:w-6/12 mx-auto mt-6 leading-relaxed">
            Sejak 5 tahun lalu saya belajar IT, 3 Tahun belajar Networking, 2 Tahun belajar Programming.
          </p>
          <Button href="#profile" className="mt-10" variant="yellow" pill>
            Pelajari
          </Button>
        </div>
      </div>
    </div>
  );
}
