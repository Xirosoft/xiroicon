import Layout, { DocsLayout } from '@/components/Layouts'
import Hero from '@/components/Hero'

import hero from '@/components/Hero/hero.module.scss'

export default function About(props) {
  return (
    <Layout type='page' pageTitle= 'Xiro Icon - About Us' >
      <Hero containerClass='container'>
        <h1 className={hero.head}>About Us</h1>
      </Hero>

      <div className="page-content container">
        <DocsLayout>
          <h1>About Xiroicon</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores culpa error rerum harum rem sapiente doloribus vitae, iusto qui quia sed incidunt accusantium laboriosam quaerat voluptate itaque excepturi quasi ducimus perspiciatis nam. Laboriosam vero, amet, neque nobis sit distinctio eaque fuga sapiente temporibus similique maiores dolore ipsa, consequatur dolorum dolorem!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores culpa error rerum harum rem sapiente doloribus vitae, iusto qui quia sed incidunt accusantium laboriosam quaerat voluptate itaque excepturi quasi ducimus perspiciatis nam. Laboriosam vero, amet, neque nobis sit distinctio eaque fuga sapiente temporibus similique maiores dolore ipsa, consequatur dolorum dolorem!
          </p>
        </DocsLayout>
      </div>
      
    </Layout>
  )
}