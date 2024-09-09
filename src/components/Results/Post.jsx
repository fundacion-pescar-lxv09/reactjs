import { useState } from "react"
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Card, CardContent, CardActions, CardMedia } from "@mui/material"

function Post({title,username, import_datetime, images:{ original,downsized_small,fixed_height_small }}){
    const [active, setActive] = useState(false)
    const resize = () => setActive(!active)
    const [{mp4:oVid,url:oUrl}, {mp4:dsVid,url:dsUrl}, {mp4:sVid,url:sUrl}] = [original,downsized_small, fixed_height_small]
    return(
    <Card elevation={10} onClick={resize} size={12}>
        <CardMedia component="video" image={active?(oVid||oUrl):(sVid||sUrl||dsVid||dsUrl)} title={title} autoPlay={active} loop={active}/>
        <CardContent>
            <Typography variant="h5">{title ?? "Untitled"}</Typography>
            <Typography variant="body2">Publicado por {username ?? "unknown"}</Typography>
            <Typography variant="body2">Publicado el {import_datetime}</Typography>
        </CardContent>
        <CardActions>
            <hr/>
            <Button>Me Gusta</Button>
            <Button>Guardar</Button>
            <Button onClick={resize}>ver</Button>
        </CardActions>
    </Card>
)}
export default Post