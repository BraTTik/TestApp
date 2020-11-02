import Head from 'next/head'
import styles from '../styles/Home.module.css'
import FilterPanel from '../components/FilterPanel';
import { useAppState } from '../context/AppStateContext';
import { useFlights } from '../lib/useFlights';
import { SearchResults } from '../components/SearchResult';


export default function Home() {
  const { state } = useAppState();
  const { sort, filters, params} = state;
  
  const flightOptions = { 
      ...sort, 
      filter: filters.join(','), 
      chunk: 2, 
      ...params
  }

  const { data, error } = useFlights(flightOptions);
  if(error){
    console.log('Error: ', error);
  }
  if(data){
    console.log(data.result.length);
  }


  return (
    <div className={styles.main}>
      <Head>
        <title>Flights</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.container}>
            <FilterPanel />
            <SearchResults result={data ? data.result : []}/>
        </div>
      </main>
    </div>
  )
}
