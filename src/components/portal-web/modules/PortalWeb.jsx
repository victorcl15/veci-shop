import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Autocomplete,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  CardActionArea,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeIcon from "@mui/icons-material/Home";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import AddIcon from "@mui/icons-material/Add";

export function PortalWeb({
  productos,
  irInfoProducto,
  subCategorias,
  requestProductosPorCategoria,
  requestProductosPorSubCategoria,
  requestProductos,
}) {
  const [subcategoria, setSubCategoria] = React.useState("");

  const handleChange = (event) => {
    if (event.target.value === "665551e74550954cc0b8ce2b") {
      requestProductos();
    }
    requestProductosPorSubCategoria(event.target.value);
    //setAge(event.target.value);
  };
  const [value, setValue] = React.useState(-1);
  const content = {
    margin: "0",
    padding: "0",
    display: "grid",
    align: "center",
    width: "100%",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "15px",
  };
  return (
    <>
    <div style={{ 
      backgroundImage: `url(${"https://img.freepik.com/premium-vector/realistic-minimalist-lines-future-white-gradient-modern-abstract-background-wallpaper-halftone_473751-758.jpg"})`, 
      backgroundRepeat: 'no-repeat', 
      backgroundSize: 'cover', 
      height: '100vh'
    }}>
      <Box sx={{ marginTop: "4em", display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: 500 }}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              if (newValue === 0)
                requestProductosPorCategoria("66554e86c9ad280e96cc8551");
              if (newValue === 1)
                requestProductosPorCategoria("66554e45c9ad280e96cc854b");
              if (newValue === 2)
                requestProductosPorCategoria("66554e75c9ad280e96cc854e");
              setValue(newValue);
              console.log(newValue);
            }}
          >
            <BottomNavigationAction label="Hogar" icon={<HomeIcon />} />
            <BottomNavigationAction
              label="Tecnologia"
              icon={<ImportantDevicesIcon />}
            />
            <BottomNavigationAction label="Alimento" icon={<FastfoodIcon />} />
            {/* <BottomNavigationAction
              label="Más"
              icon={<AddIcon />}
            ></BottomNavigationAction> */}
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Más
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={subcategoria}
                onChange={handleChange}
                label="Sub-Categoria"
              >
                <MenuItem value={""}>Seleccione...</MenuItem>
                {subCategorias
                  ? subCategorias.map((categoria) => {
                      return (
                        <MenuItem key={categoria._id} value={categoria._id}>
                          {categoria.nombre}
                        </MenuItem>
                      );
                    })
                  : []}
              </Select>
            </FormControl>
            {/* <Autocomplete
              id="size-small-standard"
              size="small"
              options={subCategorias}
              style={{ width: 300 }}
              getOptionLabel={(option) => option.nombre}
              defaultValue={subCategorias[1]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  label="Más"
                  placeholder=""
                />
              )}
              onChange={(e, newValue) => {
                console.log(newValue);
              }}
            /> */}
          </BottomNavigation>
        </Box>
      </Box>
      <Box style={{ margin: "50px" }}>
        <Box
          sx={content}
          style={{
            justifyContent: "space-around",
          }}
        >
          {productos
            ? productos.map((producto) => {
                return (
                  <Card key={producto._id} sx={{ maxWidth: 345 }}>
                    <CardActionArea
                      data-productoid={producto._id}
                      data-nombre={producto.nombre}
                      data-descripcion={producto.descripcion}
                      data-precio={producto.precio}
                      data-stock={producto.stock}
                      data-categoria={producto.categoria}
                      data-usuario={producto.usuario}
                      data-img={producto.img}
                      onClick={irInfoProducto}
                    >
                      <CardMedia
                        component="img"
                        height="150"
                        image={producto.img}
                        alt=""
                        style={{ objectFit: "contain", maxWidth: "100%" }}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {producto.nombre}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {producto.descripcion}
                        </Typography>
                        <div style={{ fontSize: "20px" }}>
                          <p
                            style={{
                              color: "green",
                              display: "inline",
                              fontSize: "20px",
                            }}
                          >
                            ${" "}
                          </p>
                          {producto.precio}
                        </div>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                );
              })
            : []}
        </Box>
      </Box>
      </div>
    </>
  );
}
