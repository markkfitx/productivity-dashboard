export default function GridBox({
  children,
  style = "",
}: {
  children?: React.ReactNode
  style?: string
}) {
  return (
    <div className={`bg-primary-foreground p-4 rounded-lg ${style}`}>
      {children}
    </div>
  )
}