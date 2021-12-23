import React, { useState } from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
export default function Uploadpicture() {


    const [file, setFile] = React.useState("");

    function handleUpload(event) {
        setFile(event.target.files[0]);
    }


    

    return (
        <>
             <div id="upload-box">
                <input type="file" className="d-none" id="profilePicture" onChange={handleUpload} />

                <div className="mb-4">
                    <div className="d-flex flex-column align-items-center justify-content-center">

                        <label htmlFor="profilePicture" className='profilePicture'>
                            <span>
                                <svg width="41" height="37" viewBox="0 0 41 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.4952 18.688L25.123 22.3902M20.4952 18.688V35.348V18.688ZM20.4952 18.688L15.8674 22.3902L20.4952 18.688Z" stroke="#2091F9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M7.60038 13.3516C5.84962 13.7921 4.31999 14.8568 3.29887 16.3456C2.27775 17.8344 1.83543 19.6449 2.05502 21.4368C2.27461 23.2287 3.14099 24.8788 4.49138 26.077C5.84176 27.2752 7.58322 27.9391 9.38855 27.9439H11.2397" stroke="#2091F9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M27.5848 9.68829C26.9521 7.18295 25.3905 5.01191 23.2164 3.61528C21.0424 2.21865 18.4186 1.70092 15.877 2.16706C13.3354 2.63319 11.0661 4.0483 9.52919 6.12553C7.99226 8.20276 7.30268 10.7867 7.60022 13.3535C7.60022 13.3535 7.88344 14.9862 8.46284 15.9117" stroke="#2091F9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M29.7508 27.9437C31.0578 27.9428 32.3497 27.6651 33.5416 27.129C34.7335 26.5928 35.7984 25.8103 36.6661 24.8329C37.5337 23.8555 38.1846 22.7054 38.5758 21.4584C38.9669 20.2114 39.0896 18.8956 38.9356 17.5978C38.7816 16.2999 38.3545 15.0494 37.6824 13.9285C37.0103 12.8076 36.1085 11.8417 35.0362 11.0945C33.9639 10.3473 32.7455 9.83563 31.4612 9.59322C30.177 9.35081 28.8559 9.38313 27.585 9.68807L25.123 10.3582" stroke="#2091F9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <small className='d-block'>Drag and drop your
                                    image here</small>
                            </span>
                        </label>
                        
                            {file && <ImageThumb image={file} />}
                        
                        <span className="px-5 d-inline-block">OR</span>
                        <button className="btn btn-uploadPhone ">Upload a photo</button>
                    </div>
                </div>
            </div> 
           
        </>
    )
}


const ImageThumb = ({ image }) => {
    return (
        <>
            <div className="uploaded-img">
            <div className="uploadedImages">
                <img src={URL.createObjectURL(image)} alt={image.name} className="img-fluid" />
            </div>
            <span className="btn-delete"><DeleteForeverIcon/></span>
            </div>
        </>
    )
};
