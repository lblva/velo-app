import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { calculateDistance } from "@/pages/distanceCalculator";
import useNetwork from "@/data/network.js";

export default function Stations(props) {
    return(
    <div className={styles.stationsContainer}>
        <div className={styles.stationsInfo}>
            <p className={styles.straatnaam}>{props.straatnaam}</p>

            <div className={styles.distance}>
            <Image
            src="/locationIcon.png"
            alt="home Icon"
            width={14}
            height={15}
            />
            <p className={styles.distanceText}>{props.afstand}</p>
            </div>

            <div className={styles.whatsleft}>
                <div className={styles.fietsen}>
                    <p className={styles.whatsleftLargeText}>{props.fietsen}</p>
                    <p className={styles.whatsleftSmallText}>fietsen</p>
                </div>

                <div className={styles.slots}>
                    <p className={styles.whatsleftLargeText}>{props.slots}</p>
                    <p className={styles.whatsleftSmallText}>slots</p>
                </div>
            </div>

        </div>

        <div className={styles.stationsvisual}>
            <Image
            src="/visual.png"
            className={styles.visual}
            alt="home Icon"
            width={120}
            height={100}
            />
        </div>


    </div>)
    
}
