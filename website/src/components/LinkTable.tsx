import TableChart from "./TableChart";
import {Link} from "react-router-dom";
import React from "react";
import {Linktype} from "../types/linktype";
import "../componentStyling/LinkTable.css"

export function LinkTable({data}: {data: Array<Linktype>}){

    const rows = data.map(point => {
        var link;
        if (point.link.includes("https")) {
            link =  point.link
        } else {
            link =  `/current-projects/igem-bielefeld/${point.link}`
        }
        return ([
            point.title,
            <Link to={link}>Click here</Link>,
            <span className={`${point.tag}-tag tag`}>{point.tag}</span>
        ])
    })
    return(
        <TableChart
            headers={[{header: "Title", }, {header: "Link"}, {header: "Category"}]}
            rows={rows}
            headerPosition={"top"}
            bordered={true}
            striped={false}
            hover={true}
            sortable={true}
            responsive={true}

        />

    )
}
