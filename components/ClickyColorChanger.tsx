import React, { useState } from "react";

export interface ClickyColorChangerProps {}

export const ClickyColorChanger: React.FC<ClickyColorChangerProps> = ({}) => {
    const [bool, setBool] = useState(false);
    return (
        <div
            className={
                bool
                    ? "bg-red-500 p-8 border rounded-md text-black"
                    : "bg-white p-8 border rounded-md text-black"
            }
        >
            <div>This is a page</div>
            <a
                className={
                    "underline cursor-pointer border rounded-md px-2 py-1"
                }
                onClick={() => setBool((b) => !b)}
            >
                Click to change background color!
            </a>
        </div>
    );
};
