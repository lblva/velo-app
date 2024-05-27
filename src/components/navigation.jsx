import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() 
{
    return(
        <>  <div className={styles.navigationContainer}> 
                <nav className={styles.navigation}>
                <Link href="/">
                        <Image
                        src="/homeIcon.png"
                        alt="home Icon"
                        className={styles.homeIcon}
                        width={38}
                        height={40}
                        />
                    </Link>
                    
                    <Link href="/helpPage">
                        <Image
                        src="/helpIcon.png"
                        alt="help Icon"
                        className={styles.helpIcon}
                        width={38}
                        height={40}
                        />
                    </Link>

                    <Link href="/accountPage">
                        <Image
                        src="/accountIcon.png"
                        alt="account Icon"
                        className={styles.accountIcon}
                        width={38}
                        height={35}
                        />
                    </Link>

                    <Link href="/meerPage">
                        <Image
                        src="/moreIcon.png"
                        alt="more Icon"
                        className={styles.moreIcon}
                        width={38}
                        height={40}
                        />
                    </Link>
                </nav>
            </div>
        </>
    );
}