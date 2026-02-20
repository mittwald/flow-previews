import{r as x,j as e}from"./iframe-Bas3a7fO.js";import{F as t}from"./FileDropZone-CIZ02pnH.js";import{S as d}from"./Section-CuO1V7U6.js";import{F as u}from"./FileCardList-rUUjeNvZ.js";import{F}from"./FileCard-CmxGAQWn.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-Cd-wp-Vd.js";import{B as f}from"./Button-CCev3q47.js";import{A as b}from"./ActionGroup-D7GnjScM.js";import{a0 as j,a1 as B}from"./IconWarning-9FMOeqa7.js";import{H as g}from"./Heading-BvcJIgQi.js";import{F as h}from"./FileField-DF-4XtjH.js";import{T as O}from"./Text-D06q46lu.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-wdFqNwH3.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DM0zlvyg.js";import"./index-BsE7CccI.js";import"./index-CuTcGtc9.js";import"./useFieldComponent-CHbV_zSr.js";import"./utils-eswKxOcw.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-Di9JAG-3.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-AX-jpDlX.js";import"./useFocus-BpOhXbga.js";import"./useCollator-CKG6FCAG.js";import"./context-C6ovHfpS.js";import"./useLocalizedStringFormatter-DWSvb_Dh.js";import"./useFocusRing--4ecJhRH.js";import"./Button-cgxxNusA.js";import"./ProgressBar-C3VsHXts.js";import"./Label-CAS-GA4h.js";import"./Hidden-JsWJU2dF.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BXALpkIT.js";import"./useFocusable-Dz64TW3s.js";import"./VisuallyHidden-DwReVjRm.js";import"./ContextMenuSection-BzeJokDv.js";import"./ActionBatch-Ctg3LC0z.js";import"./useOverlayController-Bne___mw.js";import"./useStatic-LTDZm_8J.js";import"./browser-CI0OqVn7.js";import"./getActionGroupSlot-DxyevWSt.js";import"./dynamic-CtBYvx23.js";import"./Dialog-BsJqG9mx.js";import"./RSPContexts-BxdWTHUz.js";import"./OverlayArrow-B1y4rBya.js";import"./useControlledState-DnKF_srQ.js";import"./Collection-C8pnnMLO.js";import"./CollectionBuilder-0TvFeMg9.js";import"./SelectionIndicator-C1UYqe1w.js";import"./Separator-BhW3WF_H.js";import"./SelectionManager-jyyo19U7.js";import"./useEvent-CDJhLR4c.js";import"./FocusScope-yn2ZelXu.js";import"./ColumnLayout-JrbkDbpA.js";import"./Avatar-EKXZa-Na.js";import"./AlertIcon-CfXFBmoz.js";import"./Image-TGym18Lo.js";import"./Link-CvzlSJYo.js";import"./OptionsButton-_m6QHlwX.js";import"./ButtonView-fFevQyKz.js";import"./ContextMenuTriggerView-CZLzxxYJ.js";import"./ContextMenuTrigger-U1mVf7Ux.js";import"./OverlayTrigger-BU9PdTSa.js";import"./OverlayContextProvider-DoMgXFZI.js";import"./FieldError-B_qklWB_.js";import"./FieldError-CYd-7Lc_.js";import"./AlertText-5S7f5h6L.js";import"./ActionGroupView-BoEMuKNt.js";import"./Content-jsO27phX.js";import"./Modal-CZas3fxE.js";import"./Overlay-CKC1BDXC.js";import"./LoadingSpinner-CaJGFcVk.js";import"./Flex-BYJmVhKw.js";import"./useRef-TqOxF1Gm.js";import"./remote-CQRN9i7s.js";import"./Heading-CIj0isr2.js";import"./useFormValidation-nso2YHkv.js";import"./Input-CDjrJnAd.js";import"./EmulatedBoldText-DWlWNctj.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const nr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,nr as __namedExportsOrder,or as default};
