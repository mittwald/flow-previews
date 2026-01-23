import{r as x,j as e}from"./iframe-CL_XwmGn.js";import{F as t}from"./FileDropZone-CnEEsdJ-.js";import{S as d}from"./Section-DJ3JBl70.js";import{F as u}from"./FileCardList-hDpkWhXi.js";import{F}from"./FileCard-B1ujbThu.js";import{u as S,F as C,t as D}from"./Form-afgYqryA.js";import{S as y}from"./ResetButton-DuDiPc2f.js";import{B as f}from"./Button-D2VcFxMo.js";import{A as b}from"./ActionGroup-CTh7FmAm.js";import{$ as j,a0 as B}from"./IconWarning-BJDkWSaD.js";import{H as g}from"./Heading-DNlihVQQ.js";import{F as h}from"./FileField-a4qmiGEp.js";import{T as O}from"./Text-D6CnWJI6.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-CWjmELen.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BU0F8yOM.js";import"./index-5M68WWKF.js";import"./index-E9PNAIL6.js";import"./useFieldComponent-CJlPbBit.js";import"./utils-pMOpDdKA.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BoyMWt4b.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-OokI145l.js";import"./useFocus-BpR4SkFv.js";import"./useCollator-DdGOjTfE.js";import"./context-BrZvYWUs.js";import"./useLocalizedStringFormatter-y3SF15d-.js";import"./Button-CWqxXJtj.js";import"./ProgressBar-CwwrTQ5U.js";import"./Label-C9CEKXVd.js";import"./Hidden-D-ekfNfu.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BzQNsH-t.js";import"./useFocusRing-vwKb8oQw.js";import"./useFocusable-CrdCOPEw.js";import"./VisuallyHidden-q4vxjiW8.js";import"./ContextMenuSection-6x7QO-B2.js";import"./Action-BeuDPcZa.js";import"./context-C4d2ZO_d.js";import"./useStatic-KIt4AINJ.js";import"./browser-BUAGSuau.js";import"./getActionGroupSlot-RL3kfRwz.js";import"./dynamic-qzGoZAaQ.js";import"./Dialog-BknS8Hxj.js";import"./RSPContexts-A2U_AiO5.js";import"./OverlayArrow-CguIeEaq.js";import"./useControlledState-CguvIA_y.js";import"./Collection-D-2fJfX0.js";import"./CollectionBuilder-D2SZxLcC.js";import"./SelectionIndicator-KxjlcYOr.js";import"./Separator-CW5j6fDP.js";import"./SelectionManager-kuBnNlHS.js";import"./useEvent-Bol6JMEe.js";import"./FocusScope-D2XVNmzA.js";import"./ColumnLayout-BvkFLY17.js";import"./Avatar-B5uvKPRV.js";import"./AlertIcon-DT_6S455.js";import"./Image-EBYxMThd.js";import"./Link-DMWmmK_7.js";import"./OptionsButton-BqOP7eyl.js";import"./ButtonView-zVtNa1QW.js";import"./ContextMenuTriggerView-C-KTUHyE.js";import"./ContextMenuTrigger-D2AjW2qO.js";import"./OverlayTrigger-2Lg8C4JA.js";import"./OverlayContextProvider-DerEZw4j.js";import"./FieldError-p9GwIgel.js";import"./FieldError-B4bZwJpA.js";import"./AlertText-ClMe5xDD.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-VOW4feYT.js";import"./LoadingSpinner-D9Wqoyf9.js";import"./remote-vDvbK7RM.js";import"./Heading-CAyFlpGN.js";import"./useFormValidation-B17WGe6J.js";import"./Input-CUsih0HK.js";import"./EmulatedBoldText-T1o3Oddg.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=D();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
