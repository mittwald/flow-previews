import{j as r,r as F}from"./iframe-B-dt22EB.js";import{L as l}from"./Label-DPQ9pprY.js";import{F as o}from"./FileField-D1nA1ZJF.js";import{B as t}from"./Button-Cfktl1nd.js";import{S as f}from"./Section-DON1SGHH.js";import{F as h}from"./FieldError-B26pZzZe.js";import{F as x}from"./FieldDescription-DkcWcefH.js";import{R as S,O as j}from"./IconWarning-BbozUbXF.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-etctvabC.js";import"./index-DAMyqNwe.js";import"./index-D5JlC3xK.js";import"./useLocalizedStringFormatter-CCZK-pLP.js";import"./context--H9enp2q.js";import"./Label-FcJtXcx4.js";import"./utils-DoxtMd58.js";import"./Hidden-bM58ni_l.js";import"./useFormValidation-Ds3P2hMN.js";import"./useFocus-9GLlZYuH.js";import"./useFocusRing-6FfHDt87.js";import"./FieldError-BkuObk6W.js";import"./Text-vBmBwiIT.js";import"./filterDOMProps-BNnC3YgW.js";import"./Input-1avyZMmc.js";import"./browser-CJi_ki0i.js";import"./useFieldComponent-D2j3Q6-m.js";import"./Text-BCqKdXYs.js";import"./EmulatedBoldText-fVR6kGZs.js";import"./LoadingSpinner-ISzATTs8.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-D6Q14pEz.js";import"./Button-CjYcjBnT.js";import"./ProgressBar-Cko_rEpF.js";import"./useLabel-BKpYilGg.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CgYKrzfD.js";import"./useFocusable-C0Z9ZNeY.js";import"./ContextMenuSection-3gHTEPd_.js";import"./ActionBatch-DMUImU48.js";import"./useOverlayController-CgZod_MY.js";import"./useStatic-CMEoTlaq.js";import"./getActionGroupSlot-DUUveJ77.js";import"./dynamic-Ci7OcZKZ.js";import"./Dialog-C7TrFuKD.js";import"./RSPContexts-pIsu_52Z.js";import"./OverlayArrow-Drn8uqTb.js";import"./useControlledState-jk51FjyI.js";import"./Collection-Dsfmn2f2.js";import"./CollectionBuilder-D1rtQOhv.js";import"./SelectionIndicator-Di9XKJuy.js";import"./Separator-CiuJS_mH.js";import"./SelectionManager-11E2v_vu.js";import"./useEvent-BnoPZq-r.js";import"./useCollator-Bf7H5Mv5.js";import"./FocusScope-CfFOF-ar.js";import"./VisuallyHidden-CZH0CwBW.js";import"./AlertText-DjlqIQ0W.js";import"./AlertIcon-B1kQf0Ru.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Er={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
