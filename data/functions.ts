import { functions } from "@/lib/appwriteClient";


export async function getStreak(habitId:string)
{
    const exec = await functions.createExecution('streak-calc',
        JSON.stringify({habitId})
    );
    return JSON.parse(exec.responseBody);
}