import React from 'react'
import { motion } from 'framer-motion'
import { FaYoutube, FaLinkedin, FaLeaf, FaHandshake, FaArrowRight } from 'react-icons/fa'

const extracurricularActivities = [
  {
    title: "Content Creation",
    icon: FaYoutube,
    activities: [
      {
        name: "YouTube Channel",
        role: "Content Creator",
        duration: "2022 - Present",
        description: "1k+ subscribers, sharing tech tutorials and project walkthroughs",
      },
      {
        name: "LinkedIn Growth",
        role: "Tech Content Creator",
        duration: "2022 - Present",
        description: "10k+ followers, sharing insights about tech and development",
      }
    ]
  },
  {
    title: "Environmental Initiatives",
    icon: FaLeaf,
    activities: [
      {
        name: "Green Club MNNIT",
        role: "Active Member",
        duration: "2022 - Present",
        description: "Participated in tree plantation drives and environmental awareness campaigns",
      },
      {
        name: "Campus Cleanliness",
        role: "Volunteer",
        duration: "2022 - Present",
        description: "Regular participation in campus cleanliness drives and sustainability initiatives",
      }
    ]
  },
  {
    title: "Social Impact",
    icon: FaHandshake,
    activities: [
      {
        name: "Enactus MNNIT",
        role: "Volunteer",
        duration: "2022 - Present",
        description: "Participated in social entrepreneurship initiatives and community development programs",
      },
      {
        name: "Campus Events",
        role: "Volunteer",
        duration: "2022 - Present",
        description: "Active participation in organizing and managing various college events and fests",
      }
    ]
  }
]

const Extracurricular = () => {
  return (
    <section className="w-full py-24 md:py-32 bg-[#F9F9F9]" id="extracurricular">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="subtitle-sans mb-4">Beyond Code</p>
          <h2 className="heading-serif text-4xl md:text-5xl lg:text-6xl mb-6">
            Extracurricular
          </h2>
          <p className="text-[#666666] max-w-xl mx-auto text-base font-sans leading-relaxed">
            My journey extends beyond programming, encompassing content creation, environmental initiatives, and social impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {extracurricularActivities.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={categoryIndex}
                className="bg-white rounded-2xl border border-[#E5E5E5] p-8 hover:border-[#CCCCCC] transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[#F0F0F0]">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FAFAFA] border border-[#E5E5E5] text-[#111111]">
                    <Icon className="text-xl" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#111111]">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-6">
                  {category.activities.map((activity, idx) => (
                    <div key={idx} className="group">
                      <h4 className="text-lg font-bold text-[#111111] mb-1 group-hover:text-[#666666] transition-colors">
                        {activity.name}
                      </h4>
                      <p className="text-[12px] font-sans font-medium uppercase tracking-widest text-[#999999] mb-3">
                        {activity.role} • {activity.duration}
                      </p>
                      <p className="text-[14px] font-sans text-[#666666] leading-relaxed">
                        {activity.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Extracurricular