import { useRouter } from 'next/router';

const Custom404 = () => {
  const router = useRouter();
  return (
    <>
      <div>
        <div>
          <p className="mb-4 text-xl font-bold">Page Not Found</p>
        </div>
        <div>
          <button onClick={() => router.push('/')} type="button">
            Back To Home
          </button>
        </div>
      </div>
    </>
  );
};
export default Custom404;
