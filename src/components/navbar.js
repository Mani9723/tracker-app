import React, { useState } from 'react';


export function NavbarHeader({onUpload}) {
    const [showUploadModal, setShowUploadModal] = useState(false);
    const [routeName, setRouteName] = useState('');
    const [uploadedFile, setUploadedFile] = useState(null);

    const handleUploadClick = () => {
        setShowUploadModal(true);
    };

    const handleCloseModal = () => {
        setShowUploadModal(false);
    };

    const handleRouteNameChange = (event) => {
        setRouteName(event.target.value);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setUploadedFile(file);
        
    };

    const handleUploadFile = () => {
        // Call the onUpload function to pass data to the parent
        onUpload({ routeName, uploadedFile });

        // Close the modal
        handleCloseModal();
    };


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light pb-3 pt-3">
                <div className="container-fluid">
                    <span className="navbar-brand mb-01 h1">Route Mapper</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link" onClick={handleUploadClick}>Upload Route</a>
                            <a className="nav-link" href="/">My Routes</a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Upload Modal */}
            {showUploadModal && (
                <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Upload GPX File</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseModal}></button>
                            </div>
                            <div className="modal-body">
                                <form class="row g-3">
                                    <div class="mb-3">
                                        <label for="formFileMultiple" class="form-label me-4" >Route Name</label>
                                        <input type="text" onChange={handleRouteNameChange} required placeholder="home route" style={{textAlign:"center"}} aria-label="default input example"></input>
                                        <input class="form-control mt-3" type="file" id="formFile"/>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
                                <button type="button" className="btn btn-primary" onClick={handleUploadFile}>Upload</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
