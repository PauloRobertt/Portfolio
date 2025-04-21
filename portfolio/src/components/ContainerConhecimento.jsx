import styles from './ContainerConhecimento.module.css';

export default function ContainerConhecimento({imgTec, tecnologia}){
    return(
        <div className={styles.container}>
            {imgTec}
            <p>{tecnologia}</p>
        </div>
    )
}
