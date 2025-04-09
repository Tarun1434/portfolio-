export function Card({className, children}) {
  return <div className={`card ${className}`}>{children}</div>
}
export function CardHeader({children}) {
  return <div className='p-4'>{children}</div>
}
export function CardTitle({children}) {
  return <h3 className='text-lg font-bold'>{children}</h3>
}
export function CardContent({className, children}) {
  return <div className={`p-4 ${className}`}>{children}</div>
}
export function CardFooter({className, children}) {
  return <div className={`p-4 flex ${className}`}>{children}</div>
}
