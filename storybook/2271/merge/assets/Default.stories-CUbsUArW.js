import{r as x,j as e}from"./iframe-BK9Ry9wr.js";import{F as t}from"./FileDropZone-LI6zM9QO.js";import{S as d}from"./Section-Cd3PiQqp.js";import{F as u}from"./FileCardList-D3f9W7oE.js";import{F}from"./FileCard-DTkv5DZt.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-C0XPbUI0.js";import{B as f}from"./Button-CHbQbW2n.js";import{A as b}from"./ActionGroup-B30hSGLL.js";import{$ as j,a0 as B}from"./IconWarning-ClqYagFF.js";import{H as g}from"./Heading-DbP6ax1z.js";import{F as h}from"./FileField-UTLV0sMh.js";import{T as O}from"./Text-kkda9Q25.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-ceoEZXLs.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DHXq45QP.js";import"./index-DN2_BW85.js";import"./index-DqsXJ4xp.js";import"./useFieldComponent-DnU67IFr.js";import"./utils-DO-BnPGQ.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-Cq5Rc76r.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-MQsZvy4I.js";import"./useFocus-C5fN754a.js";import"./useCollator-DyL6zZr9.js";import"./context-DsIoSqto.js";import"./useLocalizedStringFormatter-C7EPZ_KA.js";import"./Button-CnSM8-vw.js";import"./ProgressBar-EpzEHd1o.js";import"./Label-BzCkyqHu.js";import"./Hidden-PKJk_aj-.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DlcvFeQS.js";import"./useFocusRing-Dknf048Z.js";import"./useFocusable-CjhkSx1Q.js";import"./VisuallyHidden-D79PysQv.js";import"./ContextMenuSection-BoFqJWQI.js";import"./Action-CpYeBO1D.js";import"./context-BUIiTJfL.js";import"./useStatic-D1EtWzUP.js";import"./browser-DDyWafud.js";import"./getActionGroupSlot-BQEdHt4G.js";import"./dynamic-QikLaQcI.js";import"./Dialog-CFBRHxwp.js";import"./RSPContexts--7QpwlJX.js";import"./OverlayArrow-CRZVDLqR.js";import"./useControlledState-D5gBJyZQ.js";import"./Collection-DA19Hn3z.js";import"./CollectionBuilder-D0V9DfFD.js";import"./SelectionIndicator-D3Pxw9N-.js";import"./Separator-C7FW_ZyO.js";import"./SelectionManager-BORRpVca.js";import"./useEvent-C7NWigLs.js";import"./FocusScope-Lcnwzjdv.js";import"./ColumnLayout-BJ0tfacp.js";import"./Avatar-bhHDqwVa.js";import"./AlertIcon-CZTB9fHB.js";import"./Image-CoUQJRBA.js";import"./Link-DALrfrfA.js";import"./OptionsButton-Bth99cLK.js";import"./ButtonView-CN2Wm_bq.js";import"./ContextMenuTriggerView-F5HiT0o_.js";import"./ContextMenuTrigger-D4daKNMe.js";import"./OverlayTrigger-CIrGgPkU.js";import"./OverlayContextProvider-9n1_NXqk.js";import"./FieldError-Dlnwp2IY.js";import"./FieldError-jtZpQJaz.js";import"./AlertText-Q3UmWydJ.js";import"./useRef-DMVqSxmL.js";import"./LoadingSpinner-FeF_CDXe.js";import"./remote-BKPS1KcS.js";import"./Heading-AwuUEGOn.js";import"./useFormValidation-4onogkfY.js";import"./Input-yJFna98K.js";import"./EmulatedBoldText-NOAnNUmj.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
