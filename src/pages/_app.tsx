import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ActiveBreakpoint } from "@/components/DevTools/ActiveBreakpoint"

function MyApp({ Component, pageProps }: AppProps) {
  const isInDevelopmentMode = process.env.NODE_ENV !== `development`
  return (
    <>
      <Component {...pageProps} />
      {isInDevelopmentMode && <ActiveBreakpoint />}
    </>
  )
}

export default MyApp
