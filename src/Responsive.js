import { useMediaQuery } from 'react-responsive';

export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 959 })

  return isMobile ? children : null
}

export const Pc = ({ children }) => {
  const isPc = useMediaQuery({ minWidth: 960 })

  return isPc ? children : null
}