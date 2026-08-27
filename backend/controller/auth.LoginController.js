export function LoginController(req, res) {
  const token = req.body.token;
  if (!token) {
    console.log("route controller");
    return res.status(201).json({
      message: "login failed",
    });
  }
  return res.json({
    message: "login succesfull",
  });
}
