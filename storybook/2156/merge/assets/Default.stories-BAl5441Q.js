import{j as r,r as F}from"./iframe-g-XFBo2M.js";import{L as l}from"./Label-C0aRk6NU.js";import{s as t,x as f,F as h}from"./Modal-HN7mUc_p.js";import{B as o}from"./Button-CgOKxPbj.js";import{S as x}from"./Section-BXzmDK8J.js";import{j as S,G as j}from"./IconWarning-IhhFy3Bx.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BTFCKpJC.js";import"./index-Di8R43pA.js";import"./index-D0vwgSdS.js";import"./useLocalizedStringFormatter-Cyj6BGOX.js";import"./context-BmipQpJh.js";import"./ProgressBar-DLmwbc5V.js";import"./utils-BLpr0TUC.js";import"./Hidden-CbPhQWFj.js";import"./filterDOMProps-i7L6S0l1.js";import"./dynamic-y0BvrcCC.js";import"./context-MFH_cEi3.js";import"./Button-F2DpSCEE.js";import"./useFocusRing-0SVajdfI.js";import"./useFocusable-BhABskQh.js";import"./RSPContexts-FyZiT-dA.js";import"./Collection-wAduGIRO.js";import"./CollectionBuilder-DM14duJF.js";import"./SelectionIndicator-CoVhmIZH.js";import"./Separator-tfjl_R7-.js";import"./browser-aGtpEYpD.js";import"./useStatic-BQUJQZNk.js";import"./FileCardList-DoQkIDuX.js";import"./Avatar-X3dATXB7.js";import"./AlertIcon-DJoeY47w.js";import"./Image-MSIXUbcy.js";import"./Text-vL1LV049.js";import"./EmulatedBoldText-weZy4b5C.js";import"./Link-CRZIDf5q.js";import"./ControlledNotification-COssbRo0.js";import"./LoadingSpinner-hwBIUj3t.js";import"./Flex-Bsm0K3ZO.js";import"./Accordion-DgcwWYzu.js";import"./ActionGroup-1WZPcRd7.js";import"./Alert-BdQYV_b8.js";import"./AlertBadge-K2HkqN1E.js";import"./Align-CusiQaMs.js";import"./AvatarStack-DseM1MNa.js";import"./BigNumber-CTRFWhZ2.js";import"./Breadcrumb-DygeFtpj.js";import"./Heading-D8TOp1jB.js";import"./Legend-OCWjJfVR.js";import"./Color-BlRFVK3w.js";import"./TableFooterRow-lK-uAiGD.js";import"./SkeletonText-CtpLmtNt.js";import"./Content-BwCOhlmF.js";import"./CounterBadge-C0r21egP.js";import"./DonutChart-BDWUAJsd.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-XlPrj5S3.js";import"./Header-C5E3rf3q.js";import"./Initials-B759V3Ss.js";import"./InlineCode-bJV2810L.js";import"./LayoutCard-DBrjjt1J.js";import"./Separator-KtU-Fy3c.js";import"./MessageSeparator-Dw1kKEgh.js";import"./NavigationGroup-Dgf5bfuu.js";import"./Notification-yM0bJJk7.js";import"./NotificationProvider-4So095Rx.js";import"./ProgressBar-Bj_6Z6Bp.js";import"./Rating-ci1cuaCo.js";import"./Skeleton-MXCSZONm.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Gr={title:"Form Controls/FileField",component:t,render:e=>r.jsxs(t,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(t,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(f,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(t,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(t,{...e,children:r.jsx(o,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(x,{children:[r.jsxs(t,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const Mr=["Default","ReadOnly","WithDescription","WithError","IconButton","WithHandler"];export{i as Default,p as IconButton,n as ReadOnly,s as WithDescription,a as WithError,c as WithHandler,Mr as __namedExportsOrder,Gr as default};
