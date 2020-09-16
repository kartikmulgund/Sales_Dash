import React from 'react'
import { useSelector } from 'react-redux'
import ViewDetails from '../sales/ViewDetails'

export default function ModalManager() {
  const modalLookup = {
    ViewDetails,
  }
  const currentModal = useSelector((state) => state.modal)
  let renderedModal
  if (currentModal) {
    const { modalType, modalProps } = currentModal
    const ModalComponent = modalLookup[modalType]
    renderedModal = <ModalComponent {...modalProps} />
  }

  return (
    <>
      <span>{renderedModal}</span>
    </>
  )
}
