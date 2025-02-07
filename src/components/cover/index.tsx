import useCurrentDimensions from '../../hooks/useCurrentDimensions'
import Banner from './banner'
import PreSaleCover from './pre-sale'

const Cover = () => {
  const { dimensions } = useCurrentDimensions()
  return (
    <section
      className="absolute top-0 cursor-meerkat flex flex-col justify-center items-center w-full "
      style={{
        transform: `translateY(${dimensions.width > 1440 ? `${(dimensions.width - 680) / 95}rem` : '8rem'})`,
      }}
    >
      <div
        className="flex max-[1313px]:flex-col max-[1313px]:justify-start justify-between w-screen items-start"
        style={{
          paddingLeft: `${dimensions.width > 1440 ? `${(dimensions.width - 1094.55) / 69.06}rem` : '5rem'}`,
          paddingRight: `${dimensions.width > 1440 ? `${(dimensions.width - 1094.55) / 69.06}rem` : '5rem'}`,
        }}
      >
        <Banner />
        {/* <ActionBox /> */}
        <div className="pt-16 ml-0 mt-0 max-[1313px]:-ml-8 max-[1313px]:-mt-6">
          <PreSaleCover />
        </div>
      </div>
    </section>
  )
}

export default Cover
