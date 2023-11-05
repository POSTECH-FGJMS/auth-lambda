const jwt = require('jsonwebtoken');

exports.handler = async (event) => {
  try {
    const body = event.body ? JSON.parse(event.body) : {};
    const taxId = body.taxId;

    const payload = taxId ? { taxId } : {};

    const token = jwt.sign(payload, process.env.AUTH_SECRET_KEY, { expiresIn: '1h' });

    return {
      statusCode: 200,
      body: JSON.stringify({ token }),
    };
  } catch (error) {
    console.error('Error when generate tokem:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
