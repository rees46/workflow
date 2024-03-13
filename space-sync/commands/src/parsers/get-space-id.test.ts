import { describe }     from 'vitest'
import { it }           from 'vitest'
import { expect }       from 'vitest'
import { getIssueID }   from './get-space-id'
import { getSpaceUrl }  from './get-space-url'

const issueBody = '### Описание бага\n' +
  '\n' +
  'тестовое описание теста\n' +
  '\n' +
  '### Воспроизведение\n' +
  '\n' +
  'тестовое воспроизведение\n' +
  '\n' +
  '### Ожидаемое поведение\n' +
  '\n' +
  'тестовое ожидание\n' +
  '\n' +
  '### Материалы\n' +
  '\n' +
  'тестовый материал\n' +
  '\n' +
  '### Данные окружения\n' +
  '\n' +
  'тестовое окружение\n' +
  '\n' +
  '### Саппорт тикет\n' +
  '\n' +
  'https://rees46.jetbrains.space/p/pro/issues/112'

describe('Getting ticket ID', () => {
  it('Gets correct id', () => {
    const url = getSpaceUrl(issueBody, 'Саппорт тикет')

    const result = getIssueID(url)

    expect(result).toEqual('112')
  })
})
