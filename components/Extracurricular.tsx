"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { FaYoutube, FaLinkedin, FaLeaf, FaHandshake, FaCalendarAlt, FaUsers, FaArrowRight, FaStar } from 'react-icons/fa'

const extracurricularActivities = [
  {
    title: "Content Creation",
    activities: [
      {
        name: "YouTube Channel",
        role: "Content Creator",
        duration: "2022 - Present",
        description: "1k+ subscribers, sharing tech tutorials and project walkthroughs",
        metrics: "1k+ Subscribers",
        highlight: "Tech Tutorials"
      },
      {
        name: "LinkedIn Growth",
        role: "Tech Content Creator", 
        duration: "2022 - Present",
        description: "10k+ followers, sharing insights about tech and development",
        metrics: "10k+ Followers",
        highlight: "Tech Insights"
      }
    ]
  },
  {
    title: "Environmental Initiatives",
    activities: [
      {
        name: "Green Club MNNIT",
        role: "Active Member",
        duration: "2022 - Present",
        description: "Participated in tree plantation drives and environmental awareness campaigns",
        metrics: "50+ Trees Planted",
        highlight: "Eco Warrior"
      },
      {
        name: "Campus Cleanliness",
        role: "Volunteer",
        duration: "2022 - Present",
        description: "Regular participation in campus cleanliness drives and sustainability initiatives",
        metrics: "20+ Drives",
        highlight: "Sustainability"
      }
    ]
  },
  {
    title: "Social Impact",
    activities: [
      {
        name: "Enactus MNNIT",
        role: "Volunteer",
        duration: "2022 - Present",
        description: "Participated in social entrepreneurship initiatives and community development programs",
        metrics: "5+ Projects",
        highlight: "Social Good"
      },
      {
        name: "Campus Events",
        role: "Volunteer",
        duration: "2022 - Present",
        description: "Active participation in organizing and managing various college events and fests",
        metrics: "15+ Events",
        highlight: "Event Management"
      }
    ]
  }
]

