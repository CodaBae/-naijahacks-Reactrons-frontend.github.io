import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Modal, Button } from 'antd';

import Seeds from './Seeds';
import Seafood from './Seafood';
import LifeStock from './LifeStock';
import Poultry from './Poultry';
import FarmingT from './FarmingT';

import { Link } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class DashBoard extends Component {
	state = {
		collapsed: false,
		Seeds: false,
		Seafood: false,
		LifeStock: false,
		Poultry: false,
		FarmingT: false,
		loading: false,
		visible: false
	};

	showModal = () => {
		this.setState({
			visible: true
		});
	};

	handleOk = () => {
		this.setState({ loading: true });
		setTimeout(() => {
			this.setState({ loading: false, visible: false });
		}, 3000);
	};

	handleCancel = () => {
		this.setState({ visible: false });
	};

	onCollapse = (collapsed) => {
		console.log(collapsed);
		this.setState({ collapsed });
	};
	SetSeedsTrue = () => {
		this.setState({
			Seeds: true,
			Seafood: false,
			Poultry: false,
			LifeStock: false,
			FarmingT: false
		});
	};
	SetSeafoodTrue = () => {
		this.setState({
			Seafood: true,
			Poultry: false,
			Seeds: false,
			LifeStock: false,
			FarmingT: false
		});
	};
	SetLifeStockTrue = () => {
		this.setState({
			LifeStock: true,
			Poultry: false,
			Seeds: false,
			Seafood: false,
			FarmingT: false
		});
	};
	SetPoultryTrue = () => {
		this.setState({
			Poultry: true,
			Seeds: false,
			Seafood: false,
			LifeStock: false,
			FarmingT: false
		});
	};
	SetFarmingTTrue = () => {
		this.setState({
			FarmingT: true,
			Seeds: false,
			Poultry: false,
			Seafood: false,
			LifeStock: false
		});
	};

	render() {
		return (
			<Layout style={{ minHeight: '100vh' }}>
				<Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
					<div className="Logo_d">
						<img src={require('../Img/logo.png')} alt="download me" className="Header_Img" />
						<Link to='home'>
						<span className="Header_Logo"> farmStore </span>
						</Link>
					</div>
					<Menu theme="dark" defaultSelectedKeys={[ '1' ]} mode="inline">
						<Menu.Item key="1">
							<Icon type="phone" theme="outlined" />{' '}
							<span>
								{' '}
								<Link to="CallFarmer">Call A Farmer</Link>{' '}
							</span>{' '}
						</Menu.Item>
						<Menu.Item key="2">
							<Icon type="phone" theme="outlined" />{' '}
							<span>
								<Link to="CallStockMan">Call A StockMan</Link>
							</span>
						</Menu.Item>
						<SubMenu
							key="sub1"
							title={
								<span>
									<Icon type="shopping-cart" theme="outlined" />
									<span>Shop</span>
								</span>
							}
						>
							<Menu.Item key="3" onClick={this.SetSeedsTrue}>
								Seeds
							</Menu.Item>
							<Menu.Item key="4" onClick={this.SetLifeStockTrue}>
								{' '}
								Lifestock{' '}
							</Menu.Item>
							<Menu.Item key="5" onClick={this.SetSeafoodTrue}>
								{' '}
								Seafood
							</Menu.Item>
							<Menu.Item key="6" onClick={this.SetPoultryTrue}>
								{' '}
								Poultry
							</Menu.Item>
							<Menu.Item key="7" onClick={this.SetFarmingTTrue}>
								Farming Tools
							</Menu.Item>
						</SubMenu>

						<Menu.Item key="10">
							<Icon type="dollar" theme="outlined" />{' '}
							<span type="primary" onClick={this.showModal}>
								Sell
							</span>
							<Modal
								visible={this.state.visible}
								title="Sell"
								onOk={this.handleOk}
								onCancel={this.handleCancel}
								width="70rem"
								footer={[
									<Button key="back" onClick={this.handleCancel}>
										Return
									</Button>,
									<Button key="submit" type="primary" onClick={this.handleOk}>
										ok
									</Button>
								]}
							>
								<div>
									<h2>Sell your product on our Platform</h2>

									<form name="contactform" className="contactform" onSubmit={this.handleSubmit}>
										{' '}
										<h5 className="ContactH">Name</h5>
										<input
											type="text"
											name="name"
											value={this.state.name}
											onChange={this.handleChangeName}
											placeholder="Name"
											className="ContactIM"
											required
										/>
										<br />
										<h5 className="ContactH">Phone</h5>
										<input
											type="text"
											name="phone"
											value={this.state.phone}
											onChange={this.handleChangePhone}
											placeholder="Phone"
											className="ContactIM"
											required
										/>
										<br />
										<h5 className="ContactH">Tell Us About You</h5>
										<input
											type="text"
											name="acctNo"
											value={this.state.acctNo}
											onChange={this.handleChangeAcctNo}
											placeholder="What would you like to Sell"
											className="SellT"
											required
										/>
										<br />
										<Button value="Submit" type="dashed" block>
											Ride On
										</Button>
									</form>
								</div>
							</Modal>
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout>
					<Header style={{ background: '#4ebc00', padding: 0 }}>
						<h3 className="Header_h3"> Connect With Agriculture</h3>
					</Header>

					<Content className="contentL">
						<Breadcrumb style={{ margin: '16px 0' }}>
							<Breadcrumb.Item>ITEMS</Breadcrumb.Item>
						</Breadcrumb>

						<div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
							{this.state.Seeds === true ? (
								<div className="Item_div">
									<Seeds />{' '}
								</div>
							) : (
								''
							)}
							{this.state.LifeStock === true ? (
								<div className="Item_div">
									{' '}
									<LifeStock />{' '}
								</div>
							) : (
								''
							)}
							{this.state.Seafood === true ? (
								<div className="Item_div">
									{' '}
									<Seafood />{' '}
								</div>
							) : (
								''
							)}
							{this.state.Poultry === true ? (
								<div className="Item_div">
									<Poultry />{' '}
								</div>
							) : (
								''
							)}
							{this.state.FarmingT === true ? (
								<div className="Item_div">
									{' '}
									<FarmingT />{' '}
								</div>
							) : (
								''
							)}
							{this.state.Seeds &&
							this.state.LifeStock &&
							this.state.Seafood &&
							this.state.Poultry &&
							this.state.FarmingT === false ? (
								<h1>Welcome! please use the SideBar</h1>
							) : (
								''
							)}
						</div>
					</Content>
					<Footer style={{ textAlign: 'center' }}>codaBae</Footer>
				</Layout>
			</Layout>
		);
	}
}

export default DashBoard;
