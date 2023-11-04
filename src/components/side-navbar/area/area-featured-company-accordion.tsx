"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useState } from "react";
import { BsFillSquareFill } from "react-icons/bs";

export function AreaFeaturedCompanyAccordion() {
  const [selectedValue, setSelectedValue] = useState<any>("");

  const tmpComapntArray = [
    { name: "A Company pvt ltd", color: "#32a852", value: "acompany" },
    { name: "B Company pvt ltd", color: "#d11f31", value: "bcompany" },
  ];

  return (
    <Accordion type="single" collapsible className="w-full py-0.1">
      <AccordionItem value="item-1">
        <AccordionTrigger className="mt-2 flex h-10 w-full rounded-md border border-black bg-white dark:border-white dark:bg-black px-3 py-2 text-sm">
          Featured Companies
        </AccordionTrigger>
        <AccordionContent>
          <Command className="rounded-lg border shadow-md">
            <CommandInput placeholder="Type a company name..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="">
                {tmpComapntArray.map((c) => (
                  <CommandItem
                    className="flex gap-2"
                    value={c.value}
                    onSelect={(value) => setSelectedValue(value)}
                  >
                    <BsFillSquareFill style={{ color: `${c.color}` }} />
                    <span>{c.name}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
          {/* <Command className="rounded-lg border shadow-md">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                {tmpComapntArray.map((c) => (
                  <CommandItem className="flex gap-1" value={selectedValue}>
                    <BsFillSquareFill style={{ color: `${c.color}` }} />
                    <span>{c.name}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command> */}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
