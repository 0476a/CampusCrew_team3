import styles from './styles/CreateTeamCard.module.css'
import {Plus} from "lucide-react";

function CreateTeamCard() {
  return (
    <section className={styles.createTeamCard}>
      <div className={styles.titleBox}>
        <h2 className={styles.title}>
          <Plus size={20} />
          새 팀 만들기
        </h2>
        <p className={styles.description}>
          새로운 팀 프로젝트를 시작하세요
        </p>
      </div>

      <button
        type="button"
        className={styles.createButton}
      >
        <Plus size={20} />
        팀 생성
      </button>
    </section>
  )
}

export default CreateTeamCard