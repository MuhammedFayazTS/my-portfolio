import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { education, experiences } from "@/content/data";
import Timeline from "./Timeline";

const ExperienceAndEducationTabs = () => {
    return (
        <Tabs defaultValue="experience" className="w-full mt-10">

            {/* Tab Switcher */}
            <div className="flex justify-center mb-10">
                <TabsList
                    className="
          grid grid-cols-2
          w-full max-w-md
          rounded-xl
          bg-neutral-100 dark:bg-neutral-900
          p-1
          border border-neutral-200 dark:border-neutral-800
        "
                >
                    <TabsTrigger
                        value="experience"
                        className="
            rounded-lg
            data-[state=active]:bg-white
            dark:data-[state=active]:bg-neutral-800
            data-[state=active]:shadow
            transition-all
            duration-300
          "
                    >
                        Experience
                    </TabsTrigger>

                    <TabsTrigger
                        value="education"
                        className="
            rounded-lg
            data-[state=active]:bg-white
            dark:data-[state=active]:bg-neutral-800
            data-[state=active]:shadow
            transition-all
            duration-300
          "
                    >
                        Education
                    </TabsTrigger>
                </TabsList>
            </div>

            {/* Content */}
            <TabsContent
                value="experience"
                className="animate-in fade-in-50 duration-500"
            >
                <Timeline data={experiences} />
            </TabsContent>

            <TabsContent
                value="education"
                className="animate-in fade-in-50 duration-500"
            >
                <Timeline data={education} />
            </TabsContent>
        </Tabs>
    );
};

export default ExperienceAndEducationTabs;