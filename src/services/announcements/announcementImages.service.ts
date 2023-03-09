import { S3 } from 'aws-sdk';
import { Readable } from 'stream';

const s3 = new S3()

export const uploadImageToS3 = async (file: Express.Multer.File, folder: string): Promise<string> => {
  const stream = Readable.from(file.buffer);
  const fileName = `${folder}/${Date.now()}-${file.originalname}`;

  return new Promise((resolve, reject) => {
    s3.upload(
      {
        Bucket: process.env.AWS_S3_BUCKET_NAME!,
        Body: stream,
        Key: fileName,
        ContentType: file.mimetype,
        ACL: 'public-read',
      },
      (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data.Location);
        }
      }
    );
  });
}