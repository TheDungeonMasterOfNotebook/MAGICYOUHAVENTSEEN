let latestPrediction = null;

exports.handler = async (event) => {
  const { httpMethod } = event;

  if (httpMethod === "POST") {
    const body = JSON.parse(event.body);
    latestPrediction = body.card;
    console.log("Prediction set:", latestPrediction);
    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  }

  if (httpMethod === "GET") {
    return { statusCode: 200, body: JSON.stringify({ card: latestPrediction }) };
  }

  return { statusCode: 405, body: "Method Not Allowed" };
};
