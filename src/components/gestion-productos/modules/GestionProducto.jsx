import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, IconButton, Typography } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

export function GestionProducto({ productosUsuario, handleOpenEdit, handleOpenDelete, handleOpenNew }) {
  const columns = [
    { field: "nombre", headerName: "Nombre" },
    { field: "precio", headerName: "Precio", type: "number" },
    { field: "stock", headerName: "Stock", type: "number" },
    { field: "categoria", headerName: "Categoria" },
    { field: "acciones", headerName: "Acciones", renderCell: (params) => (
        <>
        <IconButton data-id={params.row.id} onClick={(event) => handleOpenEdit(event, params.row)}>
          <ModeEditOutlineOutlinedIcon />
        </IconButton>
        <IconButton data-id={params.row.id} onClick={(event) => handleOpenDelete(event, params.row)}>
          <DeleteForeverOutlinedIcon />
        </IconButton>
        </>
      ), },
  ];
  const rows = [];
  productosUsuario
    ? productosUsuario.forEach((producto) => {
        rows.push({
          id: producto._id,
          nombre: producto.nombre,
          precio: producto.precio,
          stock: producto.stock,
          categoria:
            producto.categoria !== null ? producto.categoria.nombre : "Ninguna",
            usuario: producto.usuario !== null ? producto.usuario : "Ninguna",
            img: producto.img !== null ? producto.img : "Ninguna",
            descripcion: producto.descripcion !== null ? producto.descripcion : "",
            categoria_id: producto.categoria ? producto.categoria._id : ""
        });
      })
    : rows.push([]);
  return (
    <>
      <Box sx={{ marginTop: "4em" }}>
        <Typography variant="h3" gutterBottom>
          Gestion de productos
        </Typography>
        <Box
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "1em",
          }}
        >
          <Button
            variant="contained"
            endIcon={<AddCircleOutlineOutlinedIcon />}
            onClick={handleOpenNew}
          >
            Crear producto
          </Button>
        </Box>

        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </div>
      </Box>
    </>
  );
}
