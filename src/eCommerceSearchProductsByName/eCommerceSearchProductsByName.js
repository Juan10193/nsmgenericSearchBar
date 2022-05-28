import { LightningElement, track} from 'lwc';
import { loadStyle, loadScript} from 'lightning/platformResourceLoader';
export default class ECommerceSearchProductsByName extends LightningElement {
    ICONOS_PRODUCTOS ="../IconosBusquedaProductos.zip";
    rightarrow =`${ICONOS_PRODUCTOS}pathinarchive=Expanded/rightarrow.svg#rightarrow1`;
    filtro = `${ICONOS_PRODUCTOS}pathinarchive=Expanded/filter.svg#filter1`;
    
    connectedCallback(){
        loadStyle(this,  "../RobotoBlack.css")
        .then(res=>{
            console.log('Fuentes cargadas')
        })
    }
 
}