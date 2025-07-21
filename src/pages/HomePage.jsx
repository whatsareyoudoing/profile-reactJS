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
        <div className="box lg:pt-25">
          <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">
            Koneksi Stabil, Aplikasi Handal, <span className="font-bold"> Semua dari Satu Tangan.</span>
          </h1>
          <p className="text-base/8 mb-7 text-justify">
            Selamat datang! Kami adalah profesional di bidang Web Development dan IT Solution.  
            Kami membantu bisnis dan individu membangun solusi digital yang efisien, fungsional, dan menarik.
          </p>
          <p className="text-base/8">
             🔧 Spesialisasi: Web Development, IT Support, dan Otomatisasi Proses  
          </p>
          <p className="text-base/8 mb-7">
            📍 Berbasis di Gresik, melayani klien dari seluruh Indonesia.
          </p>
          <a href="#about" className="bg-sky-400 hover:bg-sky-500 transition-all py-2 px-4 text-white shadow rounded-full">
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
          <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7 ">
            Tentang Kami
          </h1>
          <p className="text-base/loose text-justify">
            Kami adalah para profesional di bidang IT dan pengembangan digital. Dengan pengalaman dalam membangun sistem, aplikasi, dan infrastruktur jaringan, kami fokus memberikan solusi teknologi yang tepat guna dan berdampak nyata.
          </p>
          <p className="mt-8 mb-4">🌱 Keahlian Kami:</p>
          <ul>
            <li>- Pengembangan Web</li>
            <li>- Jaringan & Server</li>
            <li>- Konsultasi & Automasi Sistem</li>
          </ul>


        </div>
      </div>

      <div className="services pt-32" id="services">
        <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">Layanan</h1>
        {/* <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing.</p> */}
        <div className="services-box pt-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          <div className="box bg-sky-400 rounded-lg shadow p-4">
            <i className="ri-computer-line text-3xl text-white"></i>
            <h3 className="text-xl font-bold text-white mt-6 mb-2">Pengembangan Website  </h3>
            <p className="text-white text-base/loose">
              Membangun website modern, cepat, dan responsif — dari landing page, company profile, hingga aplikasi kustom.
            </p>
          </div>
          <div className="box bg-sky-400 rounded-lg shadow p-4">
            <i className="ri-brain-line text-3xl text-white"></i>
            <h3 className="text-xl font-bold text-white mt-6 mb-2">Konsultasi & Dukungan IT </h3>
            <p className="text-white text-base/loose">
              Membantu Anda memahami dan menerapkan solusi teknologi terbaik untuk kebutuhan pribadi atau bisnis Anda.
            </p>
          </div>
          <div className="box bg-sky-400 rounded-lg shadow p-4">
            <i className="ri-earth-line text-3xl text-white"></i>
            <h3 className="text-xl font-bold text-white mt-6 mb-2">Jaringan & Infrastruktur  </h3>
            <p className="text-white text-base/loose">Desain dan implementasi jaringan kantor, setup dua ISP dengan failover, dan monitoring jaringan (MikroTik, Linux, Windows Server).</p>
          </div>
          <div className="box bg-sky-400 rounded-lg shadow p-4">
            <i className="ri-instance-line text-3xl text-white"></i>
            <h3 className="text-xl font-bold text-white mt-6 mb-2">Automasi & Integrasi   </h3>
            <p className="text-white text-base/loose">Mengotomatisasi tugas-tugas rutin seperti backup data, konversi Excel ke database, notifikasi sistem, dan lainnya.</p>
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