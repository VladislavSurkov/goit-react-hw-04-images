import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <>
      <ThreeDots
        height="40"
        width="100"
        radius="9"
        color="#6a9bd8"
        ariaLabel="three-dots-loading"
        wrapperStyle={{ justifyContent: 'center' }}
        visible={true}
      />
    </>
  );
};
