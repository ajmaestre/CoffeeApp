

// columns = ['c_d_dep', 'departamento', 'c_d_mun', 'municipio', 'grupo_de_cultivo',
//        'subgrupo_de_cultivo', 'cultivo', 'desagregaci_n_regional_y', 'a_o',
//        'periodo', 'rea_sembrada_ha', 'rea_cosechada_ha', 'producci_n_t',
//        'rendimiento_t_ha', 'estado_fisico_produccion', 'nombre_cientifico',
//        'ciclo_de_cultivo']

export interface misingData{

    c_d_dep?: number;
    departamento?: string;
    c_d_mun?: number;
    municipio?: string;
    grupo_de_cultivo?: string;
    subgrupo_de_cultivo?: string;
    cultivo?: string;
    desagregaci_n_regional_y?: string;
    a_o?: number;
    periodo?: string;
    rea_sembrada_ha?: number;
    rea_cosechada_ha?: number;
    producci_n_t?: number;
    rendimiento_t_ha?: number;
    estado_fisico_produccion?: string;
    nombre_cientifico?: string;
    ciclo_de_cultivo?: string;
    
}