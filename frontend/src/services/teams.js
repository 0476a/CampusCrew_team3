export async function getTeams() {

  // API 생성 후 적용 예정(임시 주석 처리)
  /*
  const BASE_URL = import.meta.env.VITE_LOCAL_BASE_API_URL

  const response = await fetch(`${BASE_URL}/api/teams`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json()

  if (!response.success) {
    throw new Error('팀 목록을 불러오지 못했습니다.')
  }

  const teams = data.data;

  return teams;
   */

  const teams = [
    {
      id: 1,
      name: '웹 프로그래밍 팀 프로젝트',
      courseName: '웹 프로그래밍',
      description: "팀플 관리용 공간",
      memberCount: 4,
    },
    {
      id: 2,
      name: '데이터베이스 설계',
      courseName: '데이터베이스',
      description: "팀플 관리용 공간",
      memberCount: 3,
    },
    {
      id: 3,
      name: '소프트웨어 공학 프로젝트',
      courseName: '소프트웨어 공학',
      description: "팀플 관리용 공간",
      memberCount: 5,
    },
    {
      id: 4,
      name: '국어 프로젝트',
      courseName: '국어',
      description: "팀플 관리용 공간",
      memberCount: 10,
    },
  ]

  return teams

}

export async function joinTeam(joinCode) {

  validateJoinTeam(joinCode)

  alert('API 연결 후에 초대 코드 추가가 가능합니다.')

  // API 생성 후 적용 예정(임시 주석 처리)
  /*
  const BASE_URL = import.meta.env.VITE_LOCAL_BASE_API_URL

  const response = await fetch(`${BASE_URL}/api/teams/join`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      joinCode,
    }),
  });

  const data = await response.json()

  if (!response.success) {
    throw new Error('팀 참여에 실패했습니다.')
  }

  const joinTeam = {
    joinTeamId : data.joinTeamId,
    joinTeamName : data.joinTeamName,
    joinMessage : response.message
  }

  return joinTeam
   */
}

function validateJoinTeam(joinCode) {

  if (!joinCode) {
    throw new Error('초대 코드를 작성해주세요')
  }
}