import Image from "next/image";

import styles from "../styles/services.module.css";
import { Kanit } from "next/font/google";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400"],
});

export default function Services() {
  return (
    <>
      <body id={styles.body} className={kanit.className}>
        <div className={styles.container}>
          <div className={styles.heading}>
            <h4>Our Equipments and Strength Area</h4>
            <p>
              We have customized, well defined lifetime Equipments, Strength
              Machines and Cardio Machines
            </p>
          </div>

          <div className={styles.gymthings}>
            <div className={styles.strength_equipments}>
              <h2>Strength Area</h2>
              <div className={styles.StrengthArea_img}>
                <Image width={512} height={512} src="/gym4.webp" alt="" />
              </div>
              <div className={styles.StrengthArea_img}>
                <Image width={512} height={512} src="/gym2.jpg" alt="" />
              </div>
              <div className={styles.StrengthArea_img}>
                <Image width={512} height={512} src="/gym5.webp" alt="" />
              </div>
            </div>

            <div className={styles.strength_equipments}>
              <h2>Cardio Area</h2>
              <div className={styles.StrengthArea_img}>
                <Image width={512} height={512} src="/cardio14.webp" alt="" />
              </div>
              <div className={styles.StrengthArea_img}>
                <Image width={512} height={512} src="/cardio12.jpg" alt="" />
              </div>
              <div className={styles.StrengthArea_img}>
                <Image width={512} height={512} src="/cardio13.jpg" alt="" />
              </div>
            </div>

            <div className={styles.strength_equipments}>
              <h2>CrossFit Area</h2>
              <div className={styles.StrengthArea_img}>
                <Image width={512} height={512} src="/crossfit1.jpg" alt="" />
              </div>
              <div className={styles.StrengthArea_img}>
                <Image width={512} height={512} src="/crossfit2.jpg" alt="" />
              </div>
              <div className={styles.StrengthArea_img}>
                <Image width={512} height={512} src="/crossfit3.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
