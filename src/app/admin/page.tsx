"use client";
import TvImage from '@/img/tv.png';
import { GiCubeforce, GiConfirmed } from "react-icons/gi";
import { GrCart } from "react-icons/gr";
import { TbCategory2, TbBrandReact, TbDeviceAnalytics, TbClipboardList, TbUserHeart } from "react-icons/tb";
import { MdPendingActions, MdCancel } from "react-icons/md";
import { FaSyncAlt, FaEye } from "react-icons/fa";
import { FaTruckFast, FaMoneyBillTrendUp } from "react-icons/fa6";
import { AiOutlineFileDone } from "react-icons/ai";
import { LuTimerReset } from "react-icons/lu";
import { HiDownload } from "react-icons/hi";
import { SlBadge } from "react-icons/sl";
import '@/css/DashboardAdmin.css';

export default function Dashboard() {
    return (
        <div className="dashboard-page">
            <div className='overview'>
                <div className='overview-card'>
                    <div className='card-text'>
                        <span>50</span>
                        <p>TOTAL PRODUCTS</p>
                        <div className='icon-container'>
                            <GiCubeforce />
                        </div>
                    </div>
                </div>
                <div className='overview-card2'>
                    <div className='card-text'>
                        <span>50</span>
                        <p>TOTAL ORDERS</p>
                        <div className='icon-container'>
                            <GrCart />
                        </div>
                    </div>
                </div>
                <div className='overview-card3'>
                    <div className='card-text'>
                        <span>50</span>
                        <p>TOTAL CATEGORIES</p>
                        <div className='icon-container'>
                            <TbCategory2 />
                        </div>
                    </div>
                </div>
                <div className='overview-card4'>
                    <div className='card-text'>
                        <span>50</span>
                        <p>TOTAL BRANDS</p>
                        <div className='icon-container'>
                            <TbBrandReact />
                        </div>
                    </div>
                </div>
            </div>

            <div className="order-analytics">
                <div className="title-analytics">
                    <TbDeviceAnalytics />
                    <h2>Order Analytics</h2>
                </div>
                <div className="order-card-container">
                    <div className="order-card">
                        <div className="order-status">
                            <div className="status-text">
                                <MdPendingActions />
                                <span>Pending</span>
                            </div>
                            <div className="count-container">
                                <span>20</span>
                            </div>
                        </div>
                    </div>
                    <div className="order-card">
                        <div className="order-status">
                            <div className="status-text">
                                <GiConfirmed />
                                <span>Confirmed</span>
                            </div>
                            <div className="count-container">
                                <span>20</span>
                            </div>
                        </div>
                    </div>
                    <div className="order-card">
                        <div className="order-status">
                            <div className="status-text">
                                <FaSyncAlt />
                                <span>Processing</span>
                            </div>
                            <div className="count-container">
                                <span>20</span>
                            </div>
                        </div>
                    </div>
                    <div className="order-card">
                        <div className="order-status">
                            <div className="status-text">
                                <FaTruckFast />
                                <span>On the way</span>
                            </div>
                            <div className="count-container">
                                <span>20</span>
                            </div>
                        </div>
                    </div>
                    <div className="order-card">
                        <div className="order-status">
                            <div className="status-text">
                                <AiOutlineFileDone />
                                <span>Pending</span>
                            </div>
                            <div className="count-container">
                                <span>20</span>
                            </div>
                        </div>
                    </div>
                    <div className="order-card">
                        <div className="order-status">
                            <div className="status-text">
                                <MdCancel />
                                <span>Cancelled</span>
                            </div>
                            <div className="count-container">
                                <span>20</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="order-sum">
                <div className="sum-content">
                    <div className="title-order">
                        <TbClipboardList />
                        <h2>Orders Summary</h2>
                    </div>
                    <div className="order-timeframe">
                        <LuTimerReset />
                        <span>Latest 10 Orders</span>
                    </div>
                </div>
                <div className="order-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Qty</th>
                                <th>Date</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#1001</td>
                                <td>3</td>
                                <td>2024/10/19</td>
                                <td>LKR 2000.00</td>
                                <td className="table-status">Shipped</td>
                                <td><button className="action-view"><FaEye /></button><button className="action-download"><HiDownload /></button></td>
                            </tr>
                            <tr>
                                <td>#1001</td>
                                <td>3</td>
                                <td>2024/10/19</td>
                                <td>LKR 2000.00</td>
                                <td className="table-status">Shipped</td>
                                <td><button className="action-view"><FaEye /></button><button className="action-download"><HiDownload /></button></td>
                            </tr>
                            <tr>
                                <td>#1001</td>
                                <td>3</td>
                                <td>2024/10/19</td>
                                <td>LKR 2000.00</td>
                                <td className="table-status">Shipped</td>
                                <td><button className="action-view"><FaEye /></button><button className="action-download"><HiDownload /></button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="product-analy">
                <div className="top-sell">
                    <div className="title-product">
                        <FaMoneyBillTrendUp />
                        <h2>Top Selling Products</h2>
                    </div>
                    <div className="card-product">
                        <div className='card-content'>
                        <div className="img-card">
                            <img src={TvImage} alt='product-image' />
                        </div>
                        <div className="product-det">
                            <span>TV</span>
                            <p>Rating: 5.0</p>
                        </div>
                        <div className='sold-amount'>
                            <span>Sold: 50</span>
                        </div>
                        </div>
                    </div>
                    <div className="card-product">
                        <div className='card-content'>
                        <div className="img-card">
                            <img src={TvImage} alt='product-image' />
                        </div>
                        <div className="product-det">
                            <span>TV</span>
                            <p>Rating: 5.0</p>
                        </div>
                        <div className='sold-amount'>
                            <span>Sold: 50</span>
                        </div>
                        </div>
                    </div>
                    <div className="card-product">
                        <div className='card-content'>
                        <div className="img-card">
                            <img src={TvImage} alt='product-image' />
                        </div>
                        <div className="product-det">
                            <span>TV</span>
                            <p>Rating: 5.0</p>
                        </div>
                        <div className='sold-amount'>
                            <span>Sold: 50</span>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='second-section'>
                    <div className='top-rating'>
                        <div className='title-product'>
                            <SlBadge />
                            <h2>Top Rating Products</h2>
                        </div>
                        <div className='card-product'>
                            <div className='card-content'>
                                <div className='img-card'>
                                    <img src={TvImage} alt='product-image' />
                                </div>
                                <div className='product-det'>
                                    <span>TV</span>
                                    <p>Rating: 5.0</p>
                                </div>
                                <div className='sold-amount'>
                                    <span>Sold: 50</span>
                                </div>
                            </div>
                        </div>
                        <div className='card-product'>
                            <div className='card-content'>
                                <div className='img-card'>
                                    <img src={TvImage} alt='product-image' />
                                </div>
                                <div className='product-det'>
                                    <span>TV</span>
                                    <p>Rating: 5.0</p>
                                </div>
                                <div className='sold-amount'>
                                    <span>Sold: 50</span>
                                </div>
                            </div>
                        </div>
                        <div className='card-product'>
                            <div className='card-content'>
                                <div className='img-card'>
                                    <img src={TvImage} alt='product-image' />
                                </div>
                                <div className='product-det'>
                                    <span>TV</span>
                                    <p>Rating: 5.0</p>
                                </div>
                                <div className='sold-amount'>
                                    <span>Sold: 50</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='top-rating1'>
                        <div className='title-product'>
                            <TbUserHeart />
                            <h2>Most Favorite Products</h2>
                        </div>
                        <div className='card-product'>
                            <div className='card-content'>
                                <div className='img-card'>
                                    <img src={TvImage} alt='product-image' />
                                </div>
                                <div className='product-det'>
                                    <span>TV</span>
                                    <p>Rating: 5.0</p>
                                </div>
                                <div className='sold-amount'>
                                    <span>Sold: 50</span>
                                </div>
                            </div>
                        </div>
                        <div className='card-product'>
                            <div className='card-content'>
                                <div className='img-card'>
                                    <img src={TvImage} alt='product-image' />
                                </div>
                                <div className='product-det'>
                                    <span>TV</span>
                                    <p>Rating: 5.0</p>
                                </div>
                                <div className='sold-amount'>
                                    <span>Sold: 50</span>
                                </div>
                            </div>
                        </div>
                        <div className='card-product'>
                            <div className='card-content'>
                                <div className='img-card'>
                                    <img src={TvImage} alt='product-image' />
                                </div>
                                <div className='product-det'>
                                    <span>TV</span>
                                    <p>Rating: 5.0</p>
                                </div>
                                <div className='sold-amount'>
                                    <span>Sold: 50</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}