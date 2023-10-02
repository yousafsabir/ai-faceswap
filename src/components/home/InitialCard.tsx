import Image from "next/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button"

interface IInitialCardProps {
    headerImg: string;
    heading: string;
}

export default function InitialCard({ headerImg, heading }: IInitialCardProps) {
    return (
        <Card className="bg-neutral-800 hover:bg-neutral-700 border-0 cursor-pointer">
            <CardHeader className="p-4">
                <Image
                    src={headerImg}
                    width={375}
                    height={295}
                    className="object-cover object-center"
                    alt="Header Image"
                />
            </CardHeader>
            <CardContent>
                <h3 className="text-center text-white">{heading}</h3>
            </CardContent>
            <CardFooter>
                <Button className="inline-block mx-auto bg-fuchsia-600 hover:bg-fuchsia-700">Select</Button>
            </CardFooter>
        </Card>
    );
}
