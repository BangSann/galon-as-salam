const Order = () => {
  function Input({ childern, type }) {
    return (
      <input
        placeholder={childern}
        type={type}
        className="w-full px-6 py-3 rounded-[15px] border-[1px] border-[#124795] text-[20px] text-[rgba(18, 71, 149, 0.50)] font-medium focus:outline-2 focus:outline-[#124795]"
      />
    );
  }

  function HandleOrder(event) {
    event.preventDefault()
    alert("pesan");
  }
  return (
    <section
      className="w-full h-[100vh] flex justify-center bg-[url('src/assets/background/bg4.jpg')] pt-[68px]"
      id="Order"
    >
      <div className="container grid grid-cols-2 justify-center items-center">
        <div>
          <img src="src\assets\halo 1.png" alt="" srcset="" />
        </div>
        <div className=" flex justify-end items-center ms-[120px]">
          <div className="rounded-2xl bg-white p-11 w-full">
            <h1 className="text-2xl text-[#22B6FD] text-center">
              Silahkan Isi Form Untuk Pesan
            </h1>
            <p className="text-sm text-[#22B6FD] text-center">
              Pesanan akan dikirim lewat WhatsApp
            </p>
            <form
              className="flex flex-col justify-center items-center gap-10 mt-9"
              onSubmit={HandleOrder}
            >
              <Input childern={"Nama"} type={"text"} />
              <Input childern={"Alamat"} type={"text"} />
              <Input childern={"Jumlah Pesanan"} type={"number"} />
              <button type="submit" className="bg-[#124795] outline-[#124795] text-white text-2xl font-semibold py-3 px-8 rounded-[15px] mt-14">
                Buat Pesanan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
