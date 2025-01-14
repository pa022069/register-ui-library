import { useSelector } from 'react-redux';
import Loading from '@components/LoadingBox';
import { RenderComponent } from '@core/render';
import { selectState } from '@helpers/redux/slices/templateSlice';

export default function IndexPage() {
  const { isLoaded } = useSelector(selectState);
  return (
    <div className="w-sm mx-auto flex h-screen flex-col items-center justify-center gap-4">
      Vite Project
      {!isLoaded && <Loading />}
      <RenderComponent
        name="select"
        config={{
          variant: 'secondary',
          size: 'large',
          // options: [
          //   { value: '1', label: 'Option 1' },
          //   { value: '2', label: 'Option 2' },
          //   { value: '3', label: 'Option 3' },
          // ],
        }}
      />
      <div className="flex">
        <button>Check</button>
      </div>
    </div>
  );
}
