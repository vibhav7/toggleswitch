import React from 'react'
import './index.css'

export default class Switch extends React.Component {
    constructor(props){
        super(props)

        this.state={
            item:'switch-button-off'
        }
        this.offFunction = this.offFunction.bind(this);
        this.onFunction = this.onFunction.bind(this)
    }

    offFunction(){
        this.setState({
            item:'switch-button-off'
        })
    }
    onFunction(){
        this.setState({
            item:'switch-button-on'
        })
    }

    render() {
        return (
            <div className='wrapper'>
                <div className='switch-table'>
                    <div className='switch-table-cell-empty'></div>
                    <div onClick={this.onFunction} className='switch-table-cell'>On</div>
                    <div className='switch-bar'>
                        <div className={this.state.item}></div>
                    </div>
                    <div div onClick={this.offFunction} className='switch-table-cell'>Off</div>
                    <div className='switch-table-cell-empty'></div>

                </div>
            </div>
        )
    }
}