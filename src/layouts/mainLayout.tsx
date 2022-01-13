
interface Props {
  children: JSX.Element[] | JSX.Element
}

export const metaLayout = ({children}: Props) => {

    return <>{children}</>
}