import{r as x,j as e}from"./iframe-Cq8OhOqi.js";import{F as t}from"./FileDropZone-BgffN6IF.js";import{S as d}from"./Section-CsWsO61m.js";import{F as u}from"./FileCardList-DmgBnCI4.js";import{F}from"./FileCard-C21a7fI4.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-e0wuYo_a.js";import{B as f}from"./Button-BU-3gGXz.js";import{A as b}from"./ActionGroup-DpnZ5B3u.js";import{a0 as j,a1 as B}from"./IconWarning-D6WB6H32.js";import{H as g}from"./Heading-Di8lkzs2.js";import{F as h}from"./FileField-KkTT47cb.js";import{T as O}from"./Text-CeV8P7pg.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-Fpy6F7ZB.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BPlAJrQX.js";import"./index-CDojQULy.js";import"./index-CtMt1etx.js";import"./useFieldComponent-BYb5VnRy.js";import"./utils-Bubk6yJw.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BrptySpj.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Ddb4-Ews.js";import"./useFocus-hSjeZcP9.js";import"./useCollator-BMatrljN.js";import"./context-EUTE_30t.js";import"./useLocalizedStringFormatter-B4BWJZRT.js";import"./useFocusRing-C66f8wZh.js";import"./Button-RahnnKar.js";import"./ProgressBar-pI249SR8.js";import"./Label-BIWw7tEO.js";import"./Hidden-BxQeKZxe.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-ChoIOqc4.js";import"./useFocusable-Cka2f_Hf.js";import"./VisuallyHidden-CN_7F8uI.js";import"./ContextMenuSection-C22Hcd-O.js";import"./Action-CjFX3pKp.js";import"./context-DR72ScyD.js";import"./useStatic-Dv08VHAH.js";import"./browser-D1jWek88.js";import"./getActionGroupSlot-E0a2MdOz.js";import"./dynamic-fC-Lgr30.js";import"./Dialog-BglVjZuh.js";import"./RSPContexts-CKy-IICl.js";import"./OverlayArrow-CUm_HcTA.js";import"./useControlledState-DRmDoHXV.js";import"./Collection-BDonS7tS.js";import"./CollectionBuilder-D61kQYAv.js";import"./SelectionIndicator-LHAUO8nn.js";import"./Separator-PjONMOza.js";import"./SelectionManager-CJM9qnyd.js";import"./useEvent-BLNYXLIo.js";import"./FocusScope-B5Hy3UxH.js";import"./ColumnLayout-DHjBcVOa.js";import"./Avatar-C-yNh1xP.js";import"./AlertIcon-4JwX6npd.js";import"./Image-Dudamhh2.js";import"./Link-Dj4WQhqO.js";import"./OptionsButton-AmJzSb4C.js";import"./ButtonView-D9mwnSmq.js";import"./ContextMenuTriggerView-D7D9lAbF.js";import"./ContextMenuTrigger-DF5HhN7k.js";import"./OverlayTrigger-DbQZU3bz.js";import"./OverlayContextProvider-BKoB-iKb.js";import"./FieldError-2IpGOPbh.js";import"./FieldError-BGnsbaLE.js";import"./AlertText-aZpP8wGh.js";import"./useRef-By8gWJdj.js";import"./LoadingSpinner-DSK_LMeC.js";import"./remote-D-3bgxwF.js";import"./Heading-CPXM0mEb.js";import"./useFormValidation-DYnqTuxD.js";import"./Input-DDTw6Vbr.js";import"./EmulatedBoldText-CaDCAcie.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Xe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=y();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
