import styles from "@/styles/Home.module.css";
import Image from "next/image";

export default function NearbyFav() {
    return (
    <div className={styles.nearbyfavContainer}>
        <h1 className={styles.h1}>Nearby stations</h1>

        <Image
         src="/favoriteIcon.png"
         alt="home Icon"
         className={styles.favoriteIcon}
         width={23}
         height={20}
         />

        </div>                    
        )
}