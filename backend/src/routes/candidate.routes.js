import CandidateController from '../app/controllers/candidate/candidate.controller';

module.exports = (app) => {
  app.post('/candidate', CandidateController.register)
}
