import { useAuth } from "@/lib/auth_context";
import styles from "@/styles/main.module.css";
import { Auth, signOut } from "firebase/auth";
import { Kanit } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400"],
});

export default function Main() {
  const auth = useAuth();
  const handleSignOut = () => {
    auth.logOut();
  };
  return (
    <div id="mainDiv" className={kanit.className}>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Best Fitness Gym in Town | fitnessdeport.com</title>
      <nav id={styles.navbar}>
        <div id={styles.logo}>
          <Image
            src="/logo.png"
            alt="fitnessdeport.com"
            width={128}
            height={128}
          />
        </div>
        <ul>
          <li className={styles.item}>
            {" "}
            <a href="#"> About Us</a>{" "}
          </li>
          <li className={styles.item}>
            {" "}
            <Link href={"/services"}>Services</Link>
          </li>
          <li className={styles.item}>
            <a href="#">Workout</a>
          </li>
          <li className={styles.item}>
            <a href="#">Help</a>
          </li>
          <li className={styles.item}>
            <a href="#">Join Us</a>
          </li>
          <li className={styles.item}>
            <a onClick={handleSignOut}>Sign Out</a>
          </li>
        </ul>
      </nav>
      <section id={styles.home}>
        <h1 className={styles.h_primary}>Welcome To Fitness Deport</h1>
        <p>
          If you want something you&#039;ve never had, you must be willing to do
          something you&#039;ve never done. The body achieves what the mind
          believes. Once you are exercising regularly, the hardest thing is to
          stop it.
        </p>
        <button className={styles.btn}>Get Info</button>
      </section>
      <section className="services-container">
        <h1 className={styles.h_primary + " " + styles.center}>Our Services</h1>
        <div id={styles.services}>
          <div className={styles.box}>
            <Image
              src="/workout1.jpg"
              alt=""
              height={256}
              width={256}
              className="rounded-md"
            />
            <h2 className={styles.h_secondary + " " + styles.center}>
              Workout Plan
            </h2>
            <p className={styles.centre}>
              Fitness to Us is an unconditional Love. Your body will achieve
              ehat your mind believes so start hustling from now and achieve
              your dream physique with us by all complete guidance under
              professional trainers
            </p>
          </div>
          <div className={styles.box}>
            <Image
              className="rounded-md"
              src="/nutrition1.jpg"
              alt=""
              height={256}
              width={256}
            />
            <h2 className={styles.h_secondary + " " + styles.center}>
              Nutritions
            </h2>
            <p className={styles.centre}>
              Nutrition is a critical part of health and development. Better
              nutrition is related to improved infant, child and maternal
              health, stronger immune systems, safer pregnancy and childbirth,
              lower risk.
            </p>
          </div>

          <div className={styles.box}>
            <Image
              className="rounded-md"
              src="/cardio1.jpg"
              alt=""
              height={256}
              width={256}
            />
            <h2 className={styles.h_secondary + " " + styles.center}>Cardio</h2>
            <p className={styles.centre}>
              Cardio improves many aspects of health, including heart health,
              mental health, mood, sleep, weight regulation and metabolism.
              Actually, the heart becomes more efficient with every beat as it
              pumps oxygen.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.client_section}>
        <h1 className={styles.h1_primary + " " + styles.center}>Our Clients</h1>
        <div id={styles.clients}>
          <div className={styles.client_items}></div>
          <div className={styles.client_items}>
            <Image
              className="rounded-md"
              src="/client3.jpg"
              alt=""
              height={256}
              width={256}
            />
          </div>
          <div className={styles.client_items}>
            <Image
              className="rounded-md"
              src="/client4.jpg"
              alt=""
              height={256}
              width={256}
            />
          </div>
          <div className={styles.client_items}>
            <Image
              className="rounded-md"
              src="/client5.png"
              alt=""
              height={256}
              width={256}
            />
          </div>
          <div className={styles.client_items}>
            <Image
              className="rounded-md"
              src="/client6.jpg"
              alt=""
              height={256}
              width={256}
            />
          </div>
          <div className={styles.client_items}>
            <Image
              className="rounded-md"
              src="/client7.jpg"
              alt=""
              height={256}
              width={256}
            />
          </div>
          <div className={styles.client_items}>
            <Image
              className="rounded-md"
              src="/client8.jpg"
              alt=""
              height={256}
              width={256}
            />
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.center}>
          Copyright © www.fitnessdeport.com! All rights reserved.
        </div>
      </footer>
    </div>
  );
}
