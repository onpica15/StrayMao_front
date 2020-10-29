import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { GrCart } from "react-icons/gr";

// 選單連結要使用NavLink取代Link
import { NavLink } from "react-router-dom";

function MyNavbar(props) {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        fixed="top"
        // display = "flex"
      >
        <Navbar.Brand
          href="/homeTest"
          className="ml-5"
          style={{ color: "#FFF1E6", fontFamily: "Roboto ", fontSize: "60px" }}
        >
          Stray Mao
        </Navbar.Brand>
        <Navbar.Brand
          href="/homeTest"
          className="navLogoCN"
          style={{ color: "#FFF1E6", fontSize: "16px" }}
        >
          寵愛有家
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            {/* 把Nav.Link作為NavLink來使用 */}
            {/* 一定要加上exact，不然首頁會一直點亮(active) */}
            <Nav.Link
              as={NavLink}
              to="/adoptionTest"
              style={{ color: "#FFF1E6" }}
            >
              領養<i className="fas fa-caret-down"></i>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/storeTest" style={{ color: "#FFF1E6" }}>
              商城<i className="fas fa-caret-down"></i>
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/socialTest"
              style={{ color: "#FFF1E6" }}
            >
              社群<i className="fas fa-caret-down"></i>
            </Nav.Link>
          </Nav>
          <Nav className="mr-5">
            <div className="hmSearch ">
              <input
                className="input-brown searchPlaceholder"
                type="text"
                placeholder="搜尋"
                style={{ color: "#d1d1d1" }}
              ></input>
            </div>
            <Nav.Link as={NavLink} to="/">
              <i className="fas fa-search navIcon"></i>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/memberTest">
              <i className="fas fa-user navIcon"></i>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/cartTest">
              <i className="fas fa-shopping-cart navIcon"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default MyNavbar;
