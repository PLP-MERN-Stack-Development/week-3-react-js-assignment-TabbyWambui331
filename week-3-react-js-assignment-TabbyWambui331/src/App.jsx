import Button from './components/Button';

function App() {
  return (
    
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-blue-600 underline">
        Hello Tabby!How are you?
      </h1>
      <p className="mt-4 text-lg text-blue-800">
        This is a simple React component styled with Tailwind CSS.
      </p>
      <p className="mt-2 text-sm text-blue-500">
        Enjoy building your application!
      </p>
      <p className="mt-2 text-sm text-blue-500">
        This is another paragraph with some additional information.
      </p>
      <p className="mt-2 text-sm text-blue-500">
        Feel free to customize it further!
      </p>
      <div>
        <h2>
          This is a heading inside a div, styled with Tailwind CSS.
        </h2>
        </div>
    </div>
  );
}
export default App;
// This is a simple React component that uses Tailwind CSS for styling.
// It displays a centered heading with a blue background and text.
