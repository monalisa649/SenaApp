export interface PrograForm {
    id: number;
    name: string;
    nivelForm: string;
    jornada: string;
    // redirecTo: string;
    }

// tslint:disable-next-line: class-name
export interface rutaPopover {
    icon: string;
    name: string;
    redirecTo: string;
}

export interface NoticiaSena {
    id: number;
    titulo: string;
    contenido: string;
    img: string;
    url: string;
    }
