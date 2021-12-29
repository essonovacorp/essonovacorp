import {Input } from 'rsuite';

export default function RentBuyerSeller() {
    return (
        <div>
             <form class="form-group">
                <div className="row">
                    <div className="col-md-7">
                        <h5 className='fw-bold text-dark mb-3'>Buyer Details</h5>
                    </div>
                    <div className="col-7">
                        <div className="mb-3 pe-3">
                            <label for="buyerName" className="form-label">Name<sup className='text-danger'>*</sup></label>
                            <Input size="lg" placeholder="" id="buyerName"  />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-7">
                        <div className="mb-3 pe-3">
                            <label for="buyerPhone" className="form-label">Phone<sup className='text-danger'>*</sup></label>
                            <Input size="lg" placeholder="XXX XXX XXX" id="buyerPhone" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-7">
                    <h5 className='fw-bold text-dark my-3'>Seller Details</h5>
                    </div>
                    <div className="col-7">
                        <div className="mb-3 pe-3">
                            <label for="sellerName" className="form-label">Name<sup className='text-danger'>*</sup></label>
                            <Input size="lg" placeholder="" id="sellerName"  />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-7">
                        <div className="mb-3 pe-3">
                            <label for="sellerPhone" className="form-label">Phone<sup className='text-danger'>*</sup></label>
                            <Input size="lg" placeholder="XXX XXX XXX" id="sellerPhone" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
