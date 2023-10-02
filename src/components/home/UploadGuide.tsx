"use client";

import Tick from "@/components/ui/svgs/Tick";
import Cross from "@/components/ui/svgs/Cross";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function UploadGuide() {
    const uploadGuides = [
        "The shortest side of the photo size should be greater than 512 px.",
        "Has clear, complete, human features",
        "The face area should not be too small (less than 4% of the photo) or too large (greater than 50% of the photo).",
        "Avoid having the same clothes or the same scenes in your uploads.",
        "Make sure there is only one person in each photo.",
        "The file names of the photos should not be duplicated.",
    ];
    const goodBad = [
        {
            icon: <Tick />,
            title: "Good",
            description:
                "Same person, close up shots (above the shoulder is best), different outfits and scenes, various facial expressions, different angles of facial tilt (five senses still intact and clear).",
            images: [
                "https://static.fotor.com/app/minitools/avatar/static/media/good1.e2f15467.jpg",
                "https://static.fotor.com/app/minitools/avatar/static/media/good2.f6c5a01d.jpg",
                "https://static.fotor.com/app/minitools/avatar/static/media/good3.9e8ef345.jpg",
                "https://static.fotor.com/app/minitools/avatar/static/media/good4.1b1c20d5.jpg",
                "https://static.fotor.com/app/minitools/avatar/static/media/good5.54c89aa2.jpg",
                "https://static.fotor.com/app/minitools/avatar/static/media/good6.6114d677.jpg",
                "https://static.fotor.com/app/minitools/avatar/static/media/good7.ed881ad2.jpg",
            ],
        },
        {
            icon: <Cross />,
            title: "Bad",
            description:
                "Multiple people, full body shots, covering the face, wearing sunglasses, stream of consciousness pictures, nudity, animals, pictures of you as a child.",
            images: [
                "https://static.fotor.com/app/minitools/avatar/static/media/bad6.439c088f.jpg",
                "https://static.fotor.com/app/minitools/avatar/static/media/bad7.8561c460.jpg",
                "https://static.fotor.com/app/minitools/avatar/static/media/bad1.59e6462c.jpg",
                "https://static.fotor.com/app/minitools/avatar/static/media/bad2.6cd43c7b.jpg",
                "https://static.fotor.com/app/minitools/avatar/static/media/bad3.624cf187.jpg",
                "https://static.fotor.com/app/minitools/avatar/static/media/bad4.9042ccac.jpg",
                "https://static.fotor.com/app/minitools/avatar/static/media/bad5.802fc3f4.jpg",
            ],
        },
    ];
    return (
        <div
            className={cn(
                "relative max-h-[70vh] overflow-scroll no-scrollbar bg-neutral-800 px-4 rounded-md",
                "before:sticky before:block before:left-0 before:right-0 before:top-0 before:w-full before:h-8 before:bg-neutral-800",
                "after:sticky after:block after:left-0 after:right-0 after:bottom-0 after:w-full after:h-8 after:bg-neutral-800"
            )}
        >
            <h3 className="text-2xl mb-3">Photo Uploading Guide</h3>
            <ol className="mb-4">
                {uploadGuides.map((text, i) => (
                    <li key={i} className="mb-2 flex items-center">
                        <div className="mr-2 rounded-full w-4 h-4 inline-flex justify-center items-center bg-fuchsia-500 text-xs">
                            {i + 1}
                        </div>
                        <span>{text}</span>
                    </li>
                ))}
            </ol>
            <h4 className="font-bold mb-4">Good & Bad Examples:</h4>
            {goodBad.map((data, i) => (
                <React.Fragment key={i}>
                    <div className="flex items-start gap-2 mb-3">
                        {data.icon}
                        <h5 className="text-sm">{data.title}</h5>
                        <p className="text-xs">{data.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-[6px] mb-4">
                        {data.images.map((img, i) => (
                            <Image
                                src={img}
                                width={170}
                                height={170}
                                alt={`${data.title} Image ${i}`}
                                className="rounded-lg"
                            />
                        ))}
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
}
