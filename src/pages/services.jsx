import gelombang from "../assets/utils/gelombang.png"
import galonImg from "../assets/galon_1 1.png"
import motoImg from "../assets/image 36.png"
import kranImg from "../assets/krann 1.png"

// Import Swiper styles
import "swiper/css";

const Services = () => {
  return (
    <section className={`flex justify-center items-center h-[100vh] w-full bg-[url('./assets/background/bg3.jpg')] relative`} id="Layanan">
      <div className="container w-full flex items-center justify-center">
        <div className="flex flex-col gap-5 justify-center items-center rounded-s-[25px] bg-white p-[30px] min-h-[500px] max-w-[360px]">
          <div className="flex justify-center items-center pb-7 border-b-[5px] border-[#042F90] w-full">
            <img src={galonImg} />
          </div>
          <div className="space-y-[25px]">
            <h1 className="text-[32px] leading-5 font-normal text-[#042F90] text-center">
              Gratis Galon
            </h1>
            <p className="text-base leading-7 text-center text-[#042F90]">
              Pembelian pertama tidak di haruskan membeli galon yang nantinya
              akan ditukar setiap habis dan dikembalikan ketika sudah tidak
              berlangganan.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 justify-center items-center rounded-[25px] bg-[#042F90] p-[55px] pb-44 min-w-[480px]">
          <div className="border-b-[5px] border-white flex justify-center items-center pb-7 w-full">
            <img src={motoImg} />
          </div>
          <div className="space-y-[25px] mt-5">
            <h1 className="text-[32px] leading-5 font-normal text-white text-center">
              Gratis Galon
            </h1>
            <p className="text-base leading-7 text-center text-white">
              Kami siap mengantar pesanan sampai depan pintu rumah anda tanpa
              ada tambahan untuk wilayah desa sumberejo. Diluar desa Sumberjo
              dikenakan ongkir yang sangat terjangkau
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 justify-center items-center rounded-e-[25px] bg-white p-[30px] min-h-[500px] max-w-[360px]">
          <div className="flex justify-center items-center pb-7 border-b-[5px] border-[#042F90] w-full">
            <img src={kranImg} />
          </div>
          <div className="space-y-[25px]">
            <h1 className="text-[32px] leading-5 font-normal text-[#042F90] text-center">
              Gratis Kran
            </h1>
            <p className="text-base leading-7 text-center text-[#042F90]">
              Produk galon kami sudah includ dengan kran air, yang mana akan
              mempermudah anda karna tidak perlu tempat khusus, hanya perlu
              tempat yang datar dan galon siap digunakan
            </p>
          </div>
        </div>
      </div>
      <div className="absolute -top-28 w-full">
        <img src={gelombang} className="w-full"/>
      </div>
    </section>
  );
};

export default Services;