const Extracurricular = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 80, rotateX: 45 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      },
    }),
  }

  const activityVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  }

  const getIcon = (title: string) => {
    switch (title) {
      case "Content Creation":
        return FaYoutube
      case "Environmental Initiatives":
        return FaLeaf
      case "Social Impact":
        return FaHandshake
      default:
        return FaLinkedin
    }
  }

  const getColorScheme = (index: number) => {
    const schemes = [
      {
        bg: "from-violet-900/90 via-purple-900/80 to-fuchsia-900/80",
        accent: "from-violet-500/20 to-fuchsia-500/20",
        border: "border-violet-400/30",
        text: "text-violet-200",
        icon: "text-violet-300",
        iconBg: "from-violet-400/20 to-fuchsia-400/20",
        orb: "bg-violet-500/15",
        highlight: "bg-violet-500/15 text-violet-200"
      },
      {
        bg: "from-emerald-900/90 via-green-900/80 to-teal-900/80",
        accent: "from-emerald-500/20 to-teal-500/20",
        border: "border-emerald-400/30",
        text: "text-emerald-200",
        icon: "text-emerald-300",
        iconBg: "from-emerald-400/20 to-teal-400/20",
        orb: "bg-emerald-500/15",
        highlight: "bg-emerald-500/15 text-emerald-200"
      },
      {
        bg: "from-rose-900/90 via-pink-900/80 to-red-900/80",
        accent: "from-rose-500/20 to-pink-500/20",
        border: "border-rose-400/30",
        text: "text-rose-200",
        icon: "text-rose-300",
        iconBg: "from-rose-400/20 to-pink-400/20",
        orb: "bg-rose-500/15",
        highlight: "bg-rose-500/15 text-rose-200"
      }
    ]
    return schemes[index % schemes.length]
  }

  return (
    <section className="min-h-screen w-full py-20 relative" id="extracurricular">
      {/* Unique Background with Multiple Floating Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-16 right-20 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 left-1/3 w-48 h-48 bg-rose-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            Beyond Code
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            My journey extends beyond programming, encompassing content creation, environmental initiatives, and social impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {extracurricularActivities.map((category, categoryIndex) => {
            // Special handling for Hackathons & Events (themed list)
            if (category.title.toLowerCase().includes("hack" ) || category.title.toLowerCase().includes("event")) {
              return (
                <div key={categoryIndex} className="col-span-1 lg:col-span-3 mb-12">
                  <motion.div
                    className="max-w-4xl mx-auto px-6 py-6 rounded-2xl bg-gradient-to-br from-white/3 to-transparent border border-white/8 backdrop-blur-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold mb-0 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                        {category.title}
                      </h3>
                      <div className="text-sm text-gray-400">{category.activities.length} entries</div>
                    </div>

                    <ul className="space-y-3">
                      {category.activities.map((activity, idx) => (
                        <li
                          key={idx}
                          className="group flex items-start gap-4">
                          <div className="mt-1 flex-none">
                            <div className="w-9 h-9 rounded-full bg-white/6 flex items-center justify-center text-blue-300 border border-white/6">
                              <FaCalendarAlt className="text-sm" />
                            </div>
                          </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between gap-4">
                                  <div>
                                    <div className="text-base font-semibold text-white">{activity.name}</div>
                                    <div className="text-sm text-gray-400">{activity.role} • {activity.duration}</div>
                                  </div>
                                  <div className="text-sm text-emerald-300 font-medium hidden sm:block">{activity.metrics ?? ''}</div>
                                </div>
                                <p className="mt-2 text-sm text-gray-300">{activity.description}</p>
                              </div>
                              <div className="ml-4 flex-none flex items-center">
                                {((activity as any).url) ? (
                                  <a
                                    href={(activity as any).url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-md hover:scale-105 transition-transform"
                                    aria-label={`Open ${activity.name}`}
                                    title={`Open ${activity.name}`}
                                  >
                                    <FaArrowRight className="text-sm" />
                                  </a>
                                ) : (
                                  <span
                                    className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/4 text-gray-400 cursor-not-allowed"
                                    title="No link available"
                                    aria-hidden
                                  >
                                    <FaArrowRight className="text-sm" />
                                  </span>
                                )}
                              </div>
                            </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              )
            }
            
            const colorScheme = getColorScheme(categoryIndex)
            const IconComponent = getIcon(category.title)
            
            return (
              <motion.div
                key={categoryIndex}
                className="relative group perspective-1000"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={categoryIndex}
              >
                {/* Main Category Card with 3D Transform */}
                <motion.div
                  className={`relative overflow-hidden rounded-3xl p-8 border border-white/10 bg-gradient-to-br ${colorScheme.bg} backdrop-blur-xl shadow-2xl transform-gpu`}
                  whileHover={{ 
                    rotateY: 5,
                    rotateX: 5,
                    scale: 1.02,
                    z: 50
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colorScheme.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Multiple Decorative Orbs */}
                  <div className={`absolute -top-10 -right-10 w-40 h-40 ${colorScheme.orb} rounded-full blur-2xl`} />
                  <div className={`absolute -bottom-10 -left-10 w-32 h-32 ${colorScheme.orb} rounded-full blur-xl`} />
                  
                  <div className="relative z-10">
                    {/* Category Header */}
                    <div className="flex items-center justify-between mb-8">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${colorScheme.iconBg} border ${colorScheme.border}`}>
                        <IconComponent className={`text-3xl ${colorScheme.icon}`} />
                      </div>
                      <div className={`px-3 py-1 rounded-full ${colorScheme.highlight} text-sm font-medium`}>
                        {category.activities.length} Activities
                      </div>
                    </div>

                    {/* Category Title */}
                    <h3 className="text-2xl font-bold text-white mb-6">
                      {category.title}
                    </h3>

                    {/* Activities List */}
                    <div className="space-y-6">
                      {category.activities.map((activity, activityIndex) => (
                        <motion.div
                          key={activityIndex}
                          className="relative group/activity"
                          variants={activityVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          custom={activityIndex}
                          whileHover={{ x: 10 }}
                        >
                          {/* Activity Card */}
                          <div className="relative p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                            {/* Activity Header */}
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex-1">
                                <h4 className="text-lg font-semibold text-white mb-1">
                                  {activity.name}
                                </h4>
                                <div className="flex items-center gap-2 text-sm">
                                  <span className={`${colorScheme.text} font-medium`}>
                                    {activity.role}
                                  </span>
                                  <span className="text-gray-400">•</span>
                                  <div className="flex items-center gap-1 text-gray-400">
                                    <FaCalendarAlt className="text-xs" />
                                    {activity.duration}
                                  </div>
                                </div>
                              </div>
                              {((activity as any).url) ? (
                                <a
                                  href={(activity as any).url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`inline-flex items-center justify-center p-2 rounded-full ${colorScheme.icon} bg-white/5 hover:bg-white/10 transform translate-x-2 group-hover/activity:translate-x-0 opacity-0 group-hover/activity:opacity-100 transition-all duration-300`}
                                  title={`Open ${activity.name}`}
                                >
                                  <FaArrowRight className="text-sm" />
                                </a>
                              ) : (
                                <span className={`inline-flex items-center justify-center p-2 rounded-full text-gray-500 bg-white/3 opacity-0 group-hover/activity:opacity-100 transform translate-x-2 group-hover/activity:translate-x-0 transition-all duration-300`} title="No link available" aria-hidden>
                                  <FaArrowRight className="text-sm" />
                                </span>
                              )}
                            </div>

                            {/* Metrics & Highlight */}
                            <div className="flex items-center gap-3 mb-3">
                              <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${colorScheme.accent} border ${colorScheme.border} text-xs font-medium ${colorScheme.text}`}>
                                <FaUsers className="inline mr-1" />
                                {activity.metrics}
                              </div>
                              <div className={`px-3 py-1 rounded-full ${colorScheme.highlight} text-xs font-medium flex items-center gap-1`}>
                                <FaStar className="text-xs" />
                                {activity.highlight}
                              </div>
                            </div>

                            {/* Description */}
                            <p className="text-sm text-gray-300 leading-relaxed">
                              {activity.description}
                            </p>

                            {/* Animated Bottom Border */}
                            <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${colorScheme.accent} w-0 group-hover/activity:w-full transition-all duration-500`} />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* 3D Depth Effect */}
                  <div 
                    className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ transform: "translateZ(10px)" }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Extracurricular