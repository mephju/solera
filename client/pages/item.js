import Layout from '../components/MyLayout.js'

export default (props) => <Main>
  <Layout>
     <h1>{props.url.query.title}</h1>
     <p>This is the blog post content.</p>
  </Layout>
</Main>