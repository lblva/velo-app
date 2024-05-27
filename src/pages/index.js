import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/Header.jsx";
import Navigation from "@/components/navigation.jsx";
import Korting from "@/components/korting.jsx";
import { useState, useEffect } from "react";
import useNetwork from "@/data/network.js";
import NearbyFav from "@/components/nearby_fav";
import Stations from "@/components/stations";
import { calculateDistance } from "@/pages/distanceCalculator";
import Link from 'next/link';
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [userLocation, setUserLocation] = useState(null);
  const { network, isLoading, isError } = useNetwork();

  useEffect(() => {
    // Function to get user's location
    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            const { latitude, longitude } = position.coords;
            setUserLocation({ latitude, longitude });
          },
          error => {
            console.error('Error getting user location:', error);
          },
          { enableHighAccuracy: true } // Enable high accuracy for better results
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    };

    getUserLocation(); // Call the function to get user's location
  }, []); // Run once on component mount

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  // Sort and slice stations to get the 5 nearest
  let sortedStations = [];
  if (userLocation && network.stations) {
    sortedStations = network.stations
      .slice() // Create a copy to avoid mutating the original array
      .sort((a, b) => {
        const distanceA = calculateDistance(userLocation.latitude, userLocation.longitude, a.latitude, a.longitude);
        const distanceB = calculateDistance(userLocation.latitude, userLocation.longitude, b.latitude, b.longitude);
        return distanceA - distanceB;
      })
      .slice(0, 5); // Limit to 5 nearest stations
  }

  // Function to format distance
  function formatDistance(distance) {
    if (distance < 1) {
      // Convert distance to meters and round to nearest integer
      return `${Math.round(distance * 1000)} meters`;
    } else {
      // Display distance in kilometers with one decimal place
      return `${distance.toFixed(1)} km`;
    }
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.mainContainer}>
        <Header />
        <Korting />
        <Navigation />
        <NearbyFav />
        {sortedStations.map(station => (
          <Link className={styles.linkstationstyle} key={station.id} href={`/stations/${station.id}`} passHref>
            <Stations
              straatnaam={station.name}
              afstand={userLocation ? formatDistance(calculateDistance(userLocation.latitude, userLocation.longitude, station.latitude, station.longitude)) : ''}
              fietsen={station.free_bikes}
              slots={station.empty_slots}
            />
          </Link>
        ))}
      </main>
    </>
  );
}
