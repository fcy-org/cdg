import { Component, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-yellow-50 p-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-lg w-full border-t-4 border-red-600">
            <h1 className="text-xl font-extrabold text-red-600 mb-2">Erro na aplicação</h1>
            <p className="text-gray-600 text-sm mb-4">
              Tire um print desta tela e envie para o suporte.
            </p>
            <pre className="bg-gray-100 rounded-lg p-4 text-xs text-gray-800 overflow-auto whitespace-pre-wrap break-all">
              {this.state.error.message}
              {'\n\n'}
              {this.state.error.stack}
            </pre>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
