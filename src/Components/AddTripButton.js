import { useState } from "react";
import { HiPlus } from "react-icons/hi2";
import { Modal } from "./modal";

export const AddTripButton = ({ onCreateNewTrip }) => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    city: "Kyiv",
    startDate: "",
    endDate: "",
  });

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCreateNewTrip = (e) => {
    e.preventDefault();
    onCreateNewTrip(formData.city, formData.startDate, formData.endDate);
    setShowModal(false);
  };

  return (
    <div>
      <button type="button" className="button-plus" onClick={handleOpenModal}>
        <div className="button-plus-text">
          <HiPlus />
          <span>Add Trip</span>
        </div>
      </button>
      <Modal
        onRequestClose={handleCloseModal}
        isOpen={showModal}
        onSubmit={handleCreateNewTrip}
        handleInputChange={handleInputChange}
        formData={formData}
      />
    </div>
  );
};
