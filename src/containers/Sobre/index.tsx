import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores saepe,
      eligendi aut consectetur, aspernatur labore maxime non libero cum maiores
      rem? Non totam tempora animi est quia amet ducimus omnis!
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=Henriquedearaujo&show_icons=true&theme=dracula&include_all_commits=false&count_private=false" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Henriquedearaujo&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
