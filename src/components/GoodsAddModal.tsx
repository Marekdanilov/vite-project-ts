import { useState } from "react";
import ReactModal from "react-modal";
import Button from "./Button";
import Input from "./Input";
import { ModalWindowProps } from "../models/ProjectModels";

const ModalWindow = ({ goods, setGoods}: ModalWindowProps) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => {
        setModalIsOpen(true);
    };
    const closeModal = () => {
        setModalIsOpen(false);
    };
    

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const AddGood = () => {
        let copy = Object.assign([], goods);
        copy.push({title: title, description: description, price: price});
        setGoods(copy);
    }

    const modalContent = (
        <div className="flex flex-col justify-between h-1/3 p-5 gap-3">
            <div>
                <p>Название:</p>
                <Input size="medium" color="primary" value={title} onChange={event => setTitle(event.target.value)}/>
            </div>
            <div>
                <p>Описание:</p>
                <Input size="medium" color="primary" value={description} onChange={event => setDescription(event.target.value)}/>
            </div>
            <div>
                <p>Цена</p>
                <Input size="medium" color="primary" value={price} onChange={event => setPrice(event.target.value)}/>
            </div>
            <Button size="medium" color="primary" title="Добавить" onClick = {() => {
                AddGood();
                setTitle("");
                setDescription("")
                setPrice("");
                closeModal();
            }}/>
        </div>
    );

    return (
        <div>
            <Button size="medium" color="secondary" title="Добавить товар" onClick={openModal} />
            <ReactModal isOpen={modalIsOpen} onRequestClose={closeModal} className="size-fit bg-gray-300 m-auto">
                {modalContent}
            </ReactModal>
        </div>
    )
};

export default ModalWindow;