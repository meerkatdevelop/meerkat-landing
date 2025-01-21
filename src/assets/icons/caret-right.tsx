import { IconProps } from '../../types'

const CaretRightIcon: React.FC<IconProps> = ({ width = '24', height = '24', color = '#fff', ...props }) => {
  return (
    <div {...props}>
      <svg width={width} height={height} viewBox={`0 0 24 24`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.6998 11.7L9.6998 17.7L8.2998 16.3L12.8998 11.7L8.2998 7.10001L9.6998 5.70001L15.6998 11.7Z" fill={color} />
      </svg>
    </div>
  )
}

export default CaretRightIcon
