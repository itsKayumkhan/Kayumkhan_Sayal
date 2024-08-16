import type { ReactElement } from "react"

const ContainerWrapper = ({children}:{children:ReactElement}) => {
  return (
    <div className={`relative flex justify-center items-center w-full p-4 my-20 flex-col`}>
      {children}
    </div>
  )
}

export default ContainerWrapper
