import {
  Box,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  Icon,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Select,
  Typography,
  TextField,
  styled,
  Button,
  Card,
  Input,
} from "@mui/material";

export function ModalCrearProducto({
  open,
  dataTypeCard,
  objectExpired,
  handleClose,
  isFormModified,
  isDisabled,
  getFieldValue,
  name,
  handleFieldChange,
  handleSubmit,
  tiposCategorias,
  handleFieldChangeNewSubCategoria,
  tiposSubCategorias,
  tiposSubCategoriaNinguno,
  requestSubCategorias,
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
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card sx={style}>
          <Divider variant="middle" />

          <form onSubmit={handleSubmit}>
            <div style={{ maxHeight: "80%", overflowY: "auto" }}>
              <Box sx={content}>
                <Box>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Nombre
                  </Typography>
                  <Input
                    disabled={isDisabled}
                    style={{ marginTop: "5px" }}
                    label=""
                    value={getFieldValue("nombre")}
                    onChange={(e) =>
                      handleFieldChange("nombre", e.target.value)
                    }
                  />
                </Box>
                <Box>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Descripción
                  </Typography>
                  <Input
                    disabled={isDisabled}
                    style={{ marginTop: "5px" }}
                    label=""
                    value={getFieldValue("descripcion")}
                    onChange={(e) =>
                      handleFieldChange("descripcion", e.target.value)
                    }
                  />
                </Box>
                <Box>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Precio
                  </Typography>
                  <Box sx={{ marginTop: "5px", alignItems: "center" }}>
                    <Input
                      type="number"
                      disabled={isDisabled}
                      style={{ width: "8.2em", marginRight: "5px" }}
                      label="Número"
                      value={getFieldValue("precio")}
                      onChange={(e) => {
                        if (/^\d*$/.test(e.target.value)) {
                          handleFieldChange("precio", e.target.value);
                        }
                      }}
                    />
                  </Box>
                </Box>
                <Box>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Stock
                  </Typography>
                  <Input
                    type="number"
                    disabled={isDisabled}
                    style={{ width: "4.2em", marginRight: "5px" }}
                    label="Número"
                    value={getFieldValue("stock")}
                    onChange={(e) => {
                      if (/^\d*$/.test(e.target.value)) {
                        handleFieldChange("stock", e.target.value);
                      }
                    }}
                  />
                </Box>
                <Box>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    URL imagen
                  </Typography>
                  <Input
                    disabled={isDisabled}
                    style={{ marginTop: "5px" }}
                    label=""
                    value={getFieldValue("img")}
                    onChange={(e) => handleFieldChange("img", e.target.value)}
                  />
                </Box>
                <Box>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Categoria
                  </Typography>
                  <FormControl sx={{ minWidth: 20 }}>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth"
                      value={
                        getFieldValue("categoria")
                      }
                      onChange={(e) => {
                        handleFieldChange("categoria", e.target.value);
                        requestSubCategorias(e.target.value);
                        if(e.target.value === "665551ca4550954cc0b8ce27"){
                          handleFieldChangeNewSubCategoria("sub_categoria", tiposSubCategoriaNinguno)
                        }
                      }
                      }
                      style={{ fontSize: "15px", padding: "1px" }}
                      disabled={isDisabled}
                      displayEmpty
                    >
                      <MenuItem value={""}>Seleccione...</MenuItem>
                      {tiposCategorias
                        ? tiposCategorias.map((categoria) => {
                            return (
                              <MenuItem
                                key={categoria._id}
                                value={categoria._id}
                              >
                                {categoria.nombre}
                              </MenuItem>
                            );
                          })
                        : []}
                    </Select>
                  </FormControl>
                </Box>
                {getFieldValue("categoria") !== "Ninguna" ? (
                  <>
                    <Box>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Sub-Categoria
                      </Typography>
                      <FormControl sx={{ minWidth: 20 }}>
                        <Select
                          labelId="demo-simple-select-autowidth-label"
                          id="demo-simple-select-autowidth"
                          value={
                            getFieldValue("sub_categoria") === "Ninguna"
                              ? ""
                              : getFieldValue("sub_categoria")
                          }
                          onChange={(e) =>
                            handleFieldChange("sub_categoria", e.target.value)
                          }
                          style={{ fontSize: "15px", padding: "1px" }}
                          disabled={isDisabled}
                          displayEmpty
                        >
                          <MenuItem value={""}>Seleccione...</MenuItem>
                          {tiposSubCategorias
                            ? tiposSubCategorias.map((sub_categoria) => {
                                return (
                                  <MenuItem
                                    key={sub_categoria._id}
                                    value={sub_categoria._id}
                                  >
                                    {sub_categoria.nombre}
                                  </MenuItem>
                                );
                              })
                            : []}
                        </Select>
                      </FormControl>
                    </Box>{" "}
                  </>
                ) : (""
                )}
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
              <Button color="error" onClick={handleClose}>
                Cancelar
              </Button>
              <Button
                onClick={handleSubmit}
                type="submit"
                disabled={isDisabled || isFormModified}
                color="success"
              >
                Guardar
              </Button>
            </Box>
          </form>
        </Card>
      </Modal>
    </>
  );
}
