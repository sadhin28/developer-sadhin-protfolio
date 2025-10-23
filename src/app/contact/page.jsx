"use client"
import useTitle from "@/hook/useTitle"
import ContactForm from "../components/Contact"

export default function ContactPage() {
  useTitle("CONTACT")
  return (
    <ContactForm/>
  )
}
