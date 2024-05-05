import styles from './about.module.css';

import PhonelinkIcon from '@mui/icons-material/Phonelink';

const items =[
    {
        header : " Planning & Strategy",
        content : " Praesent faucibus nisl sit amet nulla sollicitudin pretium a sed purus. Nullam bibendum porta magna.",
        Icon : PhonelinkIcon,
        idNum:0
    },
    {
        header : " Planning & Strategy",
        content : " Praesent faucibus nisl sit amet nulla sollicitudin pretium a sed purus. Nullam bibendum porta magna.",
        Icon : PhonelinkIcon,
        idNum:0
    },
    {
        header : " Planning & Strategy",
        content : " Praesent faucibus nisl sit amet nulla sollicitudin pretium a sed purus. Nullam bibendum porta magna.",
        Icon : PhonelinkIcon,
        idNum:0
    },
    {
        header : " Planning & Strategy",
        content : " Praesent faucibus nisl sit amet nulla sollicitudin pretium a sed purus. Nullam bibendum porta magna.",
        Icon : PhonelinkIcon,
        idNum:0
    },
    {
        header : " Planning & Strategy",
        content : " Praesent faucibus nisl sit amet nulla sollicitudin pretium a sed purus. Nullam bibendum porta magna.",
        Icon : PhonelinkIcon,
        idNum:0
    },
    {
        header : " Planning & Strategy",
        content : " Praesent faucibus nisl sit amet nulla sollicitudin pretium a sed purus. Nullam bibendum porta magna.",
        Icon : PhonelinkIcon,
        idNum:0
    }
    
];
export default function Aboutindex(){
        
    return (

        <div className={styles.aboutbody}>
            <div className={styles.aboutHeader}> About <u>Broo</u>klyn</div>
            <div className={styles.body_content}>We’re a creative agency located in Brooklyn,<b> New York.</b> </div>
            <div className={styles.body_content}>We’ve won a ton of awards and have been featured in all of the magazines.</div>
            <p className={styles.grid}><Circlation/></p>
            
        </div>

        );
}
function Circlation()
{
   
    return(
    items.map((item,key) => (
        (       
            <div className={styles.up_gridPart}><Item header={item.header} content={item.content} Icon={item.Icon}/></div>
               
        )

    )))

}
function Item({Icon, header, content}){
    return (
            <a className={styles.gridAboutPart}>
                <Icon className={styles.iconstyle}/>
                <a className={styles.small_title}>{header}</a>
                <div className={styles.small_content}>{content}</div>
            </a>
            )
}