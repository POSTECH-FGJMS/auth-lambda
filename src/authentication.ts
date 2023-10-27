export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello from Lambda! I am using authentication function uhuuul.' }),
  };
};