import * as React from 'react';
import './Sortable-table.css';

interface THead {
    key: string;
    label: string;
}

interface TData {
    tHeadData: THead[];
    entries: {}[];
}

class SortableTable extends React.Component<{}, {tableData: TData }> {
    constructor(props: {}) {
        super(props);
        this.state = {
            tableData: {
                tHeadData: [{
                    key: 'col1',
                    label: 'col 1'
                }, {
                    key: 'col2',
                    label: 'col 2'
                }, {
                    key: 'col3',
                    label: 'col 3'
                }, {
                    key: 'col4',
                    label: 'col 4'
                }],
                entries: [
                    { col1: 'row 1 col 1', col2: 'row 1 col 2', col3: 'row 1 col 3', col4: 'row 1 col 4' },
                    { col1: 'row 2 col 1', col2: 'row 2 col 2', col3: 'row 2 col 3', col4: 'row 2 col 4' },
                    { col1: 'row 3 col 1', col2: 'row 3 col 2', col3: 'row 3 col 3', col4: 'row 3 col 4' },
                    { col1: 'row 4 col 1', col2: 'row 4 col 2', col3: 'row 4 col 3', col4: 'row 4 col 4' }
                ]
            }
        };
    }
    render() {
        return (
            <table className="Sortable-table">
                <thead>
                    <tr>
                        {
                            this.state.tableData.tHeadData.map(thead => {
                                return <th key={thead.key}>{thead.label}</th>;
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {this.state.tableData.entries.map((entry, i) => {
                        return <tr key={i}>{Object.keys(entry).map((key, j) => {
                            return <th key={j}>{entry[key]}</th>;
                        })}</tr>;
                    })}
                </tbody>
            </table>
        );
    }
}

export default SortableTable;