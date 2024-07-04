const Footer = () => {
  return (
    <section className="w-full flex justify-center bg-white min-h-[30vh] relative flex-col items-center rounded-t-[40px] mt-40 pt-[130px]">
      <div className="p-5 rounded-2xl bg-white absolute -top-12 shadow-lg">
        <img src="src\assets\As-Salam_logo.svg" className="w-[300px] h-auto" />
      </div>
      <div className="container grid grid-cols-3 border-t-[3px] border-[#124795] py-5 gap-x-20">
        <div className="text-start">
          <h1 className="text-2xl text-[#22B6FD]">Informasi Usaha</h1>
          <ul className="text-base text-[#124795] my-3">
            <li>Galon As-Salam</li>
            <li>
              Jl. Saroja, Rt.01, Rw.08, Ds. Sumberejo Kec. Kandat, Kab. Kediri
            </li>
            <li>0813 5839 0505</li>
            <li>Assalamgalon@gmail.com</li>
          </ul>
        </div>
        <div className="">
          <h1 className="text-2xl text-[#22B6FD]">Navigasi Cepat</h1>
          <ul className="text-base text-[#124795] my-3">
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#Profile">Profile</a>
            </li>
            <li>Air Ro</li>
            <li>
              <a href="#Layanan">Layanan</a>
            </li>
            <li>
              <a href="#Order">Pesan</a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-2xl text-[#22B6FD]">Lokasi</h1>
          <div className="my-3">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40424.48817301387!2d112.01093550774881!3d-7.839518392280631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78570592c4195d%3A0xdd821c40f619fb24!2sAlun-Alun%20Kota%20Kediri!5e0!3m2!1sid!2sid!4v1720068019105!5m2!1sid!2sid" width="320" height="150" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
