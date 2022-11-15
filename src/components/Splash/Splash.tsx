import Loading from '../Loading/Loading';

function Splash() {
  return (
    <div
      className="flex items-center justify-center w-screen h-screen"
      role="status"
      data-testid="splash"
    >
      <Loading />
    </div>
  );
}

export default Splash;
