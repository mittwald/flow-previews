import{r as x,j as e}from"./iframe-Bt_Ape3b.js";import{F as t}from"./FileDropZone-DwmqbdSz.js";import{S as d}from"./Section-fmZi8k9e.js";import{F as u}from"./FileCardList-dfJEyeO7.js";import{F}from"./FileCard-DNnj5mzv.js";import{u as S,F as C,t as D}from"./Form-B8CwJQM0.js";import{S as y}from"./ResetButton-C8v8M-AR.js";import{B as f}from"./Button-Bm5EggmV.js";import{A as b}from"./ActionGroup-BVJwbp62.js";import{Z as j,_ as B}from"./IconWarning-BQjeLTWb.js";import{H as g}from"./Heading-C3-uF7Fn.js";import{F as h}from"./FileField-DuPUTG7h.js";import{T as O}from"./Text-Bs2hbxJA.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-5cudTP0l.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CoHw3WqD.js";import"./index-DJTzXtHe.js";import"./index-gN6AAF3-.js";import"./useFieldComponent-QpDNRghi.js";import"./utils-DGGum7sG.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DwU1R_Cs.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BAWBHbvC.js";import"./useFocus-C-togmBu.js";import"./useCollator-CvPTpoia.js";import"./context-BGqy3a6E.js";import"./useLocalizedStringFormatter-Bayz7Ycu.js";import"./Button-pXrc8KX9.js";import"./ProgressBar-DgNpOae2.js";import"./Label-Bfb_thp3.js";import"./Hidden-CJIrU941.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DErVZDbk.js";import"./useFocusRing-Ba6s95SH.js";import"./useFocusable-BX_sV3cU.js";import"./VisuallyHidden-CM2m0J8e.js";import"./ContextMenuSection-22Ea6AVl.js";import"./Action-B2h50d-b.js";import"./context-CGPA3PGo.js";import"./useStatic-DpZVpe0y.js";import"./browser-BI8hAkYP.js";import"./getActionGroupSlot-Cx8mj5km.js";import"./dynamic-D3ysZU61.js";import"./Dialog-3KThjjZh.js";import"./RSPContexts-CtPg4mPr.js";import"./OverlayArrow-CVhGLAoZ.js";import"./useControlledState-Bw01eRXu.js";import"./Collection-CZkVMDHw.js";import"./CollectionBuilder-D9hZnXF0.js";import"./SelectionIndicator-7G59x11l.js";import"./Separator-fa_nI6Bk.js";import"./SelectionManager-BSKqz5jy.js";import"./useEvent-B7_y21W_.js";import"./FocusScope-BOag0uW3.js";import"./ColumnLayout-DdKg9fzr.js";import"./Avatar-R3voi_WB.js";import"./AlertIcon-CAn9yCZm.js";import"./Image-DS9jGepE.js";import"./Link-BnH-6vvM.js";import"./OptionsButton-D4y0l36e.js";import"./ButtonView-5kWU9QKD.js";import"./ContextMenuTriggerView-C7lar9N0.js";import"./ContextMenuTrigger-Db4jGgyD.js";import"./OverlayTrigger-BxvpYE5H.js";import"./OverlayContextProvider-BwOUPmKM.js";import"./FieldError-DvZju2Cm.js";import"./FieldError-Cd4omKy3.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-1CdJSa2G.js";import"./LoadingSpinner-CXrerpwy.js";import"./remote-C9NcRL_b.js";import"./Heading-CF5bGxey.js";import"./useFormValidation-Gf9yhQ7S.js";import"./Input-DtIcDeFz.js";import"./EmulatedBoldText-213nH2nf.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,$e={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=D();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const er=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,er as __namedExportsOrder,$e as default};
