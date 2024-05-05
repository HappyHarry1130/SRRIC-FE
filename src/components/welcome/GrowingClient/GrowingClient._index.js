import Personal_Slide1 from '../../MyReactData/PersonalData';
import styles from '../about/about.module.css'
import image1 from '../../../images/avatare-1x280.jpg';
import image2 from '../../../images/avatare-3x280.jpg';
import image3 from '../../../images/avatare-5x280.jpg';
import image4 from '../../../images/3-1.png';
import image5 from '../../../images/3-2.png';
import image6 from '../../../images/3-3.png';
import image7 from '../../../images/3-4.png';
import image8 from '../../../images/3-5.png';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import './style.css'
const items=[
    {
        image:image1,
        text:"“I bought my first license back in 2013 and loved this theme from the very first beginning. The fact, that in meantime the theme received lots of updates and new demos is simply a big big plus. The Design is outstanding and my customers are loving it.”",
        name:"John Areus",
        type:"BROOKLYN CUSTOMER"
    }
]
export default function GrowingClient({num})
{
    
    const NextHandle=()=>{
        num++;
        <GrowingClient num={num}/>;
     };
    return( 
            <div className='margin_top'>
                <div className={styles.aboutbody}>
                    <div className={styles.aboutHeader}> Growing Clients.</div>
                    <div className={styles.body_content}>The comments below are just a sample of the 30.000 clients worldwide </div>
                    <div className={styles.body_content}>who transformed their business website with Brooklyn.</div>
                    <div className='slide'>
                        
                       
                            
                                    <Personal_Slide1 itemss={items}/>

                        
                        <div className='flate'>
                        <div className='image_flate'><img src={image4}/> </div>
                        <div className='image_flate'><img src={image5}/> </div>
                        <div className='image_flate'><img src={image6}/> </div>
                        <div className='image_flate'><img src={image7}/> </div>
                        <div className='image_flate'><img src={image8}/> </div>
                        </div>
                    </div>


                </div>
            </div>    
        );
       

};