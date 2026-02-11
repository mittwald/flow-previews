import{r as x,j as e}from"./iframe-BnHQGzj-.js";import{F as t}from"./FileDropZone-BU1xlcUG.js";import{S as d}from"./Section-SvACH-rM.js";import{F as u}from"./FileCardList-Bqah-v-H.js";import{F}from"./FileCard-BXHlZwbq.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-fNAdGvYj.js";import{B as f}from"./Button-kOzdzwoL.js";import{A as b}from"./ActionGroup-BPljKUZx.js";import{a0 as j,a1 as B}from"./IconWarning-BD5ZgLZv.js";import{H as g}from"./Heading-2AT3piVo.js";import{F as h}from"./FileField-U0ixJNxI.js";import{T as O}from"./Text-BWqTdGF3.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-Bnbyg5rQ.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B3zgfniW.js";import"./index-B4eSx5RY.js";import"./index-CR3_Geu_.js";import"./useFieldComponent-BKOZgMTQ.js";import"./utils-B_drgFmA.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CP9lFNhL.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DpMFroVF.js";import"./useFocus-BQLqug8q.js";import"./useCollator-B-3R_2dL.js";import"./context-oT0KmQcZ.js";import"./useLocalizedStringFormatter-DfUxbFDU.js";import"./useFocusRing-BtYlF30D.js";import"./Button-7nIxjvHJ.js";import"./ProgressBar-V752D4mF.js";import"./Label-C4kylnhO.js";import"./Hidden-DGNiPayS.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DW43gzrd.js";import"./useFocusable-CpiznpYH.js";import"./VisuallyHidden-DN_pHWhj.js";import"./ContextMenuSection-BQD1q2_K.js";import"./Action-D5FY68jf.js";import"./context-CLHbEMzO.js";import"./useStatic-CXOpTYPY.js";import"./browser-Byd_T3zS.js";import"./getActionGroupSlot-DFydpqIy.js";import"./dynamic-Dg_y_eXk.js";import"./Dialog-vlYkkLZ8.js";import"./RSPContexts-DJrv2Up2.js";import"./OverlayArrow-CU__1Pr_.js";import"./useControlledState-ARGAgX5I.js";import"./Collection-D7DmweA7.js";import"./CollectionBuilder-Dmus25Kx.js";import"./SelectionIndicator-Bje3agQK.js";import"./Separator-DEQQD5jL.js";import"./SelectionManager-D547R46g.js";import"./useEvent-DbwR8Qxp.js";import"./FocusScope-BV-dArZv.js";import"./ColumnLayout-dkwrOEv0.js";import"./Avatar-D23x4mta.js";import"./AlertIcon-cpK7-VlX.js";import"./Image-_hDWfusr.js";import"./Link-R31cpBcP.js";import"./OptionsButton-SXkLVIGE.js";import"./ButtonView-CPuOwsd2.js";import"./ContextMenuTriggerView-CgpHyMBv.js";import"./ContextMenuTrigger-BXy8EQiw.js";import"./OverlayTrigger-DgkWH0DW.js";import"./OverlayContextProvider-DVcP4fWo.js";import"./FieldError-hA7hA6sK.js";import"./FieldError-CfhVGgFS.js";import"./AlertText-BSsMj9jl.js";import"./useRef-DC89URQK.js";import"./LoadingSpinner-DoB6VVvS.js";import"./remote-DzOTiMGq.js";import"./Heading-BZTJ56jD.js";import"./useFormValidation-CJa5Pm36.js";import"./Input-DmDHg40n.js";import"./EmulatedBoldText-B2gQbs-b.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Xe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=y();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const $e=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,$e as __namedExportsOrder,Xe as default};
