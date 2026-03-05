import { useState } from "react";
import { MdOutlineDateRange } from "react-icons/md"

const tickets = [
    {
        "id": 1,
        "title": "Login Issues – Can't Access Account",
        "description": "Customer is unable to log in to their account. They've tried resetting their password multiple times but still can't get in.",
        "customer": "John Smith",
        "priority": "High",
        "status": "open",
        "createdAt": "2024-01-15"
    },
    {
        "id": 2,
        "title": "Payment Failed – Card Declined",
        "description": "Customer attempted to pay using Visa ending 1234 but the payment keeps failing despite sufficient balance.",
        "customer": "Sarah Johnson",
        "priority": "High",
        "status": "open",
        "createdAt": "2024-01-16"
    },
    {
        "id": 3,
        "title": "Unable to Download Invoice",
        "description": "Customer cannot download their January invoice from the billing section. The download button is not responding.",
        "customer": "Michael Brown",
        "priority": "Medium",
        "status": "open",
        "createdAt": "2024-01-17"
    },
    {
        "id": 4,
        "title": "Incorrect Billing Address",
        "description": "Customer's billing address shows a different city. They updated it but it still displays the old one.",
        "customer": "Emily Davis",
        "priority": "Low",
        "status": "open",
        "createdAt": "2024-01-18"
    },
    {
        "id": 5,
        "title": "App Crash on Launch",
        "description": "Customer reports that the mobile app crashes immediately upon opening on Android 13.",
        "customer": "David Wilson",
        "priority": "High",
        "status": "open",
        "createdAt": "2024-01-19"
    },
    {
        "id": 6,
        "title": "Refund Not Processed",
        "description": "Customer requested a refund two weeks ago but has not received the amount yet.",
        "customer": "Sophia Taylor",
        "priority": "Medium",
        "status": "open",
        "createdAt": "2024-01-20"
    },
    {
        "id": 7,
        "title": "Two-Factor Authentication Issue",
        "description": "Customer is not receiving 2FA codes on their registered phone number.",
        "customer": "James Anderson",
        "priority": "High",
        "status": "open",
        "createdAt": "2024-01-21"
    },
    {
        "id": 8,
        "title": "Unable to Update Profile Picture",
        "description": "Customer tries to upload a new profile picture but gets an 'Upload failed' error.",
        "customer": "Olivia Martinez",
        "priority": "Low",
        "status": "open",
        "createdAt": "2024-01-22"
    },
    {
        "id": 9,
        "title": "Subscription Auto-Renewal Toggle Disabled",
        "description": "Customer wants to enable auto-renewal for their subscription but the toggle is greyed out and unclickable.",
        "customer": "Liam Thomas",
        "priority": "Medium",
        "status": "open",
        "createdAt": "2024-01-23"
    },
    {
        "id": 10,
        "title": "Missing Order Confirmation Email",
        "description": "Customer placed an order but didn't receive a confirmation email even though payment was successful.",
        "customer": "Isabella Garcia",
        "priority": "Medium",
        "status": "open",
        "createdAt": "2024-01-24"
    },
    {
        "id": 11,
        "title": "Search Results Not Loading",
        "description": "Product search returns a blank page instead of results when using the mobile browser.",
        "customer": "Noah White",
        "priority": "High",
        "status": "open",
        "createdAt": "2024-01-25"
    },
    {
        "id": 12,
        "title": "Discount Code Not Applied",
        "description": "Customer entered a valid promo code at checkout but the discount was not deducted from the total amount.",
        "customer": "Ava Harris",
        "priority": "Medium",
        "status": "open",
        "createdAt": "2024-01-26"
    },
    {
        "id": 13,
        "title": "Account Locked After Failed Login",
        "description": "Customer's account got locked after 3 failed login attempts and the unlock email never arrived in their inbox.",
        "customer": "Ethan Clark",
        "priority": "High",
        "status": "open",
        "createdAt": "2024-01-27"
    },
    {
        "id": 14,
        "title": "Wrong Item Delivered",
        "description": "Customer ordered a blue jacket but received a red one instead. They are requesting an exchange.",
        "customer": "Mia Lewis",
        "priority": "Medium",
        "status": "open",
        "createdAt": "2024-01-28"
    },
    {
        "id": 15,
        "title": "Dashboard Data Not Updating",
        "description": "The sales dashboard shows data from last week and is not refreshing to display today's figures.",
        "customer": "Lucas Robinson",
        "priority": "Low",
        "status": "open",
        "createdAt": "2024-01-29"
    }
]

