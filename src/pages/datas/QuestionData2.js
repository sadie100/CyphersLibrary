export const QuestionData = () => {
  //즐겜 포인트 / 빡겜 포인트
  //파티지향+소통지향 포인트 / 솔플지향+침묵지향 포인트
  //착함 포인트 / 채금 포인트
  //hard : -19~23
  //party: -22~33
  //fight : -18~23

  return [
    {
      quiz: "여느 때와 같이 사이퍼즈를 켰습니다. 평소라면 당신은 어떤 게임을 할까요?",
      ans: [
        {
          text: "나는 조합을 맞춘 진지한 게임이 좋다. 공식전을 한다.",
          point: {
            hardPoint: 5,
          },
        },
        {
          text: "마음 편한 게 제일! 일반전을 한다.",
          point: {
            hardPoint: -3,
          },
        },
      ],
    },
    {
      quiz: "당신은 일반전을 하기로 했습니다. 음, 게임을 혼자 할까 고민되는데요. 어떻게 할까요?",
      ans: [
        {
          text: "접속해 있는 친구와 클랜원에게 말을 걸어 함께 한다!",
          point: {
            partyPoint: 3,
          },
        },
        {
          text: "사이퍼즈는 솔플이지! 그냥 F6을 누른다.",
          point: {
            partyPoint: -3,
          },
        },
        {
          text: "즉석 즐겜팟이 최고! 외침팟을 구한다.",
          point: {
            partyPoint: 5,
          },
        },
      ],
    },
    {
      quiz: "솔플로 일반전에 들어온 당신, 팀원이 4딜러를 칼픽합니다. 당신도 탱커가 그다지 하고 싶진 않은데요. 어떻게 할까요?",
      ans: [
        {
          text: "탱커가..하나는..있어야 하지 않을까? 하긴 싫지만... 이기기 위해... 탱커를 골라 본다...",
          point: {
            hardPoint: 5,
          },
        },
        {
          text: "이런 판에서 탱커를 골라봤자 고통 뿐. 하고 싶은 딜러를 고른다.",
          point: {
            hardPoint: -3,
          },
        },
        {
          text: "제발 조합 좀 맞춰..! 파티챗으로 한 명만 탱커해 달라고 협상을 시도한다.",
          point: {
            hardPoint: 3,
            partyPoint: 3,
          },
        },
        {
          text: "일반전이지만 너무 양심이 없지 않나? '픽 꼬라지 예술이네'라고 파티챗을 친다.",
          point: {
            fightPoint: 5,
            hardPoint: 1,
          },
        },
        {
          text: "미래가 없다. 그냥 나간다.",
          point: {
            fightPoint: 3,
            hardPoint: 5,
          },
        },
      ],
    },
    {
      quiz: "평화로운 일반전 도중, 팀원에 뉴비가 있는 것 같습니다. 계속된 실책으로 인해 우리 팀이 패배하고 있는데요. 어떤 행동을 취할까요?",
      ans: [
        {
          text: "뉴비고 뭐고 팀겜인데 너무 못하는 거 아님? 열받으니 신고를 각오하고 한소리 한다.",
          point: {
            fightPoint: 3,
            hardPoint: 3,
          },
        },
        {
          text: "가르쳐주면 나아지지 않을까? 실수할 때마다 이렇게 했으면 좋겠다고 친절하게 가르쳐 준다.",
          point: {
            fightPoint: -3,
            partyPoint: 5,
            hardPoint: 1,
          },
        },
        {
          text: "그럴 수도 있지... 그냥 묵묵히 열심히 게임한다.",
          point: {
            hardPoint: -1,
            fightPoint: -5,
            partyPoint: -1,
          },
        },
      ],
    },
    {
      quiz: "어느 날 계시처럼 평소 안 하던 캐릭터로 일반전을 하고 싶어졌습니다! 남이 하는 거 보기만 해서 스킬도 잘 모르는 캐릭터인데요. 어떻게 할까요?",
      ans: [
        {
          text: "천상계 유튜버의 공략 영상 등으로 캐릭터의 모든 걸 파악한 후 게임한다.",
          point: {
            hardPoint: 5,
          },
        },
        {
          text: "커맨드 정도만 알고 갈까? 우클릭이 뭔지 시프트 스킬이 뭔지 정도만 간단히 알고 게임한다.",
          point: {
            hardPoint: 1,
          },
        },
        {
          text: "게임은 하다 보면 느는 법. 아무것도 모르지만 일단 일반전부터 들어간다.",
          point: {
            hardPoint: -3,
          },
        },
      ],
    },
    {
      quiz: "피폐한 게임 중 막판으로 극공근딜을 하고 싶어 솔플로 일반전에 들어온 당신, 그러나 빡겜 4인팟과 팀으로 매칭이 된 듯 합니다! 투탱까지 서 주면서 조합이 착착 맞춰지는 가운데, 한 명이 자기가 근딜에 자신이 있다면서 양보해 달라고 합니다. 어떻게 할까요?",
      ans: [
        {
          text: "그렇게 잘한다면야 ... 뭐 ... 양보해 준다.",
          point: {
            hardPoint: 3,
            partyPoint: 3,
          },
        },
        {
          text: "미안하지만 하고 싶은 건 해야 한다. 못들은 척 무시하고 그대로 픽한다.",
          point: {
            hardPoint: -3,
            partyPoint: -5,
          },
        },
        {
          text: "투근딜도 킹만하지 않나? 그냥 같이 근딜하자고 파티원을 설득한다.",
          point: {
            hardPoint: -3,
            partyPoint: 5,
          },
        },
        {
          text: "나 막판이야 ㅠㅠ 라고 하며 이해를 구한다.",
          point: {
            hardPoint: -3,
            partyPoint: 5,
          },
        },
      ],
    },
    {
      quiz: "평화롭게 패배하는 일반전 도중, 0킬 6데스 클리브가 갑자기 나에게 시비를 틉니다. 지도 더럽게 못한 주제에 ♡♡투성이 쌍욕을 박는데요, 어떻게 할까요?",
      ans: [
        {
          text: "이 ♡♡가 뭐라는 거임? 같이 쌍욕으로 응수한다.",
          point: {
            fightPoint: 5,
          },
        },
        {
          text: "욕까진 안 하더라도 그냥 듣고 넘길 순 없는 법. 한소리 한다.",
          point: {
            fightPoint: 3,
          },
        },
        {
          text: "기분 잡쳤다... 그냥 신고나 박고 무시한다.",
          point: {
            fightPoint: -3,
          },
        },
      ],
    },
    {
      quiz: "게임이 너무 ez하게 끝났습니다~ 기분이 좋은데요. 티를 내 볼까요?",
      ans: [
        {
          text: "쉬워 쉬워~ 전챗으로 ez나 ㅅㄱㅇ를 친다",
          point: {
            fightPoint: 5,
          },
        },
        {
          text: "전챗은 좀 그렇지만 티는 내고 싶다! /춤을 춘다.",
          point: {
            fightPoint: 3,
          },
        },
        {
          text: "우리 팀원끼리 기뻐하면 되지! 파티챗으로 팀원끼리 소소하게 기쁨을 나눈다.",
          point: {
            fightPoint: -3,
            partyPoint: 5,
          },
        },
        {
          text: "뭐라 하긴 쑥스러워! 그냥 재빨리 다음 게임 시작 단축키를 누른다.",
          point: {
            fightPoint: -5,
            partyPoint: -5,
          },
        },
      ],
    },
    {
      quiz: "일반전에서 팀으로 마음에 드는 사람을 만났습니다..! 재미있고 게임도 잘하는 사람인데요, 이대로 헤어지고 싶지 않아요! 어떻게 할까요?",
      ans: [
        {
          text: "조심스럽게... 같이 하자고... 말해 본다.",
          point: {
            partyPoint: 5,
          },
        },
        {
          text: "바로 같이 하기는 좀 부담스러울 수 있지만... 친구 추가는 할 수 있을지도...! 친구하자고 해 본다.",
          point: {
            partyPoint: 3,
          },
        },
        {
          text: "친구는 쑥스러워...! 그저 다음 판에도 만날 수 있도록 빠르게 게임 재시작을 누른다.",
          point: {
            partyPoint: 1,
          },
        },
        {
          text: "좋은 사람이었다... 그저 가슴에만 묻어 둔다.",
          point: {
            partyPoint: -5,
          },
        },
      ],
    },
    {
      quiz: "일반전 솔플을 도는데, 매칭된 우리 팀원 중 굉장한 아가리 파이터가 있습니다...! 한 명이 계속 우리팀 딜 낮은 딜러에게 욕을 하는데요. 어떻게 할까요?",
      ans: [
        {
          text: "못할 수도 있지 뭔 욕까지... 팀챗으로 욕먹는 딜러 편을 들어 준다.",
          point: {
            fightPoint: -5,
            hardPoint: -5,
            partyPoint: 5,
          },
        },
        {
          text: "음, 입이 험한 사람이군... 하고 생각하며 그냥 무시한다.",
          point: {
            fightPoint: -3,
            hardPoint: 1,
            partyPoint: -3,
          },
        },
        {
          text: "딜 낮은 딜러는 욕 먹어도 싸지 않나? 같이 거든다.",
          point: {
            hardPoint: 5,
            fightPoint: 5,
            partyPoint: 1,
          },
        },
        {
          text: "안 그래도 게임 안풀리는데 시끄럽고 짜증난다. 맞서 싸운다.",
          point: {
            fightPoint: 5,
            partyPoint: 1,
            hardPoint: 3,
          },
        },
      ],
    },
  ];
};