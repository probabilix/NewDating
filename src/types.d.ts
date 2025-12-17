// src/types.d.ts

// No 'export' keyword here makes it global to your project
interface Advisor {
    id: string;
    name: string;
    specialty: string;
    rating: number;
    sessions: string;
    config_id: string; 
    imageColor: string;
    description: string;
}