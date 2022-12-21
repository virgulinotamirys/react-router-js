import styles from './Sobre.module.css';
import PostModelo from 'components/PostModelo';
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function Sobre(){
    return (
        <PostModelo 
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, sou a Siri.
            </h3>
            <img 
                src={fotoSobreMim}
                alt="Foto"
                className={styles.fotoSobreMim}
            />
            <p className={styles.paragrafo}>
                Lorem Ipsum
            </p>
        </PostModelo>
    )
}