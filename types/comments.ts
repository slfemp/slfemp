export interface Comment {
    id: number;
    user_id: string;
    album_id?: number;
    photo_id?: number;
    poster_id?: number;
    comment_text: string;
    created_at?: Date;
}

export interface CreateCommentDTO {
    album_id?: number;
    photo_id?: number;
    poster_id?: number;
    comment_text: string;
} 