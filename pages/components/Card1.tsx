import check from 'check.svg'
import Image from 'next/image'
import styles from '../../styles/components/Card.module.css'

function Card1(){
    return(
        <div className={styles.card}>
            <div className={styles.title}>
                <h1>
                    Free
                </h1>
            </div>
            <div className={styles.padding}>

                <h2>
                    R$ 0<p>,00</p> <p> &nbsp;/mês</p>
                </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <div className={styles.margin}>
                </div>
                <div className={styles.itenswap}>
                    <div className={styles.itens}>
                        <Image src="/check.svg" alt="" width={18} height={18}/>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className={styles.itens}>
                        <Image src="/check.svg" alt="" width={18} height={18}/>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
                <div className={styles.center}>
                <a className={styles.button}>
                    ASSINAR
                </a>
                </div>
            </div>
        </div>
    )
}

export default Card1