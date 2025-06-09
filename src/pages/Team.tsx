"use client"

import type React from "react"
import { useEffect, useState } from "react"
import axios from "axios"
import MainLayout from "../layouts/MainLayout"

interface TeamMember {
  name: string
  role: string
  image: string
  description?: string // Optional field
}

interface AlumnaeTeam {
  [year: string]: TeamMember[]
}

// Configure axios to include credentials
axios.defaults.withCredentials = true

const MeetTheTeam: React.FC = () => {
  const [currentTeam, setCurrentTeam] = useState<TeamMember[]>([])
  const [alumnaeTeams, setAlumnaeTeams] = useState<AlumnaeTeam>({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const API_BASE_URL = "https://backend-nrc.onrender.com" // Hardcoded API base URL
        const res = await axios.get(`${API_BASE_URL}/api/team`)
        console.log("API Response:", res.data)

        const { data } = res.data

        // Process current team members
        const currentTeamData: TeamMember[] = data
          .filter((member: any) => member.category === "current")
          .map((member: any) => {
            // Debugging: Log original image path
            console.log("Original image path:", member.image)

            // Use the full URL from the API response
            const imageUrl = member.image ? `${API_BASE_URL}/uploads/${member.image}` : ""

            return {
              name: member.name,
              role: member.role,
              image: imageUrl,
              description: member.shortDescription,
            }
          })

        // Process alumnae team members
        const alumnaeTeamsData: AlumnaeTeam = {}
        data
          .filter((member: any) => member.category !== "current")
          .forEach((member: any) => {
            const year = member.year || "Unknown"
            if (!alumnaeTeamsData[year]) {
              alumnaeTeamsData[year] = []
            }

            // Use the full URL from the API response
            const imageUrl = member.image ? `${API_BASE_URL}/uploads/${member.image}` : ""

            alumnaeTeamsData[year].push({
              name: member.name,
              role: member.role,
              image: imageUrl,
              description: member.shortDescription,
            })
          })

        setCurrentTeam(currentTeamData)
        setAlumnaeTeams(alumnaeTeamsData)
      } catch (err) {
        setError("Failed to fetch team data. Please try again later.")
        console.error("Error fetching team data:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchTeamData()
  }, [])

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement
    console.error(`Failed to load image at ${target.src}`)
    target.style.display = "none" // Hide the image if it fails to load
    target.onerror = null
  }

  if (loading) {
    return (
      <MainLayout>
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-xl font-semibold">Loading team data...</p>
        </div>
      </MainLayout>
    )
  }

  if (error) {
    return (
      <MainLayout>
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-xl font-semibold text-red-500">{error}</p>
        </div>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-center mb-8">Meet the Team</h1>
            <div className="mt-4 h-1 w-20 bg-green-600 mx-auto"></div>
            <div className="text-center text-gray-700 text-4xl bg-gray-200 p-8 rounded-lg shadow-md">
              <h2>
                We are a passionate and dedicated spirit of professionals, committed to innovation, collaboration, and
                achieving excellence.
              </h2>
            </div>
          </div>

          {/* Current Team Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-center">Current Team</h2>
            <div className="mt-4 h-1 w-20 bg-green-600 mx-auto"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentTeam.length > 0 ? (
                currentTeam.map((member, index) => (
                  <div
                    key={index}
                    className="bg-white p-3 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="w-60 h-60 mx-auto mb-4 rounded-full overflow-hidden border-4 border-green-100">
                      {member.image ? (
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="w-full h-full object-cover"
                          onError={handleImageError}
                          crossOrigin="anonymous"
                          onLoad={() => console.log(`Image loaded successfully: ${member.image}`)}
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-400 text-4xl">{member.name.charAt(0)}</span>
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-gray-600 text-2xl">{member.role}</p>
                    {member.description && <p className="mt-4 text-gray-700">{member.description}</p>}
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-8">
                  <p className="text-gray-500 text-xl">No current team members available.</p>
                </div>
              )}
            </div>
          </section>

          {/* Alumnae Team Section */}
          <section>
            <h2 className="text-3xl font-semibold mb-6 text-center">Our Alumnae Team Members</h2>
            <div className="mt-4 h-1 w-20 bg-green-600 mx-auto"></div>
            {Object.keys(alumnaeTeams).length > 0 ? (
              Object.entries(alumnaeTeams).map(([year, members], index) => (
                <div key={index} className="mb-12">
                  <h3 className="text-2xl font-semibold mb-6 text-center">{year}</h3>
                  <div className="mt-4 h-1 w-20 bg-green-600 mx-auto mb-8"></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {members.map((member, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-3 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                      >
                        <div className="w-60 h-60 mx-auto mb-4 rounded-full overflow-hidden border-4 border-green-100">
                          {member.image ? (
                            <img
                              src={member.image || "/placeholder.svg"}
                              alt={member.name}
                              className="w-full h-full object-cover"
                              onError={handleImageError}
                              crossOrigin="anonymous"
                              onLoad={() => console.log(`Image loaded successfully: ${member.image}`)}
                            />
                          ) : (
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                              <span className="text-gray-400 text-4xl">{member.name.charAt(0)}</span>
                            </div>
                          )}
                        </div>
                        <h4 className="text-lg font-semibold">{member.name}</h4>
                        <p className="text-gray-600">{member.role}</p>
                        {member.description && <p className="mt-4 text-gray-700">{member.description}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500 text-xl">No alumnae team members available.</p>
              </div>
            )}
          </section>
        </div>
      </div>
    </MainLayout>
  )
}

export default MeetTheTeam
