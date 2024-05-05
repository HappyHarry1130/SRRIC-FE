import '../../../components/MyStyle_Gallery.css'
import image1 from '../../../images/ipad3-1300x867.jpg'
import image2 from '../../../images/xdock2.jpg'
import image3 from '../../../images/p5-2-2-650x366-650x434.jpg'
import image4 from '../../../images/iphone4-1300x867.jpg'
import image5 from '../../../images/bottle1.jpg'
import image6 from '../../../images/retro-logo4.jpg'
import HoverImage from '../../MyReactData/HoverImage/HoverImage';
const items1=[
    {
        image:image3,
        text:"Cap Mock-Up"
    },
    {
        image:image4,
        text:"IPhone X Mockups"
    }]
const items2=[
    {image:image5,text:"Juice Smothie Mockups"},
    {image:image6,text:"Logs & Badges"}]

export default function Welcomegallery()
{

    return (
         
        <>  <div class="responsive">
                <div className='gallery1'>
                    <Colume itemss={items1}/>
                </div>
                <div className='gallery1'>
                    <HoverImage image={image1} text={"IPad Air 2 Smart Cover"} hoverStyle={'image_hovertext'} width={"100%"} height={"860px"} />
                </div>
                <div className='gallery1'>
                    <Colume itemss={items2}/>
                </div>
                <div className='gallery1'>
                    <HoverImage image={image2} text={"IPhone X Dock Mockups"} hoverStyle={'image_hovertext'} width={"100%"} height={"860px"} />
                </div>
               
            </div>
            
        </>
    );
}
function Colume({itemss})
{
    return(
        <div>
            {
            itemss.map((item,key)=>(
                <Item x={item.image} text={item.text}/>)
            )}
        </div>
            
    );
}


function Item({x,text})
{
    return(
        <div className='imageBody'>
            <HoverImage image={x} text={text} imgStyle={'marin_left'} hoverStyle={'image_hovertext'} width={"120%"} height={"430px"}/>
        </div>
    );
}

