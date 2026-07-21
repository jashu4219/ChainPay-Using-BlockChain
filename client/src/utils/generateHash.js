const generateHash = () => {
  return (
    "0x" +
    Array.from({ length: 64 })
      .map(() =>
        Math.floor(Math.random() * 16).toString(16)
      )
      .join("")
  );
};

export default generateHash;