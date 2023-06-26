export default function YourComponent({ resource }: any) {
  const num = resource.num.read()
  return (
    <div>{num}</div>
  )
}
