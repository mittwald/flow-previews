import{j as r,r as F}from"./iframe-DepdzLEL.js";import{L as l}from"./Label-CprHQXm7.js";import{F as o}from"./FileField-DrUsPzOA.js";import{B as t}from"./Button-CNIywMH8.js";import{S as f}from"./Section-Bhu7zDVU.js";import{F as h}from"./FieldError-BU6iaS9f.js";import{F as x}from"./FieldDescription-DtFiJJAO.js";import{R as S,O as j}from"./IconWarning-DzJyip11.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-fKj6y8ty.js";import"./index-BsHBlgok.js";import"./index-QBVvmMGX.js";import"./useLocalizedStringFormatter-hW7UFah-.js";import"./context-BDIAQ50e.js";import"./Label-DGPqobXV.js";import"./utils-7tdA0jB4.js";import"./Hidden-Czdw4FHX.js";import"./useFormValidation-C9ltsd1k.js";import"./useFocus-ZpAuijkN.js";import"./useFocusRing-DGi1wLvD.js";import"./FieldError-BblJXfzn.js";import"./Text-CHX4WGB5.js";import"./filterDOMProps-BNnC3YgW.js";import"./Input-Dj03zPrR.js";import"./browser-DxvLCkxH.js";import"./useFieldComponent-PSzBC9V7.js";import"./Text-DQklyFH_.js";import"./EmulatedBoldText-MhUupop4.js";import"./LoadingSpinner-CFbq72U2.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-BQ4RO_kW.js";import"./Button-BTig9cwD.js";import"./ProgressBar-Db1s_185.js";import"./useLabel-B2Boz_gi.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BqHqHS4f.js";import"./useFocusable-Cun53ew4.js";import"./ContextMenuSection-DuMO6oHS.js";import"./ActionBatch-CxGdjV-j.js";import"./useOverlayController-Br9LJhfN.js";import"./useStatic-D2N_z3eO.js";import"./getActionGroupSlot-DngwkT4-.js";import"./dynamic-DyShJQHT.js";import"./Dialog-pPKxFXOM.js";import"./RSPContexts-C4BguXQB.js";import"./OverlayArrow-D9XOfekb.js";import"./useControlledState-BNsQxzmb.js";import"./Collection-CQf_iL2m.js";import"./CollectionBuilder-BRFKsZkG.js";import"./SelectionIndicator-D1BAj3_c.js";import"./Separator-Cs836uSa.js";import"./SelectionManager-Y4qgtYQ4.js";import"./useEvent-DIoFJeOI.js";import"./useCollator-MpcrCLx0.js";import"./FocusScope-C6Ou1N9_.js";import"./VisuallyHidden-msEuPEko.js";import"./AlertText-DwAinVf5.js";import"./AlertIcon-CRbLFRY9.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Er={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
