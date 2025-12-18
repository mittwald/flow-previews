import{j as r,r as F}from"./iframe-CgWIZppF.js";import{L as l}from"./Label-8Ls1PMPy.js";import{F as o}from"./FileField-2JboNzTY.js";import{B as t}from"./Button-B2z86NVg.js";import{S as f}from"./Section-DjNOq_vK.js";import{F as h}from"./FieldError-Dr7a0W2N.js";import{F as x}from"./FieldDescription-k5usNxcY.js";import{M as S,C as j}from"./IconWarning-CJrmQcXC.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-n6uWZ_Yk.js";import"./index-DK9ZOg9l.js";import"./index-D8vpbAff.js";import"./useLocalizedStringFormatter-6cAQP3rP.js";import"./context-DG5uy-SY.js";import"./Label-Bv5UhUCK.js";import"./utils-CqFMFg3g.js";import"./Hidden-td7Ld2aU.js";import"./useFormValidation-DKxVhdCK.js";import"./useFocus-ClWOKyYK.js";import"./FieldError-xtpbDfud.js";import"./Text-C3p6npBl.js";import"./filterDOMProps-i7L6S0l1.js";import"./Input-jwk6Ly15.js";import"./useFocusRing-pEE2Rwro.js";import"./browser-C8d3FCf4.js";import"./useFieldComponent-BZyKlvwh.js";import"./Text-B7pZrZSG.js";import"./EmulatedBoldText-iMswxomY.js";import"./LoadingSpinner-nmzfTpX1.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-DVGHPh_8.js";import"./Button-C_sZyB84.js";import"./ProgressBar-CMi9IWJp.js";import"./useLabel-DMBsm_3O.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CoCxa2CI.js";import"./useFocusable-Dp8viQw7.js";import"./ContextMenuSection-BUslXVLP.js";import"./Action-ChgPhfJd.js";import"./context-B2MrOWQ_.js";import"./useStatic-CFKrTcwu.js";import"./getActionGroupSlot-Bt3m4oNd.js";import"./dynamic-BqY2cEs-.js";import"./Dialog-R-LZrA7I.js";import"./RSPContexts-CAKQ_-J3.js";import"./OverlayArrow-CNLX7-2g.js";import"./useControlledState-ii3oWk08.js";import"./Collection-DXGs2lV9.js";import"./CollectionBuilder-CoS6mLvq.js";import"./SelectionIndicator-xmkzz9vO.js";import"./Separator-pxi-Jkjv.js";import"./SelectionManager-BFnz3p05.js";import"./useEvent-C_2qUUzn.js";import"./useCollator-BRse2HwO.js";import"./FocusScope-CYlUipby.js";import"./VisuallyHidden-BDyUoc3v.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Ir={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const Lr=["Default","ReadOnly","WithDescription","WithError","IconButton","WithHandler"];export{i as Default,p as IconButton,n as ReadOnly,s as WithDescription,a as WithError,c as WithHandler,Lr as __namedExportsOrder,Ir as default};
