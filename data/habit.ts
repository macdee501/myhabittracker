import { databases, db } from "@/lib/appwriteClient";

// Fetch all habits from the database
export async function listHabits(){
    const response = await databases.listDocuments(db.id,db.collections.habits,[]);
    return response.documents;
}

// Create a new habit in the database
export async function createHabit(data:{name:string; description?:string; frequency?:string})
{

    return await databases.createDocument(db.id,db.collections.habits,'unique()',{
        ...data,
        $createdAt:new Date().toISOString(),

    })
}

