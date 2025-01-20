import { IconProps } from '../../types'

const CheckIcon: React.FC<IconProps> = ({ width = '16', height = '16', color = '#fff', ...props }) => {
  return (
    <div {...props}>
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.3335 9.3335L5.66683 11.6668L12.6668 4.3335" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

export default CheckIcon
