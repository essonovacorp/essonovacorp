
import { Input } from 'rsuite';

export default function TitleCompanyDetails() {
    return (
        <div>
            <form class="form-group">
                <div className="row">
                    <div className="col-md-7">
                        <h5 className='fw-bold text-dark mb-3'>Title Company Details</h5>
                    </div>
                    <div className="col-md-7">
                        <div className="mb-3 pe-3">
                            <label for="companyName" className="form-label">Name<sup className='text-danger'>*</sup></label>
                            <Input size="lg" placeholder="Title Company Name" id="companyName" />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="mb-3 pe-3">
                            <label for="streetName" className="form-label">Street Name</label>
                            <Input size="lg" placeholder="" id="streetName" disabled/>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="mb-3 pe-3">
                            <label for="cityState" className="form-label">City {'&'} State</label>
                            <Input size="lg" placeholder="" id="cityState" disabled/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <div className="mb-3 pe-3">
                            <label for="zipcode" className="form-label">Zipcode</label>
                            <Input size="lg" placeholder="" id="zipcode" disabled />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-7">
                        <div className="mb-3 pe-3">
                            <label for="escrowCloser" className="form-label">Escrow / Closer</label>
                            <Input size="lg" placeholder="" id="escrowCloser" disabled />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="mb-3 pe-3">
                            <label for="phone" className="form-label">Phone<sup className='text-danger'>*</sup></label>
                            <Input size="lg" placeholder="XXX XXX XXX" id="phone" />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="mb-3 pe-3">
                            <label for="fax" className="form-label">Fax<sup className='text-danger'>*</sup></label>
                            <Input size="lg" placeholder="XXX XXX XXX" id="fax"/>
                        </div>
                    </div>
                    
                    <div className="col-md-7">
                        <div className="mb-3 pe-3">
                            <label for="email" className="form-label">Email<sup className='text-danger'>*</sup></label>
                            <Input size="lg" type='email' placeholder="" id="email" disabled/>
                        </div>
                    </div>
                </div>
            </form >
        </div >
    )
}
