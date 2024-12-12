const { google } = require('googleapis');
const auth = require('../../config/googleCloud');

class GooglePhotosService {
  constructor() {
    this.drive = google.drive({ version: 'v3', auth });
  }

  async uploadImage(imageBuffer, filename) {
    try {
      // Upload to Google Drive first (as Google Photos API doesn't support direct uploads)
      const fileMetadata = {
        name: filename,
        mimeType: 'image/jpeg'
      };

      const media = {
        mimeType: 'image/jpeg',
        body: Buffer.from(imageBuffer)
      };

      const file = await this.drive.files.create({
        resource: fileMetadata,
        media: media,
        fields: 'id, webViewLink'
      });

      // Make the file publicly accessible
      await this.drive.permissions.create({
        fileId: file.data.id,
        requestBody: {
          role: 'reader',
          type: 'anyone'
        }
      });

      return file.data.webViewLink;
    } catch (error) {
      console.error('Google Photos upload error:', error);
      throw new Error('Failed to upload image to Google Photos');
    }
  }
}

module.exports = new GooglePhotosService();