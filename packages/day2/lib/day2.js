export const generateConfig = () => {
  return {
    server: "http://localhost",
    port: 8080,
    domain: "localhost"
  };
};
export const generateOtherConfig = () => {
  return {
    server: "http://localhost",
    port: 8080,
    domain: "localhost",
    time: new Date()
  };
};
