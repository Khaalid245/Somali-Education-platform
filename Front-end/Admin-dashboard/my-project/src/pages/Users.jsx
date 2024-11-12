import Table from '../components/Table';

const userData = [
  { name: 'John Doe', role: 'Student', status: 'Active' },
  { name: 'Jane Smith', role: 'Teacher', status: 'Inactive' },
  // Add more users here
];

function Users() {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">User Management</h1>
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <Table data={userData} columns={['name', 'role', 'status']} />
      </div>
    </div>
  );
}

export default Users;
