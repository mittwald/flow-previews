import{r as x,j as e}from"./iframe-BBHdjMJ6.js";import{F as t}from"./FileDropZone-Z10wxPvZ.js";import{S as d}from"./Section-BGan-5YC.js";import{F as u}from"./FileCardList-CEzuJlyk.js";import{F}from"./FileCard-C5f17-lu.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-CsgBdy31.js";import{B as f}from"./Button-P5io5pgW.js";import{A as b}from"./ActionGroup-CRSw6t78.js";import{_ as j,$ as B}from"./IconWarning-CyXtdbqA.js";import{H as g}from"./Heading-vAH38JYJ.js";import{F as h}from"./FileField-Dghd6iuG.js";import{T as O}from"./Text--O-2RTYx.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-fjJYTiab.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Dr_ijNQm.js";import"./index-DnL9UocU.js";import"./index-FWsSj9e8.js";import"./useFieldComponent-DcHfvLKR.js";import"./utils-gePwv3Li.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CkngT02A.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CDbjeNSC.js";import"./useFocus-CRClO8Jv.js";import"./useCollator-CP6m8uNZ.js";import"./context-XjgBcoVm.js";import"./useLocalizedStringFormatter-BwLVFU66.js";import"./useFocusRing-ClLYF0Wy.js";import"./Button-DU6B0w55.js";import"./ProgressBar-C-Wzcy4_.js";import"./Label-Cq91lcPj.js";import"./Hidden-DJEpRFXv.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BicAkDgM.js";import"./useFocusable-CfkxnlZA.js";import"./VisuallyHidden-D-7oSl-x.js";import"./ContextMenuSection-jSS7omV8.js";import"./Action-qWLGDSFj.js";import"./context-DiIk_s_n.js";import"./useStatic-C9-mjYGz.js";import"./browser-BpCzgQab.js";import"./getActionGroupSlot-DTels04I.js";import"./dynamic-Cm-8a2Jt.js";import"./Dialog-BeRC8Qw9.js";import"./RSPContexts-C5-K-EZi.js";import"./OverlayArrow-D6Rp8cyC.js";import"./useControlledState-CTrYQ-In.js";import"./Collection-C6Dl6i0H.js";import"./CollectionBuilder-DfMW8xNP.js";import"./SelectionIndicator-DJhqJXB-.js";import"./Separator-Dx2ExPSk.js";import"./SelectionManager-CKq6y8XV.js";import"./useEvent-0gy1gNIh.js";import"./FocusScope-0pM5bnV4.js";import"./ColumnLayout-VfEmg6ek.js";import"./Avatar-Cu5dlAXZ.js";import"./AlertIcon-BGgK2Oqf.js";import"./Image-3Hk1p5R-.js";import"./Link-K9AShZA3.js";import"./OptionsButton-D_lU0f2H.js";import"./ButtonView-CbJs68it.js";import"./ContextMenuTriggerView-BSZIH_yN.js";import"./ContextMenuTrigger-B8815q0u.js";import"./OverlayTrigger-xwaQ_4qt.js";import"./OverlayContextProvider-Co9CnEOm.js";import"./FieldError-DdPPmb_Z.js";import"./FieldError-D_l7_28D.js";import"./AlertText-Du4ye3-W.js";import"./useRef-CBW8wZsc.js";import"./LoadingSpinner-Crr5qNPb.js";import"./remote-BykRkK4-.js";import"./Heading-UXRD4YW7.js";import"./useFormValidation-jj6Fwru_.js";import"./Input-a6j3yjSB.js";import"./EmulatedBoldText-DKBJ0QzH.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    accept: "image/png"
  },
  render: props => {
    const [files, setFiles] = useState<FileList | null>(null);
    return <Section>
        <FileDropZone {...props} onChange={setFiles}>
          <IconImage />
          <Heading>Drop image</Heading>
          <Text>Only image/png images are allowed.</Text>
          <FileField name="file" onChange={setFiles}>
            <Button>Select image</Button>
          </FileField>
        </FileDropZone>
        <FileCardList>
          {[...(files ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
        </FileCardList>
      </Section>;
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    multiple: true
  },
  render: props => {
    const [files, setFiles] = useState<FileList | null>(null);
    return <Section>
        <FileDropZone {...props} onChange={setFiles}>
          <IconUpload />
          <Heading>Drop files</Heading>
          <FileField name="file" onChange={setFiles}>
            <Button>Select files</Button>
          </FileField>
        </FileDropZone>
        <FileCardList>
          {[...(files ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
        </FileCardList>
      </Section>;
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm<{
      file: FileList | null;
    }>();
    const Field = typedField(form);
    return <Form form={form} onSubmit={submitAction}>
        <Section>
          <Field name="file" rules={{
          required: "Please choose a file"
        }}>
            <FileDropZone {...props} onChange={f => form.setValue("file", f)}>
              <IconUpload />
              <Heading>Drop file</Heading>
              <FileField>
                <Button variant="outline" color="dark">
                  Select file
                </Button>
              </FileField>
            </FileDropZone>
          </Field>
          <FileCardList>
            {[...(form.watch("file") ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
          </FileCardList>
        </Section>
        <ActionGroup>
          <SubmitButton>Upload</SubmitButton>
        </ActionGroup>
      </Form>;
  }
}`,...c.parameters?.docs?.source}}};const Xe=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,Xe as __namedExportsOrder,Qe as default};
