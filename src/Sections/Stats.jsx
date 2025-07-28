import React from 'react';
import { Users, Rocket, Trophy } from 'lucide-react';

const ClubStats = () => {
    return (
        <section className="py-16 bg-black sm:py-20 lg:py-25">
            <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                        Our Impact in Numbers
                    </h2>
                    <p className="mt-6 text-lg text-gray-400">
                        From passionate members to real-world blockchain applications — our numbers speak for themselves.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-10 mt-16 text-center sm:grid-cols-3">
                    <div>
                        <div className="flex justify-center mb-4">
                            <Users className="w-10 h-10 text-blue-500" />
                        </div>
                        <h3 className="text-5xl font-extrabold text-white">
                            <span className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">250+</span>
                        </h3>
                        <p className="mt-3 text-lg font-medium text-white">Active Club Members</p>
                        <p className="text-sm text-gray-400">Engaged across campuses</p>
                    </div>

                    <div>
                        <div className="flex justify-center mb-4">
                            <Rocket className="w-10 h-10 text-purple-500" />
                        </div>
                        <h3 className="text-5xl font-extrabold text-white">
                            <span className="bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">40+</span>
                        </h3>
                        <p className="mt-3 text-lg font-medium text-white">Projects Launched</p>
                        <p className="text-sm text-gray-400">Using Web3 and blockchain</p>
                    </div>

                    <div>
                        <div className="flex justify-center mb-4">
                            <Trophy className="w-10 h-10 text-green-400" />
                        </div>
                        <h3 className="text-5xl font-extrabold text-white">
                            <span className="bg-gradient-to-r from-indigo-500 to-sky-400 bg-clip-text text-transparent">15+</span>
                        </h3>
                        <p className="mt-3 text-lg font-medium text-white">Hackathons Won</p>
                        <p className="text-sm text-gray-400">In national competitions</p>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default ClubStats;
