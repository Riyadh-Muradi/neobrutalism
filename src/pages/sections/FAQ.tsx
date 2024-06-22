import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section className="border-2 border-black bg-white py-12 font-base">
      <h2 className="m1300:text-3xl m700:text-2xl m500:text-xl mb-8 text-center text-4xl font-heading">
        Frequently asked questions
      </h2>

      <div className="mx-auto grid w-[1024px] max-w-full">
        <Accordion
          className="space-y-2 text-base sm:text-lg"
          type="single"
          collapsible
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>1</AccordionTrigger>
            <AccordionContent className="text-sm sm:text-base">
              1
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>2 </AccordionTrigger>
            <AccordionContent className="text-sm sm:text-base">
              2
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>3 </AccordionTrigger>
            <AccordionContent className="text-sm sm:text-base">
              3{" "}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>4</AccordionTrigger>
            <AccordionContent className="text-sm sm:text-base">
              4{" "}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;