/* eslint-disable react/display-name */
import { memo, useEffect } from 'react';
import { useIsFetching } from '@tanstack/react-query';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Loading from '@/components/Loading/Loading';

function withMainLayout<T extends object>(Component: React.ComponentType<T>) {
  return memo((props: T) => {
    const isFetching = useIsFetching();

    useEffect(() => {
      document.title = Component.displayName || 'Quin Assignment';
    }, []);

    return (
      <div className="relative flex flex-col w-screen h-screen overflow-auto">
        <Header />
        <main className="relative flex-1 w-full h-full">
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...props} />
        </main>
        <Footer />
        {isFetching ? (
          <div className="z-[99] absolute bottom-5 right-5">
            <Loading />
          </div>
        ) : null}
      </div>
    );
  });
}

export default withMainLayout;
