
import React from 'react'

import Dash from "./dashboard.module.css";
import { Link } from "react-router-dom";

const DashboardPost = ({ item }) => {

    return (
            <>
                <div className={Dash.post_item_title}>
                    <Link to ="#">{item.title}</Link>
                    <p>published sep 30</p>
                </div>
                <div className={Dash.post_item_count}>
                    <span><i className="far fa-heart"></i> {5}</span>
                    <span><i className="far fa-comment"></i> {6}</span>
                    <span><i className="far fa-eye"></i> {10}</span>
                </div>
                <div className={Dash.post_item_manage}>
                    <Link to="#">Manage</Link>
                    <Link to="#">Edit</Link>
                    <Link to="#"><i className="fas fa-ellipsis-h"></i></Link>
                </div>
            </>
       
    )
}

export { DashboardPost }
