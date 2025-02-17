import React from 'react'

export default function BlarCard({ children} : { children : React.ReactNode}) {
  return (
    <div className={`p-1 shadow-lg bg-white bg-opacity-40 backdrop-blur mt-2 rounded-lg`}  style={{

    }}>
      {children}
    </div>
  )
}
