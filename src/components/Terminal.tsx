import React from 'react'

const Terminal = () => {
  return (
    <>
  <div className="card p-4 min-w-[280px] ">
  <div className="wrap flex flex-col gap-4 relative z-10 rounded-lg overflow-hidden">
    <div className="terminal flex flex-col font-mono">
    
      <div className="body flex flex-col relative rounded-b-lg overflow-x-auto p-4 leading-[19px] text-white bg-black whitespace-nowrap">
        <pre className="pre flex flex-row items-center text-wrap bg-transparent overflow-hidden box-border text-base">{"          "}<code className="text-gray-600">- </code>{"\n"}{"          "}<code className="text-pink-600">npx </code>{"\n"}{"          "}<code className="cmd" data-cmd="welcome Coder's" />{"\n"}{"        "}</pre>
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default Terminal
