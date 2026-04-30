# Deployment Guide — Kroyfit

## Production Server Setup

### Systemd Service Configuration

The production server runs as a systemd service at `/etc/systemd/system/nuxt-prod.service`.

**Key Configuration:**
```ini
[Unit]
Description=Kroyfit Nuxt Production Server
After=network.target

[Service]
Type=simple
User=root
WorkingDirectory=/root/kroyfit/.output
ExecStartPre=/bin/bash -c 'cp /root/kroyfit/kroyfit.db /root/kroyfit/.output/kroyfit.db && cp /root/kroyfit/PLAN.md /root/kroyfit/.output/PLAN.md'
ExecStart=/root/.nvm/versions/node/v25.9.0/bin/node server/index.mjs
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
```

**Important Notes:**
- `ExecStartPre` copies the database and PLAN.md before starting the server
- This ensures the production server always has access to the latest files
- The server runs from `.output/` directory (production build output)
- Automatic restart on failure with 5-second delay

### Database Management

The database file `kroyfit.db` is stored in the project root but copied to `.output/` on service startup.

**Files:**
- Source: `/root/kroyfit/kroyfit.db` (main database)
- Production: `/root/kroyfit/.output/kroyfit.db` (used by running server)

### Service Commands

```bash
# Start service
systemctl start nuxt-prod

# Stop service
systemctl stop nuxt-prod

# Restart service
systemctl restart nuxt-prod

# Check status
systemctl status nuxt-prod

# View logs
journalctl -u nuxt-prod -f

# Enable auto-start on boot
systemctl enable nuxt-prod
```

### Build and Deploy

```bash
# Build production bundle
npm run build

# Restart service to load new build
systemctl restart nuxt-prod

# Verify server is running
curl http://localhost:3000/api/admin/login
```

### Troubleshooting

**Database not found error:**
- The service automatically copies the database on startup
- If error persists, manually copy: `cp /root/kroyfit/kroyfit.db /root/kroyfit/.output/kroyfit.db`

**Login fails after restart:**
- Database may not have been copied
- Check service logs: `journalctl -u nuxt-prod -n 20`
- Manually restart: `systemctl restart nuxt-prod`

**PLAN.md not displaying:**
- The service automatically copies PLAN.md on startup
- If not visible, manually copy: `cp /root/kroyfit/PLAN.md /root/kroyfit/.output/PLAN.md`

---

*Last Updated: 2026-04-30*
*Version: 1.8.12*
