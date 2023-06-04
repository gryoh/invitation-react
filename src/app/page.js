import Image from 'next/image'
import styles from './page.module.css'
import CallAnyOne from "../components/CallAnyOne";

function handlerShowParents(){

}

export default function Home() {
  return (
    <main className={styles.main}>
        <div className={[`${styles.section} ${styles.intro}`]}>
            <img src="/images/intro.png"/>
            <div className={styles.pWrap}>
                <p className={styles.name}>오형준</p>
                <p className={styles.name}>조한미</p>
                <p className={styles.hallFirst}>2024. 04. 20. SAT PM 4 :00</p>
                <p className={styles.hall}>라마다 신도림 호텔 5층 세인트그레이스홀</p>
            </div>
        </div>

        <div className={[`${styles.section} ${styles.message}`]}>
            <p className={styles.message_title}>초대합니다</p>
            <div className={styles.message_content}>
                <p>새로운 마음과 새 의미를 간직하며</p>
                <p>저희 두 사람이 새 출발의</p>
                <p>첫걸음을 내딛습니다.</p>
                <p>좋은 꿈, 바른 뜻으로 올바르게 살 수 있도록</p>
                <p>축복과 격려 주시면</p>
                <p>더없는 기쁨으로 간직하겠습니다.</p>
            </div>
        </div>

        <div className={[`${styles.section} ${styles.call}`]}>
            <CallAnyOne props={{
                name: "신랑",
                tel: "010-2583-6459",
                useSms: "Y"
            }}></CallAnyOne>

            <CallAnyOne props={{
                name: "신부",
                tel: "010-8888-9999",
                useSms: "Y"
            }}></CallAnyOne>

            <div className={styles.list_wrap}>
                <a href="javascript:;" className={styles.info_detail} onClick={handlerShowParents()}>정보 더보기</a>
                <ul>
                    <li>
                        <h3>신랑측 혼주</h3>
                        <div className={styles.list_con}>
                            <p>
                                <span>어머니</span>
                                <span>조조조</span>
                            </p>
                            <div className={styles.btn_wrap}>
                                <a href="tel:01011112222"><img src="/images/call_icon.png" width="25"
                                                               alt="전화 아이콘"/></a>
                                <a href="sms:01011112222"><img src="/images/sms_icon.png" width="29"
                                                               alt="SMS 아이콘"/></a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <h3>신부측 혼주</h3>
                        <div className={styles.list_con}>
                            <p>
                                <span>어머니</span>
                                <span>이이이</span>
                            </p>
                            <div className={styles.btn_wrap}>
                                <a href="tel:01011112222"><img src="/images/call_icon.png" width="25"
                                                               alt="전화 아이콘"/></a>
                                <a href="sms:01011112222"><img src="/images/sms_icon.png" width="29"
                                                               alt="SMS 아이콘"/></a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <div>갤러리</div>

        <div>찾아오시는길</div>

        <div>축하의 한마디씩</div>
    </main>
  )
}