export default function TicketContainer({ inProgress, setInProgress, resolved, setresolved }) {
    const [ticketsState, setTicketsState] = useState(tickets); 
    
    const handleAddInProgress = (ticket) => {

        if (inProgress.find(t => t.id === ticket.id)) return;

        setInProgress([...inProgress, ticket]);

        setTicketsState(prev => prev.map(t => t.id === ticket.id ? { ...t, status: "in progress" } : t));
    }

    const handleComplete = (ticket) => {
        setInProgress(prev => prev.filter(t => t.id !== ticket.id));
        setTicketsState(prev => prev.filter(t => t.id !== ticket.id));

        setresolved([...resolved, { ...ticket, status: "resolved" }]);
    }

    return (
        <div className="flex p-4 mx-auto max-w-360 lg:my-20 gap-8">
            <div className="flex-1">
                <p className="text-2xl font-semibold text-[#34485A] my-4">Customer Tickets</p>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                    {
                        ticketsState.map(ticket => {
                            return (
                                <div key={ticket.id} onClick={() => handleAddInProgress(ticket)} className="card bg-white rounded-lg shadow p-4 hover:shadow-md cursor-pointer transition-shadow">
                                    <div className="flex justify-between items-center">
                                        <h2 className="text-lg font-bold text-[#34485A] mb-2">{ticket.title}</h2>
                                        <div
                                            className={`flex items-center text-sm gap-1 py-1 px-2 rounded-2xl ${ticket.status === "open" ? "bg-green-200" : "bg-yellow-200"
                                                }`}
                                        >
                                            <div
                                                className={`h-3 w-3 rounded-full ${ticket.status === "open" ? "bg-green-500" : "bg-yellow-500"
                                                    }`}
                                            ></div>
                                            <p className="text-sm text-gray-600">{ticket.status}</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-1">{ticket.description}</p>

                                    <div className="flex justify-between text-base">
                                        <div className="flex gap-4">
                                            <p className="text-sm text-gray-600 mb-1">#{ticket.id}</p>
                                            <p className={`text-sm font-medium mb-1 uppercase ${ticket.priority === "High"
                                                ? "text-red-500"
                                                : ticket.priority === "Medium"
                                                    ? "text-yellow-500"
                                                    : "text-green-500"
                                                }`}><span className="font-semibold"></span> {ticket.priority} Priority</p>
                                        </div>
                                        <div className="flex gap-4">
                                            <p className="text-sm text-gray-600 mb-1"><span className="font-semibold"></span> {ticket.customer}</p>
                                            <p className="text-sm text-gray-600 mb-1 flex  gap-1 justify-center items-center"><span className="font-semibold"></span><MdOutlineDateRange />
                                                {ticket.createdAt}</p>

                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="felx-1">
                <div>
                    <p className="text-2xl font-semibold text-[#34485A] my-4">Task Status</p>
                    <div>
                        {inProgress.length === 0 ? (
                            <p>Select a ticket to add to Task Status</p>
                        ) : (
                            inProgress.map(ticket => (
                                <div key={ticket.id} className="card gap-2 bg-white rounded-lg shadow p-4 mb-4 flex justify-between items-center">
                                    <h2 className="text-lg font-bold text-[#34485A]">{ticket.title}</h2>

                                    <button
                                        onClick={() => handleComplete(ticket)}
                                        className="bg-green-500 w-full text-white px-3 py-1 rounded hover:bg-green-600 transition"
                                    >
                                        Complete
                                    </button>
                                </div>
                            ))
                        )}
                    </div>

                </div>
                <div>
                    <p className="text-2xl font-semibold text-[#34485A] my-4">Resolved Task</p>
                    <div>
                        {resolved.length == 0 ?(
                            <p>No resolved tasks yet.</p>
                        ): (
                            resolved.map(ticket => (
                                <div key={ticket.id} className="card gap-2 bg-white rounded-lg shadow p-4 mb-4 flex justify-between items-center">
                                    <h2 className="text-lg font-bold text-orange-600">{ticket.title}</h2>


                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
