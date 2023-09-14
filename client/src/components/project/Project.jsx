import styles from './Project.module.css'
import data from './../../data/data.json'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { TbBrandGithubFilled, TbWorldWww } from 'react-icons/tb'
const Project = () => {
    const [showFullText, setShowFullText] = useState({});
    const handleClick = (event) => setShowFullText({ ...showFullText, [event.target.value]: !showFullText[event.target.value] });
    return (
        <section id='project' className={styles.container}>
            <h2>Proyectos</h2>
            {data?.projects?.map((project) => (
                <div key={project.id} className={`${styles.cardProject} ${project.id % 2 !== 0 ? styles.rowReverse : ""}`}>
                    <div className={styles.imageProject}>
                        <img src={project.src} alt={project.title} className={styles.image} />
                        {project?.linkDeploy &&
                            <p>
                                Sitio web: &nbsp;
                                <Link to={project.linkDeploy} target='_blank'><TbWorldWww className={styles.icon} /></Link>
                            </p>
                        }
                        {project?.linkGithub &&
                            <p>
                                GitHub: &nbsp;
                                <Link to={project.linkGithub} target='_blank'><TbBrandGithubFilled className={styles.icon}/></Link>
                            </p>
                        }
                    </div>
                    <div className={styles.contentProject}>
                        <h3 className={styles.title}> {project.title}</h3>
                        <p className={styles.description}>
                            {showFullText[project.id] ? project.description : `${project.description.slice(0, 200)}...`}
                            <button value={project.id} type='button' onClick={handleClick} className={styles.showFullText}>
                                {showFullText[project.id] ? 'Ver menos' : 'Ver más'}
                            </button>
                        </p>
                        <h3 className={styles.title}>Tecnologías</h3>
                        <p className={styles.technologies}>{project?.technologies?.map((technology, index) => (
                            <span key={index}> {technology}{index + 1 !== project.technologies.length && ","} &nbsp;</span>
                        ))}</p>
                    </div>
                </div>
            ))}
        </section>
    )
}
export default Project;