import { useRouter } from 'next/router';
import useNetwork from '@/data/network';
import Link from 'next/link';
import ZoekContainer from "@/components/ZoekContainer.jsx";
import Navigation from "@/components/navigation.jsx";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

export default function StationDetails() {
  const router = useRouter();
  const { stationId } = router.query;
  const { network, isLoading, isError } = useNetwork();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  const station = network.stations.find(station => station.id === stationId);

  if (!station) return <div>Station not found</div>;

  const stationName = station.name;
  
  // Regular expression to match the numeric part and the text part
  const match = stationName.match(/^(\d+)\s*-\s*(.*)$/);

  let numericPart = "";
  let textPart = "";

  if (match) {
    numericPart = match[1];
    textPart = match[2];
  } else {
    // Fallback if the format does not match the expected pattern
    textPart = stationName;
  }

  return (
    <>
      <ZoekContainer />
      <div className={styles.aligningContainer}>
        <div className={styles.stationContainer}>
          <Link className={styles.gobackArrow} href="/">
          <Image
            src="/arrowIcon.png"
            alt="home Icon"
            width={20}
            height={16}
            />
          </Link>
          <Image
            src="/visual2.png"
            alt="home Icon"
            className={styles.visual2}
            width={375}
            height={350}
          />

          <p className={styles.stationNumber} >station {numericPart}</p>
          <p className={styles.stationName} >{textPart}</p>

          <div className={styles.bikesSlotsContainer}>
            <div className={styles.bikesContainer}>
              <p className={styles.fietsenNum}>{station.free_bikes}</p>
              <p className={styles.fietsenText}>fietsen </p>
            </div>

            <div className={styles.bikesContainer}>
              <p className={styles.fietsenNum}>{station.empty_slots}</p>
              <p className={styles.fietsenText}>slots </p>
            </div>
          </div>

          
          

        </div>
        <div className={styles.startrouteContainer}>
            <p className={styles.startroute}>start route</p>
          </div>
      </div>
      <Navigation />
    </>
  );
}
