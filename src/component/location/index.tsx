import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

export const Location = () => {
  return (
    <>
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <Map />
      </LazyDiv>
      <LazyDiv className="card location">
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">대중교통</div>
          <div />
          <div className="content">
            * KTX.시외버스 이용 시
            <br />
            원주역에서 택시 승차 - <b> 20분 </b> 거리
            <br />
            만종역에서 택시 승차 - <b> 20분 </b> 거리
            <br />
            원주종합터미널에서 택시 승차 - <b> 15분 </b> 거리
          </div>
          <div />
          <div className="content">
            * 시내버스 이용 시
            <br />
            - 시내버스(시외버스 탑승 시): 고속버스터미널에서 34, 90, 2-1 탑승
            <br />
            - 시내버스(기차 탑승 시): 원주역에서 90 탑승, 만종역에서 51 탑승
            <br />
            반드시 <b>장양초등학교</b> 하차
          </div>
        </div>
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용</div>
          <div />
          <div className="content">
            네이버 지도, 카카오 네비, 티맵 등 이용
            <br />
            <b>원주 빌라드아모르</b> 검색
            <br />
            - 주차 요금은 무료입니다.
            <br />
            (주차장 이용 시 웨딩홀과 바로 연결)
          </div>
          <div />
          <div className="content">
            <b>
              ※ 원주IC로 나오는 손님의 경우, 톨게이트 나온 후 바로 좌회전 - 100M 직진 후 좌회전 하시면 됩니다.
            </b>
          </div>
        </div>
      </LazyDiv>
    </>
  )
}
