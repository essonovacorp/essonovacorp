
import { Input } from 'rsuite';

export default function OtherAgent() {
    return (
        <div>
            <form class="form-group">
                <div className="row">
                    <div className="col-md-7">
                        <h5 className='fw-bold text-dark mb-3'>Other Agent</h5>
                    </div>
                    <div className="col-md-7">
                        <div className="mb-3 pe-3">
                            <label for="agentName" className="form-label">Name<sup className='text-danger'>*</sup></label>
                            <Input size="lg" placeholder="Jhon Doe" id="agentName" />
                        </div>
                    </div>
                    
                </div>
                <div className="row">
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
        </div>
    )
}
