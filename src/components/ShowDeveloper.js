import "../components/MyStyle_Gallery.css"
export default function ShowImageType1({image, name, type, text})
{
    const express=(
        <div>
            <div>
                <a  className="Grid_3">
                    <img src={image} className="image"></img> 
                    <div className="name">{name}</div>
                    <div className="type">{type}</div>
                    <div className="content">{text}</div> 
                </a>
            </div>

        </div>
    )
    return express;
}