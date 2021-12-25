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
                    <div className={styles.companyLogo}> <img src={logo} alt="company-logo" /></div>
                    <div className={styles.jobInfo}>
                        <div className={styles.companyInfoHeader}>
                            <span>{company}</span>
                            <div>
                                {New && <button className={styles.new}>NEW!</button>}
                                {featured && <button className={styles.feature}>FEATURED</button>}
                            </div>
                        </div>
                        <h1>{position}</h1>
                        <div className={styles.companyInfoFooter}>
                            <p>{postedAt}</p>
                            <p><span>&nbsp;•&nbsp;</span>{contract}</p>
                            <p><span>&nbsp;•&nbsp;</span>{location}</p>
                        </div>
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
