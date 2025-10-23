"use client"
import React from 'react'
import MyScills from '../components/Myslills'
import useTitle from '@/hook/useTitle'

export default function Skills() {
  useTitle("MY SKILLS")
  return (
    <div>
       <MyScills></MyScills>
    </div>
  )
}
