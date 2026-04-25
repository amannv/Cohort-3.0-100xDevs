export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>Header</div>
      {children}
      <div>Footer</div>
      </>
  )
}
