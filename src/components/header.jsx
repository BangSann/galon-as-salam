const Header = () => {
  return (
    <section className=" w-full flex justify-center items-center shadow-lg fixed top-0 bg-white z-50">
      <header className="w-full container flex justify-end py-6 relative ">
        <div className="absolute left-0 top-0 p-3 rounded-lg bg-white shadow-lg">
          <img src="./src/assets/As-Salam_logo.svg" />
        </div>
        <div className="flex gap-11 text-lg font-normal leading-5 text-[#124795]">
          <div>
            <a href="#Home">Home</a>
          </div>
          <div>
            <a href="#Profile">Profile</a>
          </div>
          <div>
            <a href="#AirRO">
              Air RO
            </a>
          </div>
          <div>
            <a href="#Layanan">Layanan</a>
          </div>
          <div>
            <a href="#Order">Pesan</a>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;
