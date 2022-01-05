import React, { useContext } from 'react'
import styles from './Job.module.scss'
import { JobContext } from '../context/JobContext'


const Job = ({ id, company, contract, featured, location, logo, New, position, postedAt, role, level, languages, tools }) => {
    const { AddKeyword } = useContext(JobContext)
    const tags = [role, level, ...languages, ...tools];
    return (
        <>

            <div className={`${New && featured ? "job active" : "job"}`} key={id} >
                <div className={styles.jobContent}>
                    <img src={logo} alt="company-logo" />
                    <div className={styles.jobInfo}>
                        <div className={styles.companyInfoHeader}>
                            <span>{company}</span>
                            {New && <button className={styles.new}>NEW!</button>}
                            {featured && <button className={styles.feature}>FEATURED</button>}
                        </div>
                        <h1>{position}</h1>
                        <ul className={styles.companyInfoFooter}>
                            <li>{postedAt}</li>
                            <li>•</li>
                            <li>{contract}</li>
                            <li>•</li>
                            <li>{location}</li>
                        </ul>
                        <hr />
                    </div>
                </div>
                <div className={styles.tag}>
                    {
                        tags.map((tag, id) => {
                            return (
                                <span key={id} onClick={() => AddKeyword(tag)}>{tag} </span>
                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}

export default Job
