import { TableContainer, Paper, TableHead, Table, TableRow, TableCell, TableBody } from '@mui/material';
import React from 'react';

const columns = [
    {id: 'players', label: 'Players'}
]

const rows = [
    'Ishaaq Iqbal',
    'Ibraheem Iqbal',
    'Sufyan Raja',
    'Jahfar Iqbal',
    'Qasim Hussein',
    'Yaaseen Hussein',
    'Rahim Iqbal',
    'Husnain Nainy',
    'Zain Nainy',
    'Subhan Nainy',
    'Orin',
    'Hamoodeh',
    'Adam',
    'Faiz',
    'Ismail',
    'Danish',
]

function ViewPlayers(props) {
    return (
        <div className='ViewPlayers'>
            <h1>{rows.length} Confirmed Players</h1>
           <Paper>
                <TableContainer>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                { columns.map(column => (
                                    <TableCell key={column.id}>
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map(row => (
                                <TableRow>
                                    {row}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
           </Paper>
        </div>
    );
}

export default ViewPlayers