import{r as x,j as e}from"./iframe-BQyHcTNh.js";import{F as t}from"./FileDropZone-FnISMykW.js";import{S as u}from"./Section-D4fUAwGu.js";import{F}from"./FileCardList-JMhc0oe7.js";import{F as f}from"./FileCard-BPidkdkK.js";import{u as S,F as C,t as D}from"./Form-Dghv3XBA.js";import{B as s}from"./Button-ieCP1ArV.js";import{A as y}from"./ActionGroup-WBeyu3m_.js";import{_ as j,$ as O}from"./IconWarning-D8COeLpG.js";import{H as g}from"./Heading-BZf-WkCq.js";import{F as h}from"./FileField-Dz56NSzi.js";import{T as b}from"./Text-_hc15B6K.js";import"./index-nuYtCEEu.js";import"./IllustratedMessage-CxMahX5H.js";import"./clsx-B-dksMZM.js";import"./flowComponent-n43oODHt.js";import"./index-BkXVqc6U.js";import"./index-D5h5WobT.js";import"./useFieldComponent-Cyrlnow6.js";import"./utils-CdCPWCHO.js";import"./Text-C9BF5CjQ.js";import"./filterDOMProps-i7L6S0l1.js";import"./ClearPropsContext-CD4xLCoc.js";import"./intlStrings-ZMTSFH_M.js";import"./useLabel-DeM_oEx1.js";import"./useFocus-COF7nP05.js";import"./useCollator-B9ukcsEW.js";import"./context-BymCJUNL.js";import"./useLocalizedStringFormatter--7zmdW8B.js";import"./Button-C2idEpfM.js";import"./ProgressBar-BXdleHGA.js";import"./Label-D_Hg-3H4.js";import"./Hidden-c61kZDYL.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-qWGUTJsN.js";import"./useFocusRing-gNgZcCH8.js";import"./useFocusable-DJd2VQkc.js";import"./VisuallyHidden-rd1eTAwo.js";import"./ContextMenuSection-ZyWidMUH.js";import"./Action-Bi6tM7BN.js";import"./context-B5Yt5ZbD.js";import"./useStatic-CIMbf_kn.js";import"./browser-CktdIn7a.js";import"./getActionGroupSlot-DtqoduiB.js";import"./dynamic-V8J33Kah.js";import"./Dialog-CTkyeFiO.js";import"./RSPContexts-BtdGc8q9.js";import"./OverlayArrow-Dp6PlRHE.js";import"./useControlledState-TEYDAVm8.js";import"./Collection-DEfh8kkF.js";import"./CollectionBuilder-D9BuGY1P.js";import"./SelectionIndicator-BnroM9vv.js";import"./Separator-BIV1anzw.js";import"./SelectionManager-DeoXhPYy.js";import"./useEvent-BWXlYds5.js";import"./FocusScope-DELlCJxb.js";import"./ColumnLayout-CZgjYIcC.js";import"./Avatar-BBG37AmH.js";import"./AlertIcon-CN6Y36_M.js";import"./Image-ofQSM4FU.js";import"./Link-DkKvAa58.js";import"./ContextMenuTriggerView-DRsRE8PH.js";import"./ContextMenuTrigger-CjlEj4V-.js";import"./OverlayTrigger-CTujVhSf.js";import"./ControlledNotification-CL-0TnDq.js";import"./OverlayContextProvider-Cx4xwIBd.js";import"./FieldError-AQx_Co0q.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-CEYsHom-.js";import"./Heading-C-OseSB1.js";import"./useFormValidation-Dr6xiKJA.js";import"./Input-POMMqA2k.js";import"./useMakeFocusable-QwAUUrkX.js";import"./EmulatedBoldText-77q4Ify-.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,$e={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},L=B("submit"),a={},l={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(O,{}),e.jsx(g,{children:"Drop image"}),e.jsx(b,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:L,children:[e.jsxs(u,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
          <Button type="submit">Upload</Button>
        </ActionGroup>
      </Form>;
  }
}`,...d.parameters?.docs?.source}}};const ze=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,l as Disabled,c as Multiple,m as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,ze as __namedExportsOrder,$e as default};
