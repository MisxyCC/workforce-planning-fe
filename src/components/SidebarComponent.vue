<script setup lang="ts">
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem as SidebarMenuItemComponent,
} from '@/components/ui/sidebar';
import { APP_NAME } from '@/constants';
import type { SidebarMenuItem } from '@/models/sidebarMenu';
import { Home, LogOut, Upload } from 'lucide-vue-next';
import { useRoute, type RouteLocationNormalizedLoaded } from 'vue-router';

// Menu items.
const items: SidebarMenuItem[] = [
  {
    title: 'หน้าแรก',
    url: '/home',
    icon: Home,
    isSelected: false,
  },
  {
    title: 'นำเข้าข้อมูลจาก SAP',
    url: '/excel-uploader',
    icon: Upload,
    isSelected: false,
  },
  {
    title: 'ออกจากระบบ',
    url: '/',
    icon: LogOut,
    isSelected: false,
  },
];

const route: RouteLocationNormalizedLoaded  = useRoute();
</script>

<template>
  <Sidebar>
    <SidebarHeader>
      <div class="flex items-center gap-3 px-2 py-2">
        <div
          class="flex h-10 w-10 items-center justify-center rounded-lg bg-pea/10 text-pea ring-1 ring-pea/10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        </div>
        <span class="text-md font-bold text-pea text-center">{{ APP_NAME }}</span>
      </div>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>เมนูหลัก</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItemComponent v-for="item in items" :key="item.title">
              <SidebarMenuButton
                as-child
                v-if="!item.isHidden"
                :isActive="route.path === item.url"
                class="data-[active=true]:bg-blue-50 data-[active=true]:text-blue-600"
              >
                <RouterLink :to="item.url">
                  <component :is="item.icon" />
                  <span>{{ item.title }}</span>
                </RouterLink>
              </SidebarMenuButton>
            </SidebarMenuItemComponent>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
</template>
