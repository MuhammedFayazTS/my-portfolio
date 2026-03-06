import Projects from "@/components/projects/Projects";

const ProjectPage = () => {
    return (
        <main className="mx-auto w-full max-w-5xl px-6 pt-24">
            {/* Header */}
            <div className="mb-10 flex items-center gap-3">
                <h1
                    className="
          text-2xl font-semibold tracking-tight
          text-neutral-900 dark:text-white
        "
                >
                    Projects
                </h1>

                <div className="flex-1 h-px bg-neutral-200 dark:bg-neutral-800" />
            </div>

            {/* Projects Grid */}
            <Projects isSection={false} />
        </main>
    );
};

export default ProjectPage;