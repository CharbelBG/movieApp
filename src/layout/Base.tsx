import styles from "./base.module.scss";
import Navigation from "../components/Navigation";

export default function Base() {
  return (
    <>
    <section className={styles.container}>

      <section className={styles.navigation}>
         <div className={styles.logo}>
            <img src="/popcorn.png" alt="logo" />
            <span>POPCORN MOVIES</span>    
         </div>
         
         <div>

         </div>
      </section>

      <section className={styles.content}>
            <div className={styles.header}>
               render page based elements here 
            </div>
            page content goes here.
      </section>
    </section>
    </>
  );
}
