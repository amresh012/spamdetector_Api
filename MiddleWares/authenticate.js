import jsonwebtoken from "jsonwebtoken";
import  asyncHandler   from 'express-async-handler'
import { PrismaClient } from "@prisma/client";

const prisma_client = new PrismaClient();

const protect = asyncHandler(async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET);
            req.user = await prisma_client.user.findUnique({
              where: { id: decoded.id },
              select: { id: true },
            });
            next();
        } catch (error) {
            res.status(401);
            throw new Error(" token Not authorized ✖️");
        }
    }

    if (!token) {
        res.status(401);
        throw new Error('Not authorized, no token');
    }
});

export default protect