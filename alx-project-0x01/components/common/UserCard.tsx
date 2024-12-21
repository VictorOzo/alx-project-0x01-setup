import React from "react";
import { UserProps } from "@/interfaces";

interface UserCardProps {
  user: UserProps;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-bold text-gray-800 mb-2">{user.name}</h2>
      <p className="text-gray-600">
        <strong>Username:</strong> {user.username}
      </p>
      <p className="text-gray-600">
        <strong>Email:</strong> {user.email}
      </p>
      <p className="text-gray-600">
        <strong>Address:</strong>{" "}
        {`${user.address.suite}, ${user.address.street}, ${user.address.city}`}
      </p>
      <p className="text-gray-600">
        <strong>Phone:</strong> {user.phone}
      </p>
      <p className="text-gray-600">
        <strong>Website:</strong>{" "}
        <a
          href={`https://${user.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline">
          {user.website}
        </a>
      </p>
      <p className="text-gray-600">
        <strong>Company:</strong> {user.company.name}
      </p>
    </div>
  );
};

export default UserCard;
