const IMAGE_DEFAULT_NAME = "artify-image.png";

const downloadImage = (imageUrl: string, fileName = IMAGE_DEFAULT_NAME) => {
  const link: HTMLAnchorElement = document.createElement("a");
  link.href = imageUrl ?? "";
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default downloadImage;
