import React from 'react'
import ServiceHero from './Service/ServiceHome'
import ServiceS2 from './Service/ServiceS2'
import ServicesS3 from './Service/ServiceS3'
import ProcessAndWhyChooseUs from './Service/ProcessAndWhyChooseUs'
import ResultsAndTestimonials from './Service/ResultsAndTestimonials'

export default function Service() {
    return (
        <div>
            <ServiceHero />
            <ServiceS2 />
            <ServicesS3 />
            <ProcessAndWhyChooseUs />
            <ResultsAndTestimonials />

        </div>
    )
}
