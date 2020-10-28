import useClassNames from "../hooks/useClassNames"

const Row = ( { className: classNameProp, ...props } ) => {
  const className = useClassNames( 'row', classNameProp )
  return <div className={className} {...props} />
}

export default Row
