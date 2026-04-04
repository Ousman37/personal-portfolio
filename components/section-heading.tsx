import React from 'react'


interface SectionHeadingProps {
    children: React.ReactNode
}


const SectionHeading = ({
    children
}:SectionHeadingProps) => {
  return (
    <h1 className="text-3xl font-medium capitalize mb-8 text-left ">
        <span className='font-bold text-3xl font-md capitalize'>{children}</span>
      </h1>
  )
}

export default SectionHeading 