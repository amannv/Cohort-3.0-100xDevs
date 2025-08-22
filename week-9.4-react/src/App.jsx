import { useState } from 'react';
import React from 'react';

function App() {
  

return (
  <>
    <ErrorBoundary>
      <Card1 />
    </ErrorBoundary>
    <ErrorBoundary>
      <Card2 />
    </ErrorBoundary>
  </>
)
  
}

function Card1() {

  throw new Error("Error in Card 1");

  return (
    <div style={{ background: "#dfe6ef", borderRadius: 20, width: 100, height: 100, margin: 10, textAlign: "center"}}>
    Card 1
    </div>
  )
}

function Card2() {
  
  return (
   <div style={{ background: "#dfe6ef", borderRadius: 20, width: 100, height: 100, margin:10, textAlign:"center"}}>
      Card 2
    </div>
  )
    }


class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("Error caught:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return <div style={{ background: "#dfe6ef", borderRadius: 20, width: 100, height: 100, margin: 10, textAlign: "center"}}>
              Something went wrong!
           </div>;
        }

        return this.props.children; 
    }
}



export default App
