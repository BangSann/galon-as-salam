const HomeBanner = () => {
  return (
    <section
      className="container h-[100vh] flex justify-center items-center pt-[68px]"
      id="Home"
    >
      <div className="w-full grid grid-cols-12 bg-[url('./assets/back-banner.png')] p-6 bg-cover rounded-ss-3xl rounded-ee-3xl rounded-se-[200px] rounded-es-[200px]">
        <div className="px-20 py-40 border-2 border-white rounded-ss-3xl rounded-ee-3xl rounded-se-[200px] rounded-es-[200px] col-span-6 bg-white bg-opacity-10 backdrop-filter backdrop-blur-[10px]">
          <div className="space-y-10 text-[#002780]">
            <h1 className="text-[94px] leading-[85px] tracking-tight">As-Salam</h1>
            <p className="text-[27px]">
              Pilihan terbaik Air Minum Sehat Keluarga anda
            </p>
            <a href="#order">
              <button className="bg-[#002780] text-white py-3 px-6 rounded-lg mt-10">
                Pesan Sekarang
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
