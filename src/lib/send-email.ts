import { FormData } from "@/components/contact";
import { toast } from "sonner";

export async function sendEmail(data: FormData) {
  const apiEndpoint = "/api/email";
  await fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((response) => {
      toast(response.message);
    })
    .catch((err) => {
      toast(err.message || "Something went wrong!");
      console.error(err);
    });
}
