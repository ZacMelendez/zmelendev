"use client";

import { usePathname } from "next/navigation";

export default function Posts() {
    const pathName = usePathname();
    return (
        <main>
            <div>
                <p>{pathName}</p>
            </div>
        </main>
    );
}
