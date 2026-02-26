import{r as x,j as e}from"./iframe-teIxY4wP.js";import{F as t}from"./FileDropZone-COjEUU8i.js";import{S as d}from"./Section-CeVx7gOS.js";import{F as u}from"./FileCardList-DsriK9TZ.js";import{F}from"./FileCard-DEIY7Sok.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-BGJ4soxO.js";import{B as f}from"./Button-CCmGuoae.js";import{A as b}from"./ActionGroup-CZ4gZfnQ.js";import{a0 as j,a1 as B}from"./IconWarning-C8c-iA3p.js";import{H as g}from"./Heading-BcZ49Txx.js";import{F as h}from"./FileField-D4MJZF3c.js";import{T as O}from"./Text-CB74-0Ir.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-Bm063Oyo.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B3BP6Vj1.js";import"./index-Ctx6H3Hx.js";import"./index-SbFVnFKt.js";import"./useFieldComponent-DaZL5efl.js";import"./utils-C8wUhSun.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BEd6-Qqe.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BwGc14jy.js";import"./useFocus-Pnl5w-Ue.js";import"./useCollator-Dsy6DAyA.js";import"./context-Bkxu1haQ.js";import"./useLocalizedStringFormatter-cjXC4-Kw.js";import"./useFocusRing-DM5Gti31.js";import"./Button-DPcEERaP.js";import"./ProgressBar-uiVLSJyQ.js";import"./Label-CnpPAxdS.js";import"./Hidden-CVxq3czE.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Znh85jsw.js";import"./useFocusable-C4kMCM88.js";import"./VisuallyHidden-BEOGf6u-.js";import"./ContextMenuSection-DZpqaSo0.js";import"./ActionBatch-BzoAcrhu.js";import"./useOverlayController-2V9dFGfh.js";import"./useStatic-JzrpAx77.js";import"./browser-ClA0f7pc.js";import"./getActionGroupSlot-BwsAD19l.js";import"./dynamic-Bd0vnJCs.js";import"./Dialog-CPTLkUM-.js";import"./RSPContexts-DVypfZug.js";import"./OverlayArrow-BnOVUBMe.js";import"./useControlledState-Dnjkc9fO.js";import"./Collection-CPWnsoE7.js";import"./CollectionBuilder-6gbuY_L9.js";import"./SelectionIndicator-DFQRQ6iO.js";import"./Separator-BaKjxxxO.js";import"./SelectionManager-Th26CzKh.js";import"./useEvent-BcVdyav8.js";import"./FocusScope-Crjq_ymp.js";import"./ColumnLayout-BbHxHfco.js";import"./Avatar-BzBo61eF.js";import"./AlertIcon-nbGMee0S.js";import"./Image-C6K8FzMl.js";import"./Link-BvNtJdb1.js";import"./OptionsButton-DgUaJwOb.js";import"./ButtonView-JoXTWy5r.js";import"./ContextMenuTriggerView-D-Np_MOG.js";import"./ContextMenuTrigger-DiTJhkyZ.js";import"./OverlayTrigger-DxY4DuAp.js";import"./OverlayContextProvider-BhqlYdhN.js";import"./FieldError-4X4kCiGy.js";import"./FieldError-HPfFKZ-Z.js";import"./AlertText-B6Az6kDS.js";import"./ActionGroupView-CAxVNdho.js";import"./Content-C4FtWXhl.js";import"./Modal-asH2HsR2.js";import"./Overlay-C9X8JugR.js";import"./LoadingSpinner-CKqfIoaL.js";import"./Flex-B1uMy55R.js";import"./useRef-DqhFWaAg.js";import"./remote-DC3yMzFm.js";import"./Heading-CqSJbJuk.js";import"./useFormValidation-CRVUVzjp.js";import"./Input-D4TpTGNB.js";import"./EmulatedBoldText-C0BZfzN3.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
