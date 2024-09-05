import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_OSSC } from '../graphql/queries';
import { GetOsscData, GetOsscVariables } from '../types';
import EmptyList from './Empty-List';

const OsscTable: React.FC = () => {
  const { loading, error, data } = useQuery<GetOsscData, GetOsscVariables>(GET_OSSC, {
    variables: {
      distinctOn: ['admin_id'],  
      limit: 10,                
      offset: 0,                
      filter: { draft: { _eq: false } } 
    }
  });

  if (data?.base_ossc.length === 0) return <EmptyList />;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  

  return (
    <table className="min-w-full bg-white border border-gray-200">
      <thead>
        <tr>
          <th className="px-4 py-2">ID</th>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Admin ID</th>
          <th className="px-4 py-2">Has Internet</th>
          <th className="px-4 py-2">Users</th>
        </tr>
      </thead>
      <tbody>
        {data?.base_ossc.map((ossc) => (
          <tr key={ossc.id} className="hover:bg-gray-100">
            <td className="border px-4 py-2">{ossc.id}</td>
            <td className="border px-4 py-2">{ossc.name}</td>
            <td className="border px-4 py-2">{ossc.admin_id}</td>
            <td className="border px-4 py-2">{ossc.has_internet_access ? 'Yes' : 'No'}</td>
            <td className="border px-4 py-2">
              {ossc.users.map(user => (
                <div key={user.id}>
                  {user.email} {user.phoneNumber} ({user.email})
                </div>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OsscTable;
