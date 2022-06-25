import { useEffect, useState } from "react"

let defaultHeight
let defaultWidth

if (typeof window !== `undefined`) {
  defaultHeight = window.innerHeight
  defaultWidth = window.innerWidth
}

const useWindowSize = () => {
  const [dimensions, setDimensions] = useState({
    windowHeight: defaultHeight,
    windowWidth: defaultWidth,
  })

  useEffect(() => {
    setDimensions({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
    })
  }, [])

  return dimensions
}

export default useWindowSize