import{r as x,j as e}from"./iframe-je41IZNf.js";import{F as t}from"./FileDropZone-DRfNIIqr.js";import{S as d}from"./Section-DOpZVh4G.js";import{F as u}from"./FileCardList-CzHbiMr5.js";import{F}from"./FileCard-CLQyQCR0.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-C7YuCwWl.js";import{B as f}from"./Button-CKqcv5FO.js";import{A as b}from"./ActionGroup-rchol9jY.js";import{a0 as j,a1 as B}from"./IconWarning-Bnxn-M7Y.js";import{H as g}from"./Heading-Bj867S3k.js";import{F as h}from"./FileField-p3MLLrVH.js";import{T as O}from"./Text-BC-RZ7k4.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-CwcsUGW0.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Byg_Wdja.js";import"./index-3zpYFWyF.js";import"./index-DBepN-OD.js";import"./useFieldComponent-b8-F_AVa.js";import"./utils-Q4wA2zXG.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DidYm6nP.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-_SRIQyLy.js";import"./useFocus-YEPBe3OK.js";import"./useCollator-5dtfDRbY.js";import"./context-533DYF-u.js";import"./useLocalizedStringFormatter-DHff-c09.js";import"./useFocusRing-DOADtTnm.js";import"./Button-Bv1GWar0.js";import"./ProgressBar-DuWvfVrm.js";import"./Label-BNl2hTKa.js";import"./Hidden-CA0I_dPB.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BcrJWT2n.js";import"./useFocusable-Ldg9iOHo.js";import"./VisuallyHidden-DTzU9Ikw.js";import"./ContextMenuSection-D3nZCtKg.js";import"./ActionBatch-ChKsIRTP.js";import"./useOverlayController-BUOVgKeB.js";import"./useStatic-DB-qeJ4V.js";import"./browser-Drae5Vqb.js";import"./getActionGroupSlot-RUbe0sa1.js";import"./dynamic-BrtagzWP.js";import"./Dialog-BA8GDzQ6.js";import"./RSPContexts-u6z1ubPU.js";import"./OverlayArrow-7pXV33mr.js";import"./useControlledState-Behjjcy6.js";import"./Collection-fxANXXK9.js";import"./CollectionBuilder-BswnoYzM.js";import"./SelectionIndicator-DrqbtAz1.js";import"./Separator-CRKtuO5D.js";import"./SelectionManager-DarNfpx7.js";import"./useEvent-BrmATdRq.js";import"./FocusScope-ClZvkh4F.js";import"./ColumnLayout-BuTf6BbT.js";import"./Avatar-DAEYxPtj.js";import"./AlertIcon-g4_I2qja.js";import"./Image-CBQEKvMd.js";import"./Link-D9QkJa0E.js";import"./OptionsButton-OgbXpMWn.js";import"./ButtonView-Dl5Y4ZWm.js";import"./ContextMenuTriggerView-Dho_xsoY.js";import"./ContextMenuTrigger-D8i0SE5i.js";import"./OverlayTrigger-Bv_i_Yla.js";import"./OverlayContextProvider-hjkTcZbT.js";import"./FieldError-BATB6zBo.js";import"./FieldError-MnbTPawu.js";import"./AlertText-B3BG9g2L.js";import"./ActionGroupView-CNDRVPWd.js";import"./Content-CI6m-d_y.js";import"./Modal-CPZv7ujk.js";import"./Overlay-B0VzEzJb.js";import"./LoadingSpinner-DltTQrQc.js";import"./Flex--JtxxRJ0.js";import"./useRef-DwDjpRrm.js";import"./remote-CVh73cse.js";import"./Heading-0rwlvdDR.js";import"./useFormValidation-DLIHXRbT.js";import"./Input-U4HmeWQK.js";import"./EmulatedBoldText-BdEDO8G6.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
