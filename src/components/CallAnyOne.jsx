import styles from '../../public/css/section.module.css'

export default function CallAnyOne({ props }) {
    return(
        <div className={styles.callWrap}>
            <span className={styles.callName}>{props.name}에게 연락하기</span>
            <span className={styles.callTel}><a href={`tel:${props.tel}`}><img src="/images/call_icon.png" width="32" alt="전화 아이콘"/></a></span>
            <span className={styles.callSMS}><a href={`sms:${props.tel}`}><img src="/images/sms_icon.png" width="36" alt="SMS 아이콘"/></a></span>
        </div>

    );
}