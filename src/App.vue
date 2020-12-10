<template>
  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
      </li>
    </ul>
  </nav>

  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <router-link :to="{ name: 'Home' }" class="brand-link">
      <img src="@/assets/logo.png" class="brand-image img-circle elevation-3" />
      <span class="brand-text font-weight-light">FBVN</span>
    </router-link>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel -->
      <div class="user-panel pt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="@/assets/logo.png" class="img-circle elevation-2" />
        </div>
        <div class="info">
          <router-link :to="{ name: 'Home' }" class="d-block">Hứa Phú Quý</router-link>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <li class="nav-item">
            <router-link :to="{ name: 'Home' }" class="nav-link" active-class="active">
              <i class="nav-icon far fa-image"></i>
              <p>Lọc bạn bè</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Home' }" class="nav-link" active-class="active">
              <i class="nav-icon far fa-image"></i>
              <p>Lọc bạn bè theo tương tác</p>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </aside>

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Dashboard</h1>
          </div>
        </div>
      </div>
    </div>

    <!-- Main content -->
    <section class="content">
      <router-view />
    </section>
  </div>

  <!-- Footer -->
  <footer class="main-footer">
    <strong>Copyright &copy; 2014-2020 <a href="https://adminlte.io">AdminLTE.io</a>.</strong>
    All rights reserved.
    <div class="float-right d-none d-sm-inline-block"><b>Version</b> {{ version }}</div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      version: process.env.VUE_APP_VERSION,
    };
  },
});
</script>

<style lang="scss">
#app {
  font-family: Helvetica, Arial, sans-serif;
}
</style>
