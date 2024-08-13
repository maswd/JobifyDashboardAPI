const notFoundMiddleware = (req, res) =>
  res.status(404).send('مسیر وجود ندارد')

export default notFoundMiddleware
