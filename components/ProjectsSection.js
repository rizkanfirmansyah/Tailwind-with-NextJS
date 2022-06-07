import ProjectItem from "./ProjectItem";
import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";

export default function ProjectsSection() {
    return (
        <section className="py-28" id="projects"> 
            <div className="container mx-auto px-10 2xl:p-0">
                <SectionTitle>Projects</SectionTitle>
                <SectionParagraph>Beberapa project yang saya buat</SectionParagraph>
                <div className="flex -mx-4 mt-20 flex-wrap">
                    <div className="w-full md:w-6/12 px-4 pb-8">
                        <ProjectItem name="Golden Gate" description="Real State Management" image="/ggm.jpg" />
                    </div>
                    <div className="w-full md:w-6/12 px-4 pb-8">
                        <ProjectItem name="Lo Ging" description="Loging Web Management" image="/ir.jpg" />
                    </div>
                    <div className="w-full md:w-6/12 px-4 pb-8">
                        <ProjectItem name="Lo Ging" description="Loging Web Management" image="/ir.jpg" />
                    </div>
                    <div className="w-full md:w-6/12 px-4 pb-8">
                        <ProjectItem name="Golden Gate" description="Real State Management" image="/ggm.jpg" />
                    </div>
                </div>
            </div>
        </section>
    );
};
