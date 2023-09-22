import express from "express";
import { sql } from "../db.js";

const router = express.Router();

// middleware
import authorization from "../authorization.js";

// Return the user info to users who are authorized 
router.get('/', authorization, async (req, res) => {
    try {
        // req.user has the payload of token from the middleware 

        const user = await sql.query("select task from todos where id=1",
            [req.user]);

        res.status(200).json(user.rows);

    } catch (err) {
        console.error(err.message);
        res.status(500).json("server error");
    }
});

export default router;
/*module.exports = router;*/