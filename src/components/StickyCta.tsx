"use client";

import { useEffect, useState } from "react";
import { siteLinks } from "@/data/site-content";
import styles from "./sticky-cta.module.css";

export function StickyCta() {
  const [pastHero, setPastHero] = useState(false);
  const [atReservation, setAtReservation] = useState(false);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const hero = document.getElementById("hero");
    const reservation = document.getElementById("reservation");
    if (!hero || !reservation) return;

    const heroObserver = new IntersectionObserver(
      ([entry]) => setPastHero(!entry.isIntersecting),
      { threshold: 0.08 },
    );
    const reservationObserver = new IntersectionObserver(
      ([entry]) => setAtReservation(entry.isIntersecting),
      { threshold: 0.1 },
    );

    heroObserver.observe(hero);
    reservationObserver.observe(reservation);

    return () => {
      heroObserver.disconnect();
      reservationObserver.disconnect();
    };
  }, []);

  const visible = pastHero && !atReservation;

  return (
    <aside
      className={styles.bar}
      data-visible={visible}
      aria-hidden={!visible}
      aria-label="固定予約メニュー"
    >
      <a
        href={siteLinks.line}
        target="_blank"
        rel="noreferrer"
        tabIndex={visible ? 0 : -1}
      >
        LINEで相談・予約する
      </a>
    </aside>
  );
}
