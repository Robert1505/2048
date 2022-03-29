import React, { useState } from "react";
import "./Cell.css";

type Props = {
    value: string;
};

export default function ({ value }: Props) {
    return <div className={`cell cell-${value}`}>{value}</div>;
}
