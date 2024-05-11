import styles from "@/styles/banner.module.css"
import Card from "@/components/Card"

const Banner = ({scrittina}) => {
return (
	<div className={styles.Banner}>
		{scrittina}
	<Card src={"https://picsum.photos/seed/picsum/160/240"} alt={"alt di prova"}/>
	
	</div> 
	
)
}

export default Banner

