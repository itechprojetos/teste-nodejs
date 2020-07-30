import AdminController from '../app/controllers/admin/admin.controller';
import SessionController from '../app/controllers/admin/session/session.controller';
import auth from '../app/middlewares/auth';

module.exports = (app) => {
  app.post('/admin/login', SessionController.login),
  app.post('/admin/register', AdminController.register),
  app.get('/admin/candidate/list', auth, AdminController.list),
  app.get('/admin/candidate/:candidateId', auth, AdminController.getCandidate),
  app.patch('/admin/candidate/:candidateId/update', auth, AdminController.updateCandidate),
  app.delete('/admin/candidate/:candidateId/delete', auth, AdminController.deleteCandidate)
}
