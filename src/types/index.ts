export interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string
  height?: string
  color?: string
  className?: string
}


export enum HexNetworksId {
  ETHEREUM = '0x1',
  BSC = '0x38',
  BASE = '0x2105',
}

export interface Token {
  address: string
  decimals: number
}