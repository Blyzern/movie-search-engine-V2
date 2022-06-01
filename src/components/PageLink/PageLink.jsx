import React from "react";
import { Link } from "./PageLink";

export const PageLink = ({linkRef, content}) => {
    return(
        <Link href={linkRef}>{content}</Link>
        );
}