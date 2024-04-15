import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";

export function PortalWeb({ productos, irInfoProducto }) {
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
                    onClick={irInfoProducto}>
                      <CardMedia
                        component="img"
                        height="150"
                        image={producto.img}
                        alt=""
                        style={{ objectFit: 'contain', maxWidth: '100%' }}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {producto.nombre}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {producto.descripcion}
                        </Typography>
                        <div style={{fontSize: "20px"}}>
                          <p style={{color: "green", display: "inline", fontSize: "20px"}}>$ </p>
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
    </>
  );
}
