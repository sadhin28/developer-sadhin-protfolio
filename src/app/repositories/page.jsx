"use client"
import useTitle from '@/hook/useTitle'
import Projects from '../components/Repositories'
export default function ProjectPage() {
   useTitle("REPOSITORIES")
  return (
   
    <div>
      <Projects/>
    </div>
  )
}
