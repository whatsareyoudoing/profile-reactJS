import HeroImage from "../assets/images/hero.svg";
import AboutImage from "../assets/images/about.svg"
import Proyek1  from "../assets/images/proyek-1.webp"
import Proyek2  from "../assets/images/proyek-2.webp"
import Proyek3  from "../assets/images/proyek-3.webp"
import Proyek4  from "../assets/images/proyek-4.webp"
import Proyek5  from "../assets/images/proyek-5.webp"

const HomePage = () => {
  return <div className="homepage pb-10">
    <div className="container mx-auto px-4">
      <div className="hero grid md:grid-cols-2 grid-cols-1 pt-32">
        <div className="box lg:pt-32">
          <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">
            Koneksi Stabil, Aplikasi Handal, <span className="font-bold"> Semua dari Satu Tangan.</span>
          </h1>
          <p className="text-base/8 mb-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam officia architecto quas aliquam assumenda corrupti deserunt corporis natus veniam maiores.</p>
          <a href="#" className="bg-sky-400 hover:bg-sky-500 transition-all py-2 px-4 text-white shadow rounded-full">
            Tentang Kami <i className="ri-eye-line ms-1"></i>
          </a>
        </div>
        <div className="box">
          <img src={HeroImage} alt="Hero Image" className="md:w-full w-[400px] mx-auto md:m-0"/>
        </div>
      </div>

      <div className="about grid md:grid-cols-2 grid-cols-1 items-center md:gap-20 gap-10 md:pt-20 pt-32" id="about">
        <div className="box order-2 md:order-1">
          <img src={AboutImage} alt="About Image" className="lg:w-[500px] w-[400px] md:m-0 mx-auto"/>
        </div>
        <div className="box order-1 md:order-2">
          <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7 text-center">
            Tentang Kami
          </h1>
          <p className="text-base/loose text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam officia architecto quas aliquam assumenda corrupti deserunt corporis natus veniam maiores.
          </p>
        </div>
      </div>

      <div className="services pt-32" id="services">
        <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">Layanan</h1>
        <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
        <div className="services-box pt-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          <div className="box bg-sky-400 rounded-lg shadow p-4">
            <i className="ri-number-1 text-3xl text-white"></i>
            <h3 className="text-xl font-bold text-white mt-6 mb-2">Services Name 1</h3>
            <p className="text-white text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae et facere ea error, sapiente iste.</p>
          </div>
          <div className="box bg-sky-400 rounded-lg shadow p-4">
            <i className="ri-number-1 text-3xl text-white"></i>
            <h3 className="text-xl font-bold text-white mt-6 mb-2">Services Name 1</h3>
            <p className="text-white text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae et facere ea error, sapiente iste.</p>
          </div>
          <div className="box bg-sky-400 rounded-lg shadow p-4">
            <i className="ri-number-1 text-3xl text-white"></i>
            <h3 className="text-xl font-bold text-white mt-6 mb-2">Services Name 1</h3>
            <p className="text-white text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae et facere ea error, sapiente iste.</p>
          </div>
        </div>
      </div>

      <div className="proyek pt-32" id="proyek">
        <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">Proyek</h1>
        <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
        <div className="proyek-box pt-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          <div className="box p-2 bg-white shadow">
            <img src={Proyek1} alt="Proyek Image" className="w-full h-[220px]" />
            <h3 className="text-xl font-bold mt-6 mb-2">Proyek Name 1</h3>
            <p className="text-justify text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aliquam unde deleniti atque veniam. Est!</p>
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek2} alt="Proyek Image" className="w-full h-[220px]" />
            <h3 className="text-xl font-bold mt-6 mb-2">Proyek Name 2</h3>
            <p className="text-justify text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aliquam unde deleniti atque veniam. Est!</p>
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek3} alt="Proyek Image" className="w-full h-[220px]" />
            <h3 className="text-xl font-bold mt-6 mb-2">Proyek Name 3</h3>
            <p className="text-justify text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aliquam unde deleniti atque veniam. Est!</p>
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek4} alt="Proyek Image" className="w-full h-[220px]" />
            <h3 className="text-xl font-bold mt-6 mb-2">Proyek Name 4</h3>
            <p className="text-justify text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aliquam unde deleniti atque veniam. Est!</p>
          </div>
          <div className="box p-2 bg-white shadow">
            <img src={Proyek5} alt="Proyek Image" className="w-full h-[220px]" />
            <h3 className="text-xl font-bold mt-6 mb-2">Proyek Name 5</h3>
            <p className="text-justify text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aliquam unde deleniti atque veniam. Est!</p>
          </div>
        </div>
      </div>

    </div>
  </div>;
}

export default HomePage