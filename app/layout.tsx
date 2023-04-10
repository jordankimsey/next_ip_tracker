import './globals.css'

export const metadata = {
  title: 'IP Address Tracker',
  description: 'Track any IP Address',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
