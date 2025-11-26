import{j as r,r as F}from"./iframe-DTBy15H7.js";import{L as l}from"./Label-DjwrD9Fk.js";import{q as t,v as f,g as h}from"./TimeField-C25JplCF.js";import{B as o}from"./Button-QHOz67K3.js";import{S as x}from"./Section-CTt0hPdU.js";import{g as S,C as j}from"./IconWarning-Djz7NATM.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Fi7tnu-J.js";import"./mergeRefs-CWVC3DZq.js";import"./index-C9i3V5R3.js";import"./useLocalizedStringFormatter-C6mCvBeu.js";import"./context-DDV21Rg9.js";import"./ProgressBar-BPzzwKl5.js";import"./utils-Dl3W8pzT.js";import"./Hidden-CGEKkcWL.js";import"./filterDOMProps-i7L6S0l1.js";import"./Accordion-DnPtHmZG.js";import"./dynamic-CCPexUYC.js";import"./ActionGroup-BXdOYEdg.js";import"./Alert-QdSgDx1T.js";import"./AlertIcon-B0N13FEc.js";import"./AlertBadge-8jy2QUL6.js";import"./Text-Bj8vPlc0.js";import"./browser-MW83o6M0.js";import"./EmulatedBoldText-Dvqrfp28.js";import"./Align-DQZB8NzV.js";import"./Popover-7hNwjNSl.js";import"./context-DioYia5p.js";import"./Button-BYfJcV7w.js";import"./useFocusRing-DZNjyW13.js";import"./useFocusable-C5o0miI6.js";import"./RSPContexts-DH-gZpq1.js";import"./Collection-D1XcVqi_.js";import"./CollectionBuilder-C71l8wdj.js";import"./SelectionIndicator-CxONpiWv.js";import"./Separator-CSQG4MPx.js";import"./useStatic-eHzIFJyj.js";import"./OverlayTrigger-ZFUPrMkD.js";import"./TableFooterRow-CtpRNrqi.js";import"./SkeletonText-DpsupKVa.js";import"./Avatar-BILpTm5T.js";import"./AvatarStack-CUiO0Zcy.js";import"./Badge-CT04WDK1.js";import"./BigNumber-BCtBSLB-.js";import"./Breadcrumb-B6l_HQxY.js";import"./Link-CxbSfmHB.js";import"./Heading-Ca-tELgf.js";import"./Legend-Bpj9sjZW.js";import"./FileCardList-39D8aOFP.js";import"./Image-MOe90XqG.js";import"./Color-ClQVjgLv.js";import"./Content-Dlpa9xN1.js";import"./ContextualHelpTrigger-BRKcFrI9.js";import"./CounterBadge-12ncM8Mc.js";import"./DonutChart-CLp4EYV9.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-7vWoxhWM.js";import"./Header-DBPOtdGg.js";import"./Initials-aSFKpGEw.js";import"./InlineCode-_CBCXquU.js";import"./PopoverTrigger-BD_9xpzq.js";import"./LoadingSpinner-CRyT1UDC.js";import"./Separator-B_RuElQr.js";import"./Message-C0AuzCP0.js";import"./MessageSeparator-Bf9oDxzN.js";import"./NavigationGroup-BiQENMNY.js";import"./Notification-wHOEjy82.js";import"./NotificationProvider-B2b2Yliw.js";import"./ProgressBar-DqwDkFTJ.js";import"./Rating-Bb3yeVUh.js";import"./Skeleton-C9fzI41z.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),wr={title:"Form Controls/FileField",component:t,render:e=>r.jsxs(t,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(t,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(f,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(t,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(t,{...e,children:r.jsx(o,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(x,{children:[r.jsxs(t,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
