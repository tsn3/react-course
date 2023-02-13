export const ConfirmationDialog = ({ title, children, confirm, cancel, open }) => {
  return (
    <dialog open={open}>
      <div>{title}</div>
      <div>{children}</div>
      <div>
        <button type={"button"} onClick={confirm} >
          Confirm
        </button>
        <button type={"button"} onClick={cancel} >
          Cancel
        </button>
      </div>
    </dialog>
  )
}