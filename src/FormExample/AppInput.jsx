export function AppInput({label, name, className, ...rest}) {
  return (
    <div className={className}>
      <label htmlFor={name}>{label}</label>
      <input id={name} {...rest} />
    </div>
  )
}