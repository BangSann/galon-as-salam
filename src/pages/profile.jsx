import line1 from "../assets/Line 1.svg"
import line2 from "../assets/Line 2.svg"
import profil from "../assets/profi 1.png"

const Profile = () => {
  return (
    <section className="container min-h-[100vh] flex items-center flex-col py-16" id="Profile">
      <div className="text-center space-y-5 py-[68px]">
        <h1 className="text-[32px] text-white leading-8">Profile Usaha</h1>
        <div className="w-[200px] relative">
          <img src={line1} className="w-[200px]" />
          <img
            src={line2}
            className="w-[200px] absolute top-0"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 w-full gap-x-20 gap-y-5">
        <div className="cols-span-1 flex flex-col gap-y-6">
          <h1 className="text-[40px] leading-10 text-[#22B6FD]">
            Selamat Datang
          </h1>
          <h2 className="text-[32px] leading-10 text-white">
            Di Depot Isi Ulang Galon As-Salam
          </h2>
          <p className="text-[20px] leading-8 text-white text-justify">
            Depot isi ulang galon As-Salam adalah usaha milik Bapak Saifudin
            yang telah beroperasi sejak tahun 2019. Berlokasi di Desa Sumberejo,
            Kecamatan Kandat. As-Salam dikenal sebagai penyedia air minum
            berkualitas tinggi yang dapat diandalkan oleh masyarakat sekitar.
            Berkat Pelayanan yang diberikan, Galon As-Salam dapat menguasai
            pasar isi ulang galon di desa sumberjo dan sudah ada 400 orang
            berlangganan galon As-Salam.
          </p>
        </div>
        <div className="col-span-1">
          <div className="w-full">
            <img src={profil} className="w-full" />
          </div>
        </div>
        <div className="flex flex-col gap-y-6">
          <h1 className="text-[40px] leading-10 text-[#22B6FD]">Misi</h1>
          <ol className="list-decimal text-[20px] leading-8 text-white text-justify list-inside">
            <li>
              Menyediakan air minum berkualitas tinggi melalui teknologi RO.
            </li>
            <li>
              Menjaga kepercayaan pelanggan dengan memberikan pelayanan
              terbaik dan konsisten.
            </li>
            <li>
              Berkontribusi dalam meningkatkan kesehatan masyarakat melalui
              air minum yang bersih dan sehat.
            </li>
            <li>
              Menerapkan standar kebersihan dan keamanan yang ketat dalam
              setiap proses produksi.
            </li>
          </ol>
        </div>
        <div className="flex flex-col gap-y-6">
          <h1 className="text-[40px] leading-10 text-[#22B6FD]">Visi</h1>
          <p className="text-[20px] leading-8 text-white text-justify">
            Menjadi penyedia air minum isi ulang terlaris dengan kualitas
            terbaik di Kecamatan Kandat, dengan menjaga standar kebersihan dan
            kesehatan tertinggi.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
