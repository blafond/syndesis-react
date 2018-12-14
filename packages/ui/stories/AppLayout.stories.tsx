import { storiesOf } from '@storybook/react';
import { Icon, Masthead } from 'patternfly-react';
import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import { AppLayout, PfVerticalNavItem } from '../src';

const stories = storiesOf('AppLayout', module);

stories.add('sample usage', () => (
  <div className={'layout-pf layout-pf-fixed'}>
    <AppLayout
      appTitle={text('Application title', 'Syndesis')}
      pictograph={
        'data:image/png;base64,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'
      }
      typogram={
        'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIKICAgICAgICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgICAgICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICAgICAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICAgICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgICAgICB3aWR0aD0iMTE0cHgiCiAgICAgICAgaGVpZ2h0PSIyOHB4IgogICAgICAgIHZpZXdCb3g9IjAgMCAxMTQgMjgiCiAgICAgICAgdmVyc2lvbj0iMS4xIgogICAgICAgIGlkPSJzdmcxNSIKICAgICAgICBzb2RpcG9kaTpkb2NuYW1lPSJzeW5kZXNpcy1sb2dvLXN2Zy13aGl0ZS5zdmciCiAgICAgICAgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi4xIHIxNTM3MSI+CiAgICA8bWV0YWRhdGEKICAgICAgICAgICAgaWQ9Im1ldGFkYXRhMTkiPgogICAgICAgIDxyZGY6UkRGPgogICAgICAgICAgICA8Y2M6V29yawogICAgICAgICAgICAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgICAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICAgICAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIvPgogICAgICAgICAgICAgICAgPGRjOnRpdGxlPnN5bmRlc2lzPC9kYzp0aXRsZT4KICAgICAgICAgICAgPC9jYzpXb3JrPgogICAgICAgIDwvcmRmOlJERj4KICAgIDwvbWV0YWRhdGE+CiAgICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgICAgICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICAgICAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgICAgICAgIGJvcmRlcm9wYWNpdHk9IjEiCiAgICAgICAgICAgIG9iamVjdHRvbGVyYW5jZT0iMTAiCiAgICAgICAgICAgIGdyaWR0b2xlcmFuY2U9IjEwIgogICAgICAgICAgICBndWlkZXRvbGVyYW5jZT0iMTAiCiAgICAgICAgICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIgogICAgICAgICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgICAgICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiCiAgICAgICAgICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMDAiCiAgICAgICAgICAgIGlkPSJuYW1lZHZpZXcxNyIKICAgICAgICAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgICAgICAgICBpbmtzY2FwZTpwYWdlY2hlY2tlcmJvYXJkPSJ0cnVlIgogICAgICAgICAgICBpbmtzY2FwZTp6b29tPSIzLjQzODU5NjUiCiAgICAgICAgICAgIGlua3NjYXBlOmN4PSIxNy4zMDM1NzEiCiAgICAgICAgICAgIGlua3NjYXBlOmN5PSIxNCIKICAgICAgICAgICAgaW5rc2NhcGU6d2luZG93LXg9IjE2MDkiCiAgICAgICAgICAgIGlua3NjYXBlOndpbmRvdy15PSI1OTIiCiAgICAgICAgICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgICAgICAgICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9InN2ZzE1Ii8+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQzLjIgKDM5MDY5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZQogICAgICAgICAgICBpZD0idGl0bGUyIj5zeW5kZXNpcwogICAgPC90aXRsZT4KICAgIDxkZXNjCiAgICAgICAgICAgIGlkPSJkZXNjNCI+Q3JlYXRlZCB3aXRoIFNrZXRjaC4KICAgIDwvZGVzYz4KICAgIDxkZWZzCiAgICAgICAgICAgIGlkPSJkZWZzNiIvPgogICAgPGcKICAgICAgICAgICAgaWQ9IlN5bmRlc2lzLUxvZ28iCiAgICAgICAgICAgIHN0cm9rZT0ibm9uZSIKICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPSIxIgogICAgICAgICAgICBmaWxsPSJub25lIgogICAgICAgICAgICBmaWxsLXJ1bGU9ImV2ZW5vZGQiCiAgICAgICAgICAgIGZvbnQtc2l6ZT0iMjgiCiAgICAgICAgICAgIGZvbnQtZmFtaWx5PSJSaWdodGVvdXMtUmVndWxhciwgUmlnaHRlb3VzIgogICAgICAgICAgICBmb250LXdlaWdodD0ibm9ybWFsIj4KICAgICAgICA8ZwogICAgICAgICAgICAgICAgaWQ9IlRleHQiCiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTg3LjAwMDAwMCwgLTExOS4wMDAwMDApIgogICAgICAgICAgICAgICAgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxnCiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUuMDAwMDAwLCAxNS4wMDAwMDApIgogICAgICAgICAgICAgICAgICAgIGlkPSJzeW5kZXNpcyI+CiAgICAgICAgICAgICAgICA8ZwogICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPSJzeW5kZXNpcyIKICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9IiIKICAgICAgICAgICAgICAgICAgICAgICAgaWQ9InRleHQxMCI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGgKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9Im0gMTcxLjQ2MDk0LDEyNiBoIC04LjUzMTI1IHYgLTMuNzE4NzUgaCA4LjUzMTI1IHEgMC4zODI4MSwwIDAuNjU2MjUsLTAuMjczNDQgMC4yNzM0MywtMC4yNzM0MyAwLjI3MzQzLC0wLjY1NjI1IDAsLTAuMzk2NDggLTAuMjczNDMsLTAuNTE5NTMgLTAuMjczNDQsLTAuMTIzMDUgLTAuNjU2MjUsLTAuMTIzMDUgaCAtMy44ODI4MiBxIC0wLjk3MDcsMCAtMS44MTgzNSwtMC4zNjkxNCAtMC44NDc2NiwtMC4zNjkxNCAtMS40NzY1NywtMC45OTgwNCAtMC42Mjg5LC0wLjY0MjU4IC0wLjk5ODA0LC0xLjQ5MDI0IC0wLjM1NTQ3LC0wLjg0NzY1IC0wLjM1NTQ3LC0xLjgxODM2IDAsLTAuOTcwNyAwLjM1NTQ3LC0xLjgxODM2IDAuMzY5MTQsLTAuODQ3NjUgMC45OTgwNCwtMS40NzY1NiAwLjYyODkxLC0wLjYyODkgMS40NzY1NywtMC45ODQzNyAwLjg0NzY1LC0wLjM2OTE0IDEuODE4MzUsLTAuMzY5MTQgaCA3LjU2MDU1IHYgMy43MTg3NSBoIC03LjU2MDU1IHEgLTAuMzgyODEsMCAtMC42NTYyNSwwLjI3MzQzIC0wLjI3MzQzLDAuMjczNDQgLTAuMjczNDMsMC42NTYyNSAwLDAuMzk2NDkgMC4yNzM0MywwLjY4MzYgMC4yNzM0NCwwLjI3MzQzIDAuNjU2MjUsMC4yNzM0MyBoIDMuODgyODIgcSAwLjk1NzAzLDAgMS44MDQ2OCwwLjMyODEzIDAuODQ3NjYsMC4zMTQ0NSAxLjQ3NjU3LDAuODg4NjcgMC42Mjg5LDAuNTc0MjIgMC45OTgwNCwxLjM4MDg2IDAuMzY5MTQsMC44MDY2NCAwLjM2OTE0LDEuNzYzNjcgMCwwLjk3MDcxIC0wLjM2OTE0LDEuODE4MzYgLTAuMzY5MTQsMC44MzM5OSAtMC45OTgwNCwxLjQ3NjU2IC0wLjYyODkxLDAuNjI4OTEgLTEuNDc2NTcsMC45OTgwNSBRIDE3Mi40MTc5NywxMjYgMTcxLjQ2MDk0LDEyNiBaIgogICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9IiIKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSJwYXRoMjEiLz4KICAgICAgICAgICAgICAgICAgICA8cGF0aAogICAgICAgICAgICAgICAgICAgICAgICAgICAgZD0ibSAxODEuNjA1NDcsMTMxLjU3ODEyIHYgLTMuNzU5NzYgbCAyLjA3ODEyLDAuMDI3MyBxIDAuNTQ2ODgsMCAxLjA1Mjc0LC0wLjE3NzczIDAuNTA1ODYsLTAuMTc3NzQgMC45Mjk2OSwtMC40OTIxOSAwLjQzNzUsLTAuMzE0NDUgMC43NjU2MiwtMC43NTE5NSAwLjMyODEzLC0wLjQyMzgzIDAuNTMzMiwtMC45Mjk2OSAtMC42MTUyMywwLjI1OTc3IC0xLjI1NzgxLDAuNTE5NTMgLTAuNjI4OTEsMC4yNTk3NyAtMS4yNzE0OCwwLjI1OTc3IC0xLjM1MzUyLDAgLTIuNTQyOTcsLTAuNDc4NTIgLTEuMTg5NDYsLTAuNDc4NTEgLTIuMDkxOCwtMS4zNTM1MSAtMC44ODg2NywtMC44ODg2OCAtMS40MDgyLC0yLjE0NjQ5IC0wLjUwNTg2LC0xLjI3MTQ4IC0wLjUwNTg2LC0yLjg0Mzc1IHYgLTguMDkzNzUgaCAzLjcxODc1IHYgOC4wOTM3NSBxIDAsMC43NzkzIDAuMjE4NzUsMS4zNjcxOSAwLjIzMjQyLDAuNTc0MjIgMC42MTUyMywwLjk3MDcgMC4zODI4MiwwLjM4MjgyIDAuODg4NjcsMC41NzQyMiAwLjUxOTU0LDAuMTkxNDEgMS4xMDc0MywwLjE5MTQxIDAuNTc0MjIsMCAxLjA4MDA3LC0wLjI1OTc3IDAuNTE5NTQsLTAuMjczNDQgMC45MDIzNSwtMC43MTA5NCAwLjM4MjgxLC0wLjQzNzUgMC42MDE1NiwtMC45ODQzNyAwLjIxODc1LC0wLjU2MDU1IDAuMjE4NzUsLTEuMTQ4NDQgdiAtOC4wOTM3NSBoIDMuNzU5NzcgdiAxMi43OTY4OCBxIC0wLjAxMzcsMS41NDQ5MiAtMC42MDE1NywyLjg5ODQzIC0wLjU4Nzg5LDEuMzUzNTIgLTEuNjEzMjgsMi4zNjUyNCAtMS4wMTE3MiwxLjAxMTcyIC0yLjM2NTIzLDEuNTk5NjEgLTEuMzUzNTIsMC41ODc4OSAtMi44OTg0NCwwLjU4Nzg5IHoiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT0iIgogICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9InBhdGgyMyIvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPSJtIDE5Ny41NjA1NSwxMjYgaCAtMy43MzI0MyB2IC0xNC42NDI1OCBoIDAuOTAyMzUgbCAxLjIzMDQ3LDEuNDIxODggcSAwLjkwMjM0LC0wLjgyMDMyIDIuMDM3MTEsLTEuMjU3ODIgMS4xNDg0MywtMC40NTExNyAyLjM5MjU3LC0wLjQ1MTE3IDEuMzM5ODUsMCAyLjUyOTMsMC41MTk1MyAxLjE4OTQ1LDAuNTA1ODYgMi4wNzgxMywxLjQwODIxIDAuODg4NjcsMC44ODg2NyAxLjM5NDUzLDIuMDkxNzkgMC41MTk1MywxLjE4OTQ2IDAuNTE5NTMsMi41NDI5NyBWIDEyNiBoIC0zLjczMjQyIHYgLTguMzY3MTkgcSAwLC0wLjU3NDIyIC0wLjIxODc1LC0xLjA4MDA4IC0wLjIxODc1LC0wLjUxOTUzIC0wLjYwMTU3LC0wLjkwMjM0IC0wLjM4MjgxLC0wLjM4MjgxIC0wLjg4ODY3LC0wLjYwMTU2IC0wLjUwNTg2LC0wLjIxODc1IC0xLjA4MDA4LC0wLjIxODc1IC0wLjU4Nzg5LDAgLTEuMTA3NDIsMC4yMTg3NSAtMC41MTk1MywwLjIxODc1IC0wLjkwMjM0LDAuNjAxNTYgLTAuMzgyODEsMC4zODI4MSAtMC42MDE1NiwwLjkwMjM0IC0wLjIxODc1LDAuNTA1ODYgLTAuMjE4NzUsMS4wODAwOCB6IgogICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9IiIKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSJwYXRoMjUiLz4KICAgICAgICAgICAgICAgICAgICA8cGF0aAogICAgICAgICAgICAgICAgICAgICAgICAgICAgZD0ibSAyMjMuNzI4NTIsMTI2IGggLTAuOTAyMzUgbCAtMS40NDkyMiwtMi4wMDk3NyBxIC0wLjUzMzIsMC40Nzg1MiAtMS4xMzQ3NiwwLjkwMjM1IC0wLjU4Nzg5LDAuNDEwMTUgLTEuMjQ0MTQsMC43MjQ2MSAtMC42NTYyNSwwLjMwMDc4IC0xLjM1MzUyLDAuNDc4NTEgLTAuNjgzNTksMC4xNzc3NCAtMS4zOTQ1MywwLjE3Nzc0IC0xLjU0NDkyLDAgLTIuOTEyMTEsLTAuNTc0MjIgLTEuMzUzNTIsLTAuNTg3ODkgLTIuMzc4OTEsLTEuNjEzMjggLTEuMDExNzEsLTEuMDM5MDYgLTEuNTk5NjEsLTIuNDQ3MjcgLTAuNTg3ODksLTEuNDIxODcgLTAuNTg3ODksLTMuMDg5ODQgMCwtMS42NTQzIDAuNTg3ODksLTMuMDc2MTcgMC41ODc5LC0xLjQyMTg4IDEuNTk5NjEsLTIuNDYwOTQgMS4wMjUzOSwtMS4wMzkwNiAyLjM3ODkxLC0xLjYyNjk1IDEuMzY3MTksLTAuNTg3ODkgMi45MTIxMSwtMC41ODc4OSAwLjQ5MjE5LDAgMS4wMTE3MiwwLjA4MiAwLjUzMzIsMC4wODIgMS4wMjUzOSwwLjI3MzQzIDAuNTA1ODYsMC4xNzc3NCAwLjk0MzM2LDAuNDc4NTIgMC40Mzc1LDAuMzAwNzggMC43MzgyOCwwLjczODI4IHYgLTYuODM1OTQgaCAzLjc1OTc3IHogbSAtMy43NTk3NywtNy40NTExNyBxIDAsLTAuNzY1NjMgLTAuMzAwNzgsLTEuNDc2NTYgLTAuMjg3MTEsLTAuNzI0NjEgLTAuNzkyOTcsLTEuMjcxNDkgLTAuNTA1ODYsLTAuNTYwNTUgLTEuMTg5NDUsLTAuODg4NjcgLTAuNjY5OTMsLTAuMzQxOCAtMS40MzU1NSwtMC4zNDE4IC0wLjc2NTYzLDAgLTEuNDQ5MjIsMC4yNzM0NCAtMC42Njk5MiwwLjI3MzQ0IC0xLjE3NTc4LDAuNzkyOTcgLTAuNDkyMTksMC41MDU4NiAtMC43NzkzLDEuMjQ0MTQgLTAuMjg3MTEsMC43MzgyOCAtMC4yODcxMSwxLjY2Nzk3IDAsMC44MDY2NCAwLjI4NzExLDEuNTMxMjUgMC4yODcxMSwwLjcyNDYxIDAuNzc5MywxLjI3MTQ4IDAuNTA1ODYsMC41NDY4OCAxLjE3NTc4LDAuODYxMzMgMC42ODM1OSwwLjMxNDQ1IDEuNDQ5MjIsMC4zMTQ0NSAwLjc2NTYyLDAgMS40MzU1NSwtMC4zMjgxMiAwLjY4MzU5LC0wLjM0MTggMS4xODk0NSwtMC44ODg2NyAwLjUwNTg2LC0wLjU2MDU1IDAuNzkyOTcsLTEuMjcxNDkgMC4zMDA3OCwtMC43MjQ2MSAwLjMwMDc4LC0xLjQ5MDIzIHoiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT0iIgogICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9InBhdGgyNyIvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPSJtIDIzMi40MTAxNiwxMjIuNDE3OTcgcSAwLjIxODc1LDAuMDY4NCAwLjQzNzUsMC4wOTU3IDAuMjE4NzUsMC4wMTM3IDAuNDM3NSwwLjAxMzcgMC41NDY4NywwIDEuMDUyNzMsLTAuMTUwMzkgMC41MDU4NiwtMC4xNTAzOSAwLjk0MzM2LC0wLjQyMzgyIDAuNDUxMTcsLTAuMjg3MTEgMC43OTI5NywtMC42ODM2IDAuMzU1NDcsLTAuNDEwMTUgMC41NzQyMiwtMC45MDIzNCBsIDIuNzM0MzcsMi43NDgwNCBxIC0wLjUxOTUzLDAuNzM4MjkgLTEuMjAzMTIsMS4zMjYxOCAtMC42Njk5MiwwLjU4Nzg5IC0xLjQ2Mjg5LDAuOTk4MDQgLTAuNzc5MywwLjQxMDE2IC0xLjY1NDMsMC42MTUyNCAtMC44NjEzMywwLjIxODc1IC0xLjc3NzM0LDAuMjE4NzUgLTEuNTQ0OTMsMCAtMi45MTIxMSwtMC41NzQyMiAtMS4zNTM1MiwtMC41NzQyMiAtMi4zNzg5MSwtMS41OTk2MSAtMS4wMTE3MiwtMS4wMjUzOSAtMS41OTk2MSwtMi40MzM1OSAtMC41ODc4OSwtMS40MjE4OCAtMC41ODc4OSwtMy4xMTcxOSAwLC0xLjczNjMzIDAuNTg3ODksLTMuMTcxODggMC41ODc4OSwtMS40MzU1NCAxLjU5OTYxLC0yLjQ0NzI2IDEuMDI1MzksLTEuMDExNzIgMi4zNzg5MSwtMS41NzIyNyAxLjM2NzE4LC0wLjU2MDU0IDIuOTEyMTEsLTAuNTYwNTQgMC45MTYwMSwwIDEuNzkxMDEsMC4yMTg3NSAwLjg3NSwwLjIxODc1IDEuNjU0MywwLjYyODkgMC43OTI5NywwLjQxMDE2IDEuNDc2NTYsMS4wMTE3MiAwLjY4MzU5LDAuNTg3ODkgMS4yMDMxMywxLjMyNjE3IHogbSAxLjkxNDA2LC03LjY5NzI3IHEgLTAuMjU5NzcsLTAuMDk1NyAtMC41MTk1MywtMC4xMjMwNCAtMC4yNDYxLC0wLjAyNzMgLTAuNTE5NTMsLTAuMDI3MyAtMC43NjU2MywwIC0xLjQ0OTIyLDAuMjg3MTEgLTAuNjY5OTIsMC4yNzM0NCAtMS4xNzU3OCwwLjc5Mjk3IC0wLjQ5MjE5LDAuNTE5NTMgLTAuNzc5MywxLjI1NzgxIC0wLjI4NzExLDAuNzI0NjEgLTAuMjg3MTEsMS42NDA2MyAwLDAuMjA1MDggMC4wMTM3LDAuNDY0ODQgMC4wMjc0LDAuMjU5NzcgMC4wNjg0LDAuNTMzMjEgMC4wNTQ3LDAuMjU5NzYgMC4xMjMwNSwwLjUwNTg1IDAuMDY4NCwwLjI0NjEgMC4xNzc3MywwLjQzNzUgeiIKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPSIiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0icGF0aDI5Ii8+CiAgICAgICAgICAgICAgICAgICAgPHBhdGgKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9Im0gMjQ5LjMzNTk0LDEyNiBoIC04LjUzMTI1IHYgLTMuNzE4NzUgaCA4LjUzMTI1IHEgMC4zODI4MSwwIDAuNjU2MjUsLTAuMjczNDQgMC4yNzM0MywtMC4yNzM0MyAwLjI3MzQzLC0wLjY1NjI1IDAsLTAuMzk2NDggLTAuMjczNDMsLTAuNTE5NTMgLTAuMjczNDQsLTAuMTIzMDUgLTAuNjU2MjUsLTAuMTIzMDUgaCAtMy44ODI4MiBxIC0wLjk3MDcsMCAtMS44MTgzNSwtMC4zNjkxNCAtMC44NDc2NiwtMC4zNjkxNCAtMS40NzY1NywtMC45OTgwNCAtMC42Mjg5LC0wLjY0MjU4IC0wLjk5ODA0LC0xLjQ5MDI0IC0wLjM1NTQ3LC0wLjg0NzY1IC0wLjM1NTQ3LC0xLjgxODM2IDAsLTAuOTcwNyAwLjM1NTQ3LC0xLjgxODM2IDAuMzY5MTQsLTAuODQ3NjUgMC45OTgwNCwtMS40NzY1NiAwLjYyODkxLC0wLjYyODkgMS40NzY1NywtMC45ODQzNyAwLjg0NzY1LC0wLjM2OTE0IDEuODE4MzUsLTAuMzY5MTQgaCA3LjU2MDU1IHYgMy43MTg3NSBoIC03LjU2MDU1IHEgLTAuMzgyODEsMCAtMC42NTYyNSwwLjI3MzQzIC0wLjI3MzQzLDAuMjczNDQgLTAuMjczNDMsMC42NTYyNSAwLDAuMzk2NDkgMC4yNzM0MywwLjY4MzYgMC4yNzM0NCwwLjI3MzQzIDAuNjU2MjUsMC4yNzM0MyBoIDMuODgyODIgcSAwLjk1NzAzLDAgMS44MDQ2OCwwLjMyODEzIDAuODQ3NjYsMC4zMTQ0NSAxLjQ3NjU3LDAuODg4NjcgMC42Mjg5LDAuNTc0MjIgMC45OTgwNCwxLjM4MDg2IDAuMzY5MTQsMC44MDY2NCAwLjM2OTE0LDEuNzYzNjcgMCwwLjk3MDcxIC0wLjM2OTE0LDEuODE4MzYgLTAuMzY5MTQsMC44MzM5OSAtMC45OTgwNCwxLjQ3NjU2IC0wLjYyODkxLDAuNjI4OTEgLTEuNDc2NTcsMC45OTgwNSBRIDI1MC4yOTI5NywxMjYgMjQ5LjMzNTk0LDEyNiBaIgogICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9IiIKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSJwYXRoMzEiLz4KICAgICAgICAgICAgICAgICAgICA8cGF0aAogICAgICAgICAgICAgICAgICAgICAgICAgICAgZD0ibSAyNjAuMzU1NDcsMTA3LjM3ODkxIHEgMCwwLjUxOTUzIC0wLjIwNTA4LDAuOTcwNyAtMC4xOTE0MSwwLjQ1MTE3IC0wLjUzMzIsMC43OTI5NyAtMC4zNDE4LDAuMzI4MTIgLTAuODA2NjQsMC41MzMyIC0wLjQ1MTE4LDAuMTkxNDEgLTAuOTcwNzEsMC4xOTE0MSAtMC41MTk1MywwIC0wLjk4NDM3LC0wLjE5MTQxIC0wLjQ1MTE3LC0wLjIwNTA4IC0wLjc5Mjk3LC0wLjUzMzIgLTAuMzI4MTMsLTAuMzQxOCAtMC41MzMyLC0wLjc5Mjk3IC0wLjE5MTQxLC0wLjQ1MTE3IC0wLjE5MTQxLC0wLjk3MDcgMCwtMC41MDU4NiAwLjE5MTQxLC0wLjk1NzAzIDAuMjA1MDcsLTAuNDY0ODUgMC41MzMyLC0wLjc5Mjk3IDAuMzQxOCwtMC4zNDE4IDAuNzkyOTcsLTAuNTMzMjEgMC40NjQ4NCwtMC4yMDUwNyAwLjk4NDM3LC0wLjIwNTA3IDAuNTE5NTMsMCAwLjk3MDcxLDAuMjA1MDcgMC40NjQ4NCwwLjE5MTQxIDAuODA2NjQsMC41MzMyMSAwLjM0MTc5LDAuMzI4MTIgMC41MzMyLDAuNzkyOTcgMC4yMDUwOCwwLjQ1MTE3IDAuMjA1MDgsMC45NTcwMyB6IE0gMjU5LjcxMjg5LDEyNiBoIC0zLjc1OTc3IHYgLTE0LjY0MjU4IGggMy43NTk3NyB6IgogICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9IiIKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSJwYXRoMzMiLz4KICAgICAgICAgICAgICAgICAgICA8cGF0aAogICAgICAgICAgICAgICAgICAgICAgICAgICAgZD0ibSAyNzAuNjA5MzcsMTI2IGggLTguNTMxMjUgdiAtMy43MTg3NSBoIDguNTMxMjUgcSAwLjM4MjgyLDAgMC42NTYyNSwtMC4yNzM0NCAwLjI3MzQ0LC0wLjI3MzQzIDAuMjczNDQsLTAuNjU2MjUgMCwtMC4zOTY0OCAtMC4yNzM0NCwtMC41MTk1MyAtMC4yNzM0MywtMC4xMjMwNSAtMC42NTYyNSwtMC4xMjMwNSBoIC0zLjg4MjgxIHEgLTAuOTcwNywwIC0xLjgxODM2LC0wLjM2OTE0IC0wLjg0NzY1LC0wLjM2OTE0IC0xLjQ3NjU2LC0wLjk5ODA0IC0wLjYyODkxLC0wLjY0MjU4IC0wLjk5ODA1LC0xLjQ5MDI0IC0wLjM1NTQ3LC0wLjg0NzY1IC0wLjM1NTQ3LC0xLjgxODM2IDAsLTAuOTcwNyAwLjM1NTQ3LC0xLjgxODM2IDAuMzY5MTQsLTAuODQ3NjUgMC45OTgwNSwtMS40NzY1NiAwLjYyODkxLC0wLjYyODkgMS40NzY1NiwtMC45ODQzNyAwLjg0NzY2LC0wLjM2OTE0IDEuODE4MzYsLTAuMzY5MTQgaCA3LjU2MDU1IHYgMy43MTg3NSBoIC03LjU2MDU1IHEgLTAuMzgyODEsMCAtMC42NTYyNSwwLjI3MzQzIC0wLjI3MzQ0LDAuMjczNDQgLTAuMjczNDQsMC42NTYyNSAwLDAuMzk2NDkgMC4yNzM0NCwwLjY4MzYgMC4yNzM0NCwwLjI3MzQzIDAuNjU2MjUsMC4yNzM0MyBoIDMuODgyODEgcSAwLjk1NzA0LDAgMS44MDQ2OSwwLjMyODEzIDAuODQ3NjYsMC4zMTQ0NSAxLjQ3NjU2LDAuODg4NjcgMC42Mjg5MSwwLjU3NDIyIDAuOTk4MDUsMS4zODA4NiAwLjM2OTE0LDAuODA2NjQgMC4zNjkxNCwxLjc2MzY3IDAsMC45NzA3MSAtMC4zNjkxNCwxLjgxODM2IC0wLjM2OTE0LDAuODMzOTkgLTAuOTk4MDUsMS40NzY1NiAtMC42Mjg5LDAuNjI4OTEgLTEuNDc2NTYsMC45OTgwNSBRIDI3MS41NjY0MSwxMjYgMjcwLjYwOTM3LDEyNiBaIgogICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9IiIKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSJwYXRoMzUiLz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=='
      }
      appNav={
        <Masthead.Dropdown
          id="app-user-dropdown"
          title={[
            <span className="dropdown-title" key="dropdown-title">
              <Icon type={'fa'} name={'user'} /> developer
            </span>,
          ]}
        >
          <li>
            <a href={'#test'}>Logout</a>
          </li>
        </Masthead.Dropdown>
      }
      verticalNav={[
        <PfVerticalNavItem
          exact={true}
          icon={'home'}
          label={'Homepage'}
          to={'#test'}
          key={1}
        />,
        <PfVerticalNavItem
          exact={true}
          icon={'dashboard'}
          label={'Sample'}
          to={'#test2'}
          key={2}
        />,
      ]}
      logoHref={'#test'}
    />
  </div>
));