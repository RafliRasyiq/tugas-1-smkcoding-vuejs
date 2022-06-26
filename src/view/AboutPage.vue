<template>
  <h1>Halaman Gudang</h1>
  <div class="row-wrapper">
    <div class="column-wrapper">
        <h3>Nama Barang</h3>
        <div v-for="(item, index) in items" :key="index">
         {{item.nama}}
        </div>
    </div>  
    <div class="column-wrapper">
        <h3>Stok Barang</h3>
        <div v-for="(item, index) in items" :key="index">
         {{item.stok}}
        </div>
    </div>
    <div class="column-wrapper">
        <h3>Status Barang</h3>
        <div v-for="(item, index) in items" :key="index">
         {{item.stok > 1 ? 'Tersedia' : 'Tidak Tersedia'}}
        </div>
    </div>
  </div>
</template>

<script>
import gudang from '@/static/gudang';
export default {
    data(){
        return{
            items: gudang.arrayGudang,
        }
    }
}
</script>

<style>
.column-wrapper{
    column-count: 1;
}
.row-wrapper{
    
}
</style>