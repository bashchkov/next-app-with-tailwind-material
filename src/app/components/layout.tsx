export const metadata = {
  title: 'Tailwind Material UI',
  description: 'Tailwind material UI components',
}

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {children}
    </div>
  )
}
