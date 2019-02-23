// api/routes/menus.js

import express from 'express';
import menusController from '../controllers/menus';
import auth from '../auth/index';

const router = express.Router();

router.post('/', menusController.addMenu);

router.get('/', menusController.getMenu);

export default router;
