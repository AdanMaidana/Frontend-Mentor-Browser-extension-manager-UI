import { useEffect, useState } from 'react';
import ExtensionsData from '../../assets/extensionsData';
import ExtensionCard from "../molecules/ExtensionCard";
import ListOfButtons from '../molecules/ListOfButtons';
import extensionsData from '../../assets/extensionsData';

export default function ListOfExtensions() {
  const [currentState, setCurrentState] = useState('All');
  const [allExtensions, setAllExtensions] = useState(extensionsData);
  const [extensionsToShow, setExtensionsToShow] = useState(extensionsData);
  const [isDelaying, setIsDelaying] = useState(false);

  // Función para filtrar dinámicamente
  const getFilteredExtensions = () => {
    switch (currentState) {
      case "Active":
        return allExtensions.filter(extension => extension.active);
      case "Inactive":
        return allExtensions.filter(extension => !extension.active);
      default:
        return allExtensions; // "All"
    }
  };


  // Agregar un retraso antes de aplicar el filtro si se está cambiando el estado
  useEffect(() => {
    if (isDelaying) {
      const timeout = setTimeout(() => {
        setExtensionsToShow(getFilteredExtensions());
        setIsDelaying(false);
      }, 300); // Esperar 1 segundo antes de actualizar
      return () => clearTimeout(timeout);
    } else {
      setExtensionsToShow(getFilteredExtensions());
    }
  }, [currentState, allExtensions, isDelaying]);

  // Modificación de estado desde ExtensionCard
  const updateExtensionState = (updatedExtensions) => {
    setAllExtensions(updatedExtensions);
    setIsDelaying(true); // Activamos el delay antes de filtrar
  };

  return (
    <>
      <ListOfButtons currentState={currentState} setCurrentState={setCurrentState} />

      <ul className='grid gap-3 md:grid-cols-2 lg:grid-cols-3'>
        {extensionsToShow.map((extension) =>
        (
          <ExtensionCard key={extension.id} extensionData={extension} allExtensions={allExtensions} setAllExtensions={updateExtensionState} />
        )
        )}
      </ul>
    </>

  )
}
