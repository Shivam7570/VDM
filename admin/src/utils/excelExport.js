// VDM Admin Excel & CSV Exporter Utility with Intelligent Field Formatting

/**
 * Escapes cells for CSV / Excel format
 */
const formatCell = (val) => {
    if (val === null || val === undefined) return '""';
    let str = String(val).trim().replace(/"/g, '""'); // Escape double quotes
    return `"${str}"`;
};

/**
 * Helper to parse pipe-separated message fields like:
 * "Service: Real Estate | Budget: ₹50k | Goals: Boost leads"
 */
export const parseMessageFields = (messageStr = '') => {
    const result = {
        service: '',
        budget: '',
        goals: '',
        cleanMessage: messageStr
    };

    if (!messageStr || typeof messageStr !== 'string') return result;

    const parts = messageStr.split('|');
    parts.forEach(part => {
        const [key, ...valParts] = part.split(':');
        const val = valParts.join(':').trim();
        const trimmedKey = key ? key.trim().toLowerCase() : '';

        if (trimmedKey.includes('service') || trimmedKey.includes('primary interest')) {
            result.service = val;
        } else if (trimmedKey.includes('budget') || trimmedKey.includes('business type')) {
            result.budget = val;
        } else if (trimmedKey.includes('goal') || trimmedKey.includes('challenge')) {
            result.goals = val;
        }
    });

    return result;
};

/**
 * Exports data array to an Excel-compatible CSV file and triggers instant browser download
 * @param {string} filename - Output file name (e.g., "audit_requests.csv")
 * @param {Array<Object>} rows - Data objects to export
 * @param {Array<{key: string, label: string, formatter?: Function}>} columns - Column mapping
 */
export const exportToExcel = (filename, rows = [], columns = []) => {
    if (!rows || rows.length === 0) {
        alert('No data available to export.');
        return;
    }

    // 1. Build CSV Header Line
    const headerLine = columns.map(col => formatCell(col.label)).join(',');

    // 2. Build Data Lines
    const dataLines = rows.map(row => {
        return columns.map(col => {
            let val = row[col.key];
            if (col.formatter && typeof col.formatter === 'function') {
                val = col.formatter(val, row);
            }
            return formatCell(val);
        }).join(',');
    });

    // Add UTF-8 Byte Order Mark (BOM) so Excel opens Unicode correctly
    const csvContent = '\uFEFF' + [headerLine, ...dataLines].join('\r\n');

    // Create Blob and trigger download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename.endsWith('.csv') ? filename : `${filename}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};

/**
 * Exports single user / record details into a structured Excel sheet format
 * @param {string} filename - Output file name
 * @param {Object} item - Record object
 * @param {Array<{key: string, label: string, formatter?: Function}>} columns - Column mapping
 */
export const exportSingleUserExcel = (filename, item, columns = []) => {
    exportToExcel(filename, [item], columns);
};
