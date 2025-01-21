import { IconProps } from '../../types'

const CaretLeftIcon: React.FC<IconProps> = ({ width = '24', height = '24', color = '#fff', ...props }) => {
  return (
    <div {...props}>
      <svg width={width} height={height} viewBox={`0 0 24 24`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.3002 11.7L14.3002 5.70001L15.7002 7.10001L11.1002 11.7L15.7002 16.3L14.3002 17.7L8.3002 11.7Z" fill={color} />
      </svg>
    </div>
  )
}

export default CaretLeftIcon
