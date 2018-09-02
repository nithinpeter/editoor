const FileIcons = require('file-icons-js');

export const getFileIcon = (fileName: string) => {
  return FileIcons.getClassWithColor(fileName);
};
