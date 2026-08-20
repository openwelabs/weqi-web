<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

// 5 个字段说明
const fields = computed(() => tm('addModel.fields'))
// 推荐提供商
const providers = computed(() => tm('addModel.providers'))
</script>

<template>
  <section class="add-model">
    <div class="container">
      <p class="section-label">{{ t('addModel.label') }}</p>
      <h1 class="page-title">{{ t('addModel.title') }}</h1>
      <p class="page-sub">{{ t('addModel.sub') }}</p>

      <!-- 字段说明 -->
      <h2 class="block-title">{{ t('addModel.fieldsTitle') }}</h2>
      <div class="table-wrap">
        <table class="data-table">
          <thead>
            <tr>
              <th>{{ t('addModel.fieldCol') }}</th>
              <th>{{ t('addModel.fillCol') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="f in fields" :key="f.field">
              <td class="cell-field">{{ f.field }}</td>
              <td>{{ f.fill }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- 推荐提供商 -->
      <h2 class="block-title">{{ t('addModel.providersTitle') }}</h2>
      <p class="block-sub">{{ t('addModel.providersSub') }}</p>
      <div class="table-wrap">
        <table class="data-table">
          <thead>
            <tr>
              <th>{{ t('addModel.providerCol') }}</th>
              <th>{{ t('addModel.baseUrlCol') }}</th>
              <th>{{ t('addModel.modelCol') }}</th>
              <th>{{ t('addModel.keyCol') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="p in providers" :key="p.name">
              <td class="cell-field">{{ p.name }}</td>
              <td><code class="cell-code">{{ p.baseUrl }}</code></td>
              <td><code class="cell-code">{{ p.model }}</code></td>
              <td>{{ p.key }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- 提示 -->
      <div class="note">
        <span class="note-mark">!</span>
        <p>{{ t('addModel.note') }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.add-model {
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
  max-width: 60ch;
}

.block-title {
  font-size: 1.4rem;
  font-weight: 650;
  letter-spacing: -0.01em;
  margin: 3rem 0 1rem;
}

.block-sub {
  color: var(--muted);
  font-size: 0.98rem;
  margin-bottom: 1.5rem;
  max-width: 70ch;
}

.table-wrap {
  overflow-x: auto;
  border: 1px solid var(--line);
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.92rem;
}

.data-table th {
  text-align: left;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--felt);
  font-weight: 600;
  padding: 14px 20px;
  border-bottom: 1px solid var(--line);
  white-space: nowrap;
}

.data-table td {
  padding: 14px 20px;
  border-bottom: 1px solid var(--line);
  vertical-align: top;
}

.data-table tbody tr:last-child td {
  border-bottom: none;
}

.data-table tbody tr:hover {
  background: #1a1a19;
}

.cell-field {
  font-weight: 600;
  white-space: nowrap;
}

.cell-code {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--felt);
  word-break: break-all;
}

.note {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  margin-top: 3rem;
  border: 1px solid var(--felt);
  padding: 18px 22px;
  border-radius: 2px;
  max-width: 70ch;
}

.note-mark {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--felt);
  border-radius: 50%;
  color: var(--felt);
  font-family: var(--font-mono);
  font-size: 0.9rem;
  font-weight: 700;
}

.note p {
  color: var(--muted);
  font-size: 0.92rem;
}

@media (max-width: 600px) {
  .data-table th,
  .data-table td {
    padding: 12px 14px;
  }
}
</style>
