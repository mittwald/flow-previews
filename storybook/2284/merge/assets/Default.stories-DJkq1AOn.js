import{r as x,j as e}from"./iframe-BbsOAs33.js";import{F as t}from"./FileDropZone-CkCtfISi.js";import{S as d}from"./Section-Cne65CO2.js";import{F as u}from"./FileCardList-BDAmccBh.js";import{F}from"./FileCard-C3sOqhW1.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-DaMzmg4c.js";import{B as f}from"./Button-CAGXh9YY.js";import{A as b}from"./ActionGroup-VbmjmzLd.js";import{$ as j,a0 as B}from"./IconWarning-BG17vbyg.js";import{H as g}from"./Heading-BC6iu52J.js";import{F as h}from"./FileField-DWYjZKZa.js";import{T as O}from"./Text-BYxWYBBY.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-Cy5p2h8Y.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CnY6R6y_.js";import"./index-hsH483Jp.js";import"./index-32jMpZgo.js";import"./useFieldComponent-c0I5eEtM.js";import"./utils-d4vW56Wr.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-C1_k2kAR.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BZoz0BQC.js";import"./useFocus-8sJeBC00.js";import"./useCollator-Ac8UQMZt.js";import"./context-DDHwgpv7.js";import"./useLocalizedStringFormatter-Cn9pdCjE.js";import"./useFocusRing-B8FmEpoX.js";import"./Button-tZHGwxXU.js";import"./ProgressBar-GthXoJbW.js";import"./Label-jCbgdnWR.js";import"./Hidden-C9ZrqSun.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CuEkD-Mt.js";import"./useFocusable-CRykt1O9.js";import"./VisuallyHidden-D-GMXsu-.js";import"./ContextMenuSection-Dt_P0EQ4.js";import"./Action-BXhMVvh_.js";import"./context-_vxrJXzy.js";import"./useStatic-PZIJlmDl.js";import"./browser-6_CJeJSO.js";import"./getActionGroupSlot-DqvhX6L8.js";import"./dynamic-CoVYgUcD.js";import"./Dialog-Ch_CeJ5E.js";import"./RSPContexts-DfamIfkg.js";import"./OverlayArrow-N6t0bVoH.js";import"./useControlledState-QxMMjnNS.js";import"./Collection-Bp73NzW5.js";import"./CollectionBuilder-BFwWw2AW.js";import"./SelectionIndicator-Da0zjLKe.js";import"./Separator-Qwz2H95Y.js";import"./SelectionManager-BdWPcNcZ.js";import"./useEvent-kpAjV35P.js";import"./FocusScope-tc_BWGmQ.js";import"./ColumnLayout-y1xD9Abm.js";import"./Avatar-ByU92Suh.js";import"./AlertIcon-B34gK9Vj.js";import"./Image-LPw_4sIz.js";import"./Link-CZ64J4jt.js";import"./OptionsButton-spyMUjhU.js";import"./ButtonView-BQhPvsO2.js";import"./ContextMenuTriggerView-CIrIKpUA.js";import"./ContextMenuTrigger-CNa88teJ.js";import"./OverlayTrigger-C8Sbeft1.js";import"./OverlayContextProvider-Byu7izWK.js";import"./FieldError-DSzt6ekN.js";import"./FieldError-3tWBh0vH.js";import"./AlertText-xz7LDcmS.js";import"./useRef-D3zVPm3c.js";import"./LoadingSpinner-CNcanuZc.js";import"./remote-DIEpRnMd.js";import"./Heading-Delp_XvT.js";import"./useFormValidation-DyJaMlWv.js";import"./Input-47UPOEwv.js";import"./EmulatedBoldText-Bt8Ku6uY.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
