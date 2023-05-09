import jwt, { JwtPayload } from "jsonwebtoken"
import { Request, Response } from "express";

interface CustomRequest extends Request {
    currUserId?: any;
}

const checkAuth = async (req: CustomRequest, res: Response, next: () => void) => {

    const { authorization } = req.headers;

    if (!authorization) {
        console.log("no authorization header")
        return res.status(401).json({ error: "Authorization token not present" })
    }

    const token = authorization.split(' ')[1]

    try {
        const { id } = jwt.verify(token, process.env.SECRET as string) as JwtPayload

        // console.log(`user id is -> ${id}`)

        // req.currUser = await userRepository.search().where('id').eq(id).return.all()
        req.currUserId = id  // settting currUserId inorder for fetching the user from redis using entityId
        console.log("curr user is - ", req.currUserId)
        next();
    }
    catch (err) {
        res.status(401).json({ error: "Token not verified" })
    }
}

export { checkAuth }