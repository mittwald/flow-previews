import{j as r,r as F}from"./iframe-BRGIT6aC.js";import{L as l}from"./Label-DYHgdjdj.js";import{F as o}from"./FileField-0oNTcqbh.js";import{B as t}from"./Button-CQ_f9ZVl.js";import{S as f}from"./Section-DEfQkscU.js";import{F as h}from"./FieldError-BPfKA2u4.js";import{F as x}from"./FieldDescription-BhKmM-2J.js";import{R as S,O as j}from"./IconWarning-7xibGY50.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-gC5J80sd.js";import"./index-DCYGO5ln.js";import"./index-CrtVPr5B.js";import"./useLocalizedStringFormatter-CVE6cVib.js";import"./context-C5al0DRJ.js";import"./Label-Ba69oYDq.js";import"./utils-D-ssFu49.js";import"./Hidden-QhxhoagL.js";import"./useFormValidation-D-IfNlYy.js";import"./useFocus-Dz-IuM4k.js";import"./useFocusRing-B_bORcJM.js";import"./FieldError-f7o5-LTX.js";import"./Text-CBpyQBbE.js";import"./filterDOMProps-BNnC3YgW.js";import"./Input-CEj_QPsV.js";import"./browser-BYxlW31W.js";import"./useFieldComponent-CMRD4Pyo.js";import"./Text-RxDad6dn.js";import"./EmulatedBoldText-D5rj6KVU.js";import"./LoadingSpinner-BjEAsOxv.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-B0Hk_38y.js";import"./Button-BCc16_FM.js";import"./ProgressBar-BPYUxayd.js";import"./useLabel-CWpJX9lW.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CGLZGzkl.js";import"./useFocusable-Bmr3Drft.js";import"./ContextMenuSection-a8sl_NQx.js";import"./Action-BloO9QUi.js";import"./context-Dnnfbmmg.js";import"./useStatic-3STTURCL.js";import"./dynamic-DJEA9S0A.js";import"./getActionGroupSlot-C3tMCkBR.js";import"./Dialog-Bn341bnD.js";import"./RSPContexts-C-qF17sW.js";import"./OverlayArrow-DKDxu5eo.js";import"./useControlledState-C2xaeP2Y.js";import"./Collection-BF4bn4qW.js";import"./CollectionBuilder-DWlQHDS1.js";import"./SelectionIndicator-BbWx7qoh.js";import"./Separator-mcbTnTQA.js";import"./SelectionManager-Ccyvg52a.js";import"./useEvent-C0jUKnCT.js";import"./useCollator-B5DUtkng.js";import"./FocusScope-D2KgIyLw.js";import"./VisuallyHidden-Cs58q5Qj.js";import"./AlertText-Ba5ab3-o.js";import"./AlertIcon-DeOHvzVA.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Er={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
