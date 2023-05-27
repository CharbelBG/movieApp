import styles from "./base.module.scss";
import { Outlet } from "react-router"; 
import { NavLink } from "react-router-dom";

export default function Base() {
 

  return (
    <>
    <section className={styles.container}>

      <section className={styles.navigation}>
         <div className={styles.logo}>
            <img src="/popcorn.png" alt="logo" />
            <NavLink to='/'>POPCORN MOVIES</NavLink>
         </div>
        <div className={styles.navMenu}>

        <NavLink to='/movies'>
          <svg xmlns="http://www.w3.org/2000/svg" id="mdi-movie-open" viewBox="0 0 24 24"><path d="M20.84 2.18L16.91 2.96L19.65 6.5L21.62 6.1L20.84 2.18M13.97 3.54L12 3.93L14.75 7.46L16.71 7.07L13.97 3.54M9.07 4.5L7.1 4.91L9.85 8.44L11.81 8.05L9.07 4.5M4.16 5.5L3.18 5.69A2 2 0 0 0 1.61 8.04L2 10L6.9 9.03L4.16 5.5M2 10V20C2 21.11 2.9 22 4 22H20C21.11 22 22 21.11 22 20V10H2Z" /></svg>
           Movies
         </NavLink>

          <NavLink to='/topCharts'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4.13 12H4a2 2 0 1 0 1.8 1.11L7.86 10a2.03 2.03 0 0 0 .65-.07l1.55 1.55a2 2 0 1 0 3.72-.37L15.87 8H16a2 2 0 1 0-1.8-1.11L12.14 10a2.03 2.03 0 0 0-.65.07L9.93 8.52a2 2 0 1 0-3.72.37L4.13 12zM0 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z"/></svg>
            
          Top Charts 
          </NavLink>


          <NavLink to='/genres'>
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm10 10h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zM17 3c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zM7 13c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4z"/></svg>
            Genres
          </NavLink>

          <NavLink to='/newReleases'>
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M19.65 6.5L16.91 2.96L20.84 2.18L21.62 6.1L19.65 6.5M16.71 7.07L13.97 3.54L12 3.93L14.75 7.46L16.71 7.07M19 13C20.1 13 21.12 13.3 22 13.81V10H2V20C2 21.11 2.9 22 4 22H13.81C13.3 21.12 13 20.1 13 19C13 15.69 15.69 13 19 13M11.81 8.05L9.07 4.5L7.1 4.91L9.85 8.44L11.81 8.05M4.16 5.5L3.18 5.69C2.1 5.91 1.4 6.96 1.61 8.04L2 10L6.9 9.03L4.16 5.5M20 18V15H18V18H15V20H18V23H20V20H23V18H20Z" /></svg>
            New Releases
          </NavLink>

          <hr />

          <NavLink to='/favorites'>
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M19.65 6.5L16.91 2.96L20.84 2.18L21.62 6.1L19.65 6.5M16.71 7.07L13.97 3.54L12 3.93L14.75 7.46L16.71 7.07M19 13C20.1 13 21.12 13.3 22 13.81V10H2V20C2 21.11 2.9 22 4 22H13.81C13.3 21.12 13 20.1 13 19C13 15.69 15.69 13 19 13M4.16 5.5L3.18 5.69C2.1 5.91 1.4 6.96 1.61 8.04L2 10L6.9 9.03L4.16 5.5M11.81 8.05L9.07 4.5L7.1 4.91L9.85 8.44L11.81 8.05M23 17.89L20.11 17.64L19 15L17.87 17.64L15 17.89L17.18 19.77L16.5 22.58L19 21.09L21.45 22.58L20.8 19.77L23 17.89Z" /></svg>
            Favorites
          </NavLink>

          <NavLink to='/profile'>
          <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 512 512"><path d="M332.64,64.58C313.18,43.57,286,32,256,32c-30.16,0-57.43,11.5-76.8,32.38-19.58,21.11-29.12,49.8-26.88,80.78C156.76,206.28,203.27,256,256,256s99.16-49.71,103.67-110.82C361.94,114.48,352.34,85.85,332.64,64.58Z"/><path d="M432,480H80A31,31,0,0,1,55.8,468.87c-6.5-7.77-9.12-18.38-7.18-29.11C57.06,392.94,83.4,353.61,124.8,326c36.78-24.51,83.37-38,131.2-38s94.42,13.5,131.2,38c41.4,27.6,67.74,66.93,76.18,113.75,1.94,10.73-.68,21.34-7.18,29.11A31,31,0,0,1,432,480Z"/></svg>
            Profile
          </NavLink>

          <NavLink to='/'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5,3H11A3,3 0 0,1 14,6V10H13V6A2,2 0 0,0 11,4H5A2,2 0 0,0 3,6V19A2,2 0 0,0 5,21H11A2,2 0 0,0 13,19V15H14V19A3,3 0 0,1 11,22H5A3,3 0 0,1 2,19V6A3,3 0 0,1 5,3M8,12H19.25L16,8.75L16.66,8L21.16,12.5L16.66,17L16,16.25L19.25,13H8V12Z" /></svg>
            Logout
          </NavLink>

          <NavLink to='/info'>
          <svg xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>

            Info
          </NavLink>
        </div>

      </section>

      <section className={styles.content}>
            <div className={styles.header}>
               <input type="text" placeholder="Search..." />
               <div>
                <span>Movies</span>
                <span>TV Shows</span>
               </div>

               <div>
                <span>notifications</span>
                <span>dark mode</span>
               </div>

            </div>
            <div>
            <Outlet />
            </div> 

      </section>
    </section>
 
    </>
  );
}
