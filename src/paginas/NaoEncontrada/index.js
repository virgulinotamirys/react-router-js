import styles from './NaoEncontrada.module.css';
import erro404 from 'assets/erro_404.png'
import BotaoPrincipal from 'components/BotaoPrincipal';
import { useNavigate } from 'react-router-dom';

export default function NaoEncontrada() {
    const navegar = useNavigate();

    return (
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>404</span>
                <h1 className={styles.titulo}>Ops! Página não encontrada</h1>
                <p className={styles.paragrafo}>
                    Aguarde alguns instantes e tente novamente.
                </p>
                <div 
                    className={styles.botaoContainer}
                    onClick={() => navegar(-1)}
                >
                    <BotaoPrincipal tamanho="lg">
                        Voltar
                    </BotaoPrincipal>
                </div>
                <img
                    className={styles.imagemCachorro} 
                    src={erro404}
                    alt="Página não encontrada"
                />
            </div>
            <div className={styles.espacoEmBranco}></div>
        </>
    )
}