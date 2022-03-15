import React from "react";
import styles from "../../styles/search.module.css";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
function SearchCard({ coin }) {
  const router = useRouter();
  return (
    // <Link href={`/currency/${coin.id}`}>
    //   <a>
    <div
      className={styles.main}
      onMouseDown={() => {
        router.replace(`/currency/${coin.id}`);
      }}
    >
      <div className={styles.img}>
        <img src={coin.image} alt="" />
      </div>
      <div className={styles.p}>
        <p>{coin.name}</p>
      </div>
    </div>
    //   </a>
    // </Link>
  );
}

export default SearchCard;
