export interface Cover {
    id: number;
    front_cover: string;
    back_cover: string;
    inside_cover: string;
    album_name: string;
    date_released: Date;
    featured: boolean;
    story: string;
    apple_music: null | string;
    spotify: null | string;
    year_released: number;
    artists: Artist[];
    labels: Label[];
}

export interface Artist {
    id: number;
    artist_name: string;
}

export interface Label {
    id: number;
    label_name: string;
}