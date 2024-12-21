import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header className="">
      <div className="topbar text-center">
        <img
          src="https://buskool-photos.s3.ir-thr-at1.arvanstorage.ir/yalda%2Fyalda-ribbon.gif"
          alt=""
        />
      </div>
      <nav class="navbar navbar-expand-sm">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="mynavbar">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">
                  <i class="bi bi-person-plus"></i> <span> ورود / ثبت نام</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">
                  <i class="bi bi-people"></i> <span>خریداران</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">
                  <i class="bi bi-people"></i> <span>فروشندگان</span>
                </a>
              </li>
            </ul>
            <form class="d-flex">
              <button
                class="btn btn-warning border-0 rounded-0 text-white px-4 py-2"
                type="button"
              >
                <i class="bi bi-search"></i>
              </button>
              <input
                class="form-control text-end border-0 rounded-0"
                type="text"
                placeholder="به دنبال چه محصولی هستید؟"
              />
            </form>
            <a class="navbar-brand ms-4" href="javascript:void(0)">
              <img
                src="https://www.buskool.com/images/web-logo.svg?b986ac3ee95fbc6d3331a8f1f15faea3"
                alt=""
                width="150"
              />
            </a>
          </div>
        </div>
      </nav>
      <div className="container-fluid">
        <nav className="nav py-3">
          <ul className="navbar-nav justify-content-end w-100 align-items-center" style={{'flexDirection': 'row'}}>
            <li className="nav-item mx-4">
              <a href="">فروشنده شوید!</a>
            </li>
            <li className="nav-item mx-4">
              <a href="" className="fw-bold d-flex align-items-center text-dark">دسته بندی ها <i class="text-dark bi bi-list fs-5 ms-2"></i> </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
