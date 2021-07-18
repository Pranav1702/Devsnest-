import React,{useState} from "react";

const Meme=({yash,setYash})=>{
    const[form,setForm]=useState({
        template_id:yash.id,
        username:"Pranav_Bansal",
        password:"Yy72!H5gDW!fQje",
        boxes: [],
    });
    const generateMeme=()=>{
        let url=`https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;
        form.boxes.map((box,index) => {
       url += `&boxes[${index}][text]=${box.text}`;
        });
        fetch(url).then(res => res.json())
        .then(data=>{
            setYash({...yash, url:data.data.url});
        });
    };
 return(
<div className='meme'>
 <img src={yash.url} alt="meme" />
 <div>
     {[...Array(yash.box_count)].map((__,index) => (
        <input key={index}
        type='text' placeholder={`Meme Caption ${index+1}`} onChange={(e)=>{
          const newBoxes=form.boxes;
          newBoxes[index]={text:e.target.value};
          setForm({...form,boxes:newBoxes
        });
        }} />
     ))}
 </div>
 <div className="a1">
 <button onClick={generateMeme}>Create Meme</button>
  <button onClick={()=>{
      setYash(null);
  }}>Choose Template</button>
 </div>
  
</div>
 );
};

export default Meme;