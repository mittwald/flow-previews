import{r as x,j as e}from"./iframe-DJlgDtsR.js";import{F as t}from"./FileDropZone-CqOA7bEW.js";import{S as d}from"./Section-CYRxPyA9.js";import{F as u}from"./FileCardList-Cf3z2d4w.js";import{F}from"./FileCard-BA3P_70u.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-DOYw6qBK.js";import{B as f}from"./Button-B5mEMvcP.js";import{A as b}from"./ActionGroup-CoaK5Xfm.js";import{_ as j,$ as B}from"./IconWarning-Cyya3L9S.js";import{H as g}from"./Heading-CCdNJUMi.js";import{F as h}from"./FileField-CiGUgTtt.js";import{T as O}from"./Text-B6SLv6do.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-D3gmTU9a.js";import"./clsx-B-dksMZM.js";import"./flowComponent-1zQAiLcC.js";import"./index-De4rcGI5.js";import"./index-Ds6_MS6L.js";import"./useFieldComponent-Bmr1JhS0.js";import"./utils-xFKhKznh.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DD0-81CT.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-KImy5Ex-.js";import"./useFocus-oMd_AJz-.js";import"./useCollator-Bm61inwz.js";import"./context-XFPr5nuV.js";import"./useLocalizedStringFormatter-D9db5kL2.js";import"./useFocusRing-BhR5IplG.js";import"./Button-DjTNcQDc.js";import"./ProgressBar-Cf6O9vZh.js";import"./Label-BBNmyes_.js";import"./Hidden-4sLzj03B.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CWKDBuw6.js";import"./useFocusable-CsEyjS4C.js";import"./VisuallyHidden-BJ_y0FNA.js";import"./ContextMenuSection-BF9OA7h1.js";import"./Action-BHdfveoT.js";import"./context-TnNtslmb.js";import"./useStatic-kKtkdJS1.js";import"./browser-C6YBs1UC.js";import"./getActionGroupSlot-Clzrx9gl.js";import"./dynamic-BhViPMj5.js";import"./Dialog-BOJlWGO4.js";import"./RSPContexts-CxGwKclm.js";import"./OverlayArrow-BjaGoVRT.js";import"./useControlledState-C0KUsyk2.js";import"./Collection-Cl6v0tCD.js";import"./CollectionBuilder-D_QdfbH9.js";import"./SelectionIndicator-DnAH24RP.js";import"./Separator-BojWZdSH.js";import"./SelectionManager-ESuaU6yM.js";import"./useEvent-CxJg3RaJ.js";import"./FocusScope-C9j0_60-.js";import"./ColumnLayout-D9Szx4mp.js";import"./Avatar-Cml40zwQ.js";import"./AlertIcon-nCFQHvgi.js";import"./Image-CNyN-n8g.js";import"./Link-N3wxOvKL.js";import"./OptionsButton-C4YX_B34.js";import"./ButtonView-DYK5nmKx.js";import"./ContextMenuTriggerView-TmMYv1vM.js";import"./ContextMenuTrigger-tKwsdOZD.js";import"./OverlayTrigger-02q3wf6R.js";import"./OverlayContextProvider-CVHBadgO.js";import"./FieldError-CeTb8jEt.js";import"./FieldError-Cpk3ITKU.js";import"./AlertText-DmRH4lNK.js";import"./useRef-CIkrKDvB.js";import"./LoadingSpinner-DvQzlWjD.js";import"./remote-CayAs8X4.js";import"./Heading-CTyW73LR.js";import"./useFormValidation-Dup-Fz52.js";import"./Input-C2mY4pOV.js";import"./EmulatedBoldText-BsjtvuiU.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
