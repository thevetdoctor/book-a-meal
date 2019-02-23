// api/routes/menus.js

import express from 'express';
import menusController from '../controllers/menus';
import auth from '../auth/index';

const router = express.Router();

router.post('/', auth, menusController.addMenu);

router.get('/', auth, menusController.getMenu);

export default router;
