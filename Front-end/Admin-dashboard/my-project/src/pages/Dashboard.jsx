import Card from '../components/Card';
import Chart from '../components/Chart';

function Dashboard() {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      {/* Dashboard Header */}
      <h1 className="mb-6 text-3xl font-bold text-gray-800">Dashboard Overview</h1>
      
      {/* Cards Section */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card title="Total Users" value="1,500" icon="users" bgColor="bg-blue-500" />
        <Card title="Active Courses" value="120" icon="book" bgColor="bg-green-500" />
      </div>
      
      {/* Chart Section */}
      <div className="p-6 mt-8 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-xl font-semibold text-gray-700">User Growth</h2>
        <Chart />
      </div>
    </div>
  );
}

export default Dashboard;
