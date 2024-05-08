import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  return (
    <div className="h-full">
      <iframe
        src="https://go.arena.im/embed/chat/unipace/jJwW8C1"
        style={{border : 0, borderRadius : "4px", width : "100%", height : "100%"}}
      ></iframe>
    </div>
  );
}
