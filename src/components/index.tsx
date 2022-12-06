import React from "react";

import NavigationBar from './navigation/navbar';
import { SearchBar } from './navigation/searchBar';
import Postcard from './postcard';
import PostGrid from './postcard/grid.postcard';

class Components extends React.Component {
  static Navbar = NavigationBar;
  static Search = SearchBar;
  static Postcard = Postcard;
  static PostGrid = PostGrid;
}

export default Components;