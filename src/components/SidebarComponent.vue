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
import type { SidebarMenuItem } from '@/models/sidebarMenu';
import { Calendar, Home, Inbox, LogOut, Search, Settings } from 'lucide-vue-next';

// Menu items.
const items: SidebarMenuItem[] = [
  {
    title: 'Home',
    url: '#',
    icon: Home,
  },
  {
    title: 'Inbox',
    url: '#',
    icon: Inbox,
  },
  {
    title: 'Calendar',
    url: '#',
    icon: Calendar,
  },
  {
    title: 'Search',
    url: '#',
    icon: Search,
  },
  {
    title: 'Settings',
    url: '#',
    icon: Settings,
    isHidden: false,
  },
  {
    title: 'ออกจากระบบ',
    url: '/',
    icon: LogOut,
  },
];
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
        <span class="text-md font-bold text-pea text-center">Workforce Planning System NE1</span>
      </div>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>เมนูหลัก</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItemComponent v-for="item in items" :key="item.title">
              <SidebarMenuButton as-child v-if="!item.isHidden">
                <a :href="item.url">
                  <component :is="item.icon" />
                  <span>{{ item.title }}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItemComponent>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
</template>
