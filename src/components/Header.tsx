import React from "react";
import styles from "./Header.module.scss";

const Header = (): JSX.Element => {
    return (
        <header className={styles.header}>
            <h1>British Garden Birds</h1>
        </header>
    );
};

export default Header;
