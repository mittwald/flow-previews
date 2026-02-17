import{r as x,j as e}from"./iframe-DwsGXJVG.js";import{F as t}from"./FileDropZone-a0rIgfRs.js";import{S as d}from"./Section-BZCnXK6X.js";import{F as u}from"./FileCardList-DAzHwTwF.js";import{F}from"./FileCard-DUMJejuC.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-DNLz9h87.js";import{B as f}from"./Button-CqL_vLUu.js";import{A as b}from"./ActionGroup-DKP4zTXr.js";import{a0 as j,a1 as B}from"./IconWarning-Ci9l-8b2.js";import{H as g}from"./Heading-BKffDfDn.js";import{F as h}from"./FileField-BPIAFk3Z.js";import{T as O}from"./Text-BV6qM8pO.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-D9NM187W.js";import"./clsx-B-dksMZM.js";import"./flowComponent-qxgtoIlH.js";import"./index-Bl29J3nk.js";import"./index-Z94wDe_B.js";import"./useFieldComponent-BobnjoTA.js";import"./utils-DRn9wprx.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-_i5SHi6c.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DGPoQV-x.js";import"./useFocus-DIaiJ-NX.js";import"./useCollator-GdkhHcGA.js";import"./context-aVGfmL8k.js";import"./useLocalizedStringFormatter-D7jMR4ny.js";import"./useFocusRing-DdmspiUG.js";import"./Button-m4IzIabh.js";import"./ProgressBar-C9wD8OqZ.js";import"./Label-C5wfq0Kb.js";import"./Hidden-CJnCNBv0.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CckbZpi5.js";import"./useFocusable-s83SGTZ-.js";import"./VisuallyHidden-Fvx90J8z.js";import"./ContextMenuSection-X-b9aW1Y.js";import"./ActionBatch-CjTnBW9C.js";import"./useOverlayController-Bn3a-KRG.js";import"./useStatic-BwWlrMEh.js";import"./browser-Cz_VorJk.js";import"./getActionGroupSlot-BRP57hZk.js";import"./dynamic-CY6fGUGp.js";import"./Dialog-M15I_L87.js";import"./RSPContexts-CFeGdYTg.js";import"./OverlayArrow-DURPAUST.js";import"./useControlledState-CRB4bW25.js";import"./Collection-BGu_nwcH.js";import"./CollectionBuilder-B17IJuT1.js";import"./SelectionIndicator-BqSVIa4a.js";import"./Separator-BaZLZFLd.js";import"./SelectionManager-TlInvFTF.js";import"./useEvent-nJ48QMBy.js";import"./FocusScope-4Fd3tZfM.js";import"./ColumnLayout-BKDLh7BH.js";import"./Avatar-BkYwlH5l.js";import"./AlertIcon-BhWII3Mz.js";import"./Image-C81S4_hw.js";import"./Link-JCbSZI1O.js";import"./OptionsButton-DDNwRooU.js";import"./ButtonView-CH2jD_Y9.js";import"./ContextMenuTriggerView-Bav_VWmp.js";import"./ContextMenuTrigger-BPepEjoh.js";import"./OverlayTrigger-t2QYWnlS.js";import"./OverlayContextProvider-CCF5PYOf.js";import"./FieldError-BPT_klMb.js";import"./FieldError-BZQRredP.js";import"./AlertText-D-LhYLA_.js";import"./ActionGroupView-MmtnTSxu.js";import"./Content-knY6EnXd.js";import"./Modal-BWobx_T-.js";import"./Overlay-BTIksBpa.js";import"./LoadingSpinner-DKEuwZ4C.js";import"./Flex-CPs0qh3k.js";import"./useRef-DR2JPmPu.js";import"./remote-Co6v5gQ1.js";import"./Heading-CsVZ9AEI.js";import"./useFormValidation-Bdpbh0WL.js";import"./Input-B80smJAQ.js";import"./EmulatedBoldText-C-itzyky.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
