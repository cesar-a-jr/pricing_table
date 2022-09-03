import check from 'check.svg'
import Image from 'next/image'
import styles from '../../styles/components/Card2.module.css'

function Card2(){
    return(
        <div className={styles.card}>
            <div className={styles.title}>
                <h1>
                    Básico
                </h1>
                <button>
                    Popular
                </button>
            </div>
            <div className={styles.padding}>
                <h2>
                    R$ 29<p>,00</p> <p> &nbsp;/mês</p>
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

export default Card2