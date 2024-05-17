// Utility function to capitalize the first letter of a string
export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// Utility function to format a number as a three-digit ID string
export const formatId = (id: number) => {
  return `#${id.toString().padStart(3, "0")}`;
};
