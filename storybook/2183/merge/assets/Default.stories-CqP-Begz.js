import{j as r,r as F}from"./iframe-B4mFuudk.js";import{L as l}from"./Label-J-Qj-TlD.js";import{q as t,v as f,g as h}from"./TimeField-DjPbBOUL.js";import{B as o}from"./Button-D2oQPT9j.js";import{S as x}from"./Section-B901pmSP.js";import{g as S,B as j}from"./IconWarning-BO1YoHSl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-C4qYIeXY.js";import"./mergeRefs-CRoU7Hf_.js";import"./index-BF6bNSpW.js";import"./useLocalizedStringFormatter-CJ3DiWc4.js";import"./context-woxbYNKN.js";import"./ProgressBar-B9w8hpj9.js";import"./utils-DO9siV10.js";import"./Hidden-DEoNA7g6.js";import"./filterDOMProps-i7L6S0l1.js";import"./Accordion-CQ4jhonX.js";import"./dynamic-d3DzbtXD.js";import"./ActionGroup-Dj0mL2jT.js";import"./Alert-BB7E6FS3.js";import"./AlertIcon-C2Iuu0oW.js";import"./AlertBadge-wyAf4fmW.js";import"./Text-DWXiWYJa.js";import"./browser-CSkgXx8X.js";import"./EmulatedBoldText-ekl0jVcs.js";import"./Align-tZTYN3_b.js";import"./Popover-EGtBkPGT.js";import"./context-BaYvtgUx.js";import"./Button-D_IfTLYp.js";import"./useFocusRing-Dzyc8_rZ.js";import"./useFocusable-CR7CXVdU.js";import"./RSPContexts-D4gsSVcd.js";import"./Collection-CRJOH9N4.js";import"./CollectionBuilder-BrBYWzEj.js";import"./SelectionIndicator-Cqxoh0Vk.js";import"./Separator-B1GSGo-v.js";import"./useStatic-BNYxoolq.js";import"./OverlayTrigger-CxsOgof7.js";import"./TableFooterRow-CF-vtEUL.js";import"./SkeletonText-DYF2L0Gp.js";import"./Avatar-DprwA7VB.js";import"./AvatarStack-DFjdUU0I.js";import"./Badge-DdfeDcq0.js";import"./BigNumber-COKiSbmh.js";import"./Breadcrumb-UixRFNtG.js";import"./Link-dZEW6xbR.js";import"./Heading-x5KcgVW6.js";import"./Legend-D4fqLvje.js";import"./FileCardList-C5pL1TS8.js";import"./Image-C9RETtXb.js";import"./Color-Cnkc4JS2.js";import"./Content-DOFb4Tg_.js";import"./ContextualHelpTrigger-BgOAUkgy.js";import"./CounterBadge-BmaHzZVn.js";import"./remote-CQQC7IgA.js";import"./DonutChart-fIzr5YTw.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BPYu5cLC.js";import"./Header-CWN3vvSw.js";import"./Initials-CasgJWHt.js";import"./InlineCode-CBZ_IXgo.js";import"./PopoverTrigger-DfcR0Zu9.js";import"./LoadingSpinner-CkjsGIz-.js";import"./Separator-BY2NZtun.js";import"./Message-B0duh_V_.js";import"./MessageSeparator-D92QLxsc.js";import"./NavigationGroup-uDY_S4HN.js";import"./Notification-DAh0wl5H.js";import"./NotificationProvider-CUaHGM3W.js";import"./ProgressBar-DQXT7cgB.js";import"./Rating-IIMHkWv7.js";import"./Skeleton-CXrytUBj.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),zr={title:"Form Controls/FileField",component:t,render:e=>r.jsxs(t,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(t,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(f,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(t,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(t,{...e,children:r.jsx(o,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(x,{children:[r.jsxs(t,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const Ar=["Default","ReadOnly","WithDescription","WithError","IconButton","WithHandler"];export{i as Default,p as IconButton,n as ReadOnly,s as WithDescription,a as WithError,c as WithHandler,Ar as __namedExportsOrder,zr as default};
