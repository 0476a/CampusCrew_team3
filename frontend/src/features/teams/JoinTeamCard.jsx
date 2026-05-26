import styles from './styles/JoinTeamCard.module.css'
import {LogIn} from "lucide-react";

function JoinTeamCard() {
  return (
    <form className={styles.joinTeamCard}>
      <div className={styles.titleBox}>
        <h2 className={styles.title}>
          <LogIn size={22} />
          팀 참여하기
        </h2>

        <p className={styles.description}>
          초대 코드로 기존 팀에 참여하세요
        </p>
      </div>

      <div className={styles.inputBox}>
        <label className={styles.label} htmlFor="inviteCode">
          초대 코드
        </label>

        <input
          id="inviteCode"
          className={styles.input}
          type="text"
          placeholder="ABC-DEF-123"
        />
      </div>

      <button type="submit" className={styles.joinButton}>
        참여하기
      </button>
    </form>
  )
}

export default JoinTeamCard