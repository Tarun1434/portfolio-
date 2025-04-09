export function Badge({variant = 'default', className, children}) {
  return (
    <span
      className={`badge ${
        variant === 'secondary' ? '' : 'badge-emerald'
      } ${className}`}
    >
      {children}
    </span>
  )
}
