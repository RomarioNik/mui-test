import React, { useState } from 'react';
import css from './InputFile.module.css';

const InputFile = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = e => {
    if (e.target.files) {
      setFile({
        data: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  //   const handleUploadClick = () => {
  //     if (!file) {
  //       return;
  //     }
  //   };

  return (
    <div>
      <div className={css.thumb}>
        <img className={css.pic} src={file.data} alt="avatar" />
      </div>
      <input
        type="file"
        id="avatar"
        name="avatar"
        accept="image/png, image/jpeg"
        onChange={handleFileChange}
      />
      {/* <button onClick={handleUploadClick}>Upload</button> */}
    </div>
  );
};

export default InputFile;
