import {useState} from 'react';

export function useDisclosure(initialOpen = false) {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const toggle = () => setIsOpen(wasOpen => !wasOpen);
  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);

  return {
    isOpen,
    setIsOpen,
    toggle,
    close,
    open,
  };
}
