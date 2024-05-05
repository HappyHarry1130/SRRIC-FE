import image1 from "../../../images/team1-sw.jpg";
import image2 from "../../../images/team3-sw.jpg"
import image3 from "../../../images/team2-1.jpg";
import  "../../../components/develop.css";
import styles from "../about/about.module.css";
import ShowImageType1 from "../../ShowDeveloper";

export default function Developer(){
    
    const items =[
                    {
                        name:"John Brooklyn",
                        type:"DESIGNER",
                        text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
                        imageadress:image1
                    },
                    {
                        name:"Dwayne Smith",
                        type:"CODER",
                        text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
                        imageadress:image2
                    },
                    {
                        name:"Ruben Lorenz",
                        type:"SUPPORT GURU",
                        text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
                        imageadress:image3
                    }
                 ];
    function Express()
    {
        
        return (
                <div className={styles.aboutbody}>
                    <div className={styles.aboutHeader}> The Developer</div>
                    <div className={styles.body_content}>We believe in a diverse range of personnel to bring creative skills, </div>
                    <div className={styles.body_content}>thoughts and ideas to the table.</div>       
                </div>
                )
    }
    function Express_data(){return items.map((item,key) => ( <ShowImageType1  image={item.imageadress} name={item.name} type={item.type} text={item.text}/>));}
    function Real_ExImage()
    {
        return (
            <div className="Gallery_3_Grid">
                <Express_data/>
            </div>
        )
    }
    
    return (<div className="padding_bottom"><Express/><Real_ExImage/></div>);
    
}

