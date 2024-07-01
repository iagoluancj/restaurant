import { useState } from "react";
import { Close, Modal, ModalContent } from "./styles"

export default function ModalLogin() {
    let modal, btn, span = false

    const [modalProps, setModalProps] = useState([modal, btn, span])
    // var modal = document.getElementById("myModal");

    // // Get the button that opens the modal
    // var btn = document.getElementById("myBtn");

    // // Get the <span> element that closes the modal
    // var span = document.getElementsByClassName("close")[0];

    // // When the user clicks on the button, open the modal
    // btn.onclick = function() {
    // modal.style.display = "block";
    // }

    // // When the user clicks on <span> (x), close the modal
    // span.onclick = function() {
    // modal.style.display = "none";
    // }

    // // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function(event) {
    // if (event.target == modal) {
    //     modal.style.display = "none";
    // }
    // }

    return (
        <>
            <button id="myBtn">Open Modal</button>
            <div>
                <Modal id="myModal" class="modal">
                <ModalContent class="modal-content">
                    <Close class="close">&times;</Close>
                    <p>Some text in the Modal..</p>
                </ModalContent>
                </Modal>
            </div>
        </>
    )
}