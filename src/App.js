import './App.css';
import Container from "./Components/Container"
import paeko from "./Assets/logo_paeko.png"
import Banner1 from "./Assets/Property 1=Frame 9.png"
import BrandImage from "./Assets/MVvYrKSaBBXioCsz4pBoQgkSv1vGaLSXeCJjKKOo.png"
import WeeklyImage from "./Assets/d6d9885b0b33bd021eeef0dbac1f9911 (1).png"
import { IoMdCart } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { VscChevronRight } from "react-icons/vsc";
import { IoShieldCheckmark, IoShirtSharp } from "react-icons/io5";
import { HiPrinter } from "react-icons/hi2";
import { MdContentCopy } from "react-icons/md";

function App() {
  return (
    <>

      <div className=" w-full absolute">
          <div className=" bg-white shadow-lg">
              <Container>
                  <div className=" py-4">
                      <div className=" flex items-center justify-between">
                          <div className=" w-[115px]">
                              <a href="">
                                  <img src={paeko} alt="" />
                              </a>
                          </div>
                          <div className=" flex">
                              <input className=" border rounded-l-md h-[35px] w-[750px] px-3" type="search" placeholder="Cari Kaos atau Brand" />
                              <button className=" bg-gray-300 rounded-r-md h-[35px] w-[50px] flex justify-center items-center"><AiOutlineSearch size={20} /></button>
                          </div>
                          <div className=" flex justify-center items-center">
                              <button><IoMdCart size={20} /></button>
                          </div>
                          <div className=" flex gap-2 text-xl">
                              <button className=" border border-sky-400 w-[79px] h-[34px] rounded-md text-sky-400">Masuk</button>
                              <button className=" bg-sky-400 w-[79px] h-[34px] rounded-md text-white">Daftar</button>
                          </div>
                      </div>
                      <div className=" flex justify-between pt-2">
                          <div className=" pt-3 flex gap-4 text-slate-400 text-[15px]">
                              <a href="">Home</a>
                              <a href="./BrandCard">Brand</a>
                              <a href="./WeeklyCard">Weekly Choice</a>
                              <a href="">Produk</a>
                          </div>
                          <div>
                              <button className=" bg-sky-400 text-white rounded-full text-xl">
                                  <div className=" flex items-center justify-center w-[172px] h-[35px]">
                                      <p className=" text-[15px]">Buat Sekarang</p>
                                      <div className=" pt-1">
                                          <VscChevronRight />
                                      </div>
                                  </div> 
                              </button>
                          </div>
                      </div>
                  </div>
              </Container>
          </div>
      </div>

      <Container>
        <div className=" pt-[150px]">
            <div>
                <button>
                    <img src={Banner1} alt="Banner1" />
                </button>
            </div>
            <div>
                <button>
                    <img src="" alt="" />
                </button>
            </div>
        </div>
      </Container>

      <Container>
        <div className=" bg-white shadow-lg rounded-2xl w-full mt-5">
          <div className=" flex px-[100px] py-4 justify-between">
              <div className=" flex items-center">
                  <div className=" pr-2"><HiPrinter className="paeko-icon" size={40}/></div>
                  <div>
                      <div className=" font-bold">DTF Printing</div>
                      <div className=" text-xs text-slate-500">Menggunakan sablon DTF</div>
                  </div>
              </div>
              <div className=" flex items-center">
                  <div className=" pr-2"><IoShirtSharp className="paeko-icon" size={40}/></div>
                  <div>
                      <div>
                          <div className=" font-bold">Premium T-shirt</div>
                          <div className=" text-xs text-slate-500">Kaos Menggunakan bahan premium</div>
                      </div>
                  </div>
              </div>
              <div className=" flex items-center">
                  <div className=" pr-2"><IoShieldCheckmark className="paeko-icon" size={40}/></div>
                  <div>
                      <div className=" font-bold">100% Secure Payment</div>
                      <div className=" text-xs text-slate-500">menjamin pembayaran yang aman</div>
                  </div>
              </div>
          </div>
        </div>
      </Container>

      <Container>
        <div className=" border border-slate-300 mt-8">
            <div className=" p-8">
                <div className=" flex justify-between items-center">
                    <h1 className=" paeko-text font-bold text-3xl">Brand Terbaru</h1>
                    <button className=" paeko-bg text-white rounded-full w-[120px] h-[26px] text-sm">Lihat Semua</button>
                </div>
                <div className=" flex gap-5 pt-6">
                    <div className=" paeko-bg w-[340px] h-[150px] rounded-lg flex items-center justify-between p-3">
                        <div>
                            <img className=" w-[120px] h-[120px] rounded-full" src={BrandImage} alt="BrandImage" />
                        </div>
                        <div className=" text-end text-white">
                            <h1 className=" font-bold text-[20px]">Alx Studio_Official</h1>
                            <div className=" py-3 text-[18px]">3 Produk</div>
                            <button className=" border border-white rounded-md w-[96px] h-[30] text-[15px]">More</button>
                        </div>
                    </div>
                    <div className=" paeko-bg w-[340px] h-[150px] rounded-lg flex items-center justify-between p-3">
                        <div>
                            <img className=" w-[120px] h-[120px] rounded-full" src={BrandImage} alt="BrandImage" />
                        </div>
                        <div className=" text-end text-white">
                            <h1 className=" font-bold text-[20px]">Alx Studio_Official</h1>
                            <div className=" py-3 text-[18px]">3 Produk</div>
                            <button className=" border border-white rounded-md w-[96px] h-[30] text-[15px]">More</button>
                        </div>
                    </div>
                    <div className=" paeko-bg w-[340px] h-[150px] rounded-lg flex items-center justify-between p-3">
                        <div>
                            <img className=" w-[120px] h-[120px] rounded-full" src={BrandImage} alt="BrandImage" />
                        </div>
                        <div className=" text-end text-white">
                            <h1 className=" font-bold text-[20px]">Alx Studio_Official</h1>
                            <div className=" py-3 text-[18px]">3 Produk</div>
                            <button className=" border border-white rounded-md w-[96px] h-[30] text-[15px]">More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </Container>

      <div className=" bg-slate-50 w-full mt-7">
        <Container>
            <div className=" flex py-11">
                <div className=" pr-[100px]">
                    <div>
                        <h1 className=" paeko-icon font-bold text-[40px] w-[313px]">Weekly Choice Product</h1>
                    </div>
                    <div className=" py-3">
                        <h4 className=" font-semibold text-[25px] w-[300px]">Dapatkan diskon hingga 15% untuk product Weekly Choice.</h4>
                    </div>
                    <div className=" pt-4 pb-[15px]">
                        <h3 className=" text-[25px] font-semibold">Kode voucher :</h3>
                    </div>
                    <div className=" flex gap-2">
                        <button className=" text-white paeko-bg w-[284px] h-[49px] rounded-lg text-[20px] font-semibold">WEEKLYCHOICEWEEK35</button>
                        <button className=" paeko-bg w-[49px] h-[49px] rounded-lg flex justify-center items-center"><MdContentCopy size={20} color="white"/></button>
                    </div>
                </div>
                <div className=" flex ">
                    <div className=" bg-white w-[267px] h-[382px] mr-3">
                        <div className="">
                            <div className=" h-[279px] pt-2">
                                <img src={WeeklyImage} alt="WeeklyImage" />
                            </div>
                            <div className="">
                                <h1 className=" font-semibold text-[18px]">Astronaut</h1>
                                <h6 className=" text-[12px]">TROBBY.CLOTH</h6>
                            </div>
                            <div className=" flex justify-between">
                                <h3 className=" text-[15px] font-bold">Rp.</h3>
                                <h6 className=" text-[12px] text-slate-300">6 Terjual</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
      </div>

    </>
  );
}

export default App;
