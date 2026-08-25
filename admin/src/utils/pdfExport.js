// VDM Admin Structured PDF Report Exporter Utility

/**
 * Generates and triggers a structured PDF print document for browser saving
 */
export const exportToPDF = (reportTitle, reportSubtitle, rows = [], columns = []) => {
    if (!rows || rows.length === 0) {
        alert('No data available to export to PDF.');
        return;
    }

    const printWindow = window.open('', '_blank');
    if (!printWindow) {
        alert('Please allow pop-ups in your browser to download PDF reports.');
        return;
    }

    const currentDate = new Date().toLocaleString();

    const tableHeadersHTML = columns.map(col => `<th>${col.label}</th>`).join('');
    
    const tableRowsHTML = rows.map((row, index) => {
        const cellsHTML = columns.map(col => {
            let val = row[col.key];
            if (col.formatter && typeof col.formatter === 'function') {
                val = col.formatter(val, row);
            }
            return `<td>${val !== undefined && val !== null ? val : '-'}</td>`;
        }).join('');
        return `<tr>${cellsHTML}</tr>`;
    }).join('');

    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>${reportTitle}</title>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
            
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { 
                font-family: 'Plus Jakarta Sans', sans-serif; 
                color: #1e293b; 
                background: #fff; 
                padding: 30px; 
                line-height: 1.5;
            }

            .header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                border-bottom: 3px solid #6366f1;
                padding-bottom: 16px;
                margin-bottom: 24px;
            }
            .brand {
                display: flex;
                align-items: center;
                gap: 12px;
            }
            .brand-logo {
                width: 44px;
                height: 44px;
                background: linear-gradient(135deg, #6366f1, #06b6d4);
                color: #fff;
                font-weight: 800;
                font-size: 22px;
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .brand-title h1 {
                font-size: 20px;
                font-weight: 800;
                color: #0f172a;
            }
            .brand-title p {
                font-size: 11px;
                color: #64748b;
                text-transform: uppercase;
                letter-spacing: 0.05em;
            }
            .report-meta {
                text-align: right;
                font-size: 11px;
                color: #64748b;
            }
            .report-meta strong { color: #0f172a; }

            .summary-box {
                background: #f8fafc;
                border: 1px solid #e2e8f0;
                border-radius: 10px;
                padding: 14px 18px;
                margin-bottom: 24px;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .summary-title h2 { font-size: 16px; font-weight: 700; color: #0f172a; }
            .summary-title p { font-size: 12px; color: #64748b; }
            .badge-count {
                background: #6366f1;
                color: #fff;
                padding: 4px 12px;
                border-radius: 20px;
                font-weight: 700;
                font-size: 12px;
            }

            table {
                width: 100%;
                border-collapse: collapse;
                margin-bottom: 30px;
                font-size: 12px;
            }
            th {
                background: #0f172a;
                color: #fff;
                font-weight: 700;
                text-transform: uppercase;
                font-size: 10px;
                letter-spacing: 0.05em;
                padding: 10px 12px;
                text-align: left;
            }
            td {
                padding: 10px 12px;
                border-bottom: 1px solid #e2e8f0;
                vertical-align: top;
                word-wrap: break-word;
            }
            tr:nth-child(even) { background: #f8fafc; }

            .footer {
                margin-top: 40px;
                border-top: 1px solid #e2e8f0;
                padding-top: 14px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-size: 10px;
                color: #94a3b8;
            }

            @media print {
                body { padding: 0; }
                .no-print { display: none; }
            }
        </style>
    </head>
    <body>
        <div class="header">
            <div class="brand">
                <div class="brand-logo">V</div>
                <div class="brand-title">
                    <h1>VDIGIMARKS (VDM)</h1>
                    <p>Official Admin Management System</p>
                </div>
            </div>
            <div class="report-meta">
                <p>Generated: <strong>${currentDate}</strong></p>
                <p>Report Type: <strong>${reportTitle}</strong></p>
            </div>
        </div>

        <div class="summary-box">
            <div class="summary-title">
                <h2>${reportTitle}</h2>
                <p>${reportSubtitle || 'Structured Administrative Record Export'}</p>
            </div>
            <div class="badge-count">${rows.length} Total Records</div>
        </div>

        <table>
            <thead>
                <tr>${tableHeadersHTML}</tr>
            </thead>
            <tbody>
                ${tableRowsHTML}
            </tbody>
        </table>

        <div class="footer">
            <p>Confidential • Vdigimarks Performance Marketing & Control Panel</p>
            <p>Page 1 of 1</p>
        </div>

        <script>
            window.onload = function() {
                setTimeout(function() {
                    window.print();
                }, 500);
            };
        </script>
    </body>
    </html>
    `;

    printWindow.document.open();
    printWindow.document.write(htmlContent);
    printWindow.document.close();
};

/**
 * Generates a single user / record structured PDF document card
 */
export const exportSingleUserPDF = (title, item, fields = []) => {
    if (!item) return;

    const printWindow = window.open('', '_blank');
    if (!printWindow) {
        alert('Please allow pop-ups in your browser to download PDF reports.');
        return;
    }

    const currentDate = new Date().toLocaleString();
    const userName = item.name || item.fullName || item.title || 'Client Record';

    const fieldsHTML = fields.map(field => {
        let val = item[field.key];
        if (field.formatter && typeof field.formatter === 'function') {
            val = field.formatter(val, item);
        }
        return `
            <div className="field-card">
                <div className="field-label">${field.label}</div>
                <div className="field-value">${val !== undefined && val !== null && val !== '' ? val : 'N/A'}</div>
            </div>
        `;
    }).join('');

    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>${title} - ${userName}</title>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
            
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { 
                font-family: 'Plus Jakarta Sans', sans-serif; 
                color: #0f172a; 
                background: #fff; 
                padding: 40px; 
                line-height: 1.6;
            }

            .header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                border-bottom: 3px solid #6366f1;
                padding-bottom: 20px;
                margin-bottom: 30px;
            }
            .brand {
                display: flex;
                align-items: center;
                gap: 14px;
            }
            .brand-logo {
                width: 48px;
                height: 48px;
                background: linear-gradient(135deg, #6366f1, #06b6d4);
                color: #fff;
                font-weight: 800;
                font-size: 24px;
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .brand-title h1 {
                font-size: 22px;
                font-weight: 800;
                color: #0f172a;
            }
            .brand-title p {
                font-size: 11px;
                color: #64748b;
                text-transform: uppercase;
                letter-spacing: 0.05em;
            }
            .report-meta {
                text-align: right;
                font-size: 11px;
                color: #64748b;
            }

            .profile-card {
                background: linear-gradient(135deg, #0f172a, #1e293b);
                color: #fff;
                border-radius: 16px;
                padding: 24px;
                margin-bottom: 30px;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .profile-name h2 { font-size: 24px; font-weight: 800; }
            .profile-name p { font-size: 13px; color: #94a3b8; margin-top: 4px; }
            .status-badge {
                background: rgba(99, 102, 241, 0.3);
                border: 1px solid rgba(99, 102, 241, 0.6);
                color: #818cf8;
                padding: 6px 16px;
                border-radius: 20px;
                font-weight: 700;
                font-size: 12px;
                text-transform: uppercase;
            }

            .grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 20px;
                margin-bottom: 30px;
            }

            .field-card {
                background: #f8fafc;
                border: 1px solid #e2e8f0;
                border-radius: 12px;
                padding: 16px;
            }
            .field-card.full-width {
                grid-column: span 2;
            }
            .field-label {
                font-size: 10px;
                font-weight: 800;
                color: #64748b;
                text-transform: uppercase;
                letter-spacing: 0.05em;
                margin-bottom: 6px;
            }
            .field-value {
                font-size: 14px;
                font-weight: 600;
                color: #0f172a;
                white-space: pre-wrap;
                word-wrap: break-word;
            }

            .footer {
                margin-top: 40px;
                border-top: 1px solid #e2e8f0;
                padding-top: 16px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-size: 11px;
                color: #94a3b8;
            }
        </style>
    </head>
    <body>
        <div class="header">
            <div class="brand">
                <div class="brand-logo">V</div>
                <div class="brand-title">
                    <h1>VDIGIMARKS (VDM)</h1>
                    <p>Official Client Lead Sheet</p>
                </div>
            </div>
            <div class="report-meta">
                <p>Generated: <strong>${currentDate}</strong></p>
                <p>Document ID: <strong>${item._id || Date.now()}</strong></p>
            </div>
        </div>

        <div class="profile-card">
            <div class="profile-name">
                <h2>${userName}</h2>
                <p>${item.email || 'Client Record Detail'}</p>
            </div>
            <div class="status-badge">${(item.status || item.isRead !== undefined ? (item.isRead ? 'Read' : 'Unread') : 'Active').toString().toUpperCase()}</div>
        </div>

        <div class="grid">
            ${fieldsHTML}
        </div>

        <div class="footer">
            <p>Confidential • VDigimarks Management System</p>
            <p>Official Record Copy</p>
        </div>

        <script>
            window.onload = function() {
                setTimeout(function() {
                    window.print();
                }, 500);
            };
        </script>
    </body>
    </html>
    `;

    printWindow.document.open();
    printWindow.document.write(htmlContent);
    printWindow.document.close();
};
