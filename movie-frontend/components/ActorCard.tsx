import * as React from "react";
import {Actor} from "@/types";
import Link from "next/link";
import clsx from "clsx";

interface ActorCardProps extends React.HTMLAttributes<HTMLDivElement> {
    actor: Actor,
    className?: string,
    props?: any
}


const ActorCard = ({actor, className, ...props}: ActorCardProps) => (
    <div
        className={clsx("h-64 grid grid-rows-3 gap-8 p-4 border-4 border-slate-400", className)} {...props}>
        <h2 className={clsx("justify-start text-2xl py-2 leading-[1] tracking-tighter")}>{actor.name}</h2>
        <p className={clsx("text-sm py-2 justify-evenly leading-relaxed tracking-tight")}>{actor.bio}</p>
        <span className={clsx("text-sm py-2 justify-evenly leading-relaxed tracking-tight")}>{actor.birth_date}</span>
    </div>
);

export {ActorCard}
