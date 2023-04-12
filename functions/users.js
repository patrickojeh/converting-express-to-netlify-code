module.exports.handler = (event, context, callback) => {
  const users = [
    {
      "firstName": "Jane",
      "lastName": "Doe"
    },
    {
      "firstName": "John",
      "lastName": "Doe"
    }
  ];

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(users)
  });
}