import AddToCard from "../addToCard";
import styles from './card.module.css';

export default function card() {
  return (
    <div>
      <h2 className={styles.cardTitle}>card Footer</h2>
      <p>description</p>
      <AddToCard />
    </div>
  )
}