import { toast } from "sonner";

export type EmailPayload = {
    name: string;
    email: string;
    message: string;
};

export async function sendEmail(data: EmailPayload) {
    const apiEndpoint = "/api/email";

    try {
        const res = await fetch(apiEndpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const response: { message: string } = await res.json();

        if (!res.ok) {
            throw new Error(response?.message || "Failed to send email");
        }

        toast.success(response.message);
    } catch (error) {
        const message =
            error instanceof Error ? error.message : "Something went wrong";

        toast.error(message);
        console.error(error);
    }
}