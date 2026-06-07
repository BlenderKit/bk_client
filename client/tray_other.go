//go:build !windows

/*##### BEGIN GPL LICENSE BLOCK #####

  This program is free software; you can redistribute it and/or
  modify it under the terms of the GNU General Public License
  as published by the Free Software Foundation; either version 2
  of the License, or (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program; if not, write to the Free Software Foundation,
  Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA.

##### END GPL LICENSE BLOCK #####*/

package main

// traySupported reports whether a system tray icon can be shown on this
// platform. The tray is currently implemented for Windows only (pure Go, no
// cgo); macOS/Linux would require cgo and platform GUI libraries, so they use
// this no-op stub for now.
const traySupported = false

// runTray is a no-op on platforms without tray support. It exists so main.go can
// reference it unconditionally; callers must check traySupported first.
func runTray(serverURL, listenAddr string) {}
