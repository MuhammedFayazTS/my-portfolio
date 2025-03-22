'use client'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Separator } from './ui/separator'

// Schema for contact form validation
const formSchema = z.object({
    name: z
        .string()
        .min(2, { message: 'Name must be at least 2 characters long' }),
    email: z.string().email({ message: 'Invalid email address' }),
    message: z
        .string()
        .min(10, { message: 'Message must be at least 10 characters long' }),
})

export default function ContactForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            message: '',
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            // Simulate a successful contact form submission
            console.log(values)
            toast.success('Your message has been sent successfully!')
        } catch (error) {
            console.error('Error submitting contact form', error)
            toast.error('Failed to send your message. Please try again.')
        }
    }

    return (
        <div className="my-3 flex min-h-fit h-full w-full items-center justify-center px-0">
            <Card className="mx-auto w-full bg-gray-50 dark:bg-neutral-950 border-none">
                <CardHeader>
                    <CardTitle className="text-2xl inline-flex gap-x-3">
                        Contact Me
                        <Separator className="mt-5 flex-1" />
                    </CardTitle>
                    <CardDescription>
                        Please fill out the form below and I will get back to you shortly.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <div className="grid gap-4">
                                {/* Name Field */}
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem className="grid gap-2">
                                            <FormLabel htmlFor="name">Name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    id="name"
                                                    placeholder="John Doe"
                                                    type="text"
                                                    autoComplete="name"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Email Field */}
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem className="grid gap-2">
                                            <FormLabel htmlFor="email">Email</FormLabel>
                                            <FormControl>
                                                <Input
                                                    id="email"
                                                    placeholder="johndoe@mail.com"
                                                    type="email"
                                                    autoComplete="email"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Message Field */}
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem className="grid gap-2">
                                            <FormLabel htmlFor="message">Message</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    id="message"
                                                    placeholder="Your message..."
                                                    autoComplete="off"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <Button type="submit" className="bg-blue-800 text-white hover:bg-blue-900 active:bg-blue-700
                                 w-full">
                                    Send Message
                                </Button>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}
