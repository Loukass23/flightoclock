import React from 'react'
import PanamaImg from './slideshow/assets/Panama.png'
import AbuImg from './slideshow/assets/AbuDhabiMosque.png'
import CostaImg from './slideshow/assets/Costa_Rica.png'
import CanadaImg from './slideshow/assets/Canada.png'

import { Grid } from '@material-ui/core'

function Photos() {
    return (
        <Grid container spacing={0}>
            <Grid item xs={12} sm={4}>
                <img
                    alt="post"
                    style={{ width: '100%' }}
                    src={PanamaImg}
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <img
                    alt="post"
                    style={{ width: '100%' }}
                    src={AbuImg}
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <img
                    alt="post"
                    style={{ width: '100%' }}
                    src={CostaImg}
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <img
                    alt="post"
                    style={{ width: '100%' }}
                    src={CanadaImg}
                />
            </Grid>
        </Grid>


        //     <article className="thumb">
        //         <a href={PanamaImg} className="image"><img src={PanamaImg} alt="" /></a>
        //         <h2>Magna feugiat lorem</h2>
        //         <p>Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.</p>
        //     </article>
        //     <article className="thumb">
        //         <a href="images/fulls/02.jpg" className="image"><img src={AbuImg} alt="" /></a>
        //         <h2>Nisl adipiscing</h2>
        //         <p>Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.</p>
        //     </article>
        //     <article className="thumb">
        //         <a href="images/fulls/03.jpg" className="image"><img src={CostaImg} alt="" /></a>
        //         <h2>Tempus aliquam veroeros</h2>
        //         <p>Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.</p>
        //     </article>
        //     <article className="thumb">
        //         <a href="images/fulls/04.jpg" className="image"><img src={CanadaImg} alt="" /></a>
        //         <h2>Aliquam ipsum sed dolore</h2>
        //         <p>Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.</p>
        //     </article>
        //     <article className="thumb">
        //         <a href="images/fulls/05.jpg" className="image"><img src="images/thumbs/05.jpg" alt="" /></a>
        //         <h2>Cursis aliquam nisl</h2>
        //         <p>Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.</p>
        //     </article>
        //     <article className="thumb">
        //         <a href="images/fulls/06.jpg" className="image"><img src="images/thumbs/06.jpg" alt="" /></a>
        //         <h2>Sed consequat phasellus</h2>
        //         <p>Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.</p>
        //     </article>
        //     <article className="thumb">
        //         <a href="images/fulls/07.jpg" className="image"><img src="images/thumbs/07.jpg" alt="" /></a>
        //         <h2>Mauris id tellus arcu</h2>
        //         <p>Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.</p>
        //     </article>
        //     <article className="thumb">
        //         <a href="images/fulls/08.jpg" className="image"><img src="images/thumbs/08.jpg" alt="" /></a>
        //         <h2>Nunc vehicula id nulla</h2>
        //         <p>Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.</p>
        //     </article>
        //     <article className="thumb">
        //         <a href="images/fulls/09.jpg" className="image"><img src="images/thumbs/09.jpg" alt="" /></a>
        //         <h2>Neque et faucibus viverra</h2>
        //         <p>Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.</p>
        //     </article>
        //     <article className="thumb">
        //         <a href="images/fulls/10.jpg" className="image"><img src="images/thumbs/10.jpg" alt="" /></a>
        //         <h2>Mattis ante fermentum</h2>
        //         <p>Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.</p>
        //     </article>
        //     <article className="thumb">
        //         <a href="images/fulls/11.jpg" className="image"><img src="images/thumbs/11.jpg" alt="" /></a>
        //         <h2>Sed ac elementum arcu</h2>
        //         <p>Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.</p>
        //     </article>
        //     <article className="thumb">
        //         <a href="images/fulls/12.jpg" className="image"><img src="images/thumbs/12.jpg" alt="" /></a>
        //         <h2>Vehicula id nulla dignissim</h2>
        //         <p>Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.</p>
        //     </article>
        // </div>

    )
}

export default Photos
