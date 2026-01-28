import{r as x,j as e}from"./iframe-CgeYxcj8.js";import{F as t}from"./FileDropZone-DaQrq_QJ.js";import{S as d}from"./Section-C3AA-XhZ.js";import{F as u}from"./FileCardList-B1B-rixX.js";import{F}from"./FileCard-B2-e2uw1.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-Cs7EEVT-.js";import{B as f}from"./Button-DR_1qYQ2.js";import{A as b}from"./ActionGroup-SAvPHs6u.js";import{_ as j,$ as B}from"./IconWarning-CNkUjla4.js";import{H as g}from"./Heading-ze7wSVUJ.js";import{F as h}from"./FileField-BzGpldZb.js";import{T as O}from"./Text-fEw-hlGn.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-CNd-KPPj.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Dnk3jDHh.js";import"./index-DGuDz7oW.js";import"./index-SS9EXt6e.js";import"./useFieldComponent-DjF7VplI.js";import"./utils-BH6Z59zo.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-D1ETBO0D.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CNkOKuMy.js";import"./useFocus-BDu45Ayq.js";import"./useCollator-Jdxh6jfg.js";import"./context-CYaZBhkg.js";import"./useLocalizedStringFormatter-C8PcX-p4.js";import"./useFocusRing-BNw3vzKJ.js";import"./Button-x-eiCRcG.js";import"./ProgressBar-FiBC1zNG.js";import"./Label-DsJ6qzWh.js";import"./Hidden-kX7iUH63.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DX014ZyL.js";import"./useFocusable-UxYwgi7z.js";import"./VisuallyHidden-ty8jLyKB.js";import"./ContextMenuSection-CBMk4BqO.js";import"./Action-DlDUTAjM.js";import"./context-x8law5mp.js";import"./useStatic-BH0JS_W8.js";import"./browser-DJjrqqpQ.js";import"./getActionGroupSlot-Bx9RQO4h.js";import"./dynamic-CbTKsx_B.js";import"./Dialog-LUBljj5i.js";import"./RSPContexts-D3svuC0u.js";import"./OverlayArrow-1gQSfgj3.js";import"./useControlledState-CjPSf5xo.js";import"./Collection-D2EAa2oZ.js";import"./CollectionBuilder-C9W5aaEP.js";import"./SelectionIndicator-BaQZNiQ3.js";import"./Separator-CcrRe_Zj.js";import"./SelectionManager-BP1ghRLo.js";import"./useEvent-DvVlPNbe.js";import"./FocusScope-CGvyVacv.js";import"./ColumnLayout-Bz9VsjOe.js";import"./Avatar-C7ZNtW0P.js";import"./AlertIcon-BVEvo4xP.js";import"./Image-DVSkmBI1.js";import"./Link-Ds4c6t_f.js";import"./OptionsButton-DEvK1rUs.js";import"./ButtonView-DNnrBHqR.js";import"./ContextMenuTriggerView-Btw6Kp4k.js";import"./ContextMenuTrigger-D8oehZ8G.js";import"./OverlayTrigger-B5SAmsfY.js";import"./OverlayContextProvider-DFDHe7pa.js";import"./FieldError-CDWzOCc-.js";import"./FieldError-BanRAUWl.js";import"./AlertText-BHVf3OWG.js";import"./useRef-YSwTV-ZZ.js";import"./LoadingSpinner-Czq10wCK.js";import"./remote-CtdlUY7L.js";import"./Heading-CYGvuqGo.js";import"./useFormValidation-CUbvhZHn.js";import"./Input-B8kQ-Cuq.js";import"./EmulatedBoldText-B9jRyhwt.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
