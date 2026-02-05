import{r as x,j as e}from"./iframe-ByQojKkA.js";import{F as t}from"./FileDropZone-DMD9YKDt.js";import{S as d}from"./Section-C0tACEzy.js";import{F as u}from"./FileCardList-D3adccnb.js";import{F}from"./FileCard-CsnHMxHs.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-Cu7HTX9i.js";import{B as f}from"./Button-DG0b__xZ.js";import{A as b}from"./ActionGroup-CnN8LnNO.js";import{a0 as j,a1 as B}from"./IconWarning-tVGTIzEo.js";import{H as g}from"./Heading-Cbba3Zbx.js";import{F as h}from"./FileField-CcWZEiKt.js";import{T as O}from"./Text-B1R6GgBU.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-_po8mK5Q.js";import"./clsx-B-dksMZM.js";import"./flowComponent-finO9fDl.js";import"./index-bUDX88mR.js";import"./index-DifIgMrD.js";import"./useFieldComponent-Blt-XhY9.js";import"./utils-D3Fm7Ut8.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BjqL4T8G.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BZ22SDLr.js";import"./useFocus-CIqVesE-.js";import"./useCollator-KAAcb033.js";import"./context-B2MAxUi3.js";import"./useLocalizedStringFormatter-EfbLvfF-.js";import"./useFocusRing-D8JCvm1f.js";import"./Button-psJerCAv.js";import"./ProgressBar-bE4oj_9I.js";import"./Label-Ca-ZH_hh.js";import"./Hidden-B7m2oWRR.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BwnADfjY.js";import"./useFocusable-BRqzZMJF.js";import"./VisuallyHidden-Bik_STlT.js";import"./ContextMenuSection-6SzjTnwS.js";import"./Action-D7dGsrUH.js";import"./context-Buk6ndZl.js";import"./useStatic-ClNGpIKI.js";import"./browser-BgQK0KeO.js";import"./getActionGroupSlot-D7PQruO1.js";import"./dynamic-G0P_JzfN.js";import"./Dialog-B4qMOx1Z.js";import"./RSPContexts-au40D8o8.js";import"./OverlayArrow-CZRwwumO.js";import"./useControlledState-CdOFY_9U.js";import"./Collection-B7VbOrxo.js";import"./CollectionBuilder-Bo0pSU7J.js";import"./SelectionIndicator-Bd5_QITD.js";import"./Separator-CVlXOjLN.js";import"./SelectionManager-C7xZcAD0.js";import"./useEvent-Dbu6PXWh.js";import"./FocusScope-Df45VKi0.js";import"./ColumnLayout-DhB0aDcL.js";import"./Avatar-D08OheC3.js";import"./AlertIcon-C-5STchL.js";import"./Image-Co3Dc10G.js";import"./Link-QzLuDxqX.js";import"./OptionsButton-D4VaNcgE.js";import"./ButtonView-B55WSwFj.js";import"./ContextMenuTriggerView-CbhwyLgX.js";import"./ContextMenuTrigger-4DXUxMOx.js";import"./OverlayTrigger-Bd_tt0nJ.js";import"./OverlayContextProvider-jZUXkiaW.js";import"./FieldError-Dl1gROKX.js";import"./FieldError-DskIGmIg.js";import"./AlertText-C88MmDo3.js";import"./useRef-hk2_5oTi.js";import"./LoadingSpinner-Dd1p82wM.js";import"./remote-CpbK9d4g.js";import"./Heading-CW6fzv-T.js";import"./useFormValidation-DiyC9X3o.js";import"./Input-qfXo-HDb.js";import"./EmulatedBoldText-CozfSoiL.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Xe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
