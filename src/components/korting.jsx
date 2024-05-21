import styles from "@/styles/Home.module.css";
import Image from "next/image";

export default function Korting() {
    return (
        <>
            <div className={styles.kortingContainer}>
                <div className={styles.korting}>
                    <p className={styles.smallText}>korting</p>
                    <p className={styles.text}>Fiets 5 beurten</p>

                    <div className={styles.progressbarContainer}>
                        <div className={styles.progressIcon}>
                            <Image
                                src="/progressIcon.png"
                                alt="home Icon"
                                className={styles.homeIcon}
                                width={40}
                                height={39}
                            />
                        </div>
                        <div className={styles.progressbar}></div>
                    </ div>

                    <div className={styles.beurtenContainer}>
                        <p className={styles.smallText}>3 beurten</p>
                        <p className={styles.smallText}>5 beurten</p>
                    </div>
                </div>
            </div>
        </>
    )
}