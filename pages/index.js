import Head from 'next/head'
import { useState } from 'react';
import styles from '../styles/Home.module.css'
import FilterPanel from '../components/FilterPanel';
import { useAppState, Actions } from '../context/AppStateContext';
import { SearchResults } from '../components/SearchResult';
import { useFlights } from '../lib/useFlights';
import { Loader } from '../components/Loader';


export default function Home() {
  const { state , dispatch } = useAppState();
  const { sort, filters, params} = state;

  const [noData, setNoData] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { data } = useFlights({start:state.flights.length, ...sort, filters, ...params});

  if(data){
    isLoading && setIsLoading(false);
  }else{
    !isLoading && setIsLoading(true);
  }

  if(data && data.result.length === 0){
    console.log('setNoData')
    !noData && setNoData(true);
  }else{
    noData && setNoData(false);
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
            {isLoading ? (
              <div className={styles.loaderContainer}>
                    <Loader />
                </div>
            ):(
              <SearchResults noData={noData} result={data ? [...data.result] : []}/>
            )}
        </div>
      </main>
    </div>
  )
}

