const getPageTitle = (section?: string) => {
  const pageTitle = "Artify" + (section ? ` | ${section}` : "");
  return pageTitle;
};

export default getPageTitle;
