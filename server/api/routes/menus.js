// api/routes/menusController.js

import express from 'express';
import menusController from '../controllers/menus';

const router = express.Router();

router.post('/', menusController.addMenu);

router.get('/', menusController.getMenu);
