import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Loading from '@components/LoadingBox';
import { selectState } from '@helpers/redux/slices/templateSlice';

export default function IndexPage() {
  const { isLoaded } = useSelector(selectState);

  console.log('isLoaded', isLoaded);

  return (
    <div className="mx-auto flex h-screen w-sm flex-col items-center justify-center gap-4">
      Vite Project
      {!isLoaded && <Loading />}
      <div className="flex">
        <button>
          Check
        </button>
      </div>
    </div>
  );
}
