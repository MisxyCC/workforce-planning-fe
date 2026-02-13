<template>
  <SidebarProvider>
    <SidebarComponent />
    <main class="w-full min-h-screen bg-gray-200/50 flex flex-col">
      <div class="flex items-center p-4 border-b bg-white sticky top-0 z-10 shadow-sm h-16">
        <SidebarTrigger />
        <Separator orientation="vertical" class="mr-2 data-[orientation=vertical]:h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem class="hidden md:block">
              <BreadcrumbLink href="#"> Workforce Planning System NE1</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator class="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>1. นำเข้าข้อมูลพนักงานจาก SAP</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div class="container mx-auto p-4 md:p-10 space-y-6 md:space-y-8 max-w-7xl">
        <div class="flex flex-col space-y-2">
          <h1 class="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
            อัปโหลดข้อมูลพนักงานจากไฟล์ Excel
          </h1>
          <p class="text-sm md:text-base text-muted-foreground">
            อัปโหลดไฟล์ Excel เพื่อนำเข้าข้อมูลพนักงาน
          </p>
        </div>

        <Card class="shadow-sm border-gray-200">
          <CardHeader>
            <CardTitle>Upload Excel File</CardTitle>
            <CardDescription>รองรับไฟล์นามสกุล .xlsx และ .xls</CardDescription>
          </CardHeader>
          <CardContent class="space-y-4">
            <div class="grid w-full max-w-sm items-center gap-2">
              <Label for="file">เลือกไฟล์</Label>
              <Input
                id="file"
                type="file"
                accept=".xlsx, .xls"
                @change="handleFileUpload"
                :disabled="isUploading"
                class="cursor-pointer"
              />
            </div>

            <div
              v-if="isUploading"
              class="flex items-center gap-2 text-sm text-muted-foreground animate-pulse"
            >
              <Loader2 class="h-4 w-4 animate-spin" />
              กำลังประมวลผลไฟล์...
            </div>
            <div
              v-else-if="uploadStatus === 'success'"
              class="flex items-center gap-2 text-sm text-green-600 font-medium bg-green-50 p-3 rounded-md border border-green-100"
            >
              <CheckCircle class="h-4 w-4" />
              อัปโหลดสำเร็จ: {{ fileName }}
            </div>
          </CardContent>
        </Card>

        <Card v-if="tableData.length > 0" class="shadow-sm border-gray-200 overflow-hidden">
          <CardHeader class="bg-gray-50/50 border-b pb-4">
            <CardTitle>ข้อมูลตัวอย่าง</CardTitle>
          </CardHeader>
          <CardContent class="p-0">
            <div class="overflow-x-auto">
              <WorkforceTable :data="tableData" :headers="tableHeaders" />
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  </SidebarProvider>
</template>
<script setup lang="ts">
import SidebarComponent from '@/components/SidebarComponent.vue';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import WorkforceTable from '@/components/WorkforceTable.vue';
import { CheckCircle, Loader2 } from 'lucide-vue-next';
import { ref } from 'vue';

// State
const isUploading = ref(false);
const uploadStatus = ref<'idle' | 'success' | 'error'>('idle');
const fileName = ref('');
const tableData = ref<any[]>([]);
const tableHeaders = ref<string[]>([]);

// Mock Data (Simulating Excel content)
const mockData = [
  { ID: '1001', Name: 'Somchai', Position: 'Engineer', Department: 'Network', Status: 'Active' },
  { ID: '1002', Name: 'Somsri', Position: 'Accountant', Department: 'Finance', Status: 'Active' },
  {
    ID: '1003',
    Name: 'Damrong',
    Position: 'Technician',
    Department: 'Maintenance',
    Status: 'On Leave',
  },
  {
    ID: '1004',
    Name: 'Wilai',
    Position: 'HR Officer',
    Department: 'Human Resource',
    Status: 'Active',
  },
  {
    ID: '1005',
    Name: 'Prawit',
    Position: 'Manager',
    Department: 'Management',
    Status: 'Retired',
  },
];

const handleFileUpload = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];

  if (file) {
    fileName.value = file.name;
    isUploading.value = true;
    uploadStatus.value = 'idle';
    tableData.value = [];
    tableHeaders.value = [];

    // Simulate file processing delay
    setTimeout(() => {
      isUploading.value = false;
      uploadStatus.value = 'success';
      tableData.value = mockData;
      if (mockData.length > 0 && mockData[0]) {
        tableHeaders.value = Object.keys(mockData[0]);
      }
    }, 1500);
  }
};
</script>
