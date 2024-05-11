
import styles from "@/styles/footer.module.css"

const Footer = () => {
	return (
	  <div className={styles.Footer}>
		<ul className={styles.F__list}>
		  <li>TERM OF USE</li>
		  <li>COSE DA FOOTER</li>
		  <li><a className={styles.F__link} href="https://github.com/robdgs" target="_blank">MY GITHUB</a></li>
		</ul>
	  </div>
	);
}

export default Footer 
