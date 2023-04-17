"use client";

// import Image from 'next/image'

import { Inter } from "next/font/google";
import SimpleSidebar from "../components/SimpleSidebar";
import SocialMetrics from "../components/SocialMetrics";
// import styles from './page.module.css'

const inter = Inter({ subsets: ["latin"] });

export default function Social() {
  return (
    <SimpleSidebar>
      {/* <TransactionMetrics /> */}
      <SocialMetrics />
    </SimpleSidebar>
  );
}
