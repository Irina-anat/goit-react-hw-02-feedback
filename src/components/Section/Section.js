import css from './Section.module.css'

const Section = ({ title, children }) => {
    return <section className={css.section}>
        {title && <h2 className={css.section__title}>{title}</h2>}
        {children}
    </section>
}
export default Section

