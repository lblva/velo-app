import styles from "@/styles/Home.module.css";
import Image from "next/image";
import useNetwork from "@/data/network";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [filter, setFilter] = useState('');
  const { network, isLoading, isError } = useNetwork();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  const filteredStations = filter ? network.stations.filter(station => 
    station.name.toLowerCase().includes(filter.toLowerCase())
  ) : [];

  function handleFilterChange(e) {
    setFilter(e.target.value);
  }

  return (
    <div className={styles.zoekcontainer}>
      <div className={styles.zoekbalk}>
        <Image
          src="/locationIcon.png"
          alt="Location Icon"
          className={styles.locationIcon}
          width={20}
          height={20}
        />
        <div>
          <input
            type="text"
            value={filter}
            onChange={handleFilterChange}
            placeholder="Zoek een Velo - station of adres"
            className={styles.input}
          />
          {filter && (
            <div className={styles.results}>
              {filteredStations.slice(0, 10).map(station => (
                <Link  className={styles.resultLink} href={`/stations/${station.id}`} key={station.id}>
                  <div>{station.name}</div>
                </Link>
              ))}
            </div>
          )}
        </div>
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
