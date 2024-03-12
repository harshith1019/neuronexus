import { Router } from "express";
const router = Router();

/** import controllers */
import * as controller from '../controllers/controller.js';

/** Questions Routes API */

router.get('/questions', controller.getQuestions) /** GET Request */
router.post('/questions/post', controller.insertQuestions) /** POST Request */
router.route('/questions/delete').delete(controller.dropQuestions) /** DELETE Request */

router.route('/result/get').get(controller.getResult)
router.route('/result/post').post(controller.storeResult)
router.route('/result/delete').delete(controller.dropResult)

export default router;