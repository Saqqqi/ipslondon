"use server";

import { cookies } from "next/headers";

export async function toggleThemeAction() {
    const cookieStore = await cookies();
    const currentTheme = cookieStore.get("theme")?.value || "light";
    const newTheme = currentTheme === "light" ? "dark" : "light";

    cookieStore.set("theme", newTheme, {
        path: "/",
        maxAge: 31536000, // 1 year
        sameSite: "lax",
    });
}
