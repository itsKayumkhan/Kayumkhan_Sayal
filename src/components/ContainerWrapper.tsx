import type { ReactElement } from "react"

const ContainerWrapper = ({children}:{children:ReactElement}) => {
  return (
    <div className={`relative flex justify-center items-center w-full min-h-[90vh] p-4 my-20 flex-col`}>
      {children}
    </div>
  )
}

export default ContainerWrapper
