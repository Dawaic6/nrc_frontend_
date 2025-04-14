import MainLayout from "../layouts/MainLayout";
import React from 'react';
import image1 from '../assets/IMG-20250228-WA0003.jpg'; // Replace with actual image path

const MeetTheTeam: React.FC = () => {
    // Current Team Members
    const currentTeam = [
        {
            name: 'Celeb Sanguana',
            role: 'Professional',
            imageUrl: image1, // Replace with actual image path
            description: 'We are a passionate and dedicated spirit of professionals, committed to innovation, collaboration, and achieving excellence.',
        },
        {
            name: 'Celeb Sanguana',
            role: 'Professional',
            imageUrl: image1, // Replace with actual image path
            description: 'We are a passionate and dedicated spirit of professionals, committed to innovation, collaboration, and achieving excellence.',
        },
        {
            name: 'Celeb Sanguana',
            role: 'Professional',
            imageUrl: image1, // Replace with actual image path
            description: 'We are a passionate and dedicated spirit of professionals, committed to innovation, collaboration, and achieving excellence.',
        },
        {
            name: 'Celeb Sanguana',
            role: 'Professional',
            imageUrl: image1, // Replace with actual image path
            description: 'We are a passionate and dedicated spirit of professionals, committed to innovation, collaboration, and achieving excellence.',
        },
        // Add more current team members here
    ];

    // Alumnae Team Members by Year
    const alumnaeTeams = {
        '2023-2024 NRC Team': [
            {
                name: 'Alumna Name 1',
                role: 'Former Role',
                imageUrl: image1,
                description: 'Brief info about this alumna contribution.',
            },
            {
                name: 'Alumna Name 1',
                role: 'Former Role',
                imageUrl: image1,
                description: 'Brief info about this alumna contribution.',
            },
            {
                name: 'Alumna Name 1',
                role: 'Former Role',
                imageUrl: image1,
                description: 'Brief info about this alumna contribution.',
            },
            {
                name: 'Alumna Name 1',
                role: 'Former Role',
                imageUrl: image1,
                description: 'Brief info about this alumna contribution.',
            },
            // Add more members
        ],
        '2022-2023 NRC Team': [
            {
                name: 'Alumna Name 2',
                role: 'Former Role',
                imageUrl: image1,
                description: 'Brief info about this alumna contribution.',
            },
            {
                name: 'Alumna Name 2',
                role: 'Former Role',
                imageUrl: image1,
                description: 'Brief info about this alumna contribution.',
            }, {
                name: 'Alumna Name 2',
                role: 'Former Role',
                imageUrl: image1,
                description: 'Brief info about this alumna contribution.',
            }, {
                name: 'Alumna Name 2',
                role: 'Former Role',
                imageUrl: image1,
                description: 'Brief info about this alumna contribution.',
            },
            // Add more members
        ]
    };

    return (
        <MainLayout>
            <div className="min-h-screen bg-gray-100 py-12">
                <div className="container mx-auto px-4">
                    <div className="mb-12">
                    {/* Page Title */}
                    <h1 className="text-4xl font-bold text-center mb-8">Meet the Team</h1>
                    <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto"></div>
                    <div className="text-center text-gray-700 text-4xl bg-gray-200 p-8 rounded-lg shadow-md "><h2>We are a passionate and dedicated spirit of professionals, 
                        committed to innovation, collaboration, and achieving excellence.
                        </h2></div>
                        </div>

                    {/* Current Team Section */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-semibold mb-6 text-center">Current Team</h2>
                        <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto"></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {currentTeam.map((member, index) => (
                                <div key={index} className="bg-white p-3 rounded-lg shadow-lg text-center">
                                    <img
                                        src={member.imageUrl}
                                        alt={member.name}
                                        className="w-60 h-60 mx-auto rounded-full mb-4 object-cover"
                                    />
                                    <h3 className="text-xl font-semibold">{member.name}</h3>
                                    <p className="text-gray-600 text-2xl">{member.role}</p>
                                    {/* <p className="mt-4 text-gray-700">{member.description}</p> */}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Alumnae Team Section */}
                    <section>
                        <h2 className="text-3xl font-semibold mb-6 text-center">Our Alumnae Team Members</h2>
                        <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto"></div>
                        {Object.entries(alumnaeTeams).map(([year, members], index) => (
                            <div key={index} className="mb-12 text-center text-2xl font-semibold">
                                
                                <h3 className="text-xl font-semibold mb-4">{year}</h3>
                                <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto mb-4"></div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {members.map((member, idx) => (
                                        <div key={idx} className="bg-white p-3 rounded-lg shadow-lg text-center">
                                            <img
                                                src={member.imageUrl}
                                                alt={member.name}
                                                className="w-60 h-60 mx-auto rounded-full mb-4 object-cover"
                                            />
                                            <h4 className="text-lg font-semibold">{member.name}</h4>
                                            <p className="text-gray-600">{member.role}</p>
                                            {/* <p className="mt-4 text-gray-700">{member.description}</p> */}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </section>
                </div>
            </div>
        </MainLayout>
    );
};

export default MeetTheTeam;