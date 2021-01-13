import { getUserToken } from './utils/user.js';
import router from './router/index.js';

router.beforeEach(async (to, from, next) => {
  const hasToken = getUserToken();
  if(to.path.indexOf('/user/login') != -1) {
    if(hasToken) {
      next({ path: '/user/center' });
    } else {
      next();
    }
  } else if (to.path.indexOf('/user/center') != -1) {
    if(hasToken) {
      next();
    } else {
      next({ path: '/user/login' });
    }
  } else {
    next();
  }
})
