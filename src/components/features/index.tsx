import { CapaFeatureBottom, CapaFeatureTop, MemeCreator, MiniApp, TreeMoney } from '../../assets'

const Features = () => {
  return (
    <section className="cursor-meerkat relative flex flex-col w-[1440px] h-[1451px]  bg-[#310B0A]">
      {/* TOP ILUSTRATION */}
      <img src={CapaFeatureTop} alt="decoration" className="absolute top-0 left-0 w-full object-contain" />
      {/* <div className='w-full h-full bg-[url("./assets/images/Capa_Feature_Top.svg")] bg-no-repeat' /> */}
      <div className="flex w-[1280px] flex-col items-center pt-[226px] px-20 gap-16">
        <div className="flex flex-col items-start gap-6 self-stretch">
          <div className="flex items-center gap-6 self-stretch">
            <div className="flex w-[710px] h-[488px] items-end gap-2 shrink-0 p-6 rounded-3xl bg-[#ffefd4]">
              <div className="flex flex-col items-start self-stretch">
                <div className="flex w-[153px] items-start gap-2.5">
                  <h5 className="flex-[1_0_0] font-neueMontreal text-[#3E0E0C] font-medium tracking-[0.16px] uppercase">Feature I</h5>
                </div>
                <div className="flex flex-col justify-end items-start gap-6 flex-[1_0_0]">
                  <div className="flex flex-col justify-end items-start gap-6">
                    <span className="font-newTitle text-[88px] text-[#3E0E0C] font-bold leading-[88px] tracking-[0.88px] uppercase">120% APY STAKING</span>
                    <p className="w-[269px] text-[#3E0E0C] font-neueMontreal font-medium leading-[21px]">
                      Earn big by staking $MERK! Buy, stake, and enjoy an impressive 120% APY while supporting the community.
                    </p>
                  </div>
                  <button className="flex h-10 justify-center items-center px-6 py-3 rounded-xl bg-[#FFCC29] hover:bg-[#FFEFBD] transition-all ease-in-out cursor-meerkat">
                    <span className="font-neueMontreal text-[#3E0E0C] text-sm not-italic font-bold leading-[14px]">LOREMP</span>
                  </button>
                </div>
              </div>
              <img src={TreeMoney} alt="img-1" />
            </div>
            <div className="flex w-[546px] h-[488px] items-start gap-2 shrink-0 p-6 rounded-3xl bg-[#FFEFD4]">
              <div className="flex flex-col items-start self-stretch">
                <div className="flex w-[153px] items-start gap-2.5">
                  <h5 className="flex-[1_0_0] font-neueMontreal text-[#3E0E0C] font-medium tracking-[0.16px] uppercase">Feature II</h5>
                </div>
                <div className="flex flex-col justify-end items-start gap-6 flex-[1_0_0]">
                  <div className="flex flex-col justify-end items-start gap-6">
                    <span className="font-newTitle text-[88px] text-[#3E0E0C] font-bold leading-[88px] tracking-[0.88px] uppercase">Airdrop & Mini-App</span>
                    <p className="w-[269px] text-[#3E0E0C] font-neueMontreal font-medium leading-[21px]">
                      Download our Mini-App to access to the exclusive airdrop and utilities. Join the fun and unlock the full $MERK experience!
                    </p>
                  </div>
                  <button className="flex h-10 justify-center items-center px-6 py-3 rounded-xl bg-[#FFCC29] hover:bg-[#FFEFBD] transition-all ease-in-out cursor-meerkat">
                    <span className="font-neueMontreal text-[#3E0E0C] text-sm not-italic font-bold leading-[14px]">LOREMP</span>
                  </button>
                </div>
              </div>
              <img src={MiniApp} alt="img-2" />
            </div>
          </div>
          <div className="flex items-center gap-6 self-stretch">
            <div className="flex w-[1280px] h-[488px] items-start gap-2 shrink-0 p-6 rounded-3xl bg-[#FFEFD4]">
              <div className="flex flex-col items-start self-stretch">
                <div className="flex w-[153px] items-start gap-2.5 flex-[1_0_0]">
                  <h5 className="flex-[1_0_0] font-neueMontreal text-[#3E0E0C] font-medium tracking-[0.16px] uppercase">Feature III</h5>
                </div>
                <div className="flex flex-col justify-end items-start gap-6 flex-[1_0_0]">
                  <div className="flex flex-col justify-end items-start gap-6">
                    <span className="font-newTitle text-[88px] text-[#3E0E0C] font-bold leading-[88px] tracking-[0.88px] uppercase">meme generator</span>
                    <p className="w-[269px] text-[#3E0E0C] font-neueMontreal font-medium leading-[21px]">
                      Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha
                    </p>
                  </div>
                  <button className="flex h-10 justify-center items-center px-6 py-3 rounded-xl bg-[#FFCC29] hover:bg-[#FFEFBD] transition-all ease-in-out cursor-meerkat">
                    <span className="font-neueMontreal text-[#3E0E0C] text-sm not-italic font-bold leading-[14px]">LOREMP</span>
                  </button>
                </div>
              </div>
              <img src={MemeCreator} alt="img-3" />
            </div>
          </div>
        </div>
      </div>
      {/* BOTTTOM ILUSTRATION */}
      <img src={CapaFeatureBottom} alt="decoration" className="absolute bottom-0 left-0 w-full object-contain" />
      {/* <div className='w-full h-full bg-[url("./assets/images/Capa_Feature_Bottom.svg")] bg-no-repeat' /> */}
    </section>
  )
}

export default Features
