import { Button } from "./components/ui/button";


const App = () => {
  return (
    <div>
       <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Button variant="outline">Button</Button>
    <Button variant="destructive" className="text-left text-black text-3xl hover:bg-red-800">Destructive</Button>

    </div>
  );
};

export default App;