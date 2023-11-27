import React from "react";
import styles from "./Paginator.module.css";
import { useState } from "react";

let Paginator = ({ currentPage, onPageChanged, totalUsersCount, pageSize }) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [...Array(pagesCount)].map((_, i) => i + 1);

  let curP = currentPage;
  let curPF = curP - 5 < 1 ? 1 : curP - 5;
  let curPL = curP + 5 > pagesCount ? pagesCount : curP + 5;
  let slicedPages = pages.slice(curPF - 1, curPL);

  const [inputPage, setInputPage] = useState(currentPage);

  const handleInputChange = (e) => {
    setInputPage(e.target.value);
  };

  const handleInputEnter = (e) => {
    if (e.key === "Enter") {
      const page = Math.max(1, Math.min(pagesCount, Number(inputPage)));
      onPageChanged(page);
    }
  };

  return (
    <div className={styles.paginator}>
      {currentPage > 1 && (
        <button onClick={() => onPageChanged(1)}>{`<<`}</button>
      )}
      {currentPage > 1 && (
        <button onClick={() => onPageChanged(curP - 1)}>{`<`}</button>
      )}

      {slicedPages.map((p) => (
        <span
          key={p}
          className={`${currentPage === p ? styles.selectedPage : ""} ${
            styles.pageNumber
          }`}
          onClick={() => onPageChanged(p)}
        >
          {p}
        </span>
      ))}

      {curPL < pagesCount && (
        <button onClick={() => onPageChanged(curP + 1)}>{`>`}</button>
      )}
      {currentPage < pagesCount && (
        <button onClick={() => onPageChanged(pagesCount)}>{`>>`}</button>
      )}
      <input
        className={styles.inputPage}
        type="number"
        value={inputPage}
        onChange={handleInputChange}
        onKeyDown={handleInputEnter}
        style={{ width: "50px" }}
      />
    </div>
  );
};

export default Paginator;
