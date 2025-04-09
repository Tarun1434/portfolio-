export function Button({variant = 'default', className, children, ...props}) {
  const classes = {
    default: 'button-primary',
    outline: 'button-outline',
    ghost: 'icon-button',
  }
  return (
    <button className={`${classes[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}
