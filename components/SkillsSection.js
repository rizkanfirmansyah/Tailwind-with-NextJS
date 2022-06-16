import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";
import SkillCard from "./SkillCard";

export default function SkillsSection() {
  return (
    <section className="py-20 bg-primarygray" id="skills">
      <div className="container mx-auto px-10 2xl:p-0">
        <SectionTitle>Skills</SectionTitle>
        <SectionParagraph>Beberapa kemampuan saya</SectionParagraph>
        <div className="flex -mx-4 mt-20 flex-wrap">
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard name="Javascript" level="Lanjutan" image="/javascript.svg" imageClassName="h-16 rounded-full" />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard name="PHP" level="Lanjutan" image="/php.svg" imageClassName="h-16 rounded-full" />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard name="Laravel" level="Menengah" image="/laravel.svg" imageClassName="h-16" />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard name="Codeigniter" level="Menengah" image="/codeigniter.svg" imageClassName="h-16" />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard name="Github" level="Pemula" image="/github.svg" imageClassName="h-16" />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard name="Bash Shell Configuration" level="Menengah" image="/terminal.svg" imageClassName="h-16 rounded-full" />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard name="React JS" level="Pemula" image="/react.svg" imageClassName="h-16" />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard name="Bootstrap" level="Lanjutan" image="/bootstrap.svg" imageClassName="h-16 rounded-full" />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard name="Node JS" level="Menengah" image="/nodejs.svg" imageClassName="h-16" />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard name="Vue JS" level="Pemula" image="/vuejs.svg" imageClassName="h-16" />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard name="CSS" level="Lanjutan" image="/css.svg" imageClassName="h-16 rounded-full" />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard name="Nuxt JS" level="Pemula" image="/nuxtjs.svg" imageClassName="h-16" />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard name="SASS/SCSS" level="Pemula" image="/sass.svg" imageClassName="h-16" />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard name="Tailwind CSS" level="Pemula" image="/tailwind.svg" imageClassName="h-16 rounded-full" />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard name="Figma" level="Pemula" image="/figma.svg" imageClassName="h-16" />
          </div>
        </div>
      </div>
    </section>
  );
}
