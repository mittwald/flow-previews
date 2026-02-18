import{r as x,j as e}from"./iframe-BDFzVZbC.js";import{F as t}from"./FileDropZone-CZKjNfcg.js";import{S as d}from"./Section-DTE7_1U7.js";import{F as u}from"./FileCardList-BznZVQLi.js";import{F}from"./FileCard-CFIvlabc.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-D1K9FtBE.js";import{B as f}from"./Button-C7bK1-uf.js";import{A as b}from"./ActionGroup-DXoxOsLZ.js";import{a0 as j,a1 as B}from"./IconWarning-aDXn3__r.js";import{H as g}from"./Heading-D5c-TU0p.js";import{F as h}from"./FileField-BPJ5ZcaW.js";import{T as O}from"./Text-DCO-oE1a.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-wgB6SFwy.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CcRyJRwo.js";import"./index-P1fb0se1.js";import"./index-CcbRX2xZ.js";import"./useFieldComponent-DJTCy7fJ.js";import"./utils-DRqoG6OW.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-5CWdwzmY.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D8fV0T39.js";import"./useFocus-BE-kuowd.js";import"./useCollator-DGEP0NQr.js";import"./context-sVk6h2Ud.js";import"./useLocalizedStringFormatter-BejhQiE3.js";import"./useFocusRing-CxM1MJ0B.js";import"./Button-ibrCxHHX.js";import"./ProgressBar-BO2kVTFg.js";import"./Label-CHSQ9cWG.js";import"./Hidden-HzHXzaYV.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DJEnnjGh.js";import"./useFocusable-nLh15Hem.js";import"./VisuallyHidden-DL89d0r2.js";import"./ContextMenuSection-rEkP8dNP.js";import"./ActionBatch-dkJpCMmD.js";import"./useOverlayController-Bb-vbpCY.js";import"./useStatic-DKe6XZbW.js";import"./browser-D6pVd-JB.js";import"./getActionGroupSlot-DJwqOljU.js";import"./dynamic-78IPl_xO.js";import"./Dialog-C2-FJ5MR.js";import"./RSPContexts-CK_xwACt.js";import"./OverlayArrow-BhJrUQVC.js";import"./useControlledState-CxpqxoPE.js";import"./Collection-C1wNqiGx.js";import"./CollectionBuilder-DtnVmW1Z.js";import"./SelectionIndicator-S2R90Jld.js";import"./Separator-DZXWrML2.js";import"./SelectionManager-BvzKXH6i.js";import"./useEvent-DOEbfCcC.js";import"./FocusScope-Djn4bjzo.js";import"./ColumnLayout-DfD0Foef.js";import"./Avatar-2EGNp_NC.js";import"./AlertIcon-tKcNuTH2.js";import"./Image-CcCPbOie.js";import"./Link-De5vpNn4.js";import"./OptionsButton-BmHw_5rf.js";import"./ButtonView-Co3oQwB4.js";import"./ContextMenuTriggerView-DoAt_y5c.js";import"./ContextMenuTrigger-CwB4PFht.js";import"./OverlayTrigger-BwyAupi1.js";import"./OverlayContextProvider-ClMrYLWB.js";import"./FieldError-BgOx5Pdv.js";import"./FieldError-4UEPVceR.js";import"./AlertText-CJ-mVZBv.js";import"./ActionGroupView-Dsksq701.js";import"./Content-w-_DoZqM.js";import"./Modal-Bz96LWDI.js";import"./Overlay-DkdcKSQA.js";import"./LoadingSpinner-CPBqqCdo.js";import"./Flex-DbvEsOwD.js";import"./useRef-DOSvcyqg.js";import"./remote-C6miTdu_.js";import"./Heading-CoT4JWE4.js";import"./useFormValidation-CtBJZQwA.js";import"./Input-CI5lEjHT.js";import"./EmulatedBoldText-qk6rk8uL.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const nr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,nr as __namedExportsOrder,or as default};
