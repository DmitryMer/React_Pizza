import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Header = ({ orders }) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Pizza Place🍕
                    </Typography>
                    <Button component={Link} to="/" color="inherit">
                        Главная
                    </Button>
                    <Button component={Link} to="about" color="inherit">
                        О нас
                    </Button>
                    <Button component={Link} to="order" color="inherit">
                        корзина
                    </Button>
                    {!orders.length ? "пусто" : orders.length}
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
