import { NextRequest } from "next/server"


export async function POST(req: NextRequest){

    const body = await req.json()
        //extract the body from the post request
        //store body in database
        console.log(body.username)
        return Response.json({
            message: "You are logged in"
        })
}