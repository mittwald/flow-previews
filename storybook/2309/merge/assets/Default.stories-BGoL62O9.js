import{r as x,j as e}from"./iframe-BV_gLY1W.js";import{F as t}from"./FileDropZone-COzqwgc9.js";import{S as d}from"./Section-DFw7sWw1.js";import{F as u}from"./FileCardList-Bvm1DjHk.js";import{F}from"./FileCard-D7huBOvQ.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-pBI61JFE.js";import{B as f}from"./Button-SSCEZ0RO.js";import{A as b}from"./ActionGroup-DGQFtnEO.js";import{_ as j,$ as B}from"./IconWarning-BvnX4fSp.js";import{H as g}from"./Heading-DoDWvzJr.js";import{F as h}from"./FileField-D0L28VNB.js";import{T as O}from"./Text-B1ZcDWdT.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-CzuDKR9_.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DjNrJ_Te.js";import"./index-D8dVI0GG.js";import"./index-iDKz2btu.js";import"./useFieldComponent-Ciy1vkCA.js";import"./utils-pcZMLEVF.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-x_iEgbKh.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BcIwqyBf.js";import"./useFocus-BhZlDk36.js";import"./useCollator-DxbGnjFN.js";import"./context-D0kYsfYD.js";import"./useLocalizedStringFormatter-DG58vGXD.js";import"./useFocusRing-DHBFiW-v.js";import"./Button-BTyL1bMd.js";import"./ProgressBar-d-6uKhr8.js";import"./Label-TEYoBhWb.js";import"./Hidden-DpRhW0r1.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Cpaxayx2.js";import"./useFocusable-CF0VfUE0.js";import"./VisuallyHidden-282mV7GD.js";import"./ContextMenuSection-uCRJ4fX1.js";import"./Action-B44IIYnD.js";import"./context-DsGc8Cs0.js";import"./useStatic-Bro5j9qe.js";import"./browser-RRcj6Eel.js";import"./getActionGroupSlot-CKRbyaMP.js";import"./dynamic-D0Gso-mt.js";import"./Dialog-DuYLlPOJ.js";import"./RSPContexts-C37Ie1k0.js";import"./OverlayArrow-BxTjv8xX.js";import"./useControlledState-D8GCi_t3.js";import"./Collection-B2K0MU6U.js";import"./CollectionBuilder-k5dkf4C0.js";import"./SelectionIndicator-Bw1WJJhz.js";import"./Separator-C5PKpWVh.js";import"./SelectionManager-DIHL1TL9.js";import"./useEvent-B4HwFCuu.js";import"./FocusScope-Cdk-yaL2.js";import"./ColumnLayout-AfExfjKB.js";import"./Avatar-Dc0rTh7G.js";import"./AlertIcon-CdR_G7Yx.js";import"./Image-DUaZMfYQ.js";import"./Link-Bo-tE7zs.js";import"./OptionsButton-D8dr76Q6.js";import"./ButtonView-ByOlINbI.js";import"./ContextMenuTriggerView-CCatTmam.js";import"./ContextMenuTrigger-DER3e-kg.js";import"./OverlayTrigger-DnOAVCO5.js";import"./OverlayContextProvider-Umj4RmK7.js";import"./FieldError-Du2SwoFV.js";import"./FieldError-Q2svFxIr.js";import"./AlertText-9lAe-Sfe.js";import"./useRef--g3BlvKa.js";import"./LoadingSpinner-DwHnxPWs.js";import"./remote-DzXnO2Bt.js";import"./Heading-CTg1mIVh.js";import"./useFormValidation-Bzs4UsOG.js";import"./Input-tiA0LuFc.js";import"./EmulatedBoldText-U0Mbqk2D.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=y();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
