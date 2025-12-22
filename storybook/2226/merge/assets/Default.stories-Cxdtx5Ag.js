import{j as r,r as F}from"./iframe-ChVCZzSM.js";import{L as l}from"./Label-CXZGfNo-.js";import{F as o}from"./FileField-s5XSqmxr.js";import{B as t}from"./Button-DDsnJhyb.js";import{S as f}from"./Section-CCSEsssw.js";import{F as h}from"./FieldError-DeqqVmMl.js";import{F as x}from"./FieldDescription-DePBiqKu.js";import{M as S,C as j}from"./IconWarning-DiIA_Kv4.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CzVJsrSl.js";import"./index-AQkY3hEg.js";import"./index-B17aiXwm.js";import"./useLocalizedStringFormatter-CLU1Wmp0.js";import"./context-DJbicbqJ.js";import"./Label-B7WWEN6i.js";import"./utils-D2Dbeo4Y.js";import"./Hidden-CmNYW2sS.js";import"./useFormValidation-BwLvk9We.js";import"./useFocus-D0NBuExq.js";import"./FieldError-CO11AzDW.js";import"./Text-JkP9a4Kb.js";import"./filterDOMProps-i7L6S0l1.js";import"./Input-D2FpdmSE.js";import"./useFocusRing-BKxozeV4.js";import"./browser-Drl1pS0o.js";import"./useFieldComponent--rNpfgQ4.js";import"./Text-CDV1KOVg.js";import"./EmulatedBoldText-DJ1rAIrZ.js";import"./LoadingSpinner-CIFEKnPX.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-B9ld2KSn.js";import"./Button-DQvyXKNx.js";import"./ProgressBar-Cxzv2Khu.js";import"./useLabel-DQfYHHHP.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DJQIPi1Q.js";import"./useFocusable-DqNAAmsp.js";import"./ContextMenuSection-CMrkKIyN.js";import"./Action-BtwaxeJT.js";import"./context-5fKqnWzS.js";import"./useStatic-DfTrwEFp.js";import"./getActionGroupSlot-Bdjbco6c.js";import"./dynamic-M4vO8Oa6.js";import"./Dialog-BaNJO3_y.js";import"./RSPContexts-DU6h72_u.js";import"./OverlayArrow-CfPd7gS0.js";import"./useControlledState-BqHrqPJL.js";import"./Collection-BAX2Qk0i.js";import"./CollectionBuilder-BBxJk1-3.js";import"./SelectionIndicator-CB8Y-x_O.js";import"./Separator-CHS7wGgu.js";import"./SelectionManager-CbtLPV9G.js";import"./useEvent-DKVYVBpY.js";import"./useCollator-iud0owJE.js";import"./FocusScope-BLCDYAIb.js";import"./VisuallyHidden-DGYqp_5z.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Ir={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
