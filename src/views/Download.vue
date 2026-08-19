<script setup>
// 各系统下载项
const downloads = [
  {
    os: 'Linux',
    format: 'AppImage',
    note: '所有 Linux 发行版通用',
    url: 'https://github.com/openwelabs/weqi/releases/download/1.0.0/weqi_v1.0.0-apig-x86_64.AppImage',
  },
  {
    os: 'Debian / Ubuntu / Mint',
    format: '.deb',
    note: 'Debian 系发行版安装包',
    url: 'https://github.com/openwelabs/weqi/releases/download/1.0.0/weqi_v1.0.0-debian-x86_64.deb',
  },
  {
    os: 'Fedora / RHEL / Rocky',
    format: '.rpm',
    note: 'Red Hat 系发行版安装包',
    url: 'https://github.com/openwelabs/weqi/releases/download/1.0.0/weqi_v1.0.0-rhel-x86_64.rpm',
  },
  {
    os: 'Windows',
    format: '便携版',
    note: '免安装，解压即用',
    url: 'https://github.com/openwelabs/weqi/releases/download/1.0.0/weqi_v1.0.0-winPortable-x86_64.zip',
  },
  {
    os: 'Windows',
    format: '安装包',
    note: '标准安装程序',
    url: 'https://github.com/openwelabs/weqi/releases/download/1.0.0/weqi_v1.0.0-winSetup-x86_64.exe',
  },
]
</script>

<template>
  <section class="download">
    <div class="container">
      <p class="section-label">下载</p>
      <h1 class="page-title">选择你的系统</h1>
      <p class="page-sub">Weqi v1.0.0 · 支持 Linux 与 Windows，选择适合你的安装包。</p>

      <div class="download-list">
        <div v-for="d in downloads" :key="d.format" class="download-card">
          <div class="download-info">
            <span class="download-os">{{ d.os }}</span>
            <span class="download-format">{{ d.format }}</span>
            <span class="download-note">{{ d.note }}</span>
          </div>
          <a :href="d.url" target="_blank" rel="noopener" class="btn btn-solid">下载</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.download {
  padding: 96px 0 120px;
}

.page-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.12;
  margin-bottom: 1rem;
}

.page-sub {
  color: var(--muted);
  font-size: 1.05rem;
  margin-bottom: 3rem;
}

.download-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 720px;
}

.download-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  border: 1px solid var(--line);
  padding: 24px 28px;
  transition: border-color 0.2s;
}

.download-card:hover {
  border-color: var(--ink);
}

.download-info {
  display: flex;
  align-items: baseline;
  gap: 16px;
  flex-wrap: wrap;
}

.download-os {
  font-weight: 650;
  font-size: 1.05rem;
}

.download-format {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--felt);
  border: 1px solid var(--felt);
  padding: 2px 10px;
  border-radius: 999px;
}

.download-note {
  color: var(--muted);
  font-size: 0.9rem;
}

.btn {
  display: inline-block;
  padding: 10px 24px;
  font-size: 0.92rem;
  font-weight: 550;
  border-radius: 2px;
  transition: all 0.2s;
  white-space: nowrap;
}

.btn-solid {
  background: var(--ink);
  color: var(--paper);
}

.btn-solid:hover {
  background: var(--felt);
  color: var(--paper);
}

@media (max-width: 600px) {
  .download-card {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
}
</style>
