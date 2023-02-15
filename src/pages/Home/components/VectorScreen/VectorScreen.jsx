import { FigureScreen } from '../../../../components';
import { vector } from '../../../../utilities/vectorList';

const VectorScreen = () => {
  return (
    <>
      <FigureScreen
        vector={vector[0]}
        top={'top-[136px]'}
        left={'left-[828px]'}
      />
      <FigureScreen
        vector={vector[1]}
        top={'top-[621px]'}
        left={'left-[995px]'}
      />
      <FigureScreen
        vector={vector[2]}
        top={'top-[845px]'}
        left={'left-[149px]'}
      />
    </>
  );
};

export default VectorScreen;
