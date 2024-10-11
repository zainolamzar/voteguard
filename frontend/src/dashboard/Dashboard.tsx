import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    // Predefined data for elections
    const elections = [
        { id: 1, title: "Election 1", dueDate: "1 October 2024", status: "Ended" },
        { id: 2, title: "Election 2", dueDate: "5 October 2024", status: "Ongoing" },
        { id: 3, title: "Election 3", dueDate: "12 October 2024", status: "Upcoming" },
    ];

    // Function to navigate to the "Create New Election" page
    const handleCreateElection = () => {
        navigate('/create-election');
    };

    return (
        <div className="bg-white flex flex-col pt-2">
            {/* Header */}
            <div className="w-full flex justify-between items-center px-2 mb-8">
                <div className="flex items-center">
                    <h1 className="text-4xl font-bold text-blue-800">Voteguard</h1>
                </div>
            </div>

            {/* Election Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-4/5">
                {/* Create New Election Card */}
                <div
                    onClick={handleCreateElection}
                    className="border-dashed border-2 border-blue-500 rounded-lg flex justify-center items-center p-4 cursor-pointer hover:bg-gray-100"
                >
                    <p className="text-lg font-semibold text-black">Create New Election</p>
                </div>

                {/* Map through elections to generate cards */}
                {elections.map((election) => (
                    <div key={election.id} className="bg-blue-100 border border-gray-300 rounded-lg p-4">
                        <h3 className="text-xl font-semibold text-black mb-2">{election.title}</h3>
                        <p className="text-sm text-gray-600 mb-4">Due: {election.dueDate}</p>
                        {/* Conditionally render the status badge */}
                        <span
                            className={`px-3 py-1 rounded-full text-sm ${election.status === 'Ended'
                                ? 'bg-red-500 text-white'
                                : election.status === 'Ongoing'
                                    ? 'bg-green-500 text-white'
                                    : 'bg-yellow-500 text-white'
                                }`}
                        >
                            {election.status}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;