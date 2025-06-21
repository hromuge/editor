"use client";

import {LucideIcon, Undo2Icon} from "lucide-react";
import {cn} from "@/lib/utils";

const ToolbarButton = (props: {
    onClick?: () => void;
    isActive?: boolean;
    icon: LucideIcon
}) => {
    return (
        <button onClick={props.onClick} className={cn(
            "text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80",
            props.isActive && "bg-neutral-200/80"
        )}>
            <props.icon className={"size-4"} />
        </button>
    );
}

const Toolbar = () => {
    const sections: {
        label: string,
        icon: LucideIcon,
        onClick: () => void,
        isActive?: boolean,
    }[][] = [
      [
          {
              label: "Undo",
              icon: Undo2Icon,
              onClick: () => console.log("Undo clicked"),
          }
      ]
    ];
    return (
        <div className={"bg-[#F1F4F9] px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center gap-x-0.5 overflow-x-auto"}>
            Toolbar {sections[0].map((item) => (
            <ToolbarButton key={item.label} {...item}></ToolbarButton>
        ))}
        </div>
    );
}
export default Toolbar;