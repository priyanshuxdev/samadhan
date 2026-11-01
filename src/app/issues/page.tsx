import {createClient} from "@/lib/supabase/server";
import { Suspense } from "react";

async function CategoryList() {
    const supabase = await createClient();
    const { data: categories, error } = await supabase
        .from("categories")
        .select("*");

    if (error) {
        throw new Error(error.message);
    }

    return (
        <ul>   
            {categories?.map((category) => (
                <li key={category.id}>{category.name}</li>
            ))}
        </ul>
    )
}

export default function IssuesPage() {
    return (
        <main>
            <h1>Issues</h1>
            <Suspense fallback={<p>Loading...</p>}>
                <CategoryList />
            </Suspense> 
        </main>
    );
}