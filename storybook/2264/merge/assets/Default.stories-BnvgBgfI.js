import{r as x,j as e}from"./iframe-HHIIuBER.js";import{F as t}from"./FileDropZone-C5JahTWh.js";import{S as d}from"./Section-DSfs8S5C.js";import{F as u}from"./FileCardList-DfxH6RTU.js";import{F}from"./FileCard-BmGVQf6x.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-2sRpn4iN.js";import{B as f}from"./Button-D9uXd6kS.js";import{A as b}from"./ActionGroup-CAmp-FAx.js";import{$ as j,a0 as B}from"./IconWarning-CPuUEZGY.js";import{H as g}from"./Heading-Dy213gst.js";import{F as h}from"./FileField-OvJ85xrE.js";import{T as O}from"./Text-1gTdtZLR.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-DxJ9O33R.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Bj-yCW37.js";import"./index-GTbupaTN.js";import"./index-CXDCOpiF.js";import"./useFieldComponent-DUw61_cc.js";import"./utils-Cg0Q0SJj.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-XNblTka2.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-5SH0-wGx.js";import"./useFocus--KWf2FGc.js";import"./useCollator-h0FVZg7K.js";import"./context-BwOS-W-N.js";import"./useLocalizedStringFormatter-BQVDI3r4.js";import"./useFocusRing-4HIuR3kq.js";import"./Button-B3mdCDJz.js";import"./ProgressBar-2UTBzJPE.js";import"./Label-DYUVUuL-.js";import"./Hidden-B0PUXGbF.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DR7SsbUT.js";import"./useFocusable-CK9MQKQ0.js";import"./VisuallyHidden-W06uk0vU.js";import"./ContextMenuSection-CTAuboSL.js";import"./Action-_oJPJyM7.js";import"./context-D550pjOP.js";import"./useStatic-CHenPBZg.js";import"./browser-BiwdkBmz.js";import"./getActionGroupSlot-DxN6Z1_y.js";import"./dynamic-UvYry7O0.js";import"./Dialog-17xgL67A.js";import"./RSPContexts-DTcyqJ2O.js";import"./OverlayArrow-BDTM6fDd.js";import"./useControlledState-DbjjrDzt.js";import"./Collection-CvBP3D3N.js";import"./CollectionBuilder-O9kuHpIB.js";import"./SelectionIndicator-D4-zI_jf.js";import"./Separator-C2NuKe-C.js";import"./SelectionManager-sYUHP04o.js";import"./useEvent-Btkolbn2.js";import"./FocusScope-BRQqWTqz.js";import"./ColumnLayout-CCiluCHS.js";import"./Avatar-Agd_jw9_.js";import"./AlertIcon-CK1OfGfa.js";import"./Image-Dg7RrKBi.js";import"./Link-CB4tGySl.js";import"./OptionsButton-B9DLdFVT.js";import"./ButtonView-QAfAhpRw.js";import"./ContextMenuTriggerView-CrsbyEKF.js";import"./ContextMenuTrigger-BEMJsYmt.js";import"./OverlayTrigger-CzuKQCYE.js";import"./OverlayContextProvider-C_3PlVFc.js";import"./FieldError-Fy3l3DO0.js";import"./FieldError-DxbTuNm9.js";import"./AlertText-DlszfG1H.js";import"./useRef-UyhpXirX.js";import"./LoadingSpinner-DsMp8zOw.js";import"./remote-MyOm1NIW.js";import"./Heading-BMnEpmdL.js";import"./useFormValidation-CzNeWdfJ.js";import"./Input-BPv4G1er.js";import"./EmulatedBoldText-DygQZkyN.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
