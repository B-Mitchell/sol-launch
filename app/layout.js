import './globals.css'

export const metadata = {
  title: 'SOLAUNCH',
  description: 'NFT & Token Launchpad',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
