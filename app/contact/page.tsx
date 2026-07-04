"use client"
import React, { useRef, useState } from 'react'
import {motion} from "framer-motion"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useMediaQuery } from "../hooks/use-media-query";

 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import emailjs from "@emailjs/browser";
import { Textarea } from '@/components/ui/textarea'

 
const formSchema = z.object({
    email: z.string().email(),
    text: z.string().min(2, {
      message: "message must be at least 2 characters.",
    }),

  })
   
const Page = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

     const ref = useRef<HTMLFormElement>(null);
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false)
      
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          text:""
        },
      })
    const onSubmit = async () => {
        if (!ref.current) return;

        setLoading(true);
        setSuccess("");

        try {
            await emailjs.sendForm(
                "service_effk34a",
                "template_5yyxifj",
                ref.current,
                "U2D7hh_TfmUqWH5qi"
            );

            setSuccess("Message sent successfully");
            form.reset();
        } catch (error:unknown) {
            console.error(error)
            setSuccess("Failed to send message.");
        } finally {
            setLoading(false);
        }
    };

  return (
    <motion.div 
    initial={{ x: -30, opacity: 0.2 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ ease: "easeInOut", duration: 1.5 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: false }}
    className={`2xl:mx-20 lg:mx-20 mt-44 ${!isDesktop && 'w-full mt-44'}`}
    
    >
        

         <motion.div 
                         initial={{ y: -30, opacity: 0.2 }}
                         animate={{ y: 0, opacity: 1 }}
                         transition={{ ease: "easeInOut", duration: 1.5 }}
                         whileInView={{ opacity: 1 }}
                         viewport={{ once: false }} className={`${!isDesktop && 'workGrid'} flex items-center justify-between gap-0 h-1/2 my-auto `}
                         style={{
                          backgroundImage: "url('/assets/1.jpg')",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }} 
                      >
                    <div className={`items-center w-1/2 h-full 2xl:px-20 2xl:py-24 lg:px-20 lg:py-24 bg-black shadow-2xl ${!isDesktop && 'w-full px-5'}`}>
        <h1 className="text-[#CC5500] text-5xl py-3">Contact us</h1>
        <div className="flex items-center">
              
           <img src=" https://img.icons8.com/?size=100&id=107436&format=png&color=000000" 
           width="32px"
           height="2px"
           className="object-contain"/>
           <a 
  href="https://www.google.com/maps/search/?api=1&query=13,+Dayo+Kuye+Close,+New+Oko-Oba,+Abulegba,+Lagos" 
  target="_blank" 
  rel="noopener noreferrer"
  className="p-3 text-sm text-[#CC5500] hover:underline"
>
13,Dayo Kuye Close <br />
New Oko-Oba, <br />
Abulegba,Lagos
</a>
            </div>
            <div className="flex items-center">
              
              <img src="https://img.icons8.com/?size=100&id=12921&format=png&color=000000"
              width="32px"
              height="2px"
              className="object-contain"/>
            <a 
  href="tel:08033029830" 
 className="p-3 text-sm text-[#CC5500] hover:underline">
  0803-302-9830
</a>

            </div>

            <div className="flex items-center">
              
           <img src=" https://img.icons8.com/?size=100&id=OumT4lIcOllS&format=png&color=000000" 
           width="32px"
           height="2px"
           className="object-contain"/>
           <a href="mailto:tundeadekola@yahoo.com" className="p-3 text-sm text-[#CC5500] hover:underline">
  tundeadekola@yahoo.com
</a>

            </div>
          </div>
          
          <div 
  className={`justify-end w-1/2 overflow-hidden px-20 2xl:py-11 lg:py-8 h-full 
              bg-white/10 backdrop-blur-xl border border-white/20 
              shadow-lg shadow-white/10 
              ${!isDesktop && 'w-full px-8 h-1/2 mx-auto'}`}
 
>

        <h2 className='py-3 text-lg font-semibold text-white'>Send us a message and we will get in touch</h2>

        <Form {...form}>
      <form ref={ref} onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email address" {...field} className="text-white border-2 border-gray-100"/>
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormLabel>message</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter your message" {...field} className="text-white border-2 border-gray-100"/>
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />


        <Button type="submit" disabled={loading} className='bg-gray-900'>{loading? "submitting":"Submit"}</Button>
        <p className='text-white duration-100 ease-in-out'>{success}</p>
      </form>
    </Form>
        
                   
                  </div>
                  </motion.div>

    </motion.div>
  )
}

export default Page