export default {
  // [RULE] 0 things | things count ends with 1 | things count ends with 2-4 | things count ends with 5-9, 0 and teens (10-19
  // from https://kazupon.github.io/vue-i18n/guide/pluralization.html#custom-pluralization
  ru(choice, choicesLength) {
    if (choice === 0) {
      return 0 // 0개일때
    }

    const teen = choice > 10 && choice < 20 // 11 ~ 19
    const endsWithOne = choice % 10 === 1 // 끝자리가 1

    if (choicesLength < 4) {
      return !teen && endsWithOne ? 1 : 2 // 갯수가 2개이상 4개이하 일때 2를 Return
    }

    if (!teen && endsWithOne) {
      // 끝자리가 1로 끝나는 것 (단, 11~19는 제외)
      return 1 // 끝자리가 1일때 (단, 11~19는 제외)
    }

    if (!teen && choice % 10 >= 2 && choice % 10 <= 4) {
      return 2 // 끝자리가 2이상 4이하일때. 갯수가 2~4개 일때와 동일한 룰(단, 11~19는 제외)
    }

    return choicesLength < 4 ? 2 : 3 // 갯수가 5 이상이면 3
  },
  // 아랍어 - 6개의 Plural Form (그리고 구현되진 않았지만 남성형 여성형에 관한 것들이 있음.. 그리고 모든단어가 다 6개의 plural을 가진것도 아님.)
  // from https://gist.github.com/ashour/297121c262033147438861083cad6b24
  ar(choice) {
    if ([0, 1, 2].includes(choice)) {
      return choice
    }

    if (choice >= 3 && choice <= 10) {
      return 3
    }

    if (choice >= 11 && choice <= 99) {
      return 4
    }

    return 5
  },
}
