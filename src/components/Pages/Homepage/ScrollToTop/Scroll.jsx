"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
import "./Scroll.css";

const DEFAULT_BTN_CLS = "scroll-to-top-btn";
const SCROLL_THRESHOLD = 50;

const Scroll = () => {
  const [btnCls, setBtnCls] = useState(DEFAULT_BTN_CLS);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > SCROLL_THRESHOLD) {
        setBtnCls(DEFAULT_BTN_CLS.replace(" hidden", ""));
      } else {
        setBtnCls(DEFAULT_BTN_CLS + " hidden");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll, { passive: true });
    };
  }, []);

  const onClickBtn = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button className={btnCls} onClick={onClickBtn}>
      <FaArrowUp />
    </button>
  );
};

export default Scroll;