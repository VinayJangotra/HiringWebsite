import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CloudName,
  api_key: process.env.CloudApi,
  api_secret: process.env.CloudSecret,
});

const uploadFile = async (file) => {
  const buffer = Buffer.from(await file.arrayBuffer());

  const uploadedFileData = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          folder: "hireheaven",
          access_mode: "public",
        },
        (err, result) => {
          return resolve(result);
        }
      )
      .end(buffer);
  });

  return uploadedFileData;
};

export default uploadFile;
