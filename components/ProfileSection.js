import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";

export default function ProfileSection() {
  return (
    <section className="py-28" id="profile">
      <div className="container mx-auto px-10 2xl:p-0">
        <SectionTitle>Profile</SectionTitle>
        <SectionParagraph>Mengenal saya secara singkat.</SectionParagraph>
        <div className="flex flex-wrap lg:items-center md:items-start xl:w-9/12 mx-auto mt-10">
          <div className="md:w-5/12 px-16 w-full mb-10 md:mb-0">
            <img src="/profile.png" alt="gambar" className="w-full" />
          </div>
          <div className="md:w-7/12 w-full px-10">
            <p className="text-lg leading-relaxed">
              Hello everyone, my name is Riezkan Aprianda Firmansyah. I am Full Stack Developer and Network Engineer, now i have study bachelor degree in Bandung with Informatics Engineering Major. I have some skill in IT or my passion in IT is Programming and Networking.
            </p>
            <p className="text-lg mt-6 leadning-relaxed">
              I have some more certificate to, national & international. For example i have a MTCNA, CNNS, Web Development, Full Stack Javascript Developer, NSE, Subnetting, etc. My future is become to CTO in startup or company, and i hope my skill can be to finish my goal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
