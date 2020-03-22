import React, { Component } from 'react';
import Link from 'next/link';

export class Nav extends Component {
    render() {
        return (
            <nav className="navbar-expand-sm bg-dark navbar-dark">
                <div className="navbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link">Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contact">
                                <a className="nav-link">Contact</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/portfolio">
                                <a className="nav-link">Portfolio</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
};