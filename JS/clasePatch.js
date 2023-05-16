//Precio Importacion conectores.
const LC_PC = 0.32,
    LC_APC = 0.37,
    SC_PC = 0.34,
    SC_APC = 0.34,
    FC_PC = 0.34,
    FC_APC = 0.5,
    ST_PC = 0.32,
    MTRJ = 1.59,
    E2000_APC = 1.4;

//Precio Importacion Cable.
const SM_SX = 0.13,
    SM_DX = 0.25,
    OM1_SX = 0.11,
    OM1_DX = 0.20,
    OM2_SX = 0.11,
    OM2_DX = 0.20,
    OM3_SX = 0.20,
    OM3_DX = 0.38,
    OM4_SX = 0.24,
    OM4_DX = 0.47;

class Patchcord {
    constructor(tipo_fo, direccionamiento, conector_1, conector_2, mts, cant, id, precio) {
        this.tipo_fo = tipo_fo;
        this.direccionamiento = direccionamiento;
        this.conector_1 = conector_1;
        this.conector_2 = conector_2;
        this.mts = parseInt(mts);
        this.cant = parseInt(cant);
        this.id = id;
        this.precio = precio;
    }
    patchcordPrecio(conector_1, conector_2, mts, tipo_fo, direccionamiento) {

                 let precio_conect_1, precio_conect_2, precio_fo, precio;

                 if (direccionamiento == "SX") { //SIMPLEX
                     switch (tipo_fo) {
                         case "SM":
                             precio_fo = SM_SX * mts;
                             break;
                         case "OM1":
                             precio_fo = OM1_SX * mts;
                             break;
                         case "OM2":
                             precio_fo = OM2_SX * mts;
                             break;
                         case "OM3":
                             precio_fo = OM3_SX * mts;
                             break;
                         case "OM4":
                             precio_fo = OM4_SX * mts;
                             break;
                     }
                     switch (conector_1) {
                         case "LC/PC":
                             precio_conect_1 = LC_PC;
                             break;
                         case "LC/APC":
                             precio_conect_1 = LC_APC;
                             break;
                         case "SC/PC":
                             precio_conect_1 = SC_PC;
                             break;
                         case "SC/APC":
                             precio_conect_1 = SC_APC;
                             break;
                         case "FC/PC":
                             precio_conect_1 = FC_PC;
                              break;
                         case "FC/APC":
                             precio_conect_1 = FC_APC;
                             break;
                         case "ST/PC":
                             precio_conect_1 = ST_PC;
                             break;
                        case "MTRJ":
                           precio_conect_1 = MTRJ;
                             break;
                       case "E2000/APC":
                             precio_conect_1 = E2000_APC;
                             break;
                     }
                     switch (conector_2) {
                         case "LC/PC":
                             precio_conect_2 = LC_PC;
                             break;
                         case "LC/APC":
                             precio_conect_2 = LC_APC;
                             break;
                         case "SC/PC":
                             precio_conect_2 = SC_PC;
                             break;
                         case "SC/APC":
                             precio_conect_2 = SC_APC;
                             break;
                         case "FC/PC":
                             precio_conect_2 = FC_PC;
                             break;
                         case "FC/APC":
                             precio_conect_2 = FC_APC;
                            break;
                         case "ST/PC":
                             precio_conect_2 = ST_PC;
                             break;
                         case "MTRJ":
                             precio_conect_2 = MTRJ;
                             break;
                         case "E2000/APC":
                             precio_conect_2 = E2000_APC;
                             break;
                     }
                 }
                 else {                          //DUPLEX
                     switch (tipo_fo) {
                         case "SM":
                             precio_fo = SM_DX * mts;
                             break;
                         case "OM1":
                             precio_fo = OM1_DX * mts;
                             break;
                         case "OM2":
                             precio_fo = OM2_DX * mts;
                             break;
                         case "OM3":
                             precio_fo = OM3_DX * mts;
                             break;
                         case "OM4":
                             precio_fo = OM4_DX * mts;
                             break;
                     }
                     switch (conector_1) {
                         case "LC/PC":
                             precio_conect_1 = LC_PC * 2;
                             break;
                         case "LC/APC":
                             precio_conect_1 = LC_APC * 2;
                             break;
                         case "SC/PC":
                             precio_conect_1 = SC_PC * 2;
                             break;
                         case "SC/APC":
                             precio_conect_1 = SC_APC * 2;
                             break;
                         case "FC/PC":
                             precio_conect_1 = FC_PC * 2;
                             break;
                         case "FC/APC":
                             precio_conect_1 = FC_APC * 2;
                             break;
                         case "ST/PC":
                             precio_conect_1 = ST_PC * 2;
                             break;
                         case "MTRJ":
                             precio_conect_1 = MTRJ * 2;
                             break;
                         case "E2000/APC":
                             precio_conect_1 = E2000_APC * 2;
                             break;
                     }
                     switch (conector_2) {
                         case "LC/PC":
                             precio_conect_2 = LC_PC * 2;
                             break;
                        case "LC/APC":
                             precio_conect_2 = LC_APC * 2;
                            break;
                         case "SC/PC":
                             precio_conect_2 = SC_PC * 2;
                             break;
                         case "SC/APC":
                             precio_conect_2 = SC_APC * 2;
                             break;
                         case "FC/PC":
                             precio_conect_2 = FC_PC * 2;
                             break;
                         case "FC/APC":
                             precio_conect_2 = FC_APC * 2;
                             break;
                         case "ST/PC":
                             precio_conect_2 = ST_PC * 2;
                             break;
                         case "MTRJ":
                             precio_conect_2 = MTRJ * 2;
                             break;
                         case "E2000/APC":
                             precio_conect_2 = E2000_APC * 2;
                             break;
                     }
                 }
                 precio = (((precio_conect_1 + precio_conect_2) * 9) + (precio_fo * 4)) * 1.25;
                 this.precio = Number(precio.toFixed(2));
    }
}