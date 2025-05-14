const locations = [
    {
      id: 1,
      name: "Outdoor Stage",
      hasHall: false,
      rows: 5,
      columns: 8,
      seatTypes: [
        { rows: ["A", "B"], type: "VIP", price: 30000, color: "bg-yellow-400" },
        { rows: ["C"], type: "Standard", price: 20000, color: "bg-green-300" },
        { rows: ["D", "E"], type: "Economy", price: 15000, color: "bg-blue-200" },
      ],
    },
    {
      id: 2,
      name: "City Theater",
      hasHall: true,
      rows: 0,
      columns: 0,
      seatTypes: [],
    },
  ];
  

  const getSeatType = (rowChar: string, location: any) => {
    return location.seatTypes.find((type: any) => type.rows.includes(rowChar));
  };
  