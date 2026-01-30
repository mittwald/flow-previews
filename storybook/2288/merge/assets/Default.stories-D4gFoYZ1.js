import{r as x,j as e}from"./iframe-l1bkuF5f.js";import{F as t}from"./FileDropZone-Bojhi2SE.js";import{S as d}from"./Section-CZdVIDcK.js";import{F as u}from"./FileCardList-DUin0io3.js";import{F}from"./FileCard-BN75XZwg.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-Bus3ZjXK.js";import{B as f}from"./Button-pfxdB-3A.js";import{A as b}from"./ActionGroup-Bk_92t7d.js";import{_ as j,$ as B}from"./IconWarning-rcKmWr_e.js";import{H as g}from"./Heading-DaHrt9QJ.js";import{F as h}from"./FileField-D2hHB8ah.js";import{T as O}from"./Text-BKhP8tr9.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-5h4S9oqS.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CvyDVUQE.js";import"./index-BKxYFHxl.js";import"./index-BcUcgGWs.js";import"./useFieldComponent-C26zWsIy.js";import"./utils-DCQYs-TM.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CmGzUVny.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Dw5Dmo8O.js";import"./useFocus-jq5Lg4Og.js";import"./useCollator-Cf6z8j_R.js";import"./context-C-s-FPG6.js";import"./useLocalizedStringFormatter-F2xrId0k.js";import"./useFocusRing-DvEP7g7r.js";import"./Button-DvXEMDiE.js";import"./ProgressBar-DS8uskay.js";import"./Label-tW_cqKCA.js";import"./Hidden-xK_5A_TS.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CEqZlFux.js";import"./useFocusable-D4tCxmX8.js";import"./VisuallyHidden-GyOwAGCf.js";import"./ContextMenuSection-ktUqVNzZ.js";import"./Action-DCncdG_g.js";import"./context-DTty7kAQ.js";import"./useStatic-BFe86sAb.js";import"./browser-BVqvvpC_.js";import"./getActionGroupSlot-Cs9bLGLr.js";import"./dynamic-BrVBKZhY.js";import"./Dialog-DkFD9hxJ.js";import"./RSPContexts-D359D01x.js";import"./OverlayArrow-D02QNQ8I.js";import"./useControlledState-BZaI1cg9.js";import"./Collection-DHw8h3FC.js";import"./CollectionBuilder-BxR2eRiM.js";import"./SelectionIndicator-8EnZgCgK.js";import"./Separator-CBgmYkk4.js";import"./SelectionManager-D4DTSuSz.js";import"./useEvent-F8xm2saN.js";import"./FocusScope-CXOryEg0.js";import"./ColumnLayout-GmcIjmxR.js";import"./Avatar-Bz8hg9cx.js";import"./AlertIcon-DudqDlux.js";import"./Image-DNLJSHkj.js";import"./Link-Df9iO5Qx.js";import"./OptionsButton-DNQZvg20.js";import"./ButtonView-8r0sbocL.js";import"./ContextMenuTriggerView-DFSh7QIq.js";import"./ContextMenuTrigger-CJO9Hwnv.js";import"./OverlayTrigger-CsWZNQmA.js";import"./OverlayContextProvider-DvOu6vjy.js";import"./FieldError-mREW9pPY.js";import"./FieldError-DlCb0goX.js";import"./AlertText-Ck8xqn1I.js";import"./useRef-rZqwvUwE.js";import"./LoadingSpinner-q7Sk6MlY.js";import"./remote-DAiDHcEq.js";import"./Heading-B0CySuUv.js";import"./useFormValidation-CUmRTDZB.js";import"./Input-DWCi9_rf.js";import"./EmulatedBoldText-Cmh7SSTW.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
