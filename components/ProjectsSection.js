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
                        <ProjectItem name="Web App Eskul" description="CRM & Web Management" image="/itm.png" link="https://itclubsmkn5bdg.com" />
                    </div>
                    <div className="w-full md:w-6/12 px-4 pb-8">
                        <ProjectItem name="Web App Landing Page & Dashboard" description="Web SIMS berbasis RPG E-Course & Class" image="/jcl.png" link="https://jacol.netlify.app" />
                    </div>
                    <div className="w-full md:w-6/12 px-4 pb-8">
                        <ProjectItem name="Gozhop Web Zoom" description="Web Olshop Zoom" image="/lsk.png" link="https://gozhop99.com" />
                    </div>
                    <div className="w-full md:w-6/12 px-4 pb-8">
                        <ProjectItem name="Web App LMS & SIMS" description="LMS & SIMS Management" image="/coba.png" />
                    </div>
                    <div className="w-full md:w-6/12 px-4 pb-8">
                        <ProjectItem name="Web App Management Gold" description="Web Management Buying, Selling, Mutation Gold" image="/mg.png" />
                    </div>
                    <div className="w-full md:w-6/12 px-4 pb-8">
                        <ProjectItem name="Web App" description="Web Aplikasi LMS, SIMS, Library, Sarana & Prasarana" image="/ss.png" />
                    </div>
                    <div className="w-full md:w-6/12 px-4 pb-8">
                        <ProjectItem name="Web App" description="Web Aplikasi Vaccine Online" image="/vln.png" />
                    </div>
                    <div className="w-full md:w-6/12 px-4 pb-8">
                        <ProjectItem name="Web App" description="Web Aplikasi ERP Pengolahan Roti & POS" image="/erp.png" />
                    </div>
                    <div className="w-full md:w-6/12 px-4 pb-8">
                        <ProjectItem name="Web App & Design" description="Web Aplikasi & Web Design E-Commerce" image="/olshp.png" link="https://amikplant.netlify.app/pages/e-comerse" />
                    </div>
                    <div className="w-full md:w-6/12 px-4 pb-8">
                        <ProjectItem name="Web Landing Page & Design" description="Web Landing page company profile" image="/cprl.png" link="https://amikplant.netlify.app" />
                    </div>
                    <div className="w-full md:w-6/12 px-4 pb-8">
                        <ProjectItem name="Web Landing Page & Design" description="Web Landing page company profile" image="/lpg.png" link="https://cixtyday.sagalait.com" />
                    </div>
                </div>
            </div>
        </section>
    );
};
