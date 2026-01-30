import{j as r,r as F}from"./iframe-1hZ9wzBW.js";import{L as l}from"./Label-D0cGucr-.js";import{F as o}from"./FileField-CopEcV_i.js";import{B as t}from"./Button-7Po4DI29.js";import{S as f}from"./Section-Bc3YMvvr.js";import{F as h}from"./FieldError-BLPNRQRQ.js";import{F as x}from"./FieldDescription-BgHJgSRB.js";import{P as S,M as j}from"./IconWarning-Bq_05zLs.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BAYinPoy.js";import"./index-BxkIN5dC.js";import"./index-dx0Fbu95.js";import"./useLocalizedStringFormatter-DjDcrgZQ.js";import"./context-Dx8Lg4Ma.js";import"./Label-DD-nfl5_.js";import"./utils-CnJx27u5.js";import"./Hidden-YhZif3uI.js";import"./useFormValidation-yU8XYtwO.js";import"./useFocus-iMNco4FL.js";import"./useFocusRing-DJmPDLK7.js";import"./FieldError-y4Ibnc6j.js";import"./Text-B1mgaTQV.js";import"./filterDOMProps-BNnC3YgW.js";import"./Input-BD7vx0Sp.js";import"./browser-jjcexMIs.js";import"./useFieldComponent-B-hW6CDY.js";import"./Text-BF_GklVB.js";import"./EmulatedBoldText-D3kC_v2V.js";import"./LoadingSpinner-CBIfE8tz.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-CnwnRZPi.js";import"./Button-XLqKqFxh.js";import"./ProgressBar-fkOF9esE.js";import"./useLabel-CrikywT0.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DNGT1V3C.js";import"./useFocusable-CvXOfqVX.js";import"./ContextMenuSection-CZDIsfmP.js";import"./Action-5-LJxdMW.js";import"./context-Ci4eovAp.js";import"./useStatic-BSOtV-Rw.js";import"./getActionGroupSlot-BJec6nln.js";import"./dynamic-BsriuUgB.js";import"./Dialog-DTOlRROi.js";import"./RSPContexts-Da-kz4p_.js";import"./OverlayArrow-CJR0hx1K.js";import"./useControlledState-DAXJPifs.js";import"./Collection-C5nhmh42.js";import"./CollectionBuilder-CdqbO1wf.js";import"./SelectionIndicator-22830iwM.js";import"./Separator-gCfZ79Ls.js";import"./SelectionManager-C1YqHNWY.js";import"./useEvent-CxVl1HjR.js";import"./useCollator-7JXdm9sI.js";import"./FocusScope-Dxs6Wric.js";import"./VisuallyHidden-UazS1TBU.js";import"./AlertText-D19RpsJk.js";import"./AlertIcon-fApV2-nR.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Er={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
