import{r as x,j as e}from"./iframe-DITN2CQJ.js";import{F as t}from"./FileDropZone-iI5K8Atr.js";import{S as d}from"./Section-cnEthzmo.js";import{F as u}from"./FileCardList-DtEDJ83k.js";import{F}from"./FileCard-CrP0AoIx.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-DxGsaWiK.js";import{B as f}from"./Button-CLzuKoaU.js";import{A as b}from"./ActionGroup-eIIxfA96.js";import{_ as j,$ as B}from"./IconWarning-CkCNWluG.js";import{H as g}from"./Heading-DKeH_-ca.js";import{F as h}from"./FileField-xJhp80TK.js";import{T as O}from"./Text-CADg3_Hr.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-O2QMN9Aj.js";import"./clsx-B-dksMZM.js";import"./flowComponent-dTWTX0ol.js";import"./index-DMvUg0Ng.js";import"./index-CwMYtruy.js";import"./useFieldComponent-CFjzq3ou.js";import"./utils-BKdkt1x6.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-C3mpKQD6.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DxgBaz-V.js";import"./useFocus-jV9bksDI.js";import"./useCollator-CnUW-4Ed.js";import"./context-DSmvJi-9.js";import"./useLocalizedStringFormatter-Bu36a-Wr.js";import"./useFocusRing-DGbEI6JP.js";import"./Button-9nZEjgFJ.js";import"./ProgressBar-DwMRU30B.js";import"./Label-B4MEtlDn.js";import"./Hidden-C_aQw1AA.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bo3aLfgI.js";import"./useFocusable-DLFLzCMb.js";import"./VisuallyHidden-Mqey0SE0.js";import"./ContextMenuSection-CqDMtRiW.js";import"./Action-2qaAsuOc.js";import"./context-DvDSM24h.js";import"./useStatic-CpFYvUzY.js";import"./browser-BAwbicjx.js";import"./getActionGroupSlot-ZZyd_ZT4.js";import"./dynamic-BTg8la0V.js";import"./Dialog-74mAI6R3.js";import"./RSPContexts-1XCmuogP.js";import"./OverlayArrow-IBPtGci-.js";import"./useControlledState-CEL2ngQO.js";import"./Collection-tRMlz9kZ.js";import"./CollectionBuilder-B14_oKNG.js";import"./SelectionIndicator-tBe1rngb.js";import"./Separator-DJanDtF2.js";import"./SelectionManager-C1JHyJxB.js";import"./useEvent-ByNOcoAW.js";import"./FocusScope-1T1zyEBb.js";import"./ColumnLayout-C-8hNwT-.js";import"./Avatar-BTURB4EG.js";import"./AlertIcon-C5wCr6jC.js";import"./Image-uOs0VAgc.js";import"./Link-CaOo1PrT.js";import"./OptionsButton-MlBhqw3Q.js";import"./ButtonView-Cvj-tSsY.js";import"./ContextMenuTriggerView-YZghS6Ah.js";import"./ContextMenuTrigger-D54Q62Gr.js";import"./OverlayTrigger-Bs0oRsy1.js";import"./OverlayContextProvider-Dgir1kFJ.js";import"./FieldError-B_BzuzIl.js";import"./FieldError-DyUcL9VR.js";import"./AlertText-Kmcv7hqN.js";import"./useRef-DMCflsxx.js";import"./LoadingSpinner-BNTqIab3.js";import"./remote-C6sL0hfk.js";import"./Heading-DwqLUz9F.js";import"./useFormValidation-PWdhcFqO.js";import"./Input-Ct_cW2oz.js";import"./EmulatedBoldText-BtAVmnSC.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
