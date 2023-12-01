const getBlobUrl = async (url: string) => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);
    return blobUrl;
  } catch (error) {
    console.error("Error fetching or creating blob URL:", error);
    return null;
  }
};

export default getBlobUrl;
