const AirRo = () => {
  const description = [
    {
      head: "Mengurangi Risiko Penyakit",
      body: "Konsumsi air yang bersih dan bebas kontaminan membantu mengurangi risiko penyakit yang disebabkan oleh air tercemar, seperti diare dan infeksi saluran pencernaan.",
    },
    {
      head: "Murni & Bersih",
      body: "Air RO telah melalui penyaringan yang ketat untuk menghilangkan kotoran, logam berat, bakteri, dan virus. Anda bisa yakin bahwa setiap tetes air RO adalah murni dan bebas dari kontaminan berbahaya.",
    },
    {
      head: "Aman untuk Semua Usia",
      body: "Air RO sangat aman untuk dikonsumsi oleh semua anggota keluarga, termasuk bayi dan anak-anak, karena bebas dari bahan-bahan yang dapat membahayakan kesehatan.",
    },
    {
      head: "Rasa Lebih Segar",
      body: "Dengan menghilangkan zat-zat yang mempengaruhi rasa air, air RO menawarkan rasa yang lebih segar dan lebih murni, membuat setiap tegukan lebih nikmat.",
    },
    {
      head: "Ramah Lingkungan",
      body: "Dengan memilih air isi ulang RO, Anda ikut mengurangi sampah plastik dari botol sekali pakai, sehingga berkontribusi pada pelestarian lingkungan.",
    },
    {
      head: "Baik untuk Kesehatan",
      body: "Mengonsumsi air RO membantu menjaga kesehatan tubuh dengan memastikan bahwa air yang Anda minum bebas dari zat-zat kimia berbahaya dan kontaminan mikrobiologis.",
    },
  ];
  return (
    <section className="container min-h-[100vh] w-full flex items-center flex-col mb-80">
      <div className="text-center flex flex-col items-center space-y-5 py-[68px]">
        <h1 className="text-[32px] text-white leading-8">Apa Itu Air Ro ?</h1>
        <div className="w-[200px] relative">
          <img src="src\assets\Line 1.svg" className="w-[200px]" />
          <img
            src="src\assets\Line 2.svg"
            className="w-[200px] absolute top-0"
          />
        </div>
      </div>
      <div className="text-justify">
        <p className="text-xl leading-7 text-white font-medium">
          Air RO, atau Reverse Osmosis, adalah air yang telah melalui proses
          penyaringan canggih menggunakan teknologi Reverse Osmosis. Proses ini
          melibatkan pengaliran air melalui membran semi-permeabel yang mampu
          menyaring partikel-partikel halus, kontaminan, dan zat-zat kimia
          berbahaya. Hasilnya adalah air minum yang jernih, bersih, dan sehat
          untuk dikonsumsi.
        </p>
      </div>
      <div className="container relative flex flex-col items-center justify-center w-full mt-[50px]">
        <div className="text-center flex flex-col items-center space-y-5 absolute top-2">
          <h1 className="text-[32px] text-white leading-8">Manfaat Air RO</h1>
          <div className="w-[200px] relative">
            <img src="src\assets\Line 1.svg" className="w-[200px]" />
            <img
              src="src\assets\Line 2.svg"
              className="w-[200px] absolute top-0"
            />
          </div>
        </div>
        <div className="w-full realtive flex justify-center">
          <img src="src/assets/utils/1.png" className="w-full" />
          <img src="src/assets/utils/drop.png" className="absolute -bottom-60 z-10" />
        </div>
        <div className="absolute -top-5 grid grid-cols-2 w-full gap-y-[130px] py-3">
          {description.map((items, index) => {
            if (index % 2 == 0) {
              return (
                <div className="flex flex-col items-start gap-[10px] max-w-[179px]">
                  <h1 className="text-[21px] text-[#22B6FD] leading-7">{items.head}</h1>
                  <p className="w-[259px] text-[13px] text-white leading-[18px]">{items.body}</p>
                </div>
              );
            } else {
              return (
                <div className="flex flex-col items-end gap-[10px]">
                  <h1 className="text-end text-[21px] text-[#22B6FD] leading-7 max-w-[198px]">{items.head}</h1>
                  <p className="w-[259px] text-end text-[13px] text-white leading-[18px]">{items.body}</p>
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default AirRo;
