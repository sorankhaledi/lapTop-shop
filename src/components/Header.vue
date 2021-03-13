<template>
  <div class="header">
    <b-navbar fixed="top" toggleable="md" type="dark" variant="background">
      <b-navbar-brand href="#">لپتاپ</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/">خانه</b-nav-item>
          <b-nav-item-dropdown to="/brands" text="دسته بندی">
            <b-dropdown-item to="/brands/all">All</b-dropdown-item>
            <b-dropdown-item to="/brands/asus">Asus</b-dropdown-item>
            <b-dropdown-item to="/brands/apple">Apple</b-dropdown-item>
            <b-dropdown-item to="/brands/acer">Acer</b-dropdown-item>
            <b-dropdown-item to="/brands/hp">Hp</b-dropdown-item>
            <b-dropdown-item to="/brands/lenovo">Lenovo</b-dropdown-item>
            <b-dropdown-item to="/brands/msi">Msi</b-dropdown-item>
            <b-dropdown-item to="/brands/Dell">Dell</b-dropdown-item>
            <b-dropdown-item to="/brands/sony">Sony</b-dropdown-item>
            <b-dropdown-item to="/brands/microsoft">Microsoft</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item to="/aboutus">درباره ما</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>


<script>
export default {};
</script>


<style scoped>
.header {
  --text: #f4f4f4;
  --text-inverse: #333;
  --background: #79a3b1;
  --spacing: 1em;

  transition: background 250ms ease-in;
  background: var(--background);
  color: var(--text-inverse);

  font-size: 20px;
}

.navbar-brand {
  font-weight: 900;
  font-size: 0.9rem;
  color: var(--text);
  font-family: "Courier New", Courier, monospace;
}

.navbar-brand:hover {
  color: var(--text);
}

.navbar-nav {
  direction: rtl;
}

.navbar-nav .nav-item {
  direction: rtl;
  text-align: start;
}

.navbar-nav .nav-item .nav-link{
  color: var(--text);
  text-align: start;
}

.nav-link span {
  color:var(--text)
}

.navbar-nav .nav-item .nav-link:hover,
.navbar-nav .nav-item .nav-link:focus  {
  color: var(--text-inverse);
}



.navbar-nav .nav-item .router-link-exact-active {
  color: var(--text-inverse);
}


</style>
