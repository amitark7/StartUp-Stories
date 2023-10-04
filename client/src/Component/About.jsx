import React from 'react'
import '../style/About.css'
import Team from './Team'

const About = () => {
    return (
        <>
            <div className="container-fluid p-5 bg-dark">
                <div className="row">
                    <div className="col-12">
                        <h1 className="display-4">About Us</h1>
                    </div>
                </div>
            </div>
            <div className='container-fluid p-5'>
                <div className="box">
                    <h1 className="about-title">Welcome to the inspiring
                        journey of Startup Story, a
                        venture rooted in the vision of
                        empowerment, innovation, and
                        growth. This narrative
                        encapsulates our remarkable
                        voyage, highlighting the key
                        milestones, core values, and the
                        dedicated individuals who have
                        shaped our story</h1>
                </div>
                <div className="box">
                    <h1 className="about-title">Founders and Visionaries</h1>
                    <p className="about-desc">At the heart of Startup Story are its visionary
                        founders, <span style={{color:"black" ,fontWeight:'700'}}>Tathagat and Ripunjay Mishra.</span>
                        Their shared passion for entrepreneurship,
                        innovation, and a deep-seated commitment
                        to helping others succeed laid the foundation
                        for our venture.</p>
                </div>
                <div className="box">
                    <h1 className="about-title">Inception and Early Challenges</h1>
                    <p className="about-desc">Startup Story began its journey with a
                        singular vision: to support entrepreneurs and
                        businesses, regardless of their size or origin,
                        on their quest for success. In our early days,
                        we faced numerous challenges typical of any
                        startup. However, it was these very
                        challenges that fueled our determination to
                        grow.</p>
                </div>
                <div className="box">
                    <h1 className="about-title">The Three Cs: Create, Consult,
                        Convert</h1>
                    <p className="about-desc">
                        <p>Our guiding philosophy revolves around the
                            three Cs:</p>
                        <p><span>Create:</span> We believe in the power of creation
                            i.e., creating opportunities, businesses, and
                            lasting relationships. Under the leadership of
                            Ripunjay Mishra, Startup Story specializes in
                            crafting innovative solutions and content
                            strategies that drive tangible results.
                        </p>
                        <p><span>Consult:</span> Our esteemed team, including Dr.
                            Devrishi Kumar Arora, Guru Pratap Singh,
                            and Shadan Khan, brings years of experience
                            and diversity to the table. They excel in
                            providing expert consultancy and advisory
                            services, helping our clients make informed
                            decisions and navigate the complexities of
                            the business world.</p>
                        <p><span>Convert:</span> Conversion is at the heart of what
                            we do. We're not just about ideas; we're
                            about turning those ideas into actionable
                            plans that lead to tangible results. Our team,
                            under the leadership of Mr. Sanjay Prasad,
                            focuses on converting strategies into
                            successful outcomes.</p>
                    </p>
                </div>
                <div className="box">
                    <h1 className="about-title">Our Values</h1>
                    <p className="about-desc">
                        <p><span>Passion:</span> We are driven by a relentless
                            passion for entrepreneurship and innovation.
                            This passion fuels our commitment to
                            helping others succeed.
                        </p>
                        <p><span>Integrity:</span> We hold ourselves to the highest
                            ethical standards, ensuring transparency,
                            trust, and credibility in all our interactions.</p>
                        <p><span>Innovation:</span> Embracing change and thinking
                            outside the box are at the core of our values.
                            We continuously seek innovative solutions to
                            meet the evolving needs of our clients.
                        </p>
                        <p><span>Collaboration:</span> We believe in the power of
                            collaboration. Working closely with our
                            clients and partners, we achieve more
                            together than we ever could alone.
                        </p>
                        <p><span>Excellence:</span> We are committed to excellence in
                            everything we do, setting high standards and
                            consistently delivering quality services.
                        </p>
                        <p><span>Results-Driven:</span> We are focused on delivering
                            tangible results. Our success is measured by
                            the success of our clients.</p>
                    </p>
                </div>
                <div className="box">
                    <h1 className="about-title">Key Milestones</h1>
                    <p className="about-desc">
                        <p><span>The inception of Startup Story:</span> The idea of
                            Startup Story was conceived, laying the
                            groundwork for what would become a
                            transformative journey.
                        </p>
                        <p><span>Initial Challenges:</span> We faced early hurdles
                            common to startups, from resource
                            constraints to market uncertainties.
                            However, these challenges strengthened our
                            resolve to persevere.
                        </p>
                        <p><span>Growth and Expansion:</span> Over time, Startup
                            Story expanded its services, venturing into
                            diverse sectors, including podcasting,
                            aquaponics, and legal consultancy.
                        </p>
                        <p><span>Nigerian Market Entry:</span> We embarked on a
                            new frontier by entering the Nigerian
                            market, marking an exciting chapter in our
                            international expansion.
                        </p>
                    </p>
                </div>
                <div className="box">
                    <h1 className="about-title">Looking Ahead</h1>
                    <p className="about-desc">As we celebrate our journey so far, we are
                        excited about the future. Startup Story is
                        poised for continued growth, innovation, and
                        success. Our upcoming endeavors include a
                        Delaware flip, a strategic move to enhance
                        our global presence, and a strong focus on
                        cultivating local talent and startups.</p>
                </div>
                <div className="box">
                    <h1 className='about-title'>We invite you to join us on this
                        incredible journey. As we
                        expand our board, welcome new
                        talent, and embrace new
                        challenges, our commitment to
                        empowering entrepreneurs and
                        businesses remains
                        unwavering. Together, we will
                        shape a world where every idea
                        can thrive, every business can
                        prosper, and every dream can
                        become a reality
                    </h1>
                </div>
                <Team />
            </div>
        </>
    )
}

export default About
