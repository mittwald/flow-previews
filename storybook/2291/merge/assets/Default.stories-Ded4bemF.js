import{r as x,j as e}from"./iframe-CGL3Ztd8.js";import{F as t}from"./FileDropZone-CFn7z39s.js";import{S as d}from"./Section-DahycNJE.js";import{F as u}from"./FileCardList-CwZJO_d7.js";import{F}from"./FileCard-BUTHbrh0.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-Df-4v6uT.js";import{B as f}from"./Button-CdFi_Gvp.js";import{A as b}from"./ActionGroup-CrScu9QD.js";import{_ as j,$ as B}from"./IconWarning-CMBZCdTm.js";import{H as g}from"./Heading-DBE0Oj6w.js";import{F as h}from"./FileField-DBffUCQE.js";import{T as O}from"./Text-_sa0OuU0.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-m7n9hDI3.js";import"./clsx-B-dksMZM.js";import"./flowComponent-WiCTTjdG.js";import"./index-P9tp8qCw.js";import"./index-eHspQkB2.js";import"./useFieldComponent-CHIggLRE.js";import"./utils-BPLHaINM.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BKxs7Hdx.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Dh-HsBYa.js";import"./useFocus-XDda6gbt.js";import"./useCollator-COOm3BGU.js";import"./context-BN4qQIb1.js";import"./useLocalizedStringFormatter-BjebV3sn.js";import"./useFocusRing-BtxSiiWP.js";import"./Button-CySqxiup.js";import"./ProgressBar-C4R_ruZv.js";import"./Label-BHYpf9e5.js";import"./Hidden-CROh8dKk.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BpWTOkQr.js";import"./useFocusable-MZ2jhLFm.js";import"./VisuallyHidden-DvGmoJqV.js";import"./ContextMenuSection-DZtKonlo.js";import"./Action-D7FDWjoF.js";import"./context-B-HkcFzY.js";import"./useStatic-aF_CYkuk.js";import"./browser-Dk-cIrUN.js";import"./getActionGroupSlot-D2X8q845.js";import"./dynamic-C8bvHICk.js";import"./Dialog-D5rIpj4K.js";import"./RSPContexts-Dbu6eLkb.js";import"./OverlayArrow-BX1C_Ifh.js";import"./useControlledState-DjoZo3jd.js";import"./Collection-De-gN1c8.js";import"./CollectionBuilder-DX9xRdaS.js";import"./SelectionIndicator-CKCmLDiO.js";import"./Separator-CQ2yo0aI.js";import"./SelectionManager-BkQuw4FT.js";import"./useEvent-C3Ld1mH0.js";import"./FocusScope-CzHXyZUV.js";import"./ColumnLayout-B2Q1WHnk.js";import"./Avatar-Bvs6nUeN.js";import"./AlertIcon-DM1knw9_.js";import"./Image-BaPPl3Mh.js";import"./Link-CU2-FrDI.js";import"./OptionsButton-QEg1U0b1.js";import"./ButtonView-DVA4InJ8.js";import"./ContextMenuTriggerView-Cnm6EaAX.js";import"./ContextMenuTrigger-C_yY_JWj.js";import"./OverlayTrigger-BmiisdnS.js";import"./OverlayContextProvider-vRTj2eZJ.js";import"./FieldError-Bg6s6kv2.js";import"./FieldError-CZz7QnF8.js";import"./AlertText-AGSpHO8N.js";import"./useRef-BOtt9UAz.js";import"./LoadingSpinner-ChXboWO2.js";import"./remote-DEzwzibY.js";import"./Heading-CeHJVvL3.js";import"./useFormValidation-DhAeSygX.js";import"./Input-CtqQGuCR.js";import"./EmulatedBoldText-CAg0SlO2.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
