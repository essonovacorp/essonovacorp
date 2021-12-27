import {
	CircularProgressbar,
	CircularProgressbarWithChildren,
	buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CallMadeIcon from '@mui/icons-material/CallMade';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
const percentage = 66;

const value = 0.88;
function Feacherinfo() {
	return (
		<>
			<div className="container-fluid px-0">
				<div className="row">
					<div className="col-md-6 col-lg-6 col-xl-3">
						<div className="feacherInfo mb-4 mb-xl-0">
							<div className="row align-items-center">
								<div className="col">
									<div class="d-flex align-items-center">
										<div className="flex-shrink-0">
											<div className="mr-2 infoIcon">
											<AttachMoneyIcon/>
											</div>
										</div>
										<div class="flex-grow-1 ms-3">
											<h3 className="mb-0">Total Sales</h3>
											<p className="mb-0">$560K</p>
										</div>
									</div>
								</div>

							</div>
						</div>
					</div>
					<div className="col-md-6 col-lg-6 col-xl-3">
						<div className="feacherInfo">
							<div className="row g-4 align-items-center">
								<div className="col">
									<div class="d-flex align-items-center">
										<div className="flex-shrink-0">
											<div className="mr-3 position-relative" style={{ width: 70, height: 70 }}>
												<CircularProgressbar
													value={percentage}
													initialAnimation={true}
													styles={buildStyles({
														pathTransition: percentage === 0 ? "none" : "stroke-dashoffset 0.5s ease 0s",
														pathColor: `rgba(8, 177, 186, ${percentage / 100})`,
														textColor: '#000',
													})} />
												<CallMadeIcon className="icon"/>
											</div>
										</div>
										<div class="flex-grow-1 ms-3">
											<h3 className="mb-0">Total Commission</h3>
											<p className="mb-0">$185K</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-lg-6 col-xl-3">
						<div className="feacherInfo mb-4 mb-xl-0">
							<div className="row align-items-center">
								<div className="col">
									<div class="d-flex align-items-center">
										<div className="flex-shrink-0">
											<div className="mr-3 position-relative" style={{ width: 70, height: 70 }}>
												<CircularProgressbar
													value={percentage}
													initialAnimation={true}
													styles={buildStyles({
														pathTransition: percentage === 0 ? "none" : "stroke-dashoffset 0.5s ease 0s",
														pathColor: `rgba(8, 177, 186, ${percentage / 100})`,
														textColor: '#000',
													})} />
												<CallMadeIcon className="icon"/>
											</div>
										</div>
										<div class="flex-grow-1 ms-3">
											<h3 className="mb-0">Revenue</h3>
											<p className="mb-0">$742K</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-lg-6 col-xl-3">
						<div className="feacherInfo mb-4 mb-xl-0">
							<div className="row align-items-center">
								<div className="col">
									<div class="d-flex align-items-center">
										<div className="flex-shrink-0">
											<div className="mr-3 position-relative" style={{ width: 70, height: 70 }}>
												<CircularProgressbar
													value={percentage}
													initialAnimation={true}
													styles={buildStyles({
														pathTransition: percentage === 0 ? "none" : "stroke-dashoffset 0.5s ease 0s",
														pathColor: `rgba(8, 177, 186, ${percentage / 100})`,
														textColor: '#000',
													})} />
												<CallMadeIcon className="icon"/>
											</div>
										</div>
										<div class="flex-grow-1 ms-3">
											<h3 className="mb-0">Today</h3>
											<p className="mb-0">$4600</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Feacherinfo
