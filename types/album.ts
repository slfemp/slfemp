export interface Album {
    id: number;
    album_name: string;
    year_released?: number;
    date_released?: Date;
    featured?: boolean;
    apple_music?: string;
    spotify?: string;
    story?: string;
    front_cover?: string;
    back_cover?: string;
    inside_cover?: string;
    artists?: Artist[];
    labels?: Label[];
}

export interface Artist {
    id: number;
    artist_name: string;
    picture?: string;
    instagram?: string;
    website?: string;
}

export interface Label {
    id: number;
    label_name: string;
    picture?: string;
    website?: string;
}