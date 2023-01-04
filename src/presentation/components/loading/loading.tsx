import React from 'react';
import { Spinner } from '@/presentation/components';
import Styles from './loading-styles.scss';

const loading: React.FC = () => {
  return (
    <div className={Styles.loadingWrap}>
      <div className={Styles.loading}>
        <span>Aguarde...</span>
        <Spinner isNegative />
      </div>
    </div>
  );
};

export default loading;