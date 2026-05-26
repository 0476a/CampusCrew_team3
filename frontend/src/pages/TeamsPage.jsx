import TeamCard from "../features/teams/TeamCard.jsx";
import CreateTeamCard from "../features/teams/CreateTeamCard.jsx";
import JoinTeamCard from "../features/teams/JoinTeamCard.jsx";
import TeamsHeader from "../features/teams/TeamsHeader.jsx";
import styles from './styles/TeamsPage.module.css'

function TeamsPage() {
  const teams = [
    {
      teamId: 1,
      teamName: '웹 프로그래밍 팀 프로젝트',
      subjectName: '웹 프로그래밍',
      memberCount: 4,
    },
    {
      teamId: 2,
      teamName: '데이터베이스 설계',
      subjectName: '데이터베이스',
      memberCount: 3,
    },
    {
      teamId: 3,
      teamName: '소프트웨어 공학 프로젝트',
      subjectName: '소프트웨어 공학',
      memberCount: 5,
    },
    {
      teamId: 4,
      teamName: '국어 팀프로젝트',
      subjectName: '국어',
      memberCount: 10,
    },
  ]


  return (
    <div className={styles.page}>
      <TeamsHeader />

      <main className={styles.container}>
        <section className={styles.titleSection}>
          <h2 className={styles.title}>내 팀</h2>
          <p className={styles.description}>
            참여 중인 팀 프로젝트를 확인하세요
          </p>
        </section>

        <section className={styles.teamGrid}>
          {teams.map((team) => (
            <TeamCard key={team.teamId} team={team} />
          ))}
        </section>

        <section className={styles.actionGrid}>
          <CreateTeamCard />
          <JoinTeamCard />
        </section>
      </main>
    </div>
  )
}

export default TeamsPage