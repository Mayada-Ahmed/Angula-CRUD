export interface blog {
    id: number;
    title: string;
    body: string;
    date: Date;
}

export interface insertBlog{
    title: string;
    body: string;
    date: Date;
}