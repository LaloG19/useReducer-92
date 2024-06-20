import React from 'react';

const LazyComponent: React.FC = () => {
  
  const [usuarios, setUsuarios] = React.useState<any[]>([]);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsuarios(data));
  }, []);
  
  return (
    <>
      <div  
        className="p-4 bg-[#353535] absolute 
        bottom-0 w-full text-white font-bold 
        tracking-[0.25rem] rounded-t-3xl"
      >
        { usuarios.length > 0 && <p key={usuarios[0].id}>{usuarios[0].name}</p> }
      </div>
    </>
  );
};

export default LazyComponent;
