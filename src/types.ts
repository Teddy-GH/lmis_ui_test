/* eslint-disable @typescript-eslint/no-explicit-any */
// types.ts

export interface User {
    id: string;
    email: string;
    phoneNumber: string;
    
  }
  
  export interface BaseOssc {
    admin_id: string;
    city_id: string;
    country_id: string;
    created_at: string;
    description: string;
    district_id: string;
    draft: boolean;
    has_internet_access: boolean;
    id: string;
    name: string;
    region_id: string;
    subcity_id: string;
    updated_at: string;
    users: User[];
  }
  
  export interface GetOsscData {
    base_ossc: BaseOssc[];
  }
  
  export interface GetOsscVariables {
    distinctOn?: string[];
    limit?: number;
    offset?: number;
    filter?: Record<string, any>;
  }
  