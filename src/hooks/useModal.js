import { useState } from "react";

export const useModal = () => {
    const[modal, setModal] = useState(false);
    const[modalContent, setModalContent] = useState("IM A MODAL")

    const handleModal = (content = null) => {
        setModal(!modal); // toggle modal
        if (content ) {
            setModalContent(content);
        }
    };

    return { modal, modalContent, handleModal };
};

