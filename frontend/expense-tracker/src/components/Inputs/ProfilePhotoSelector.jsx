import { useRef, useState } from "react";
import {LuUser,LuUpload,LuTrash} from "react-icons/lu"

const ProfilePhotoSelector = ({image,setImage}) => {
    const inputRef=useRef(null);
    const [previewURL,setPreviewURL]=useState(null);
    const handleImage=(event)=>{
        const file=event.target.files[0];
        if(file){
            setImage(file);
        }
        const preview=URL.createObjectURL(file);
        setPreviewURL(preview)
    }
    const handleRemoveImage=()=>{
        setImage(null);
        setPreviewURL(null)
    }
    const onChooseFile=()=>{
        inputRef.current.click();
    }
    return ( 
        <div className="flex justify-center mb-6">
            <input
              type="file"
              accept="image/*"
              ref={inputRef}
              onChange={handleImage}
              className="hidden"
            />
            {!image ?(
                <div className="w-18 h-18 flex items-center justify-center bg-color-100 rounded-full relative  bg-violet-300 ">
                    <LuUser className="text-4xl text-purple-700 rounded-full"></LuUser>
                    <button type="button" className="w-6 h-6 flex items-center justify-center bg-violet-600 text-white rounded-full absolute -bottom-1 -right-1" onClick={onChooseFile}><LuUpload></LuUpload></button>
                </div>    
            ):(
                <div className="">
                    <img src={previewURL} alt="profile photo" className="w-20 h-20 relative object-cover rounded-full"></img>
                    <button className="w-6 h-6 flex items-center justify-center bg-red-500 text-white rounded-full absolute -bottom-1 -right-1" type="button" onClick={handleRemoveImage}><LuTrash></LuTrash></button>
                </div>
            )}
        </div>
     );
}
 
export default ProfilePhotoSelector;