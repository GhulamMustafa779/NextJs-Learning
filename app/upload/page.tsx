"use client";

import React,{useState} from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface CloudinaryResult {
  public_id: string
}

const UploadPage = () => {

  const [publicId, setPublicId] = useState('')

  return (
    <>
    {publicId && <CldImage src={publicId} width={300} height={300} alt="no image"/>}
    <CldUploadWidget
    options={{
      sources:['local','url','google_drive']
    }}
      uploadPreset={process.env.NEXT_PUBLIC_UPLOAD_PRESET}
      onSuccess={(results)=>{
        const info = results.info as CloudinaryResult
        setPublicId(info.public_id);
      }}
    >
      {({ open }) => (
        <button className="btn btn-primary" onClick={() => open()}>
          Upload
        </button>
      )}
    </CldUploadWidget>
    </>
  );
};

export default UploadPage;
