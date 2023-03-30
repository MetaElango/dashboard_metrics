"use client";

// import Image from 'next/image'

import { Inter } from "next/font/google";
import SimpleSidebar from "./components/SimpleSidebar";
import TransactionMetrics from "./components/TransactionMetrics";
// import styles from './page.module.css'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <SimpleSidebar>
      <TransactionMetrics />
    </SimpleSidebar>
  );
}
