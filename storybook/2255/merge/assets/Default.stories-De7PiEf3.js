import{r as x,j as e}from"./iframe-BWhqP90_.js";import{F as t}from"./FileDropZone-d-kv-YoP.js";import{S as d}from"./Section-CFf8UBa1.js";import{F as u}from"./FileCardList-B5kcT9HH.js";import{F}from"./FileCard-D_glqcYC.js";import{u as S,F as C,t as D}from"./Form-BHDfIGsT.js";import{S as y}from"./ResetButton-RzBAzJt2.js";import{B as f}from"./Button-BciJVpgP.js";import{A as b}from"./ActionGroup-DDQLt8Fl.js";import{$ as j,a0 as B}from"./IconWarning-HbBBXO9Y.js";import{H as g}from"./Heading-B5yfVGXK.js";import{F as h}from"./FileField-Cc6aMr6s.js";import{T as O}from"./Text-ClKyFsNf.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-C38syQBZ.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BryHmeuy.js";import"./index-8vPYdz_-.js";import"./index-BNCgjCzH.js";import"./useFieldComponent-YclMbw8e.js";import"./utils-DDxNv25V.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CjPzL55g.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-nvgQN0a7.js";import"./useFocus-DGysuqof.js";import"./useCollator-BWqZHdF4.js";import"./context-D1O-Xc3I.js";import"./useLocalizedStringFormatter--1i0kqLe.js";import"./Button-cDeaYk1j.js";import"./ProgressBar-CDLRkEMS.js";import"./Label-CvmhHdNV.js";import"./Hidden-40YeYLOA.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CgTDaVBx.js";import"./useFocusRing-BFEab5f2.js";import"./useFocusable-BfSSliyg.js";import"./VisuallyHidden-DRs-AG4l.js";import"./ContextMenuSection-DVcDBRAK.js";import"./Action-CBNAKVRZ.js";import"./context-Bdh27yQP.js";import"./useStatic-Dg52ehJ-.js";import"./browser-XxEUm-0T.js";import"./getActionGroupSlot-Bc3Q1XKp.js";import"./dynamic-B9fZ3_-n.js";import"./Dialog-CL817TCu.js";import"./RSPContexts-BQJ2nk5o.js";import"./OverlayArrow-O77-h4vA.js";import"./useControlledState-hpfIa3L8.js";import"./Collection-CczwQGta.js";import"./CollectionBuilder-Bu1khTRs.js";import"./SelectionIndicator-DZ2Xh4dp.js";import"./Separator-CHyDNsxt.js";import"./SelectionManager-DbhQkq7H.js";import"./useEvent-C-yeEGvr.js";import"./FocusScope-D5dxNR-J.js";import"./ColumnLayout-BPRO3Z2T.js";import"./Avatar-COiHlYJa.js";import"./AlertIcon-DpUh0dNd.js";import"./Image-BfrsyNPZ.js";import"./Link-BBfbm5pk.js";import"./OptionsButton-CN89fe5q.js";import"./ButtonView-38_4zC6p.js";import"./ContextMenuTriggerView-DAlxQHlC.js";import"./ContextMenuTrigger-217av2U0.js";import"./OverlayTrigger-CGA0SI1j.js";import"./OverlayContextProvider-G1DVyXwK.js";import"./FieldError-C6zkn6e8.js";import"./FieldError-DkQ7rf97.js";import"./AlertText-Bb9-XBbW.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-QCo4OIfF.js";import"./LoadingSpinner-CBZxi8OD.js";import"./remote-veunNUGL.js";import"./Heading-qBHW75oC.js";import"./useFormValidation-Dk5h1IP2.js";import"./Input-BjME0GkR.js";import"./EmulatedBoldText-BA_Kyk9l.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=D();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
