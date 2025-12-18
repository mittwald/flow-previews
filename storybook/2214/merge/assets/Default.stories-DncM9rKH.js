import{j as r,r as F}from"./iframe-ALQ5zsOr.js";import{L as l}from"./Label-DovPcrx0.js";import{q as t,v as f,g as h}from"./TimeField-BGaFn9l6.js";import{B as o}from"./Button-BX6tjTLL.js";import{S as x}from"./Section-Bs1N8UQx.js";import{g as S,C as j}from"./IconWarning-e5IJmYa2.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CajZDkla.js";import"./mergeRefs-DuV0Rexf.js";import"./index-D7ydgW4V.js";import"./useLocalizedStringFormatter-D3jE5yaH.js";import"./context-kp7gAgjv.js";import"./ProgressBar-Be_QMw9N.js";import"./utils-Co6jRk79.js";import"./Hidden-BWCTvshd.js";import"./filterDOMProps-i7L6S0l1.js";import"./Accordion-BUE91It4.js";import"./dynamic-0GSV0qwf.js";import"./ActionGroup-CwDRFfGd.js";import"./Alert-DYosH7oc.js";import"./AlertIcon-CfY0Fdcx.js";import"./AlertBadge-XCHqrboo.js";import"./Text-CARFdFUA.js";import"./browser-BKuntv9s.js";import"./EmulatedBoldText-BY9TtX8n.js";import"./Align-BPEmxHoH.js";import"./Popover-uPtwk0G7.js";import"./context-DQRC5U0a.js";import"./Button-CMqrvij-.js";import"./useFocusRing-CKtfjksp.js";import"./useFocusable-Cd2GyxLR.js";import"./RSPContexts-CUYinsO9.js";import"./Collection-DLxcLWTn.js";import"./CollectionBuilder-C5lgjdY8.js";import"./SelectionIndicator-DGcgd3ZA.js";import"./Separator-C_CbFzxr.js";import"./useStatic-5go3Gdxn.js";import"./OverlayTrigger-BGEoP9rw.js";import"./TableFooterRow-D1lPZp5u.js";import"./SkeletonText-w2TDxcrn.js";import"./Avatar-QqNm7BCQ.js";import"./AvatarStack-M9qsVSFW.js";import"./Badge-pH50ychv.js";import"./BigNumber-BLN-CZJ3.js";import"./Breadcrumb-BbJLeIhI.js";import"./Link-C8aOLutX.js";import"./Heading-D0DtiPxo.js";import"./Legend-CwaE3KaX.js";import"./FileCardList-Dr6bdZn3.js";import"./Image-CBcw_AfH.js";import"./Color-97yNqHhE.js";import"./Content-D5LTnoQh.js";import"./ContextualHelpTrigger-QzT4JqfM.js";import"./CounterBadge-8qsknsn0.js";import"./DonutChart-BZDaYje8.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-C3I35rk-.js";import"./Header-BmFuB9FK.js";import"./Initials-GjCQVizr.js";import"./InlineCode-AnZuJLOL.js";import"./PopoverTrigger-Cfi7p5HS.js";import"./LoadingSpinner-vZR7mZ_m.js";import"./Separator-DUxRAwFB.js";import"./Message-evw6xdzh.js";import"./MessageSeparator-Cu_84WKB.js";import"./NavigationGroup-j5bwk659.js";import"./Notification-BFFQhJkq.js";import"./NotificationProvider-nOh3LXem.js";import"./ProgressBar-C-_9cUNc.js";import"./Rating-DC-OgzhD.js";import"./Skeleton-B9JjKPfi.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),wr={title:"Form Controls/FileField",component:t,render:e=>r.jsxs(t,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(t,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(f,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(t,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(t,{...e,children:r.jsx(o,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(x,{children:[r.jsxs(t,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldDescription>Supported formats: .pem, .pfx</FieldDescription>
    </FileField>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => <FileField {...props} isInvalid>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldError>File too large</FieldError>
    </FileField>
}`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Button variant="soft" aria-label="Select certificate">
        <Icon>
          <IconPaperclip />
        </Icon>
      </Button>
    </FileField>
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [files, setFiles] = useState<FileList | null>(null);
    const file = files?.[0];
    return <Section>
        <FileField {...props} onChange={setFiles}>
          <Label>Certificate</Label>
          <Button variant="outline" color="secondary">
            Select
          </Button>
        </FileField>
        {file?.name}
      </Section>;
  }
}`,...c.parameters?.docs?.source}}};const zr=["Default","ReadOnly","WithDescription","WithError","IconButton","WithHandler"];export{i as Default,p as IconButton,n as ReadOnly,s as WithDescription,a as WithError,c as WithHandler,zr as __namedExportsOrder,wr as default};
