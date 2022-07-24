const responseBuilder = (h, status, message, code, data = []) => {
  let res = null;
  if (data.length > 0) {
    const response = h.response({
      status: status,
      message: message,
      data: data,
    });

    res = response;
  } else {
    const response = h.response({
      status: status,
      message: message,
    });
    res = response;
  }

  res.code(code);
  return res;
};

module.exports = responseBuilder;
