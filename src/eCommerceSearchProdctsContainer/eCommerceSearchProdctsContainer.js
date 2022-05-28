import { LightningElement , track} from 'lwc';



export default class ECommerceSearchProdctsContainer extends LightningElement {
    hospitales =[{value:"Morelia", label:"Morelia"}, {value:"Tampico", label:"Tampico"},{value:"Morelia", label:"Morelia"}, {value:"Tampico", label:"Tampico"},{value:"Morelia", label:"Morelia"}, {value:"Tampico", label:"Tampico"}]
    categorias = [{value:"Maternidad", label:"Maternidad"}, {value:"Covid-19", label:"Covid-19"}, {value:"Checkups", label:"Checkups"}, {value:"Imagenología", label:"Imagenología"}, {value:"Laboratorio", label:"Laboratorio"}]
    subcategorias = [{value:"Paquetes", label:"Tamices"}]
    noborder = true
    filtergray = `https://ecommerce-starmedica.cs65.force.com/file-asset/IconosBusquedaProductos?oid=00D0m0000001wlQ&pathinarchive=Expanded/filtergray.svg#filtergray1`;
    search = `https://ecommerce-starmedica.cs65.force.com/file-asset/IconosBusquedaProductos?oid=00D0m0000001wlQ&pathinarchive=Expanded/search.svg#search1`
    rightarrow =`https://ecommerce-starmedica.cs65.force.com/file-asset/IconosBusquedaProductos?oid=00D0m0000001wlQ&pathinarchive=Expanded/rightarrow.svg#rightarrow1`;
    
}