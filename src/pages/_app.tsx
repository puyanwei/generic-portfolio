import "../styles/globals.css"
import type { AppProps } from "next/app"
import { Footer } from "@/components/2.galaxy/Footer"
import { Header } from "@/components/2.galaxy/Header"
import { navLinks } from "@/components/2.galaxy/Header/Header.mockProps"
import { IconWrapper } from "@/components/5.blackHole/Icons"
import { FaLaptop } from "react-icons/fa"

function MyApp({ Component, pageProps }: AppProps) {
  const icon = (
    <IconWrapper
      testId="FaLaptop"
      icon={<FaLaptop className="text-gray-700" size={48} />}
    />
  )

  return (
    <div className="p-4">
      <Header icon={icon} navLinks={navLinks} />
      <Component {...pageProps} />
      <Footer icon={icon} footerLinks={navLinks} />
    </div>
  )
}

export default MyApp
