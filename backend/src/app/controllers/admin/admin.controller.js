import bcrypt from 'bcryptjs';

import Candidate from '../../models/candidate.model';
import Admin from '../../models/admin.model';

export default {
  async list (req, res) {
    try {
      const candidates = await Candidate.find({});
      return res.status(200).json(candidates);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  },

  async getCandidate(req, res) {
    try {
      const { candidateId } = req.params;

      const findCandidate = await Candidate.findById(candidateId);

      if(!findCandidate) {
        return res.status(400).json({ error: 'Candidato não encontrado' });
      }

      return res.status(200).json(findCandidate);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  },

  async register(req, res) {

      const { name, email, password } = req.body;

      if(!name || name === null || !email || email === null || !password || password === null) {
        return res.status(400).json({ error: 'Preencha todos os campos' });
      }

      const findAdmin = await Admin.findOne({ email });

      if(findAdmin) {
        return res.status(400).json({ error: 'E-mail já cadastrado '});
      }

      const hashPassword = await bcrypt.hash(password, 11);

      const admin = await new Admin({
        name,
        email,
        password: hashPassword
      }).save();
      return res.status(200).json(admin);

  },

  async updateCandidate(req, res) {
    try {
      const { candidateId } = req.params;
      const { email, name, skype, phone, linkedin, city, uf, portfolio, available_time, work_hour, hourly_salary, javascript, nodejs, reactjs, mongodb, express, crud, aditional } = req.body;

      const findCandidate = await Candidate.findById(candidateId);

      if(!findCandidate) {
        return res.status(400).json({ error: 'Candidato não encontrado' });
      }

      const update = await Candidate.findByIdAndUpdate(candidateId, {
        name,
        email,
        skype,
        phone,
        linkedin,
        city,
        uf,
        portfolio,
        available_time,
        work_hour,
        hourly_salary,
        abilities: {
          javascript,
          nodejs,
          reactjs,
          mongodb,
          express,
          aditional,
        },
        link: crud
      });

      return res.status(200).json(update);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  },

  async deleteCandidate(req, res) {
    try {
      const { candidateId } = req.params;

      const findCandidate = await Candidate.findById(candidateId);

      if(!findCandidate) {
        return res.status(400).json({ error: 'Candidato não encontrado' });
      }

      await Candidate.findByIdAndRemove(candidateId);

      return res.status(200).json('ok')
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }
}
