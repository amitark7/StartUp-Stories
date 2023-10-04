import React from 'react'
import Card from './Card'

const Service = () => {
    return (
        <div style={{ paddingTop: '90px' }} >
            <div style={{ marginBottom: '3rem' }}>
                <h1 style={{ textAlign: 'center', color: '#111', fontSize: '3rem', lineHeight: '1.2', marginBottom: '0.5rem' }}>What we offer</h1>
                <hr style={{ height: '1px', width: '15%', backgroundColor: '#F3525A', margin: 'auto', opacity: '0.3' }} />
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>

                <Card icon={'fa-solid fa-business-time'} title={"Business Management"} desc={" Comprehensive management services, from creating effective business models to organizational structuring, aimed at optimizing performance."}/>
                <Card icon={'fa fa-chart-pie fa-2x'} title={"Strategic Consulting"} desc={"Tailor-made solutions for businesses looking to refine their goals and operations, specializing in startups and SMEs."} />
                <Card icon={'fa-solid fa-photo-film'} title={"Social Media Management"} desc={"Full-service management of your social media channels, crafting content and strategies that resonate with your target audience."}/>
                <Card icon={'fa-solid fa-code'} title={"Software Solution"} desc={"Customized software development services, from app development to complex systems integration."}/>
                <Card icon={'fa fa-balance-scale fa-2x'} title={"Legal Advisory"} desc={"Offering advice and solutions for legal issues, from contracts to compliance, with a focus on the startup ecosystem."}/>
                <Card icon={'fa fa-user-tie fa-2x'} title={"HR Consultancy"} desc={" From recruitment to employee engagement, our human resources consulting ensures your workforce is aligned with your business objectives."}/>
            </div>
        </div>
    )
}

export default Service
