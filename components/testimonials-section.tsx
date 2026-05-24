"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Dr. Adebayo Ogundimu",
    role: "Commissioner for Science & Technology",
    organization: "Lagos State Government",
    content:
      "Zowa transformed our digital infrastructure completely. The tax collection system they built increased our revenue by 300% in just one year.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Mrs. Fatima Abdullahi",
    role: "Director of Digital Services",
    organization: "Federal Ministry of Health",
    content:
      "The citizen engagement portal has revolutionized how we deliver healthcare services. Over 2 million citizens are now connected to our services.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Engr. Chukwuma Okafor",
    role: "Permanent Secretary",
    organization: "Ministry of Agriculture",
    content:
      "The smart agriculture platform has empowered over 500,000 farmers with real-time data and market insights. Truly transformational.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
]

export function TestimonialsSection() {
  return (
    <section className="px-4 md:px-6 py-16 md:py-20 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What our <em className="font-instrument-serif text-purple-400 not-italic">clients</em> say.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hear from government leaders who have transformed their institutions with our solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800 border-gray-700 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-purple-400 mb-4" />
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>

                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <div className="flex items-center">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                      <p className="text-sm text-purple-400">{testimonial.organization}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
