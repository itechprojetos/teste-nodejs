import jwt from 'jsonwebtoken';

export default async (req, res, next) => {
  const header = req.headers.authorization;

  if(!header) {
    return res.status(401).json({ error: 'Você não está logado' });
  }

  const [, token] = header.split(' ');

  try {
    const decoded = await jwt.verify(token, process.env.SECRET);

    req.userId = decoded.id;

    return next();
  } catch (err) {
    header ? req.headers.authorization = null : null;
    return res.status(500).json({ error: 'Token inválido' });
  }
}
