const express = require("express");
const router = express.Router();
const { nanoid } = require("nanoid");
const idLength =10;

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *          first_name
 *          last_name
 *          password
 *          email
 *          phone
 *       properties:
 *         id_user:
 *           type: number
 *           description:The auto-generated id of the user
 *        f_name:
 *           type: string
 *           description:This is user's first name
 *        l_name:
 *           type: string 
 *           description:This is user's last name
 *        pass:
 *           type: string 
 *           description:This is user's password
 *        email:
 *           type: string 
 *           description:This is user's email
 *        gender:
 *           type: string 
 *           description:This is user's gender
 *        phone:
 *           type: string 
 *           description:This is user's phone number
 *        viber:
 *           type: string 
 *           description:This is user's viber acount
 *        whatsApp:
 *           type:string 
 *           description:This is user's watsapp acount
 *        creationDate:
 *           type:string 
 *           description:This is user's acount creation date
 *        updateDate:
 *           type: string 
 *           description:This is user's acount update date
 */

 /**
  * @swagger
  * tags:
  *   name: Users
  *   description: The users managing API
  */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Returns the list of all the users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The list of the users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Users'
 */

router.get("/", (req, res) => {
	const users = req.app.db.get("users");

	res.send(users);
});

