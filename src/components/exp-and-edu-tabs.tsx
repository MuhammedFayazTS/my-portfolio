import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Timeline from './timeline'
import { education, experiences } from '@/content/data'


const ExperienceAndEducationTabs = () => {
    return (
        <Tabs defaultValue="experience" className="w-full">
            <TabsList className="flex justify-center">
                <TabsTrigger className='flex-1' value="experience">Experience</TabsTrigger>
                <TabsTrigger className='flex-1' value="education">Education</TabsTrigger>
            </TabsList>
            <TabsContent value="experience">
                <Timeline data={experiences} />
            </TabsContent>
            <TabsContent value="education">
                <Timeline data={education} />
            </TabsContent>
        </Tabs>

    )
}

export default ExperienceAndEducationTabs