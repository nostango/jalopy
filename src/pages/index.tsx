import Head from 'next/head';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';

const HomePage = () => {
  return (
    <Layout>
      <Head>
        <title>Jalopy Shoppe</title> // This is the title of the tab
        <meta name="description" content="Welcome to our Auto Shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Welcome to the Jalopy Shoppe</h1>
        <p>We take your Jalopy and make it a Hottie.</p>
        <section className={styles.about}>
          <h2>About Us</h2>
          <p>
            Welcome to [Auto Shop Name], your trusted destination for all your
            automotive needs. With years of experience and a commitment to
            excellence, we pride ourselves on providing top-notch services to
            keep your vehicle running smoothly. Our team of skilled technicians
            is dedicated to delivering high-quality workmanship and unparalleled
            customer service.
          </p>
        </section>
      </main>
    </Layout>
  );
};

export default HomePage;