
import styles from "@/styles/banner.module.css"

const Card = ({src, alt}) => {
  
	return (
	  <div  className={styles.Card}>
		<img className={styles.Card__image} src={src} alt={alt} />
	  </div>
	)
  }
  
  export default Card;