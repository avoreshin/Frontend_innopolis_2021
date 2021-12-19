import Button from '@mui/material/Button';
import {TextField} from "@mui/material";

function MaterialUI() {
    return (
        <div>
            <Button variant={'contained'}>Hello MaterialUI!</Button>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <TextField id="standard-basic" label="Standard" variant="standard" />
        </div>
    )
}

export default MaterialUI;
