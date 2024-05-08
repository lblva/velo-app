import styles from "@/styles/Home.module.css";
import Image from "next/image";

export default function ZoekContainer() {
  return (
    <div className={styles.zoekcontainer} >
      <div className={styles.zoekbalk}>
        <Image
          src="/locationIcon.png"
          alt="Location Icon"
          className={styles.locationIcon}
          width={20}
          height={20}
        />
        <p className={styles.greyText}>Zoek een Velo - station of adres</p>
      </div>

      <div className={styles.search}>
        <Image
          src="/searchIcon.png"
          alt="search Icon"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
}

