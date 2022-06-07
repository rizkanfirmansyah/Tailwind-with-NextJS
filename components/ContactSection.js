import Button from "./Button";
import ContactItem from "./ContactItem";
import Field from "./Field";
import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";

export default function ContactSection() {
  return (
    <section className="container mx-auto px-10 2xl:p-0" id="contact">
      <div className="bg-primarygray flex flex-wrap rounded-lg">
        <div className="w-full md:w-6/12 md:border-r border-b border-primarygray-200">
          <div className="lg:py-16 lg:px-20 md:p-14 p-10">
            <SectionTitle left>Contact</SectionTitle>
            <SectionParagraph left>Beberapa cara menghubungi saya</SectionParagraph>

            <ContactItem label="Mail" icon="/mail.svg" value="hi@sagalait.com" className="mt-10" />
            <ContactItem label="Phone" icon="/phone.svg" value="08983901552" className="mt-6" />
            <ContactItem label="Twitter" icon="/twitter.svg" value="@rizkanafri" className="mt-6" />
          </div>
        </div>
        <div className="w-full md:w-6/12">
          <form action="" className="lg:py-16 lg:px-20 md:p-14 p-10">
            <div className="flex flex-wrap -mx-4">
              <div className="lg:w-6/12 w-full px-4">
                <Field name="name" label="Name" />
              </div>
              <div className="lg:w-6/12 w-full px-4">
                <Field name="email" label="Email" />
              </div>
            </div>
            <Field name="subject" label="Subject" />
            <Field name="message" label="Message" type="textarea" className="h-40" />
            <div className="text-right">
              <Button variant="black" className="">
                Send
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
