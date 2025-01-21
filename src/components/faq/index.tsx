import { useState } from 'react'
import { CapaFeatureBottom, CapaFeatureTop, CaretDownIcon } from '../../assets'

const FAQ = () => {
  const [isBoxActive, setIsBoxActive] = useState({
    box1: false,
    box2: false,
    box3: false,
    box4: false,
  })
  return (
    <section className="cursor-meerkat relative flex flex-col w-[1440px] h-fit pb-[100px]  bg-[#310B0A]">
      {/* TOP ILUSTRATION */}
      <img src={CapaFeatureTop} alt="decoration" className="absolute top-0 left-0 w-full object-contain" />

      <div className="flex w-[1440px] flex-col items-start gap-10 px-20 py-28">
        <h2 className="self-stretch font-newTitle text-[#FFEFD4] text-center text-[104px] font-bold leading-[98px] tracking-[1.04px] uppercase">
          any question left?
        </h2>
        <div className="flex w-[1278px] flex-col items-start gap-4">
          {/* FAQ_Card */}
          <div className="flex flex-col justify-center items-start self-stretch  px-8 py-3 rounded-3xl bg-[#FFEFD4]">
            <div className="flex h-14 justify-between items-center self-stretch">
              <span className="flex flex-col justify-center flex-[1_0_0] self-stretch font-neueMontreal text-[#521210] text-[22px] font-bold leading-8 tracking-[0.22px]">
                What is Meerkat?
              </span>
              <button
                className={`flex items-center justify-center w-[56.018px] h-14 shrink-0 rounded-full bg-[#FFCC29] hover:bg-[#cfa423] transition-all ease-in-out duration-300 cursor-meerkat ${isBoxActive.box1 && 'rotate-180'}`}
                onClick={() => setIsBoxActive({ ...isBoxActive, box1: !isBoxActive.box1 })}
              >
                <CaretDownIcon width="32" height="32" color="#521210" />
              </button>
            </div>
            <div
              className={`flex flex-col items-start gap-6 self-stretch overflow-hidden transition-all ease-in-out duration-1000 ${isBoxActive.box1 ? 'h-[110px]' : 'h-0'}`}
            >
              <p className="font-neueMontreal text-[#521210] text-lg leading-6">
                Lorem ipsum dolor sit amet consectetur adipiscing elit mollis pharetra, porttitor vestibulum bibendum neque ligula massa euismod proin, mauris
                dis iaculis pellentesque elementum ullamcorper consequat orci. Velit quam scelerisque porta luctus non placerat inceptos lectus, dictum enim
                lacus cursus facilisis interdum vivamus netus tristique, at sagittis hendrerit habitasse fringilla condimentum magnis. Ultricies justo sapien
                litora nullam ligula vitae vestibulum, iaculis varius penatibus eget morbi dis molestie venenatis, velit dictumst dignissim interdum cubilia
                natoque.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start self-stretch  px-8 py-3 rounded-3xl bg-[#FFEFD4]">
            <div className="flex h-14 justify-between items-center self-stretch">
              <span className="flex flex-col justify-center flex-[1_0_0] self-stretch font-neueMontreal text-[#521210] text-[22px] font-bold leading-8 tracking-[0.22px]">
                What is Meerkat?
              </span>
              <button
                className={`flex items-center justify-center w-[56.018px] h-14 shrink-0 rounded-full bg-[#FFCC29] hover:bg-[#cfa423] transition-all ease-in-out duration-300 cursor-meerkat ${isBoxActive.box2 && 'rotate-180'}`}
                onClick={() => setIsBoxActive({ ...isBoxActive, box2: !isBoxActive.box2 })}
              >
                <CaretDownIcon width="32" height="32" color="#521210" />
              </button>
            </div>
            <div
              className={`flex flex-col items-start gap-6 self-stretch overflow-hidden transition-all ease-in-out duration-1000 ${isBoxActive.box2 ? 'h-[110px]' : 'h-0'}`}
            >
              <p className="font-neueMontreal text-[#521210] text-lg leading-6">
                Lorem ipsum dolor sit amet consectetur adipiscing elit mollis pharetra, porttitor vestibulum bibendum neque ligula massa euismod proin, mauris
                dis iaculis pellentesque elementum ullamcorper consequat orci. Velit quam scelerisque porta luctus non placerat inceptos lectus, dictum enim
                lacus cursus facilisis interdum vivamus netus tristique, at sagittis hendrerit habitasse fringilla condimentum magnis. Ultricies justo sapien
                litora nullam ligula vitae vestibulum, iaculis varius penatibus eget morbi dis molestie venenatis, velit dictumst dignissim interdum cubilia
                natoque.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start self-stretch  px-8 py-3 rounded-3xl bg-[#FFEFD4]">
            <div className="flex h-14 justify-between items-center self-stretch">
              <span className="flex flex-col justify-center flex-[1_0_0] self-stretch font-neueMontreal text-[#521210] text-[22px] font-bold leading-8 tracking-[0.22px]">
                What is Meerkat?
              </span>
              <button
                className={`flex items-center justify-center w-[56.018px] h-14 shrink-0 rounded-full bg-[#FFCC29] hover:bg-[#cfa423] transition-all ease-in-out duration-300 cursor-meerkat ${isBoxActive.box3 && 'rotate-180'}`}
                onClick={() => setIsBoxActive({ ...isBoxActive, box3: !isBoxActive.box3 })}
              >
                <CaretDownIcon width="32" height="32" color="#521210" />
              </button>
            </div>
            <div
              className={`flex flex-col items-start gap-6 self-stretch overflow-hidden transition-all ease-in-out duration-1000 ${isBoxActive.box3 ? 'h-[110px]' : 'h-0'}`}
            >
              <p className="font-neueMontreal text-[#521210] text-lg leading-6">
                Lorem ipsum dolor sit amet consectetur adipiscing elit mollis pharetra, porttitor vestibulum bibendum neque ligula massa euismod proin, mauris
                dis iaculis pellentesque elementum ullamcorper consequat orci. Velit quam scelerisque porta luctus non placerat inceptos lectus, dictum enim
                lacus cursus facilisis interdum vivamus netus tristique, at sagittis hendrerit habitasse fringilla condimentum magnis. Ultricies justo sapien
                litora nullam ligula vitae vestibulum, iaculis varius penatibus eget morbi dis molestie venenatis, velit dictumst dignissim interdum cubilia
                natoque.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start self-stretch  px-8 py-3 rounded-3xl bg-[#FFEFD4]">
            <div className="flex h-14 justify-between items-center self-stretch">
              <span className="flex flex-col justify-center flex-[1_0_0] self-stretch font-neueMontreal text-[#521210] text-[22px] font-bold leading-8 tracking-[0.22px]">
                What is Meerkat?
              </span>
              <button
                className={`flex items-center justify-center w-[56.018px] h-14 shrink-0 rounded-full bg-[#FFCC29] hover:bg-[#cfa423] transition-all ease-in-out duration-300 cursor-meerkat ${isBoxActive.box4 && 'rotate-180'}`}
                onClick={() => setIsBoxActive({ ...isBoxActive, box4: !isBoxActive.box4 })}
              >
                <CaretDownIcon width="32" height="32" color="#521210" />
              </button>
            </div>
            <div
              className={`flex flex-col items-start gap-6 self-stretch overflow-hidden transition-all ease-in-out duration-1000 ${isBoxActive.box4 ? 'h-[110px]' : 'h-0'}`}
            >
              <p className="font-neueMontreal text-[#521210] text-lg leading-6">
                Lorem ipsum dolor sit amet consectetur adipiscing elit mollis pharetra, porttitor vestibulum bibendum neque ligula massa euismod proin, mauris
                dis iaculis pellentesque elementum ullamcorper consequat orci. Velit quam scelerisque porta luctus non placerat inceptos lectus, dictum enim
                lacus cursus facilisis interdum vivamus netus tristique, at sagittis hendrerit habitasse fringilla condimentum magnis. Ultricies justo sapien
                litora nullam ligula vitae vestibulum, iaculis varius penatibus eget morbi dis molestie venenatis, velit dictumst dignissim interdum cubilia
                natoque.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* BOTTTOM ILUSTRATION */}
      <img src={CapaFeatureBottom} alt="decoration" className="absolute bottom-0 left-0 w-full object-contain" />
    </section>
  )
}

export default FAQ
