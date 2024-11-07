'use client';

import { ComponentProvider } from "@/context/component.context";
import { NextUIProvider } from "@nextui-org/system";


export default function LayoutWithProvier({ children }: {children: React.ReactNode}) {

    return (
        <NextUIProvider>
            <ComponentProvider>
                {children}
            </ComponentProvider>
        </NextUIProvider>
    )

}