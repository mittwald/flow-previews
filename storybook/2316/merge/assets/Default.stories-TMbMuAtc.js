import{r as x,j as e}from"./iframe-BBLgQM8W.js";import{F as t}from"./FileDropZone-CTcQ1Oqu.js";import{S as d}from"./Section-BqYCDxKj.js";import{F as u}from"./FileCardList-DjKmfP7V.js";import{F}from"./FileCard-CzFeWH6a.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-BLMx4wj7.js";import{B as f}from"./Button-B_d3OkSN.js";import{A as b}from"./ActionGroup-DI2Kr1jI.js";import{a0 as j,a1 as B}from"./IconWarning-CmmOPW6y.js";import{H as g}from"./Heading-Ckzm0pET.js";import{F as h}from"./FileField-CbzbrBrs.js";import{T as O}from"./Text-DyzGue3k.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-DbAKOk3U.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D-0ABlaS.js";import"./index-DIoQv3Yu.js";import"./index-CC4aSS2B.js";import"./useFieldComponent-BfDJ4pJf.js";import"./utils-Bzwl2RbX.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-C-vmddAy.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-65Ti_lew.js";import"./useFocus-atMo-T8H.js";import"./useCollator--gNzNCc1.js";import"./context-CbfWsJFN.js";import"./useLocalizedStringFormatter-ndUPvi50.js";import"./useFocusRing-XNEcT-2-.js";import"./Button-M7FHgNE8.js";import"./ProgressBar-C8xfeLyO.js";import"./Label-DjOsKLLo.js";import"./Hidden-CcHv8P9l.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DXblhpXj.js";import"./useFocusable-BlOp3ek5.js";import"./VisuallyHidden-DReBsRIr.js";import"./ContextMenuSection-DowsXKqD.js";import"./Action-vczYGY_C.js";import"./context-On8QMk-S.js";import"./useStatic-DeJLZZ0I.js";import"./browser-DI7yhJk5.js";import"./getActionGroupSlot-BNVlq3z6.js";import"./dynamic-De16JUVi.js";import"./Dialog-ErohAvYc.js";import"./RSPContexts-CYvfEZEC.js";import"./OverlayArrow-DOWztXxW.js";import"./useControlledState-Cx-WZngS.js";import"./Collection-D0FsBWET.js";import"./CollectionBuilder-B0O9WQSu.js";import"./SelectionIndicator-CxHxHFYG.js";import"./Separator-Du5IBTyX.js";import"./SelectionManager-Qclabrtm.js";import"./useEvent-xi19_WIE.js";import"./FocusScope-BuBo0u5V.js";import"./ColumnLayout-Da6dv-pL.js";import"./Avatar-O_4kbJ85.js";import"./AlertIcon-CiXM2S_P.js";import"./Image-DadNFFa_.js";import"./Link-CxVyNRrB.js";import"./OptionsButton-BkEJbsvc.js";import"./ButtonView-BpODKVdh.js";import"./ContextMenuTriggerView-DonCwS0d.js";import"./ContextMenuTrigger-BJ0iIBGC.js";import"./OverlayTrigger-Qn4J4GR_.js";import"./OverlayContextProvider-U24Exh3e.js";import"./FieldError-DAXPSsyp.js";import"./FieldError-CxkPyMXc.js";import"./AlertText-B4ActtEe.js";import"./useRef-BADtkrSm.js";import"./LoadingSpinner-CfkxbS8M.js";import"./remote-Vne7hGXH.js";import"./Heading-xvL5txOz.js";import"./useFormValidation-DAic1NnU.js";import"./Input-BnTyB-6W.js";import"./EmulatedBoldText-BZaUBYn6.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Xe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=y();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
