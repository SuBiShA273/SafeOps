import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function PlaceholderPage({ title, description, scheduledDay }) {
  return (
    <div>
      <div className="page-header">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="content-card">
        <div className="content-card-body">
          <div className="empty-state">
            <InfoOutlinedIcon className="empty-state-icon" style={{ fontSize: 56 }} />
            <h3>{title}</h3>
            <p>
              This module is scheduled for implementation on <strong>{scheduledDay}</strong>.
              The foundation has been established and this section will be fully functional once that development day is complete.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
