import{r as x,j as e}from"./iframe-Cwcli8hM.js";import{F as t}from"./FileDropZone-CvNSoNWr.js";import{S as d}from"./Section-DEX4-fyD.js";import{F as u}from"./FileCardList-DsVnEQBH.js";import{F}from"./FileCard-CODbA3YJ.js";import{u as S,F as C,t as D}from"./Form-BjeSNwhI.js";import{S as y}from"./ResetButton-ByzjRyrZ.js";import{B as f}from"./Button-I78ZffkB.js";import{A as b}from"./ActionGroup-CmTRqzAJ.js";import{$ as j,a0 as B}from"./IconWarning-KJvMQc2O.js";import{H as g}from"./Heading-BXqGaPUH.js";import{F as h}from"./FileField-D_oXttv5.js";import{T as O}from"./Text-D-waKGHU.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-lote0pgd.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B-m_iRlw.js";import"./index-CUAtZNjK.js";import"./index-CcWFAiT6.js";import"./useFieldComponent-DIqLhVln.js";import"./utils-C3qjWKVL.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-C18q6Xnm.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-23O2EZ34.js";import"./useFocus-CSHYTGFD.js";import"./useCollator-BttCli9Q.js";import"./context-ChPy2xgW.js";import"./useLocalizedStringFormatter-Bgk77FUt.js";import"./Button-CxQOY8r5.js";import"./ProgressBar-DHOJVCPT.js";import"./Label-BInCCjcu.js";import"./Hidden-D2HOHB0p.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CMhi8zJA.js";import"./useFocusRing-Dl7LqS86.js";import"./useFocusable-CLuaS2Z4.js";import"./VisuallyHidden-BpjAuZe7.js";import"./ContextMenuSection-BAImieHE.js";import"./Action-BmzkYOqA.js";import"./context-Cu13uzRC.js";import"./useStatic-DFI4OZ-s.js";import"./browser-Dim89v3O.js";import"./getActionGroupSlot-DirYDTjy.js";import"./dynamic-kiJ_5GPX.js";import"./Dialog-q_50MZOU.js";import"./RSPContexts-BLwT6Sdo.js";import"./OverlayArrow-DeAkcNil.js";import"./useControlledState-ClHEyKKa.js";import"./Collection-S1sfFYaT.js";import"./CollectionBuilder-DdJjWtx-.js";import"./SelectionIndicator-BxaGM9C6.js";import"./Separator-Bk8vCnmb.js";import"./SelectionManager-BU8PQU75.js";import"./useEvent-DJX5f_Tm.js";import"./FocusScope-Bznsa9g2.js";import"./ColumnLayout-DtfDxlKN.js";import"./Avatar-CTHEpBGa.js";import"./AlertIcon-sG8HORuJ.js";import"./Image-CTi-wGF9.js";import"./Link-DRTjkERI.js";import"./OptionsButton-CexjienO.js";import"./ButtonView-D7GKlOQa.js";import"./ContextMenuTriggerView-DruXq3am.js";import"./ContextMenuTrigger-ypiIBVmp.js";import"./OverlayTrigger-hzfyObC1.js";import"./OverlayContextProvider-Br5Omgfk.js";import"./FieldError-C_uRtYKD.js";import"./FieldError-CJJNrBrn.js";import"./AlertText-BjBene4x.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-DCEFieT1.js";import"./LoadingSpinner-KOoU2K2x.js";import"./remote-wJ26wkpE.js";import"./Heading-BEUpHugf.js";import"./useFormValidation-BcDhKfF3.js";import"./Input-BrN80aSI.js";import"./EmulatedBoldText-B6NHIM-L.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=D();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
