
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { div } from 'react-router-dom'
import Dash from './dashboard.module.css'
import { DashboardPost } from './DashboardPost'
import {Footer} from '../Footer/Footer'
import { Navbar } from '../Navbar/Navbar'

const Dashboard = () => {

    const [UserPostData, setUserPostData] = useState([])

    const post = [
        {
            count: 20,
            title: 'total post reaction'
        },
        {
            count: '< 500',
            title: 'total post view'
        },
        {
            count: 0,
            title: 'listing created'
        },
        {
            count: 0,
            title: 'credit available'
        }
    ]

    const sidebar = [
        {
            title: 'Post',
            to: '/post',
            count: 5

        },
       
       
        {
            title: 'Following Tags',
            to: '/followings_tags',
            count: 5

        },
        {
            title: 'Following Users',
            to: '/following_users',
            count: 5

        },
       
      
    ]

    const fetchUserPostData = (title) => {
        // axios.get(`http://jsonplaceholder.typicode.com/posts`)
        //     .then(res => {
        //         setUserPostData(res.data)
        //         // console.log(res.data)
        //     })
        //     .catch((err) => {
        //         console.log(err.message)
        //     })
    }

    useEffect(() => {
        fetchUserPostData()
        // return () => {
        //     cleanup
        // }
    }, [])


    return (
        <>
        <Navbar/>
            <section className={Dash.dash_section}>
                <div className={Dash.main}>
                    <div className={Dash.heading}>
                        <h2>Dashboard</h2>
                    </div>
                    <div className={Dash.card_container}>
                        {
                            post.map((item, index) => (
                                <div className={Dash.card_item} key={index}>
                                    <h1>{item.count}</h1>
                                    <p>{item.title}</p>

                                </div>
                            ))
                        }
                    </div>
                </div>

            </section>



            <section className={Dash.dash_section}>
                <div className={Dash.sidebar_main}>
                    <div className={Dash.sidebar_container}>
                      
                                <div >
                                    <div className="sidebar_item" >
                                        <p>Post</p>
                                        <button>4</button>
                                    </div>
                                </div>
                           
                    </div>


                    <div className={Dash.post_main}>
                        <div className={Dash.select_container}>
                            <h3>Posts</h3>
                           {
                               UserPostData.length == 0 ? ''
                            :<select name="" id="">
                                <option value="Recently Created">Recently Created</option>
                                <option value="Recently Published">Recently Published</option>
                                <option value="Most Views">Most Views</option>
                                <option value="Most Reactions">Most Reactions</option>
                                <option value="Most Comments">Most Comments</option>
                            </select>
                            }
                        </div>
                        {
                            UserPostData.length == 0?
                            <div className={Dash.post_blank}>
                               <p>
                               <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--XHE_XeFn--/c_imagga_scale,f_auto,fl_progressive,q_auto,w_300/https://dev-to-uploads.s3.amazonaws.com/i/y5767q6brm62skiyywvc.png" alt="" />
                               </p>
                               <p>This is where you can manage your posts, but you haven't written anything yet.</p>
                               <div to="/new">Write your first post now</div>

                            </div>
                       
                        :<div className={Dash.post_container}>
                            {
                                UserPostData.map((item, index) => (
                                    <div className={Dash.post_item} key={index}>
                                        <DashboardPost item={item} />
                                    </div>
                                ))
                            }

                        </div>
                        }

                    </div>

                </div>

            </section>

            <Footer/>
        </>
    )
}

export { Dashboard }
