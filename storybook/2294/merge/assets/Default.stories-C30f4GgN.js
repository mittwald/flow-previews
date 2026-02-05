import{j as r,r as F}from"./iframe-BAsHckrK.js";import{L as l}from"./Label-DVOhOuhT.js";import{F as o}from"./FileField-Av8OEowN.js";import{B as t}from"./Button-CAoYj-yB.js";import{S as f}from"./Section-NIPDFOQA.js";import{F as h}from"./FieldError-ZX2j7DJQ.js";import{F as x}from"./FieldDescription-CD7ak6-M.js";import{N as S,K as j}from"./IconWarning-DHq1gdF3.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B65nQAul.js";import"./index-CyIJxzCh.js";import"./index-Cf_R1xcK.js";import"./useLocalizedStringFormatter-CGl9WC2_.js";import"./context-BKg0mO6Y.js";import"./Label-Cla8ySRz.js";import"./utils-AcXTY-LA.js";import"./Hidden-CitD2GXi.js";import"./useFormValidation-l5tjlCjY.js";import"./useFocus-DSg5hzPG.js";import"./useFocusRing-PAL8hD_p.js";import"./FieldError-Ch8lYR65.js";import"./Text-CORhkzC6.js";import"./filterDOMProps-BNnC3YgW.js";import"./Input-DVOtN3yU.js";import"./browser-tZCM2k1B.js";import"./useFieldComponent-uzP_CJXZ.js";import"./Text-B__BY7tJ.js";import"./EmulatedBoldText-BuJbkCoS.js";import"./LoadingSpinner-fmonyGhO.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-5f3Q71VQ.js";import"./Button-v8rEwTVX.js";import"./ProgressBar-BYgBobO-.js";import"./useLabel-Zs1yjNWV.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BtuPSsUz.js";import"./useFocusable-DEw7yEFU.js";import"./ContextMenuSection-BquW4vGk.js";import"./Action-WxgR-8km.js";import"./context-BHkWm8Gn.js";import"./useStatic-CHwNqk00.js";import"./getActionGroupSlot-B1R4nGn3.js";import"./dynamic-CGZuOMtH.js";import"./Dialog-BI9ufNdz.js";import"./RSPContexts-CrAnBcro.js";import"./OverlayArrow-BEZkQ9dz.js";import"./useControlledState-DIA42IR3.js";import"./Collection-B6YyQZIk.js";import"./CollectionBuilder-Ciu-gQv8.js";import"./SelectionIndicator-ClkIlDZY.js";import"./Separator-ClsU7Cqa.js";import"./SelectionManager-DTu8mNRc.js";import"./useEvent-BI0qkTtn.js";import"./useCollator-1De53UJM.js";import"./FocusScope-BSJXv8u1.js";import"./VisuallyHidden-BIPiOxSh.js";import"./AlertText-CZdsx7H2.js";import"./AlertIcon-C2q1LJ0F.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Er={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
