import { DataGrid } from '@mui/x-data-grid';

// Sample data for rows and columns
const rows = [
  { id: 1, name: 'Krishnsarathy', age: "krishnsarathy@gmail.com", city: 'User' },
  { id: 2, name: 'Sarathy', age: "sarathy@gmail.com", city: 'Admin' },
  { id: 3, name: 'Vijay', age: "vijay@gmail.com", city: 'Admin' },
  { id: 4, name: 'Vishnu', age: "vishnu@gmail.com", city: 'User' },
  { id: 5, name: 'Kumaresan', age: "kumaresan@gmail.com", city: 'User' },
  { id: 6, name: 'Kanthasamy', age: "kanthasamy@gmail.com", city: 'User' },
  { id: 7, name: 'Muthukumar', age: "muthukumar@gmail.com", city: 'User' },
  { id: 8, name: 'Ramesh', age: "rames@gmail.com", city: 'User' },
  { id: 9, name: 'Sekar', age: "sekar@gmail.com", city: 'User' },
  { id: 10, name: 'Nantha', age: "nantha@gmail.com", city: 'User' },
  
  // Add more rows as needed
];
for (let i = 11; i <= 100; i++) {
  rows.push({
    id: i,
    name:' Name${i}',
    age: 'Email${i}@example.com',
    city: 'User${i}',
  });
}
const columns = [
  { field: 'id', headerName: 'ID', width: 150 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'age', headerName: 'Email', width: 150 },
  { field: 'city', headerName: 'Role', width: 150 },
  
  // Add more columns as needed
];

// Component usage with values
const NewTable = () => {
  return (
  
    <DataGrid
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 10 },
        },
      }}
      pageSizeOptions={[5, 10]}
      checkboxSelection
    />
  );
};

export default NewTable;