import React from "react";
import {
  Container,
  AccordionBody,
  AccordionItem,
  AccordionHeader,
  UncontrolledAccordion,
} from "reactstrap";

function Resources() {

  return (
    <>
      <div id="resources">
    <br />
    <br />
    <br />
        <Container className="eight-section mt-1">
          <h5 className="text-center">Frequently Asked Question</h5>
          <br />
          <h2 className="text-center">
            <b>Quick Insightful Information</b>
          </h2>
          <br />
          <br />
          <UncontrolledAccordion stayOpen>
            <AccordionItem>
              <AccordionHeader targetId="1">
                <p>What is Mance for and how does it work?</p>
              </AccordionHeader>
              <AccordionBody accordionId="1">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga.
              </AccordionBody>
            </AccordionItem>
            <br />
            <AccordionItem>
              <AccordionHeader targetId="2">
                How do I onboard my multiple organization on mance?
              </AccordionHeader>
              <AccordionBody accordionId="2">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga.
              </AccordionBody>
            </AccordionItem>
            <br />
            <AccordionItem>
              <AccordionHeader targetId="3">
                How do I create and manage subsidiary to my company?
              </AccordionHeader>
              <AccordionBody accordionId="3">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga.
              </AccordionBody>
            </AccordionItem>
            <br />
            <AccordionItem>
              <AccordionHeader targetId="4">
                Is it possible to activate and deactivate a branch when created?
              </AccordionHeader>
              <AccordionBody accordionId="4">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga.
              </AccordionBody>
            </AccordionItem>
            <br />
            <AccordionItem>
              <AccordionHeader targetId="5">
                How do i add employees to my company?
              </AccordionHeader>
              <AccordionBody accordionId="5">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga.
              </AccordionBody>
            </AccordionItem>
          </UncontrolledAccordion>
        </Container>
      </div>
    </>
  );
}

export default Resources;
