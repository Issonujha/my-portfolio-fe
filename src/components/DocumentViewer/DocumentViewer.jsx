import React, { useState, useRef } from 'react';
import styles from './DocumentViewer.module.css'; // Create this CSS file

const DocumentViewer = ({ documentUrl, onClose }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const viewerRef = useRef(null);

  // In a real application, you would fetch the document data based on documentUrl
  const [documentData, setDocumentData] = useState({
    title: 'My Resume',
    sections: [
      { type: 'pdf', url: 'https://firebasestorage.googleapis.com/v0/b/myportfolio-bb8f2.appspot.com/o/myfiles%2FResume%20PDF.pdf?alt=media&token=164f1404-9cd0-4963-809b-6eacf9bca0dc', alt: 'Contact Person' }
    ],
  });

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    // You might want to adjust styling or behavior on expand/minimize
  };


  return (
    <div className={styles.viewerContainer} ref={viewerRef}>
      <div className={styles.thumbnailView}>
        {/* Smaller representation of the document */}
        <div className={styles.thumbnailContent}>
          <p className={styles.thumbnailTitle}>{documentData.title}</p>
          {documentData.sections.slice(0, 1).map((section, index) => (
            section.type === 'image' && (
              <img key={index} src={section.url} alt={section.alt} className={styles.thumbnailImage} />
            )
          ))}
          {/* You could add a brief text preview here */}
        </div>
      </div>
      <div className={`${styles.largerView} ${isExpanded ? styles.expandedView : ''}`}>
        <div className={styles.controls}>
          <button className={styles.controlButton} onClick={onClose}>
            ✕
          </button>
          <button className={styles.controlButton} onClick={toggleExpand}>
            {isExpanded ? '↓' : '↑'} {/* Use icons or symbols for expand/minimize */}
          </button>
          <button className={styles.controlButton} onClick={onClose}>
            —
          </button>
        </div>
        <div className={styles.largerContent}>
          <h2>{documentData.title}</h2>
          {documentData.sections.map((section, index) => (
            <React.Fragment key={index}>
              {section.type === 'paragraph' && (
                <p dangerouslySetInnerHTML={{ __html: section.content }} />
              )}
              {section.type === 'pdf' && (
                <embed src={section.url} width="700px" height="600px" className={styles.largerImage} />
              )}
              {/* Render other content types as needed */}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DocumentViewer;