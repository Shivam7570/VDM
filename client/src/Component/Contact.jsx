import React from 'react'
import ContactHero from './Contact/ContactHero'
import ContactFormSection from './Contact/ContactFormSection'
import ContactS3 from './Contact/Contacts3'

export default function Contact() {
    return (
        <div>
            <ContactHero />
            <ContactFormSection />
            <ContactS3 />
        </div>
    )
}
