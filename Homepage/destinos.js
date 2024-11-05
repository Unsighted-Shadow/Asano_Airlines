const destinos = [
    {
        "id": "d7f2e530-7a3d-11ec-90d6-0242ac120003",
        "origem": "GRU",
        "destino": "JFK",
        "cidade_destino": "Nova York",
        "pais_destino": "Estados Unidos",
        "data_embarque": "2024-11-15",
        "data_retorno": "2024-11-25",
        "preco": 3200,
        "voo_direto": true
    },
    {
        "id": "d7f2e831-7a3d-11ec-90d6-0242ac120003",
        "origem": "GIG",
        "destino": "CDG",
        "cidade_destino": "Paris",
        "pais_destino": "França",
        "data_embarque": "2024-12-01",
        "data_retorno": "2024-12-10",
        "preco": 4500,
        "voo_direto": false
    },
    {
        "id": "d7f2e9e2-7a3d-11ec-90d6-0242ac120003",
        "origem": "CGH",
        "destino": "POA",
        "cidade_destino": "Porto Alegre",
        "pais_destino": "Brasil",
        "data_embarque": "2024-11-20",
        "data_retorno": "2024-11-22",
        "preco": 500,
        "voo_direto": true
    },
    {
        "id": "d7f2ec1c-7a3d-11ec-90d6-0242ac120003",
        "origem": "BSB",
        "destino": "MIA",
        "cidade_destino": "Miami",
        "pais_destino": "Estados Unidos",
        "data_embarque": "2024-11-25",
        "data_retorno": "2024-12-05",
        "preco": 3700,
        "voo_direto": false
    },
    {
        "id": "d7f2ee29-7a3d-11ec-90d6-0242ac120003",
        "origem": "SSA",
        "destino": "EZE",
        "cidade_destino": "Buenos Aires",
        "pais_destino": "Argentina",
        "data_embarque": "2024-12-15",
        "data_retorno": "2024-12-22",
        "preco": 1500,
        "voo_direto": true
    },
    {
        "id": "d7f2f0a2-7a3d-11ec-90d6-0242ac120003",
        "origem": "GRU",
        "destino": "LHR",
        "cidade_destino": "Londres",
        "pais_destino": "Reino Unido",
        "data_embarque": "2025-01-10",
        "data_retorno": "2025-01-20",
        "preco": 4800,
        "voo_direto": false
    },
    {
        "id": "d7f2f264-7a3d-11ec-90d6-0242ac120003",
        "origem": "CGH",
        "destino": "SDU",
        "cidade_destino": "Rio de Janeiro",
        "pais_destino": "Brasil",
        "data_embarque": "2024-12-05",
        "data_retorno": "2024-12-07",
        "preco": 400,
        "voo_direto": true
    },
    {
        "id": "d7f2f454-7a3d-11ec-90d6-0242ac120003",
        "origem": "GRU",
        "destino": "YYZ",
        "cidade_destino": "Toronto",
        "pais_destino": "Canadá",
        "data_embarque": "2024-11-28",
        "data_retorno": "2024-12-08",
        "preco": 3200,
        "voo_direto": false
    },
    {
        "id": "d7f2f653-7a3d-11ec-90d6-0242ac120003",
        "origem": "GIG",
        "destino": "SCL",
        "cidade_destino": "Santiago",
        "pais_destino": "Chile",
        "data_embarque": "2024-11-20",
        "data_retorno": "2024-11-30",
        "preco": 1600,
        "voo_direto": true
    },
    {
        "id": "d7f2f8a0-7a3d-11ec-90d6-0242ac120003",
        "origem": "BSB",
        "destino": "MAD",
        "cidade_destino": "Madri",
        "pais_destino": "Espanha",
        "data_embarque": "2025-02-01",
        "data_retorno": "2025-02-12",
        "preco": 4900,
        "voo_direto": false
    },
    {
        "id": "d7f2faad-7a3d-11ec-90d6-0242ac120003",
        "origem": "POA",
        "destino": "GRU",
        "cidade_destino": "São Paulo",
        "pais_destino": "Brasil",
        "data_embarque": "2024-11-17",
        "data_retorno": "2024-11-19",
        "preco": 600,
        "voo_direto": true
    },
    {
        "id": "d7f2fcb1-7a3d-11ec-90d6-0242ac120003",
        "origem": "GRU",
        "destino": "FCO",
        "cidade_destino": "Roma",
        "pais_destino": "Itália",
        "data_embarque": "2024-12-02",
        "data_retorno": "2024-12-12",
        "preco": 4300,
        "voo_direto": true
    },
    {
        "id": "d7f2fe2c-7a3d-11ec-90d6-0242ac120003",
        "origem": "CGH",
        "destino": "SSA",
        "cidade_destino": "Salvador",
        "pais_destino": "Brasil",
        "data_embarque": "2024-11-23",
        "data_retorno": "2024-11-30",
        "preco": 700,
        "voo_direto": true
    },
    {
        "id": "d7f30045-7a3d-11ec-90d6-0242ac120003",
        "origem": "GRU",
        "destino": "LAX",
        "cidade_destino": "Los Angeles",
        "pais_destino": "Estados Unidos",
        "data_embarque": "2024-12-14",
        "data_retorno": "2024-12-24",
        "preco": 4100,
        "voo_direto": false
    },
    {
        "id": "d7f30240-7a3d-11ec-90d6-0242ac120003",
        "origem": "GIG",
        "destino": "BOG",
        "cidade_destino": "Bogotá",
        "pais_destino": "Colômbia",
        "data_embarque": "2025-01-05",
        "data_retorno": "2025-01-15",
        "preco": 1900,
        "voo_direto": true
    },
    {
        "id": "d7f30452-7a3d-11ec-90d6-0242ac120003",
        "origem": "SSA",
        "destino": "GRU",
        "cidade_destino": "São Paulo",
        "pais_destino": "Brasil",
        "data_embarque": "2024-11-30",
        "data_retorno": "2024-12-02",
        "preco": 600,
        "voo_direto": true
    },
    {
        "id": "d7f30673-7a3d-11ec-90d6-0242ac120003",
        "origem": "GRU",
        "destino": "AMS",
        "cidade_destino": "Amsterdã",
        "pais_destino": "Países Baixos",
        "data_embarque": "2025-01-12",
        "data_retorno": "2025-01-20",
        "preco": 4700,
        "voo_direto": false
    },
    {
        "id": "d7f3088f-7a3d-11ec-90d6-0242ac120003",
        "origem": "GIG",
        "destino": "MEX",
        "cidade_destino": "Cidade do México",
        "pais_destino": "México",
        "data_embarque": "2024-12-18",
        "data_retorno": "2024-12-28",
        "preco": 3500,
        "voo_direto": false
    },
    {
        "id": "d7f30aa4-7a3d-11ec-90d6-0242ac120003",
        "origem": "BSB",
        "destino": "LIM",
        "cidade_destino": "Lima",
        "pais_destino": "Peru",
        "data_embarque": "2024-12-10",
        "data_retorno": "2024-12-20",
        "preco": 2000,
        "voo_direto": true
    },
    {
        "id": "d7f30cc9-7a3d-11ec-90d6-0242ac120003",
        "origem": "GRU",
        "destino": "JNB",
        "cidade_destino": "Joanesburgo",
        "pais_destino": "África do Sul",
        "data_embarque": "2024-11-25",
        "data_retorno": "2024-12-05",
        "preco": 5000,
        "voo_direto": true
    }
];