import { createContext, useState, useContext } from 'react';
import { SUB_LINKS } from '../../data';

const AppContext = createContext();

function AppProvider({ children }) {
    const [page, setPage] = useState({ page: '', links: [] });
    const [location, setLocation] = useState({});
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

    const [showModal, setShowModal] = useState(false);

    const openSubmenu = (text, coordinates) => {
        const page = SUB_LINKS.find((link) => link.page === text);
        setPage(page);
        setLocation(coordinates);
        setIsSubmenuOpen(true);
    };

    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    };

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <AppContext.Provider
            value={{
                page,
                location,
                isSubmenuOpen,
                openSubmenu,
                closeSubmenu,
                SUB_LINKS,
                openModal,
                closeModal,
                showModal,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppProvider };
