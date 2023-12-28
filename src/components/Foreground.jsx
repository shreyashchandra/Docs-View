import { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },

    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".4mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" },
    },

    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: "1mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue" },
    },

    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".3mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
  ];

  const ref = useRef(null);

  return (
    <>
      <div
        ref={ref}
        className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-7"
      >
        {data.map((item, index) => (
          <Card data={item} reffrence={ref} />
        ))}
      </div>
    </>
  );
};

export default Foreground;
