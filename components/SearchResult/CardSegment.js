import styles from './CardStyles.module.css';
import Link from 'next/link';
import moment from 'moment';
import { wordHelper } from '../../lib/helpers';



export const CardSegment = ( {duration, segments} ) => {
    const last = segments.length - 1;
    const hours = Math.floor(duration / 60);
    const mins = duration % 60;

    moment.locale('ru');
    const departureTime = moment(segments[0].departureDate).format('LT');
    const departureDate = moment().format('ll');

    const arrivalTime = moment(segments[last].arrivalDate).format('LT');
    const arrivalDate = moment().format('ll');
    
    return (
        <div className={styles.content}>
            <div className={`${styles.center} ${styles.borderBottom}`}>
                <div>
                    {segments[0].departureCity.caption},
                    {' ' +segments[0].departureAirport.caption + ' '}
                    <Link href="#">
                        <a>({segments[0].departureAirport.uid}) →</a>
                    </Link>
                    {' ' + segments[last].arrivalCity.caption},
                    {' ' + segments[last].arrivalAirport.caption + ' '}
                    <Link href="#">
                        <a>({segments[last].arrivalAirport.uid})</a>
                    </Link>
                </div>
            </div>
            <div className={`${styles.center} ${styles.timeInfo}`}>
                <div>
                   {departureTime + ' '}
                   <Link href="#">
                       <a><small>{departureDate}</small></a>
                   </Link>
                </div>
                <div>
                    &#128340; {`${hours} ч. ${mins} мин.`}
                </div>
                <div>
                   <Link href="#">
                       <a><small>{arrivalDate}</small></a>
                   </Link>
                    {' ' +arrivalTime}
                </div>
            </div>
            <div className={`${styles.center}`} style={{justifyContent: "center"}}>
                <span className={styles.line}></span>
                {segments.length > 1 ? 
                    <span className={styles.transferInfo}>
                        {wordHelper(segments.length - 1)}
                    </span> 
                    :
                    ''}
                <span className={styles.line}></span>
            </div>
            <div>
                <small>Рейс выполняет {segments[0].airline.caption}</small>
            </div>
        </div>
    )
}