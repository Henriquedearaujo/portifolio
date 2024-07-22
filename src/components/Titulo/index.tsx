import { Titulo as TitoloEstilo } from './styles'

export type Props = {
  children: string
  fontSize?: number
}

const Titulo = (props: Props) => (
  <TitoloEstilo fontSize={props.fontSize}>{props.children}</TitoloEstilo>
)

export default Titulo
