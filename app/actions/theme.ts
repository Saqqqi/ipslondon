"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function toggleThemeAction() {
    const cookieStore = await cookies();
    const currentTheme = cookieStore.get("theme")?.value || "light";
    const newTheme = currentTheme === "light" ? "dark" : "light";

    cookieStore.set("theme", newTheme, {
        path: "/",
        maxAge: 31536000,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
    });

    // Refresh the current path to update Server Components
    revalidatePath("/");

    // Explicitly redirect to force a fresh server-side render of the Layout
    redirect("/");
}
