import './App.css';
import Articles from './containers/Articles';
import Header from './containers/Header';
import Layout from './containers/Layout';
import { ArticlesProvider } from './contexts/ArticlesContext';

function App() {
  return (
    <ArticlesProvider>
      <Layout>
        <Header></Header>
        <Articles></Articles>
      </Layout>
    </ArticlesProvider>
  );
}

export default App;
