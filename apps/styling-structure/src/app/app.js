import { Button } from '@nx-tutorial/react-bootstrap-component/index.jsx';

export function App() {
  return (
    <div>
      <button className='global-btn'>Global Button</button>
      <Button className="is-text-small">
        <p className="is-text-small">React Button</p>
      </Button>
    </div>
  );
}
export default App;
