import { Input, InputGroup } from "rsuite"
export default function FinalCalculations() {
    const styles = {
        width: '100%',
        marginBottom: '1rem'
    };
    return (
        <div>
            <form>
                <div className="row align-items-center">
                    <div className="col-md-3">
                        <label htmlFor="salePrice">Sale Price<sup className="text-danger">*</sup></label>
                    </div>
                    <div className="col-md-9">
                        <InputGroup inside style={styles} size="lg">
                            <InputGroup.Addon>$</InputGroup.Addon>
                            <Input />
                            <InputGroup.Addon>.00</InputGroup.Addon>
                        </InputGroup>
                    </div>
                </div>
                <hr />
                <br />
                <div className="row align-items-center">
                    <div className="col-md-3">
                        <label >Agent Commission<sup className="text-danger">*</sup></label>
                    </div>
                    <div className="col-md-9">
                        <InputGroup style={styles} size="lg">
                            <InputGroup.Addon>%</InputGroup.Addon>
                            <Input />
                            <InputGroup.Addon>=</InputGroup.Addon>
                            <Input disable />
                            <InputGroup.Addon>00</InputGroup.Addon>
                        </InputGroup>
                    </div>
                    <div className="col-md-12 text-end">
                        <label className="pe-3">+</label>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="Bonus">Bonus<sup className="text-danger">*</sup></label>
                    </div>
                    <div className="col-md-9">
                        <InputGroup inside style={styles} size="lg">
                            <InputGroup.Addon>$</InputGroup.Addon>
                            <Input />
                            <InputGroup.Addon>.00</InputGroup.Addon>
                        </InputGroup>
                    </div>
                </div>
                <hr />
                <br />
                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="">Rebate to Buyer / Seller<sup className="text-danger">*</sup></label>
                        <InputGroup inside style={styles} size="lg">
                            <InputGroup.Addon>$</InputGroup.Addon>
                            <Input />
                            <InputGroup.Addon>.00</InputGroup.Addon>
                        </InputGroup>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="">Referral Fee<sup className="text-danger">*</sup></label>
                        <InputGroup inside style={styles} size="lg">
                            <InputGroup.Addon>$</InputGroup.Addon>
                            <Input />
                            <InputGroup.Addon>.00</InputGroup.Addon>
                        </InputGroup>
                    </div>
                </div>
                <hr />
                <br />
                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="">RUSH FEE - If no received w/in 3 business days of closing</label>
                        <InputGroup inside style={styles} size="lg" disabled>
                            <InputGroup.Addon>$</InputGroup.Addon>
                            <Input />
                            <InputGroup.Addon>.00</InputGroup.Addon>
                        </InputGroup>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="">Monthly Office Fee</label>
                        <InputGroup inside style={styles} size="lg"  disabled>
                            <InputGroup.Addon>$</InputGroup.Addon>
                            <Input />
                            <InputGroup.Addon>.00</InputGroup.Addon>
                        </InputGroup>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="">%Transaction Fee or Each increment over $10,000.00 Transacation Fee</label>
                        <InputGroup inside style={styles} size="lg"  disabled>
                            <InputGroup.Addon>$</InputGroup.Addon>
                            <Input />
                            <InputGroup.Addon>.00</InputGroup.Addon>
                        </InputGroup>
                    </div>
                </div>
                <hr />
                <br />
                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="">Other</label>
                        <InputGroup inside style={styles} size="lg">
                            <InputGroup.Addon>$</InputGroup.Addon>
                            <Input />
                            <InputGroup.Addon>.00</InputGroup.Addon>
                        </InputGroup>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="">Agent Commission Without Transaction Fee</label>
                        <InputGroup inside style={styles} size="lg">
                            <InputGroup.Addon>$</InputGroup.Addon>
                            <Input />
                            <InputGroup.Addon>.00</InputGroup.Addon>
                        </InputGroup>
                    </div>                   
                </div>
                <hr />
                <br />
                <div className="row align-items-center mb-5">
                    <div className="col-md-6 text-end">
                        <label htmlFor="">Your Net</label>
                        
                    </div>
                    <div className="col-md-6">
                        <InputGroup inside style={styles} size="lg">
                            <InputGroup.Addon>$</InputGroup.Addon>
                            <Input />
                            <InputGroup.Addon>.00</InputGroup.Addon>
                        </InputGroup>
                    </div>
                   
                </div>
            </form>
        </div>
    )
}
