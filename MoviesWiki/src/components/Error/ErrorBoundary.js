import React, { Component } from 'react';

import styles from '../../styles/ErrorBoundary.css';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
    console.log(error);
    return { hasError: true };
  }

  // componentDidCatch(error, errorInfo) {
  //   // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
  //   // logErrorToMyService(error, errorInfo);
  //   // console.log(error);
  // }

  render() {
    if (this.state.hasError) {
      // Можно отрендерить запасной UI произвольного вида
      return <div className={styles.container}>Oops... something went wrong!</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
