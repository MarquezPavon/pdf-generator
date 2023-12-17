
export default interface GeneratePdfParams {
    archivo: {
      contact_person: {
        name: string;
        last_name: string;
        role: string;
        phone: string;
        email: string;
      };
      company_info: {
        logo: string;
        cif: string;
        business_name: string;
        commercial_name: string;
        address: string;
        cp: string;
        province: string;
        cirty: string;
        phone: string;
        web: string;
        email: string;
        sector: string;
        main_activity: string;
        cnae: string;
        team: {
          male: number;
          female: number;
        };
        business_group: {
          country: string;
        };
      };
      shares: {
        founders: number;
        investors: number;
      };
      financials: {
        clients: {
          eu: number;
          spain: number;
          rest_of_the_world: number;
        };
        billing?: number;
      };
        lean_canvas: {
        key_partners: string;
        key_activities: string;
        clients_relations: string;
        clients_segments: string;
        key_resources: string;
        costs: string;
        incomes: string;
      };
    };
  }