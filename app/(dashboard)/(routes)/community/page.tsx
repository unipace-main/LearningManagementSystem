import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import TelegramWidget from "./_components/telegram-widget"

export default async function Dashboard() {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  return (
    <div className="h-full">
      <TelegramWidget/>
    </div>
  );
}
