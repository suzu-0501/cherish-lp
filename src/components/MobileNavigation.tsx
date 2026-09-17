"use client";

import { useEffect, useRef, useState } from "react";
import { navigation, siteLinks } from "@/data/site-content";
import styles from "./mobile-navigation.module.css";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <div className={styles.mobileOnly}>
      <button
        className={styles.menuButton}
        type="button"
        aria-label={open ? "メニューを閉じる" : "メニューを開く"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((current) => !current)}
      >
        <span aria-hidden="true" className={styles.menuIcon}>
          <span />
          <span />
          <span />
        </span>
      </button>

      {open ? (
        <div className={styles.backdrop} onClick={() => setOpen(false)}>
          <nav
            id="mobile-menu"
            className={styles.panel}
            aria-label="モバイルナビゲーション"
            onClick={(event) => event.stopPropagation()}
          >
            <p className={styles.eyebrow}>MENU</p>
            <ul>
              {navigation.map((item, index) => (
                <li key={item.href}>
                  <a
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={item.href}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              className={styles.cta}
              href={siteLinks.line}
              onClick={() => setOpen(false)}
            >
              LINEで相談・予約する
            </a>
            <p className={styles.note}>LINEの正式URLは最終確認後に有効化します。</p>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
