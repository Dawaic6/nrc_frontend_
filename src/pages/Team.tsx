import MainLayout from "../layouts/MainLayout";

import React from 'react';

const MeetTheTeam: React.FC = () => {
    // Team member data
    const teamMembers = [
        {
            name: 'Celeb Sanguana',
            role: 'Professional',
            imageUrl: 'path/to/image.png', // Replace with actual image path
            description: 'We are a passionate and dedicated spirit of professionals, committed to innovation, collaboration, and achieving excellence.',
        },
        // Add more team members here
    ];

    return (
        <MainLayout>
            <div className="min-h-screen bg-gray-100 py-12">
                <div className="container mx-auto px-4">
                    {/* Page Title */}
                    <h1 className="text-4xl font-bold text-center mb-8">Meet the Team</h1>

                    {/* Team Members Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                                {/* Team Member Image */}
                                <img
                                    src={member.imageUrl}
                                    alt={member.name}
                                    className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                                />

                                {/* Team Member Name */}
                                <h3 className="text-xl font-semibold">{member.name}</h3>

                                {/* Team Member Role */}
                                <p className="text-gray-600">{member.role}</p> 

                                {/* Team Member Description */}
                                <p className="mt-4 text-gray-700">{member.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default MeetTheTeam;