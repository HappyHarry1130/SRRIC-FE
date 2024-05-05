import styles from '../about/about.module.css';
import icon2 from '../../../images/supplies-icons-3.webp'
import icon1 from '../../../images/6028106.png'
import icon3 from '../../../images/kinexon-sports-icon-load.png'
import image1 from '../../../images/tt.png';
import './service.css'
const items =[
    {
        header : " Custom Website Design",
        content : " Praesent faucibus nisl sit amet nulla sollicitudin pretium a sed purus. Nullam bibendum porta magna.",
        icon : icon1,
        idNum:0
    },
    {
        header : " E-Commerce",
        content : " Praesent faucibus nisl sit amet nulla sollicitudin pretium a sed purus. Nullam bibendum porta magna.",
        icon : icon2,
        idNum:1
    },
    {
        header : " Social Media Marketing",
        content : " Praesent faucibus nisl sit amet nulla sollicitudin pretium a sed purus. Nullam bibendum porta magna.",
        icon : icon3,
        idNum:2
    }];

export default function Services()
{
    return (
        <p className='back'>
        <div className={styles.aboutbody}>
            <div className={styles.aboutHeader}> Our Services.</div>
            <div className={styles.body_content}>We realize that your competition is always just a click away and creating a professional,</div>
            <div className={styles.body_content}>informative and easy-to-use website, on your budget, is our main goal.</div>
            <img src={image1} className={styles.image1}/>
            <div><p className={styles.grid}><Circlation/></p></div>
            <br/><br/><br/><br/>
            <div className={"backboard"}><h1 className={"h1cont"}>let's talk about Your Work!</h1></div>
        </div>
        </p>

        );
}

function Circlation()
{   
    return(
    items.map((item) => (
        (       
            <div className={styles.up_gridPart}><Item header={item.header} content={item.content} icon={item.icon}/></div>
               
        )

    )))

}

function Item({icon, header, content}){
    return (
            <a className={styles.gridAboutPart}>
                <img src={icon} className={styles.icon}/>
                <a className={styles.small_title}>{header}</a>
                <div className={styles.small_content}>{content}</div>
            </a>
            )
}