import {
    Box,
    Divider,
    Modal,
    Typography,
    styled,
    Button,
    Card,
    Input,
} from "@mui/material";

export function ModalConfirmarCompra({
    open,
    handleCloseConfirmacion,
    handleSubmit,
    handleChangeDireccion,
    direccion,
    handleSubirDireccion
}) {
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "90%",
        maxWidth: "700px",
        borderRadius: "20px",
        boxShadow: 24,
        p: 4,
        maxHeight: "95vh",
    };

    const content = {
        margin: "0",
        padding: "0",
        display: "grid",
        width: "100%",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "15px",
    };
    return (
        <>
            <Modal
                open={open}
                onClose={handleCloseConfirmacion}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Card sx={style}>
                    <Divider variant="middle" />

                    <form onSubmit={handleSubmit}>
                        <div style={{ maxHeight: "80%", overflowY: "auto" }}>
                            <Box sx={content}>
                                <Box>
                                    <Typography variant="h5" gutterBottom>
                                        ¿Deseas enviarlo a tu direccion actual?
                                    </Typography>

                                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                        Direccion
                                    </Typography>
                                    <Input
                                        style={{ marginTop: "5px" }}
                                        label=""
                                        value={direccion.direccion}
                                        onChange={handleChangeDireccion}
                                    />

                                    <Button
                                        data-direccion={direccion.direccion} 
                                        onClick={handleSubirDireccion}
                                        type="submit"
                                        disabled={false}
                                        color="success"
                                    >
                                        Actualizar
                                    </Button>

                                </Box>



                            </Box>
                        </div>
                        <Divider variant="middle" />
                        <Box
                            style={{
                                display: "flex",
                                justifyContent: "space-around",
                            }}
                            m={-0.5}
                            mb={-2}
                        >
                            <Button color="error" onClick={handleCloseConfirmacion}>
                                Cancelar
                            </Button>
                            <Button
                                onClick={handleSubmit}
                                type="submit"
                                disabled={false}
                                color="success"
                            >
                                Confirmar
                            </Button>
                        </Box>
                    </form>
                </Card>
            </Modal>
        </>
    );
}
