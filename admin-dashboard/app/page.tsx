"use client";  // חובה ב-Next.js 14 עבור שימוש ב-hooks

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/admin"); // מבצע הפנייה אוטומטית לדף /admin
  }, []);

  return <p>Redirecting...</p>; // הוספת הודעה כדי למנוע שגיאות
}

