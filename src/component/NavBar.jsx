import { AppBar, IconButton, Switch, Toolbar, Typography } from '@mui/material'
import React from 'react'
import BackpackIcon from '@mui/icons-material/Backpack';

export default function NavBar({darkMode ,setDarkMode }) {
  return (
    <>
      <AppBar position="static"  >
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="logo"
                            sx={{  scale: '1.5' }}
                        >
                            {<BackpackIcon />}
                        </IconButton>
                        <Typography variant="h4" color="secondary" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                            airbnb
                        </Typography>
                        <div>
                            <label>Dark mode</label>
                            <Switch checked={darkMode}  onChange={() => {setDarkMode(!darkMode)}}/>
                        </div>   
                    </Toolbar>
                </AppBar>
    </>
  )
}
