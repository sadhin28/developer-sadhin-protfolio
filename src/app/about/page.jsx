"use client"
import useTitle from '@/hook/useTitle'
import React from 'react'
import About from '../components/About'

export default function AboutPage() {
  useTitle("ABOUT")
  return (
    <About></About>
  )
}
