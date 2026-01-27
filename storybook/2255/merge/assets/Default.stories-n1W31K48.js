import{j as r,r as F}from"./iframe-DRxscI9O.js";import{L as l}from"./Label-QYcCSLyK.js";import{F as o}from"./FileField-BXPKqdm2.js";import{B as t}from"./Button-Cn0kN-cE.js";import{S as f}from"./Section-D_wy0yj2.js";import{F as h}from"./FieldError-DD28rleL.js";import{F as x}from"./FieldDescription-WQfxWtB-.js";import{O as S,L as j}from"./IconWarning-B0GCVytt.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-cRsKi5gV.js";import"./index-tYubnSWL.js";import"./index-1XGI-8ge.js";import"./useLocalizedStringFormatter-BVeqf5XE.js";import"./context-B7-PA0L6.js";import"./Label-CmD6OfqR.js";import"./utils-CR6NBPUA.js";import"./Hidden-B1W2VzXU.js";import"./useFormValidation-BZc6xO6n.js";import"./useFocus-CSD6pEXF.js";import"./FieldError-qzmmAdqz.js";import"./Text-C61ezR9Z.js";import"./filterDOMProps-i7L6S0l1.js";import"./Input-CIOy3WO5.js";import"./useFocusRing-Dd30mTT2.js";import"./browser-D6b-4R0j.js";import"./useFieldComponent-B2FoAAf9.js";import"./Text-8YV9_ufN.js";import"./EmulatedBoldText-BJ7pd3K2.js";import"./LoadingSpinner--1cga6s1.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-5HtQVd9k.js";import"./Button-Cf4nBLFb.js";import"./ProgressBar-KolsJC9x.js";import"./useLabel-D6Iwc6BC.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-87CEVAU1.js";import"./useFocusable-_DeXT1Pt.js";import"./ContextMenuSection-4Pmx83k8.js";import"./Action-BUOqPppc.js";import"./context-CkpccYw3.js";import"./useStatic-DhnGFhXh.js";import"./getActionGroupSlot-BLOtZzsx.js";import"./dynamic-CC7KPApC.js";import"./Dialog-Ds8Y2vRW.js";import"./RSPContexts-O0Lvzjxz.js";import"./OverlayArrow-CnZ26m-G.js";import"./useControlledState-CvH2MSRC.js";import"./Collection-Tvviv49U.js";import"./CollectionBuilder-BZH3zSXW.js";import"./SelectionIndicator-BPr02Xgn.js";import"./Separator-BIe6_98T.js";import"./SelectionManager-CY_OS_Gu.js";import"./useEvent-Dkz3YFeV.js";import"./useCollator-2RpDHACH.js";import"./FocusScope-CRHoWMnL.js";import"./VisuallyHidden-hMszIaj5.js";import"./AlertText-BjP2ge3Y.js";import"./AlertIcon-CLPvczjb.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Er={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const Dr=["Default","ReadOnly","WithDescription","WithError","IconButton","WithHandler"];export{i as Default,p as IconButton,n as ReadOnly,s as WithDescription,a as WithError,c as WithHandler,Dr as __namedExportsOrder,Er as default};
