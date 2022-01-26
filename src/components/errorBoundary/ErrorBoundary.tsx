import { Component, ErrorInfo, ReactNode } from "react";
import ErrorMessage from "../errorMessage/ErrorMessage";

interface IProps {
  children: ReactNode;
}

interface IState {
  error: boolean;
}

class ErrorBoundary extends Component<IProps, IState> {
  state = {
    error: false,
  };

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
    this.setState({
      error: true,
    });
  }

  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
