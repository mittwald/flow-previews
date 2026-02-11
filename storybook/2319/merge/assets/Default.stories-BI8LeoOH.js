import{r as x,j as e}from"./iframe-lFICOVMG.js";import{F as t}from"./FileDropZone-DULT-4BO.js";import{S as d}from"./Section-Co3yAI3_.js";import{F as u}from"./FileCardList-CZvDrKfx.js";import{F}from"./FileCard-Ca6b2uKL.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-DK_60aBr.js";import{B as f}from"./Button-Cf-KBW4_.js";import{A as b}from"./ActionGroup-DwzvTFqg.js";import{a0 as j,a1 as B}from"./IconWarning-4K-DqIQK.js";import{H as g}from"./Heading-DcmPVh6J.js";import{F as h}from"./FileField-DvAaMt5J.js";import{T as O}from"./Text-BQwiR71m.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-u1-_3MLc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C618gI1l.js";import"./index-C8_VRp74.js";import"./index-DUpWbeKv.js";import"./useFieldComponent-70N6l4jn.js";import"./utils-DhhSlmx9.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CinvLCxd.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-A9ok_7_u.js";import"./useFocus-fqIQg8qR.js";import"./useCollator-DxqbkDwo.js";import"./context-Sy7BhgRt.js";import"./useLocalizedStringFormatter-D7SPmL6j.js";import"./useFocusRing-DeOtkCiq.js";import"./Button-Dv_7IODh.js";import"./ProgressBar-CyrV5_rh.js";import"./Label-nxHLTLm-.js";import"./Hidden--bJJbaK3.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BW_bFHXv.js";import"./useFocusable-ByJ0NNOg.js";import"./VisuallyHidden-BALX4uV5.js";import"./ContextMenuSection-CljVwRlE.js";import"./Action-Dv_Htl--.js";import"./context-ClWR88NP.js";import"./useStatic-DBynbgAg.js";import"./browser-CN95VINd.js";import"./getActionGroupSlot-Q4yoFQDr.js";import"./dynamic-0KpQiqy3.js";import"./Dialog-XpC0gjG5.js";import"./RSPContexts-BmMWqIzn.js";import"./OverlayArrow-B2p7lzkF.js";import"./useControlledState-BZJPMeD2.js";import"./Collection-CzN4wOJ8.js";import"./CollectionBuilder-B2841q0A.js";import"./SelectionIndicator-CW-bKP1t.js";import"./Separator-h54hNRT-.js";import"./SelectionManager-DOL2yaSe.js";import"./useEvent-DrI0uKrr.js";import"./FocusScope-CyJq-kGM.js";import"./ColumnLayout-CC3szLiF.js";import"./Avatar-B-1Wx_JH.js";import"./AlertIcon-BTBT69bo.js";import"./Image-B0RfXP0C.js";import"./Link-CbinGVB-.js";import"./OptionsButton-Clq7VgSo.js";import"./ButtonView-CpDocYTn.js";import"./ContextMenuTriggerView-BpKv5gb3.js";import"./ContextMenuTrigger-CrQy7955.js";import"./OverlayTrigger-NL0Si4MJ.js";import"./OverlayContextProvider-DLiN4Bef.js";import"./FieldError-Ba2n5nZe.js";import"./FieldError-DXs5idvC.js";import"./AlertText-D8XKoaWc.js";import"./useRef-E2-1OeOR.js";import"./LoadingSpinner-DqvYatLg.js";import"./remote-CRPYY61Z.js";import"./Heading-BZr6A1TW.js";import"./useFormValidation-BdcfYetn.js";import"./Input-Cm6GPhlW.js";import"./EmulatedBoldText-BsTUWTNh.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Xe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=y();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
