import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
       <div className={styles.logo}>
         <img src="../public/logo.png" alt="logo" />
       </div>
       <div className={styles.menu}>
          <a href="#">Logar</a>
          <a href="#">Cadastrar</a>
       </div>
      </div>
      <div className={styles.main}>
        <div className={styles.content}>

          <div className={styles.topic}>
            <span className={styles.title}>Titulo do meu topico</span>
            <span className={styles.body}>
              Aqui é o conteudo do meu topico que deve ser votado. Os votos são a favor ou contra.
              Cada usuário só poderá votar uma unica vez.
            </span>
            <span className={styles.creator}>Criado por <span>Járdesson Ribeiro</span></span>
            <div className={styles.topicFooter}>
              <div>
                <p>21</p>
                <AiOutlineLike color="green" className={styles.icons} size={20}/>
                <p>20</p>
                <AiOutlineDislike color='red'className={styles.icons} size={20}/>
                <span className={styles.situation}>Votação: positiva</span>
              </div>
              <span>Ver mais</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
export default Home;
