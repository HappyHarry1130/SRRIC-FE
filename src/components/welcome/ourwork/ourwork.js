import styles from '../about/about.module.css';
import Welcomegallery from './welcomGallary';


export default function OurWork()
{
    return (
        <div className={styles.mainmenu}>
            <div className={styles.aboutbody}>
                <div className={styles.aboutHeader}> Our works.</div>
                <div className={styles.body_content}>We believe our work speaks for itself. Browse our most recent projects below</div>
                <div className={styles.body_content}>and enjoy our handmade work with love for every detail.</div>
                <Welcomegallery/>
            </div>
        </div>

        );
}