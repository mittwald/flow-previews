import{r as x,j as e}from"./iframe-EtTbRQoM.js";import{F as t}from"./FileDropZone-DIpuDVKz.js";import{S as u}from"./Section-BmVYkrqh.js";import{F}from"./FileCardList-_rxlqGBW.js";import{F as f}from"./FileCard-CXsnwiqN.js";import{u as S,F as C,t as D}from"./Form-B86kUuvW.js";import{B as s}from"./Button-DxuCaQyR.js";import{A as y}from"./ActionGroup-Cl4D3H2T.js";import{_ as j,$ as O}from"./IconWarning-CO-lUcxm.js";import{H as g}from"./Heading-YEToWG6x.js";import{F as h}from"./FileField-kv2lRtRh.js";import{T as b}from"./Text-CAO-zPwU.js";import"./index-nuYtCEEu.js";import"./IllustratedMessage-CwqfCiYS.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CRP3amPt.js";import"./index-DwnAt2PO.js";import"./index-rMxpLDk9.js";import"./utils-C_hvyJpn.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CANjZEUs.js";import"./filterDOMProps-i7L6S0l1.js";import"./Label-FPs7V2cE.js";import"./Hidden-BhWY_xu3.js";import"./useFocus-9RWBE5qv.js";import"./useCollator-CjrbHKqV.js";import"./context-HEbrZrvP.js";import"./useLocalizedStringFormatter-FAUwXJff.js";import"./Button-qX7xBgDX.js";import"./ProgressBar-C-f1QmIl.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-sAonsHdy.js";import"./useFocusRing-hCmULEnE.js";import"./useFocusable-Do_2l7DI.js";import"./VisuallyHidden-B8Lwuqmn.js";import"./ContextMenuSection-CGnTeLpY.js";import"./Action-CL-CoYGw.js";import"./context-C1SllNhn.js";import"./useStatic-DxnBGf3l.js";import"./browser-Cob99Do9.js";import"./getActionGroupSlot-CxKatSQe.js";import"./dynamic-Cv7GHFn6.js";import"./Dialog-D4gVf8vR.js";import"./RSPContexts-Cv7znJuu.js";import"./OverlayArrow-CczkULsk.js";import"./useControlledState-DmCe06Ai.js";import"./Collection-CmlnhQJV.js";import"./CollectionBuilder-DTV-m0tl.js";import"./SelectionIndicator-BOzSayKJ.js";import"./Separator-CwOt3VIi.js";import"./SelectionManager-DfS84ysN.js";import"./useEvent-DcRgbaUL.js";import"./FocusScope-Dkurg4aB.js";import"./ColumnLayout-siAwTZdH.js";import"./Avatar-pc-z1hkL.js";import"./AlertIcon-DQTJHgcp.js";import"./Image-DW-8Dxl6.js";import"./Link-C5iBt_w0.js";import"./ButtonView-D15LOGJi.js";import"./ContextMenuTriggerView-DmXbCRk4.js";import"./ContextMenuTrigger-CSAfbLDJ.js";import"./OverlayTrigger-fEmiW_c4.js";import"./ControlledNotification-DztR7-dO.js";import"./OverlayContextProvider-6Zh7EMbz.js";import"./FieldError-Bx65Dx0T.js";import"./FieldError-Dm1dzE4u.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-QwVO93wM.js";import"./Heading-DTQh2nx3.js";import"./FormField.module-CqWyJNQI.js";import"./useFormValidation-CisZkPpg.js";import"./Input-TlPGvJ5n.js";import"./useMakeFocusable-qjH8k0Qb.js";import"./EmulatedBoldText-rZpq4XPn.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,$e={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},L=B("submit"),a={},l={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(O,{}),e.jsx(g,{children:"Drop image"}),e.jsx(b,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:L,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
          <FileDropZone {...props} onChange={f => form.setValue("file", f)}>
            <IconUpload />
            <Heading>Drop file</Heading>
            <Field name="file" rules={{
            required: "Please choose a file"
          }}>
              <FileField>
                <Button variant="outline" color="dark">
                  Select file
                </Button>
              </FileField>
            </Field>
          </FileDropZone>

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
