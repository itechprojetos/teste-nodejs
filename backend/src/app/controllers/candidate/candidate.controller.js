import Candidate from '../../models/candidate.model';
import { check, validationResult } from 'express-validator';

export default {
  async register(req, res) {
    try {
      const validations = [
        check('email').isEmail(),
        check('name').isString,
        check('skype').isString,
        check('phone').isNumeric,
        check('city').isString,
        check('uf').isString,
        check('available_time').isNumeric,
        check('work_hour').isNumeric,
        check('abilities.javascript').isNumeric,
        check('abilities.nodejs').isNumeric,
        check('abilities.reactjs').isNumeric,
        check('abilities.express').isNumeric,
        check('abilities.mongodb').isNumeric,
      ];

      const findCandidate = await Candidate.findOne({ email: req.body.email });

      if(findCandidate) {
        return res.status(400).json({ error: 'E-mail já registrado' });
      }

      const candidate = await new Candidate(req.body).save();

      return res.status(201).json(candidate);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }
}
