import { Input, InputGroup } from "rsuite"

export default function RentOtherDetails() {
    const styles = {
        width: '100%',
        marginBottom: '1rem'
    };
    return (
        <div>
            <form>
                <div className="row align-items-center">
                    <div className="col-md-3">
                        <label htmlFor="rentPrice">Rent Price<sup className="text-danger">*</sup></label>
                    </div>
                    <div className="col-md-9">
                        <InputGroup inside style={styles} size="lg">
                            <InputGroup.Addon>$</InputGroup.Addon>
                            <Input id="rentPrice" />
                            <InputGroup.Addon>.00</InputGroup.Addon>
                        </InputGroup>
                    </div>
                </div>
                <hr />
                <br />
                <div className="row align-items-center">
                    <div className="col-md-3">
                        <label htmlFor="agentCommission" >Agent Commission<sup className="text-danger">*</sup></label>
                    </div>
                    <div className="col-md-9">
                        <InputGroup style={styles} size="lg">
                            <InputGroup.Addon>%</InputGroup.Addon>
                            <Input id="agentCommission" />
                            <InputGroup.Addon>.00</InputGroup.Addon>
                            <InputGroup.Addon className="bg-transprent">=</InputGroup.Addon>
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
                        <label htmlFor="otherAgentCommission">Other Agent Commission<sup className="text-danger">*</sup></label>
                    </div>
                    <div className="col-md-9">
                        <InputGroup style={styles} size="lg">
                            <InputGroup.Addon>%</InputGroup.Addon>
                            <Input id="otherAgentCommission" />
                            <InputGroup.Addon>.00</InputGroup.Addon>
                            <InputGroup.Addon className="bg-transprent">=</InputGroup.Addon>
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
                        <label htmlFor="">Less Rebate to Buyer / Seller<sup className="text-danger">*</sup></label>
                        <InputGroup inside style={styles} size="lg">
                            <InputGroup.Addon>$</InputGroup.Addon>
                            <Input />
                            <InputGroup.Addon>.00</InputGroup.Addon>
                        </InputGroup>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="">Less Referral Fee<sup className="text-danger">*</sup></label>
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
                        <InputGroup inside style={styles} size="lg" disabled>
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
                        <label htmlFor="other">Other</label>
                        <InputGroup inside style={styles} size="lg">
                            <InputGroup.Addon>$</InputGroup.Addon>
                            <Input id="other"/>
                            <InputGroup.Addon>.00</InputGroup.Addon>
                        </InputGroup>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="commission">Agent Commission Without Transaction Fee</label>
                        <InputGroup inside style={styles} size="lg">
                            <InputGroup.Addon>$</InputGroup.Addon>
                            <Input id="commission" />
                            <InputGroup.Addon>.00</InputGroup.Addon>
                        </InputGroup>
                    </div>
                </div>
                <hr />
                <br />
              
                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="fee" >- %Transaction Fee or Flat Transacation Fee</label>
                        <InputGroup inside style={styles} size="lg">
                            <InputGroup.Addon>$</InputGroup.Addon>
                            <Input id="fee"/>
                            <InputGroup.Addon>.00</InputGroup.Addon>
                        </InputGroup>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="yourNet"><strong>Your Net</strong></label>
                        <InputGroup inside style={styles} size="lg">
                            <InputGroup.Addon>$</InputGroup.Addon>
                            <Input id="yourNet"/>
                            <InputGroup.Addon>.00</InputGroup.Addon>
                        </InputGroup>
                    </div>
                </div>
                
            </form>
        </div>
    )
}
