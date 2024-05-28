import {
    Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

export function ModalEliminarProducto({
  openDelete,
  handleCloseDelete,
  infoDelete,
  handleSubmitDelete,
}) {
  return (
    <>
      <Dialog
        open={openDelete}
        onClose={handleCloseDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ textAlign: "center" }}
      >
        <DialogTitle id="alert-dialog-title">{"¡Importante!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ¿Está seguro de eliminar el producto: {infoDelete.nombre} ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDelete}>Cancelar</Button>
          <Button color="warning" onClick={handleSubmitDelete}>
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
