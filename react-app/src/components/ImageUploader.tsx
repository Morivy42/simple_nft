import React, { useState } from "react";

function ImageUploader() {
  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target?.result?.toString() ?? null);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleMintClick = () => {
    // Logic for minting the image goes here
    console.log("minting the image");
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        style={{
          width: "500px",
          height: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          border: "2px solid black",
        }}
      >
        {image ? (
          <img
            src={image}
            alt="Uploaded image"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
          />
        ) : (
          <span style={{ color: "gray" }}>No image uploaded</span>
        )}
      </div>
      <div style={{ display: "flex", marginTop: "16px" }}>
        <input type="file" onChange={handleImageChange} />
        <button style={{ marginLeft: "8px" }} onClick={handleMintClick}>
          Mint!
        </button>
      </div>
    </div>
  );
}

export default ImageUploader;
