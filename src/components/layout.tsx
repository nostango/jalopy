import React, { ReactNode } from 'react';
import styles from '../styles/Layout.module.css';
import {Navbar} from './navbar'; // Corrected the file name to 'navbar'

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;