"use client";

import { z } from "zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
    Field,
    FieldError,
    FieldLabel,
    FieldGroup,
    FieldDescription,
} from "@/components/ui/field";

import { Loader2, Mail, MapPin, Github, Linkedin } from "lucide-react";
import { sendEmail } from "@/lib/send-email";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email(),
    message: z.string().min(10, "Message too short"),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
    const [submitting, setSubmitting] = useState(false);

    const form = useForm<FormValues>({
        // @ts-ignore
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    async function onSubmit(values: FormValues) {
        try {
            setSubmitting(true);
            await sendEmail(values);
            form.reset();
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <section id="contact" className="py-6 px-6 lg:px-20">

            {/* Header */}
            <div className="max-w-2xl mb-14">
                <h2 className="text-3xl font-semibold tracking-tight">
                    Let’s work together
                </h2>

                <p className="text-neutral-500 mt-3">
                    Have a project idea or just want to say hi? Send me a message.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-14 items-start">

                {/* Contact Info */}
                <div className="space-y-7">

                    <div className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400">
                        <Mail className="w-5 h-5" />
                        your@email.com
                    </div>

                    <div className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400">
                        <MapPin className="w-5 h-5" />
                        Kerala, India
                    </div>

                    <div className="flex gap-3 pt-2">
                        <a
                            href="https://github.com"
                            target="_blank"
                            className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
                        >
                            <Github size={18} />
                        </a>

                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
                        >
                            <Linkedin size={18} />
                        </a>
                    </div>

                </div>

                {/* Form */}
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="
          group relative
          space-y-7
          rounded-xl
          border border-neutral-200/70 dark:border-white/10
          bg-white/60 dark:bg-neutral-900/50
          backdrop-blur-md
          p-7
          transition
          hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30
          "
                >

                    {/* subtle gradient glow */}
                    <div className="
            pointer-events-none
            absolute inset-0 opacity-0
            group-hover:opacity-100
            transition
            bg-radial from-blue-500/10 via-transparent to-transparent
          " />

                    <FieldGroup className="space-y-6">

                        {/* Name */}
                        <Controller
                            control={form.control}
                            name="name"
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel className="text-sm">
                                        Name
                                    </FieldLabel>

                                    <Input
                                        {...field}
                                        placeholder="John Doe"
                                        aria-invalid={fieldState.invalid}
                                        className="
                      bg-white/70 dark:bg-neutral-900/70
                      border-neutral-200 dark:border-neutral-800
                      focus-visible:ring-2
                      focus-visible:ring-blue-500/40
                      transition
                    "
                                    />

                                    <FieldError errors={fieldState.error ? [fieldState.error] : []} />
                                </Field>
                            )}
                        />

                        {/* Email */}
                        <Controller
                            control={form.control}
                            name="email"
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel className="text-sm">
                                        Email
                                    </FieldLabel>

                                    <Input
                                        {...field}
                                        type="email"
                                        placeholder="john@mail.com"
                                        aria-invalid={fieldState.invalid}
                                        className="
                      bg-white/70 dark:bg-neutral-900/70
                      border-neutral-200 dark:border-neutral-800
                      focus-visible:ring-2
                      focus-visible:ring-blue-500/40
                      transition
                    "
                                    />

                                    <FieldError errors={fieldState.error ? [fieldState.error] : []} />
                                </Field>
                            )}
                        />

                        {/* Message */}
                        <Controller
                            control={form.control}
                            name="message"
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel className="text-sm">
                                        Message
                                    </FieldLabel>

                                    <Textarea
                                        {...field}
                                        rows={5}
                                        placeholder="Tell me about your project..."
                                        aria-invalid={fieldState.invalid}
                                        className="
                      resize-none
                      bg-white/70 dark:bg-neutral-900/70
                      border-neutral-200 dark:border-neutral-800
                      focus-visible:ring-2
                      focus-visible:ring-blue-500/40
                      transition
                    "
                                    />

                                    <FieldDescription className="text-xs">
                                        Briefly describe your project or idea.
                                    </FieldDescription>

                                    <FieldError errors={fieldState.error ? [fieldState.error] : []} />
                                </Field>
                            )}
                        />

                    </FieldGroup>

                    <Button
                        type="submit"
                        disabled={submitting}
                        className="
            w-full
            bg-blue-600 hover:bg-blue-700
            text-white
            transition
            "
                    >
                        {submitting ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Sending...
                            </>
                        ) : (
                            "Send Message"
                        )}
                    </Button>

                </form>

            </div>
        </section>
    );
}