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
                    { col1: 'row 1 col 1', col2: 'row 1 col 2', col3: 'row 1 col 3', col4: 'dog' },
                    { col1: 'row 2 col 1', col2: 'row 2 col 2', col3: 'row 2 col 3', col4: 'cat' },
                    { col1: 'row 3 col 1', col2: 'row 3 col 2', col3: 'row 3 col 3', col4: 'row 3 col 4' },
                    { col1: 'row 4 col 1', col2: 'row 4 col 2', col3: 'row 4 col 3', col4: 'row 4 col 4' }
                ]
            }
        };
    }

    handleSort(e: React.MouseEvent<HTMLTableHeaderCellElement>, key: string) {
        const entries = this.state.tableData.entries.sort((a, b) => this.sortBy(a, b, key));
        this.setState({tableData: {
            tHeadData: this.state.tableData.tHeadData,
            entries: entries
        }});
    }

    private sortBy(a: {}, b: {}, key: string) {
        if (a[key] > b[key]) {
            return 1;
        } else if (a[key] < b[key]) {
            return -1;
        } else {
            return 0;
        }
    }

    render() {
        return (
            <table className="Sortable-table">
                <thead>
                    <tr>
                        {
                            this.state.tableData.tHeadData.map(thead => {
                                return (
                                    <th key={thead.key} onClick={(e) => this.handleSort(e, thead.key)}>
                                        {thead.label}
                                    </th>
                                );
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