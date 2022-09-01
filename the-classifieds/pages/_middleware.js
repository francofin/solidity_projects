import { NextResponse } from "next/server";


const allowedParams = [
    'keyword',
    'location',
    'education',
    'experience',
    'salary',
    'jobtype',
    'industry',
    'page'

]



export async function middleware(req){
    const url = req.nextUrl;
    let changed = false;
    const country = req.geo.country;

    // Can check or allow opermissions based on country this way in next. 

    url.searchParams.forEach((param, key) => {
        if (!allowedParams.includes(key)) {
            url.searchParams.delete(key);
            changed = true;
        }
    })

    if (changed){
        return NextResponse.redirect(url);
    }
}