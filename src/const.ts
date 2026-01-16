import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import "dayjs/locale/ko"

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.locale("ko")

export { dayjs }

export const WEDDING_DATE = dayjs.tz("2026-11-14 12:10", "Asia/Seoul")
export const WEDDING_DATE_FORMAT = `YYYY년 MMMM D일 dddd A h시${WEDDING_DATE.minute() === 0 ? "" : " m분"}`

// 예식 당월 휴무일. 켈린더에 표시하기 위함.
// 예: 예식일 8월 -> 8월 15일 광복절
export const HOLIDAYS = [15]

export const LOCATION = "빌라드아모르 원주"
export const LOCATION_ADDRESS = "강원특별자치도 원주시 북원로 2888, 1층 라스텔라가든홀"

// 카카오톡 공유 시 위치 정보로 사용할 주소.
// LOCATION 과 동일하게 설정해도 무방하나, 필요에 따라 좀 더 상세히 작성 가능.
export const SHARE_ADDRESS = LOCATION
export const SHARE_ADDRESS_TITLE = LOCATION

// 네이버 지도 및 카카오 네비게이션에 사용할 좌표. [경도, 위도] 형식.
export const WEDDING_HALL_POSITION = [127.9542352, 37.4001001]

// 네이버 지도의 웨딩홀 장소 ID
// 네이버 지도 웹페이지에서 웨딩홀 검색 후 URL에서 확인 가능.
// 예: https://map.naver.com/p/entry/place/1984016486
export const NMAP_PLACE_ID = 1984016486

// 카카오 지도의 웨딩홀 장소 ID
// 카카오 지도 웹페이지에서 웨딩홀 검색 후 해당 장소에서 상세보기 클릭 시 URL에서 확인 가능.
// 예: https://place.map.kakao.com/21341701
export const KMAP_PLACE_ID = 21341701

export const BRIDE_FULLNAME = "양하현"
export const BRIDE_FIRSTNAME = "하현"
export const BRIDE_TITLE = "장녀"
export const BRIDE_FATHER = "양한욱"
export const BRIDE_MOTHER = "김현주"
export const BRIDE_INFO = [
  {
    relation: "신부",
    name: BRIDE_FULLNAME,
    phone: "010-3153-5883",
    account: "우리은행 0000000000000",
  },
]

export const GROOM_FULLNAME = "지영석"
export const GROOM_FIRSTNAME = "영석"
export const GROOM_TITLE = "장남"
export const GROOM_FATHER = "지왕근"
export const GROOM_MOTHER = "방수옥"
export const GROOM_INFO = [
  {
    relation: "신랑",
    name: GROOM_FULLNAME,
    phone: "01041614096",
    account: "하나은행 10000000000000",
  },
]
