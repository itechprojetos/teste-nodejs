import Admin from '../../../models/admin.model';

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default {
  async login(req, res) {
    try {
      const { email, password } = req.body;

      const findUser = await Admin.findOne({ email })

      if(!findUser) {
        return res.status(400).json({ error: 'E-mail inválido' });
      }

      const compareHash = await bcrypt.compare(password, findUser.password);

      if(!compareHash) {
        return res.status(401).json({ error: 'Senha incorreta' });
      }

      const { id, name } = findUser;

      return res.status(200).json({
        user: {
          id,
          email,
          name,
        },
        token: jwt.sign({ id }, process.env.SECRET, {
          expiresIn: process.env.EXPIRES_IN
        })
      });
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }
}
