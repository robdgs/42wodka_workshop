
import styles from "@/styles/navbar.module.css"

const Navbar = ()=> {


    return (
		<div >
        <div className={styles.Navbar}>
            <ul className={styles.Navbar__list}>
            <a className={styles.Navbar__list_link} href="#">HOME</a>
            <a className={styles.Navbar__list_link} href="#">CHARACTERS</a>
            <a className={styles.Navbar__list_link} href="#">ABOUT</a>
            
          </ul>

          <div className={styles.navbar}>
        <div className={`${styles.container} ${styles.nav_container}`}>
            <input className={styles.checkbox} type="checkbox" name="" id="" />
            <div className={styles.hamburger_lines}>
              <span className={`${styles.line} ${styles.line1}`}></span>
              <span className={`${styles.line} ${styles.line2}`}></span>
              <span className={`${styles.line} ${styles.line3}`}></span>
            </div>  
       
          <div className={styles.menu_items}>
            <li><a href="#">HOME</a></li>
            <li><a href="#">CHARACTERS</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="https://github.com/robdgs" target="_blank">MY GITHUB</a></li>
          </div>
        </div>
      </div>
        </div>
		</div>
        
    )
       
}

export default Navbar;