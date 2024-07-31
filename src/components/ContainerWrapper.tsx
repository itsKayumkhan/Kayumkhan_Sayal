import type { ReactElement } from "react"

const ContainerWrapper = ({children}:{children:ReactElement}) => {
  return (
    <div className="flex justify-center items-center w-full min-h-[90vh] p-4 my-24 flex-col">
      {children}
    </div>
  )
}

export default ContainerWrapper
