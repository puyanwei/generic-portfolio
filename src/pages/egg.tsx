import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Egg = () => {
  return (
    <div className="bg-slate-300 grid place-items-center h-screen">
      THIS IS AN EGG 🥚🥚🥚🥚
    </div>
  )
}

export default Egg
