import React from 'react'
import './shopping.css'
import { styled, alpha } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
// import Badge from '@mui/material/Badge';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import MailIcon from '@mui/icons-material/Mail';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import MoreIcon from '@mui/icons-material/MoreVert';

// import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// const ExpandMore = styled((props) => {
//     const { expand, ...other } = props;
//     return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//     transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//         duration: theme.transitions.duration.shortest,
//     }),
// }));

// const Search = styled('div')(({ theme }) => ({
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     '&:hover': {
//         backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//         marginLeft: theme.spacing(3),
//         width: 'auto',
//     },
// }));


// const SearchIconWrapper = styled('div')(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
// }));


// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: 'inherit',
//     '& .MuiInputBase-input': {
//         padding: theme.spacing(1, 1, 1, 0),
//         // vertical padding + font size from searchIcon
//         paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//         transition: theme.transitions.create('width'),
//         width: '100%',
//         [theme.breakpoints.up('md')]: {
//             width: '20ch',
//         },
//     },
// }));


function Shopping() {
    const [expanded, setExpanded] = React.useState(false);
    // const handleExpandClick = () => {
    //     setExpanded(!expanded);
    // };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    // const isMenuOpen = Boolean(anchorEl);
    // const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    // const handleProfileMenuOpen = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    // const handleMobileMenuOpen = (event) => {
    //     setMobileMoreAnchorEl(event.currentTarget);
    // };

    // const menuId = 'primary-search-account-menu';
    // const renderMenu = (
    //     <Menu
    //         anchorEl={anchorEl}
    //         anchorOrigin={{
    //             vertical: 'top',
    //             horizontal: 'right',
    //         }}
    //         id={menuId}
    //         keepMounted
    //         transformOrigin={{
    //             vertical: 'top',
    //             horizontal: 'right',
    //         }}
    //         open={isMenuOpen}
    //         onClose={handleMenuClose}
    //     >
    //         <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
    //         <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    //     </Menu>
    // );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    // const renderMobileMenu = (
    //     <Menu
    //         anchorEl={mobileMoreAnchorEl}
    //         anchorOrigin={{
    //             vertical: 'top',
    //             horizontal: 'right',
    //         }}
    //         id={mobileMenuId}
    //         keepMounted
    //         transformOrigin={{
    //             vertical: 'top',
    //             horizontal: 'right',
    //         }}
    //         open={isMobileMenuOpen}
    //         onClose={handleMobileMenuClose}
    //     >
    //         <MenuItem>
    //             <IconButton size="large" aria-label="show 4 new mails" color="inherit">
    //                 <Badge badgeContent={4} color="error">
    //                     <MailIcon />
    //                 </Badge>
    //             </IconButton>
    //             <p>Messages</p>
    //         </MenuItem>
    //         <MenuItem>
    //             <IconButton
    //                 size="large"
    //                 aria-label="show 17 new notifications"
    //                 color="inherit"
    //             >
    //                 <Badge badgeContent={17} color="error">
    //                     <NotificationsIcon />
    //                 </Badge>
    //             </IconButton>
    //             <p>Notifications</p>
    //         </MenuItem>
    //         <MenuItem onClick={handleProfileMenuOpen}>
    //             <IconButton
    //                 size="large"
    //                 aria-label="account of current user"
    //                 aria-controls="primary-search-account-menu"
    //                 aria-haspopup="true"
    //                 color="inherit"
    //             >
    //                 <AccountCircle />
    //             </IconButton>
    //             <p>Profile</p>
    //         </MenuItem>
    //     </Menu>
    // );

    return (
        <div>
            {/* First nav */}
            <nav className='topnav'>
                <div className='logo'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Nj7kf0HBf5F5ftVb9VfArvOmLA3WepoXQdUIXK8q6yILplMbnpibh4DTachHUoT8CpE&usqp=CAU" alt="" />
                    <h2>Nest</h2>
                </div>
                <div className='searchcenter'>
                    <form className="d-flex container mt-4 mx-3 ">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                </div>
                <div className='location mt-4'>
                    <select className="form-select  text-black" style={{ width: 200 }} aria-label="Default select example">
                        <option selected>Your Location</option>
                        <option value={1}>Ahmedabad</option>
                        <option value={2}>Karnatak</option>
                        <option value={3}>Amreli</option>
                    </select>
                </div>
                <div className="differentcat mt-4">
                    <span><i class="fa-solid fa-arrows-rotate p-2"></i>Compare</span>
                    <span><i class="far fa-heart p-2"></i>Wishlist</span>
                    <span><i class="fas fa-shopping-cart p-2"></i>Cart</span>
                    <span><i class="fas fa-user p-2"></i>Account</span>
                </div>
            </nav>


            {/*Second nav*/}
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container-fluid mx-5 ">
                    {/* <a className="navbar-brand" href="#">Navbar</a> */}
                    <select className="form-select bg-success text-white" style={{ width: 200 }} aria-label="Default select example">
                        <option selected>Browse all categories</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                    </select>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link fw-normal text-dark" aria-current="page" href="#"> <i class="fas fa-fire"></i> Hot Deals</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-normal text-dark" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-normal text-dark" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-normal text-dark" href="#">Shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-normal text-dark" href="#">Vendors</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-normal text-dark" href="#">Mega menu</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-normal text-dark" href="#">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-normal text-dark" href="#">Pages</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-normal text-dark" href="#">Contact</a>
                            </li>
                            <li className="nav-item contnum">
                                <h5 className='text-sccess'><i class="fas fa-headset" style={{ color: 'black' }}></i> 1900 - 888  <br /><h6 className='text-dark'>24/7 customer support</h6> </h5>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            {/* Img */}
            <img src="https://nest.whatsmenu.page/uploads/restorants/28172315-3e1a-40d4-aca5-6628f5573b2a_cover.jpg" width="100%" alt="" className='main_img' />

            {/* Features categories */}
            <div className='d-flex px-5 mt-4 mb-4'>
                <h5>Featured Categories</h5> <span className='mx-4'>Cake & Milk</span>
                <span className='mx-4'>Coffes & teas</span>
                <span className='mx-4'>Pet foods</span>
                <span className='mx-4'>Vegetables</span>
            </div>

            <div className='d-flex justify-content-evenly'>
                <Card sx={{ width: 130, height: 210, bgcolor: "#ff8a80", borderRadius: 2 }}>
                    <CardMedia
                        component="img"
                        height="150"
                        image="https://www.plantmegreen.com/cdn/shop/products/AppleRedDeliciousFruitDetail_PMG.jpg?v=1666096661"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="#000000" textAlign={'center'}>
                            Red Apple
                        </Typography>
                        <Typography variant="body2" color="text.#000000" textAlign={'center'}>
                            26 Items
                        </Typography>
                    </CardContent>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                    </Collapse>
                </Card>
                <Card sx={{ width: 130, height: 210, bgcolor: "#ff8a80", borderRadius: 2 }}>
                    <CardMedia
                        component="img"
                        height="150"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGyEyhA_sV0RHl8sJGWKGrPoH6pK5svkTFYQ&usqp=CAU"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="#000000" textAlign={'center'}>
                            Snak
                        </Typography>
                        <Typography variant="body2" color="text.#000000" textAlign={'center'}>
                            26 Items
                        </Typography>
                    </CardContent>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                    </Collapse>
                </Card>
                <Card sx={{ width: 130, height: 210, bgcolor: "#ff8a80", borderRadius: 2 }}>
                    <CardMedia
                        component="img"
                        height="150"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBljFcjsRzyTzvK44_50fxzOE71OuQawUO9MGdVUSQcEmUnkzCZiUrkguoO3GZGSH1U2g&usqp=CAU"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="#000000" textAlign={'center'}>
                            Vegatables
                        </Typography>
                        <Typography variant="body2" color="text.#000000" textAlign={'center'}>
                            26 Items
                        </Typography>
                    </CardContent>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                    </Collapse>
                </Card>
                <Card sx={{ width: 130, height: 210, bgcolor: "#ff8a80", borderRadius: 2 }}>
                    <CardMedia
                        component="img"
                        height="150"
                        image="https://cdn.pixabay.com/photo/2018/04/13/23/55/strawberry-3317983_1280.jpg"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="#000000" textAlign={'center'}>
                            Strawberry
                        </Typography>
                        <Typography variant="body2" color="text.#000000" textAlign={'center'}>
                            26 Items
                        </Typography>
                    </CardContent>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                    </Collapse>
                </Card>
                <Card sx={{ width: 130, height: 210, bgcolor: "#ff8a80", borderRadius: 2 }}>
                    <CardMedia
                        component="img"
                        height="150"
                        image="https://www.shutterstock.com/image-photo/fresh-plums-on-plate-over-600nw-2203045331.jpg"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="#000000" textAlign={'center'}>
                            Black Plum
                        </Typography>
                        <Typography variant="body2" color="text.#000000" textAlign={'center'}>
                            26 Items
                        </Typography>
                    </CardContent>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                    </Collapse>
                </Card>
                <Card sx={{ width: 130, height: 210, bgcolor: "#ff8a80", borderRadius: 2 }}>
                    <CardMedia
                        component="img"
                        height="150"
                        image="https://feeds.abplive.com/onecms/images/uploaded-images/2021/10/27/398ad21ef0949ee843d2db22c0031121_original.jpg?impolicy=abp_cdn&imwidth=720"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="#000000" textAlign={'center'}>
                            Custard apple
                        </Typography>
                        <Typography variant="body2" color="text.#000000" textAlign={'center'}>
                            26 Items
                        </Typography>
                    </CardContent>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                    </Collapse>
                </Card>
                <Card sx={{ width: 130, height: 210, bgcolor: "#ff8a80", borderRadius: 2 }}>
                    <CardMedia
                        component="img"
                        height="150"
                        image="https://news.cgtn.com/news/7a556a4e30637a6333566d54/img/f62f5544-c38a-4df5-96dd-847d4eb2df1b.jpg"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="#000000" textAlign={'center'}>
                            Coffe & Tea
                        </Typography>
                        <Typography variant="body2" color="text.#000000" textAlign={'center'}>
                            26 Items
                        </Typography>
                    </CardContent>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                    </Collapse>
                </Card>
                <Card sx={{ width: 130, height: 210, bgcolor: "#ff8a80", borderRadius: 2 }}>
                    <CardMedia
                        component="img"
                        height="150"
                        image="https://cdn.mos.cms.futurecdn.net/fsDKHB3ZyNJK6zMpDDBenB.jpg"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="#000000" textAlign={'center'}>
                            Headphones
                        </Typography>
                        <Typography variant="body2" color="text.#000000" textAlign={'center'}>
                            26 Items
                        </Typography>
                    </CardContent>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                    </Collapse>
                </Card>
            </div>
        </div>
    )
}

export default Shopping
