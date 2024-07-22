import { Link } from "react-router-dom";

function HomeAdmin() {
    return (
        <div className="h-full w-full pt-4">
            <div className="stats-section ml-8 flex justify-start gap-8">
                <div className="totalreg rounded-lg border border-slate-200 bg-white p-4 shadow-xl">
                    <h4 className="title text-center text-sm">
                        Total Registered
                    </h4>
                    <h2 className="text-center text-2xl font-semibold">32</h2>
                </div>
                <div className="totalevents rounded-lg border border-slate-200 bg-white p-4 shadow-xl">
                    <h4 className="title text-center text-sm">
                        Total Events Done
                    </h4>
                    <h2 className="text-center text-2xl font-semibold">12</h2>
                </div>
            </div>
            <div className="events-section m-4 ml-8 rounded-lg bg-white py-4 shadow-xl">
                <h2 className="title text-md text-md pb-3 pl-4 font-bold">
                    Ongoing Events
                </h2>
                <table className="ml-4 w-full text-left">
                    <tr className="font-light">
                        <th className="py-2 text-left text-sm font-medium text-gray-400">
                            Name
                        </th>
                        <th className="text-sm font-medium text-gray-400">
                            Type
                        </th>
                        <th className="text-sm font-medium text-gray-400">
                            Hours
                        </th>
                        <th className="text-sm font-medium text-gray-400">
                            Location
                        </th>
                        <th className="text-sm font-medium text-gray-400">
                            Volunteers
                        </th>
                    </tr>
                    <tr>
                        <th className="py-1 text-sm font-medium">
                            <Link
                                className="hover:underline"
                                to={"/admin/events/101"}
                            >
                                Blood Donation Drive
                            </Link>
                        </th>
                        <th className="text-sm font-medium">Long Event</th>
                        <th className="text-sm font-medium">4 hrs</th>
                        <th className="text-sm font-medium">Andheri, Mumbai</th>
                        <th className="text-sm font-medium">12</th>
                    </tr>
                    <tr>
                        <th className="py-1 text-sm font-medium">
                            <Link
                                className="hover:underline"
                                to={"/admin/events/101"}
                            >
                                Community Clean-Up
                            </Link>
                        </th>
                        <th className="text-sm font-medium">Medium Event</th>
                        <th className="text-sm font-medium">3 hrs</th>
                        <th className="text-sm font-medium">
                            Juhu Beach, Mumbai
                        </th>
                        <th className="text-sm font-medium">30</th>
                    </tr>
                    <tr>
                        <th className="py-1 text-sm font-medium">
                            <Link
                                className="hover:underline"
                                to={"/admin/events/101"}
                            >
                                Food Distribution
                            </Link>
                        </th>
                        <th className="text-sm font-medium">Short Event</th>
                        <th className="text-sm font-medium">2 hrs</th>
                        <th className="text-sm font-medium">Dadar, Mumbai</th>
                        <th className="text-sm font-medium">23</th>
                    </tr>
                </table>
            </div>

            <div className="events-section m-4 ml-8 rounded-lg bg-white py-4 shadow-xl">
                <h2 className="title text-md text-md pb-3 pl-4 font-bold">
                    New Requests
                </h2>
                <table className="ml-4 w-4/5 border-separate text-left">
                    <tr className="font-light">
                        <th className="py-2 text-left text-sm font-medium text-gray-400">
                            Name
                        </th>
                        <th className="text-sm font-medium text-gray-400">
                            Accept
                        </th>
                        <th className="text-sm font-medium text-gray-400">
                            Reject
                        </th>
                    </tr>
                    <tr>
                        <th className="py-1 text-sm font-medium">
                            Aditi Thakore
                        </th>
                        <th className="text-sm font-medium">
                            <button className="rounded bg-green-500 px-2 py-1 text-white">
                                Accept
                            </button>
                        </th>
                        <th className="text-sm font-medium">
                            <button className="rounded bg-red-500 px-2 py-1 text-white">
                                Reject
                            </button>
                        </th>
                    </tr>
                    <tr>
                        <th className="py-1 text-sm font-medium">
                            Dharmesh Mishra
                        </th>
                        <th className="text-sm font-medium">
                            <button className="rounded bg-green-500 px-2 py-1 text-white">
                                Accept
                            </button>
                        </th>
                        <th className="text-sm font-medium">
                            <button className="rounded bg-red-500 px-2 py-1 text-white">
                                Reject
                            </button>
                        </th>
                    </tr>
                    <tr>
                        <th className="py-1 text-sm font-medium">
                            Lalit Chandora
                        </th>
                        <th className="text-sm font-medium">
                            <button className="rounded bg-green-500 px-2 py-1 text-white">
                                Accept
                            </button>
                        </th>
                        <th className="text-sm font-medium">
                            <button className="rounded bg-red-500 px-2 py-1 text-white">
                                Reject
                            </button>
                        </th>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default HomeAdmin;
