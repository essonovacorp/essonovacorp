import { Input, InputGroup, MaskedInput, DatePicker } from 'rsuite';


export default function AgentSale() {
    const instance = <DatePicker block />;

    return (
        <div>
            <form class="form-group">
                <div className="row">
                    <div className="col-md-5">
                        <label htmlFor="">Is this a {'<Company Name>'} listing?<sup className="text-danger">*</sup></label>
                    </div>
                    <div className="col-md-2">
                        <div className="switch-field pe-3">
                            <input type="radio" id="radio-two" name="switch-one" value="no" checked />
                            <label for="radio-two">No</label>
                            <input type="radio" id="radio-one" name="switch-one" value="yes" />
                            <label for="radio-one">Yes</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5">
                        <strong>You represent the <sup className="text-danger">*</sup></strong>
                    </div>
                    <div className="col-md-2">
                        <div className="switch-field pe-3">
                            <input type="radio" id="represent-two" name="represent" value="saller" checked />
                            <label for="represent-two">Seller</label>
                            <input type="radio" id="represent-one" name="represent" value="buyer" />
                            <label for="represent-one">Buyer</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-7">
                        <div className="mb-4 pe-3">
                            <label for="" className="form-label">If both and this an in-house transaction, who is the intermediary?</label>
                            <Input size="lg" placeholder="" disabled />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-7">
                        <div className="mb-4 pe-3">
                            <label for="" className="form-label">Today’s Date<sup className="text-danger">*</sup></label>
                            <Input size="lg" placeholder="" disabled />

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-7">
                        <div className="mb-4 pe-3">
                            <label for="" className="form-label">Closing Date<sup className="text-danger">*</sup></label>
                            <DatePicker placement="auto" size="lg" block />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-7">
                        <div className="mb-4 pe-3">
                            <label for="" className="form-label">MLS<sup className="text-danger">*</sup></label>
                            <Input size="lg" placeholder="" />
                        </div>
                    </div>
                </div>
            </form>

        </div>
    )
}
