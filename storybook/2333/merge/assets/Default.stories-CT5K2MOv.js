import{r as x,j as e}from"./iframe-Cbm1tYQ5.js";import{F as t}from"./FileDropZone-Xm71cClp.js";import{S as d}from"./Section-B0QB89CB.js";import{F as u}from"./FileCardList-iq5eVdzA.js";import{F}from"./FileCard-Rb-B2RIm.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-CR0iXgtB.js";import{B as f}from"./Button-Cqfz7zcL.js";import{A as b}from"./ActionGroup-DDbBTeyS.js";import{a0 as j,a1 as B}from"./IconWarning-HRESMERf.js";import{H as g}from"./Heading-DoywAf3I.js";import{F as h}from"./FileField-Csz2F00Y.js";import{T as O}from"./Text-K6yu7K7n.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-CvPsp9oo.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BdgFVdCI.js";import"./index-DnzctHoT.js";import"./index-cwYx15Z_.js";import"./useFieldComponent-BRiGBo1N.js";import"./utils-CwSfACxU.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CRfwxtsq.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BhJmZsby.js";import"./useFocus-DGTwh-gS.js";import"./useCollator-D1MkjfpC.js";import"./context-CpUEkiXT.js";import"./useLocalizedStringFormatter-DOOHcy82.js";import"./useFocusRing-2ds-u5nI.js";import"./Button-DMDpRFJa.js";import"./ProgressBar-BRc7Paog.js";import"./Label-z3gRbOqe.js";import"./Hidden-Ct3-vkmZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-D-cWxohr.js";import"./useFocusable-DfxkJnS0.js";import"./VisuallyHidden--ZEPdGNY.js";import"./ContextMenuSection-BbEgK5mq.js";import"./ActionBatch-CjHdyiP4.js";import"./useOverlayController-BSdz9lOP.js";import"./useStatic-CSSB8BCl.js";import"./browser-BO2LE4a1.js";import"./getActionGroupSlot-Bk49RJtR.js";import"./dynamic-CgrPgLPo.js";import"./Dialog-DOWWi4PD.js";import"./RSPContexts-BN50OY8k.js";import"./OverlayArrow-DLVTOKg_.js";import"./useControlledState-CcdBsJdv.js";import"./Collection-My4n8esd.js";import"./CollectionBuilder-BRfzWkKh.js";import"./SelectionIndicator-oJF9tjaE.js";import"./Separator-DziD0EOf.js";import"./SelectionManager-Xen2pH3E.js";import"./useEvent-CIGBudko.js";import"./FocusScope-BGzNCZ_B.js";import"./ColumnLayout-MK4K5M_D.js";import"./Avatar-DTM_v6Yb.js";import"./AlertIcon-CDhVv57V.js";import"./Image-Sc5pAFZ5.js";import"./Link-BAqQtX5j.js";import"./OptionsButton-CDR1c8rS.js";import"./ButtonView-DnjtrRMk.js";import"./ContextMenuTriggerView-CJwaDiSj.js";import"./ContextMenuTrigger-DAvanIE6.js";import"./OverlayTrigger-CQGtynqr.js";import"./OverlayContextProvider-DDpjWSCr.js";import"./FieldError-DdEKXl5v.js";import"./FieldError-b__4rZn4.js";import"./AlertText-JWgofNcm.js";import"./ActionGroupView-C0tm-8ht.js";import"./Content-Bz7pLqo2.js";import"./Modal-B7ggXlTZ.js";import"./Overlay-Cr8QYrRm.js";import"./LoadingSpinner-CziFUZ0y.js";import"./Flex-727o-fn3.js";import"./useRef-lBqR2J42.js";import"./remote-CNywZcFz.js";import"./Heading-CJu_lfUD.js";import"./useFormValidation-SL6QRRh_.js";import"./Input-KBjiAAgX.js";import"./EmulatedBoldText-DOwlcjUH.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
