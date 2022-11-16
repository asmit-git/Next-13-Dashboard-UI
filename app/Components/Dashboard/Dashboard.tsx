import Image from "next/image"
import profileImage from "../../../public/profile.jpg";
import { AiFillPieChart, AiFillHome } from "react-icons/ai"
import { BsFillFileBarGraphFill, BsArrowDownUp, BsWalletFill, BsFillCartCheckFill } from "react-icons/bs"
import { BiLogOut } from "react-icons/bi"
import { IoToggleOutline, IoTicket } from "react-icons/io5"
import masterCardLogo from "../../../public/mastercard.png"

function Dashboard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
            <div className="flex flex-col bg-white rounded-lg -mt-20 p-8 mx-4 drop-shadow-2xl md:col-span-1">
                <ul className="mx-auto text-center">
                    <li>
                        <h1 className="text-4xl font-bold text-center">Zence</h1>
                    </li>
                    <li>
                        <Image
                            src={profileImage}
                            alt="profile picture"
                            width={100}
                            height={100}
                            className="rounded-full mt-5" />
                    </li>
                    <li>
                        <p className="text-sm mt-6 text-zinc-700">Welcome back</p>
                        <h3 className="font-semibold">Christopher Simora</h3>
                    </li>
                    <li className="mt-6">
                        <h1 className="text-3xl font-bold">
                            $34,123
                        </h1>
                        <p className="text-sm text-zinc-700">Monthly budget</p>
                    </li>
                    <li className="flex space-x-6 mt-10">
                        <div><AiFillPieChart size={20} /></div>
                        <div className="font-bold text-sm">Dashboard</div>
                    </li>
                    <li className="flex space-x-6 mt-4 text-zinc-400">
                        <div><BsFillFileBarGraphFill size={20} /></div>
                        <div className="font-bold text-sm">Investments</div>
                    </li>
                    <li className="flex space-x-6 mt-4 text-zinc-400">
                        <div><BsArrowDownUp size={20} /></div>
                        <div className="font-bold text-sm">Transactions</div>
                    </li>
                    <li className="flex space-x-6 mt-4 text-zinc-400">
                        <div><BsWalletFill size={20} /></div>
                        <div className="font-bold text-sm">Wallet</div>
                    </li>
                    <li className="flex space-x-6 mt-32 text-zinc-400">
                        <div><BiLogOut size={20} /></div>
                        <div className="font-bold text-sm">Signout</div>
                    </li>
                </ul>
            </div>
            <div className="col-span-2 py-10 mx-auto">
                <h1 className="text-4xl">Dashboard</h1>
                {/* Card */}
                <div className="bg-white rounded-lg w-full p-6 mt-6 drop-shadow-2xl">
                    <div className="flex space-x-10 items-center justify-between">
                        <h3>Available Balance</h3>
                        <h3>Credit</h3>
                        <IoToggleOutline size={20} />
                    </div>
                    <div className="mt-6">
                        <h1 className="text-4xl font-medium">
                            $12,234
                        </h1>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                        <div className="flex space-x-10">
                            <h1 className="text-sm">
                                ***
                            </h1>
                            <span>456</span>
                        </div>
                        <Image src={masterCardLogo} width={40} alt="mastercard logo" className="right-0" />
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-6">
                    <div className="flex justify-between">
                        <h3>Internet Payment</h3>
                        <h3>$1200 / 3000</h3>
                    </div>
                    <div className="h-[6px] bg-white rounded mt-6">
                        <div className="bg-black w-3/4 h-[5px] rounded"></div>
                    </div>
                </div>

                {/* Income */}
                <div className="mt-6 flex space-x-2">
                    <div className="border-2 px-4 py-2 rounded w-full">
                        <h3>Income</h3>
                        <h2 className="font-semibold">$5700</h2>
                    </div>
                    <div className="border-2 px-4 py-2 rounded bg-white w-full">
                        <h3>Spending</h3>
                        <h2 className="font-semibold">$2254</h2>
                    </div>
                </div>

                {/* Spendings */}
                <div className="mt-6">
                    <div className="flex justify-between items-center">
                        <h2 className="font-semibold">Latest Spendings</h2>
                        <p>View All</p>
                    </div>
                    <hr className="mt-8" />
                    <div className="mt-4 space-y-4">
                        {/* First Spending */}
                        <div className="flex justify-between">
                            <div className="flex items-center space-x-2">
                                <BsFillCartCheckFill />
                                <div className="flex flex-col">
                                    <p>Online Store</p>
                                    <p className="text-[10px]">May 23, 2022 at 8:20PM</p>
                                </div>
                            </div>
                            <div className="font-semibold">-$32.50</div>
                        </div>
                        {/* second Spending */}
                        <div className="flex justify-between">
                            <div className="flex items-center space-x-2">
                                <AiFillHome />
                                <div className="flex flex-col">
                                    <p>Housekeeping</p>
                                    <p className="text-[10px]">May 23, 2022 at 8:20PM</p>
                                </div>
                            </div>
                            <div className="font-semibold">-$4.20</div>
                        </div>
                        {/* third Spending */}
                        <div className="flex justify-between">
                            <div className="flex items-center space-x-2">
                                <IoTicket />
                                <div className="flex flex-col">
                                    <p>Tickets</p>
                                    <p className="text-[10px]">May 23, 2022 at 8:20PM</p>
                                </div>
                            </div>
                            <div className="font-semibold">-$100.29</div>
                        </div>
                    </div>
                </div>


            </div>
            <div className="col-span-2">
                {/* Third Colum Goes here */}
            </div>
        </div>
    )
}

export default Dashboard