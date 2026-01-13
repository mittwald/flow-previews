import{r as x,j as e}from"./iframe-rOlqB43H.js";import{F as t}from"./FileDropZone-dLyW6MiK.js";import{S as d}from"./Section-mXRQd9wd.js";import{F as u}from"./FileCardList-BDQxm1oL.js";import{F}from"./FileCard-CcfikcjF.js";import{u as S,F as C,t as D}from"./Form-ZrhvCVcs.js";import{S as y}from"./ResetButton-CrWOnpMD.js";import{B as f}from"./Button-Bjmah8F5.js";import{A as b}from"./ActionGroup-C5Ll53hT.js";import{$ as j,a0 as B}from"./IconWarning-Di5b70C_.js";import{H as g}from"./Heading-D93Lplv4.js";import{F as h}from"./FileField-D7Dxoof6.js";import{T as O}from"./Text-CXuVairg.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-T87HJDLl.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BTUHU9lP.js";import"./index-CsMmwq4Q.js";import"./index-DzmHy0yH.js";import"./useFieldComponent-sAEQMV1g.js";import"./utils-Ccj3VlSZ.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CjxKuecI.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CbRIwZrE.js";import"./useFocus-B5EXjvsK.js";import"./useCollator-BzTQk6BT.js";import"./context-C0IlT2TZ.js";import"./useLocalizedStringFormatter-UF0AsOfY.js";import"./Button-CW-dJdjv.js";import"./ProgressBar-B_qKaJMi.js";import"./Label-Hp9JhiSo.js";import"./Hidden-DOKrBgVK.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-D4qdaxsz.js";import"./useFocusRing-lBaj0PQL.js";import"./useFocusable-vYreZ1I2.js";import"./VisuallyHidden-CY9UiAKH.js";import"./ContextMenuSection-Djibs7wW.js";import"./Action-CHaj31Fl.js";import"./context-BHPibtfH.js";import"./useStatic-B2jLjEI4.js";import"./browser-DeRtoS4T.js";import"./getActionGroupSlot-PZdeRoTE.js";import"./dynamic-DIoaqwvI.js";import"./Dialog-B6AZQFUz.js";import"./RSPContexts-D_fvST6z.js";import"./OverlayArrow-OpojsIn2.js";import"./useControlledState-BGrTDRws.js";import"./Collection-CVOOSTzg.js";import"./CollectionBuilder-ClYuAlnm.js";import"./SelectionIndicator-CrjLUeul.js";import"./Separator-ClOd3Ug2.js";import"./SelectionManager-ewEKpYWO.js";import"./useEvent-Cj6N6ygk.js";import"./FocusScope-BxWeftc5.js";import"./ColumnLayout-DMq2Q6NG.js";import"./Avatar-BYRj_Af1.js";import"./AlertIcon-BISUoRMj.js";import"./Image-Dwug08Ch.js";import"./Link-EuD5iJUs.js";import"./OptionsButton-Q-zhQSzN.js";import"./ButtonView-Czsg1_OU.js";import"./ContextMenuTriggerView-BoTag2R8.js";import"./ContextMenuTrigger-BMCwulIV.js";import"./OverlayTrigger-BdoRRXtX.js";import"./OverlayContextProvider-D43YjdGu.js";import"./FieldError-B7iskscN.js";import"./FieldError-CnSkRhK3.js";import"./AlertText-DG4pRxN7.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-BUwqGHDc.js";import"./LoadingSpinner-BbLFRhi0.js";import"./remote-DT0xwqhP.js";import"./Heading-Ds9JRynb.js";import"./useFormValidation-DWvRQI9h.js";import"./Input-DoF-1MyK.js";import"./EmulatedBoldText-td0NnrMW.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=D();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const rr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,rr as __namedExportsOrder,er as default};
