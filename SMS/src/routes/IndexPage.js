import React from 'react';
import { connect } from 'dva';

import Elayout from '../components/Elayout/Elayout';

function IndexPage() {
  return (
    // <div className={styles.normal}>
    <div>
     <Elayout/>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
