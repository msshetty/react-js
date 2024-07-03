import React from 'react'

function PageNotFound() {
    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-6 text-center">
                    <div className="alert alert-info py-5">
                        <strong>Page Not Found!</strong> You should type correct URL...
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound
