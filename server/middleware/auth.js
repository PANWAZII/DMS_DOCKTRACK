import { getAuth } from "@firebase/auth";
export default function checkAuth(req, res, next) {
  const token = req.headers.authorization;
  // console.log("this is req ",req.headers)
  // console.log("this is token ", token);
  if (!token) {
    res.status(401).send("Access Deny");
    return;
  }
  next();
  // getAuth()
  //   .verifyIdToken(token)
  //   .then((decodedToken) => {
  //     res.locals.uid = decodedToken.uid;
  //     next();
  //   })
  //   .catch((error) => {
  //     res.status(404).send("User not found");
  //   });
}
