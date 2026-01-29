import{r as x,j as e}from"./iframe-CdVpWnc8.js";import{F as t}from"./FileDropZone-BpqciYKo.js";import{S as d}from"./Section-3RcIg-Ej.js";import{F as u}from"./FileCardList-B7fUqvr9.js";import{F}from"./FileCard-D4j60tb4.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-CR4d1ryI.js";import{B as f}from"./Button-BYd_Eo9F.js";import{A as b}from"./ActionGroup-CbgbDPIr.js";import{_ as j,$ as B}from"./IconWarning-Ba9_xFUh.js";import{H as g}from"./Heading-6HXp4W0i.js";import{F as h}from"./FileField-Bqj-5Qdp.js";import{T as O}from"./Text-KDInGMjK.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-Bq9PkqmH.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BmLnRlWr.js";import"./index-CCZSieOH.js";import"./index-CPzHqOMO.js";import"./useFieldComponent-pH8UQhzW.js";import"./utils-ClIic5nH.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DmePsxpx.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BKXkodj0.js";import"./useFocus-DZX-xW1t.js";import"./useCollator-BLLfUz8T.js";import"./context-Bg-StFGN.js";import"./useLocalizedStringFormatter-9E8dKOP5.js";import"./useFocusRing-dkAGsBkQ.js";import"./Button-skPPmItL.js";import"./ProgressBar-Dg8vamQS.js";import"./Label-BlSWZv6R.js";import"./Hidden-47TYSTIy.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CCAUNqmr.js";import"./useFocusable-CzSEJZTE.js";import"./VisuallyHidden-Cqn4F1Sv.js";import"./ContextMenuSection-CBva2Bvf.js";import"./Action-eeXzbiuZ.js";import"./context-BV7cuRYy.js";import"./useStatic-DSoJUNwo.js";import"./browser-CWGq_9Zm.js";import"./getActionGroupSlot-DFI-GPKm.js";import"./dynamic-Dpbpwd3I.js";import"./Dialog-oT8hORp9.js";import"./RSPContexts-PfgqXwd-.js";import"./OverlayArrow-CCFRyk0z.js";import"./useControlledState-B7ztCH5k.js";import"./Collection-1Gj7oR7J.js";import"./CollectionBuilder-Dpff-p5v.js";import"./SelectionIndicator-DTqsITpO.js";import"./Separator-BKBkElFN.js";import"./SelectionManager-frOqR2a6.js";import"./useEvent-lhMNtMgY.js";import"./FocusScope-D5Cgd53Y.js";import"./ColumnLayout-BCh6NKgi.js";import"./Avatar-DQ94gf96.js";import"./AlertIcon-DVQphOxP.js";import"./Image-DinQpVtF.js";import"./Link-I6ryM9ra.js";import"./OptionsButton-BqwNgeWX.js";import"./ButtonView-TCVIqSjz.js";import"./ContextMenuTriggerView-DaZlutur.js";import"./ContextMenuTrigger-Cr6GC5zX.js";import"./OverlayTrigger-DZLdxrfo.js";import"./OverlayContextProvider-CG_F_ZAP.js";import"./FieldError-0fRgmDO9.js";import"./FieldError-U_T6R5BY.js";import"./AlertText-DPJNXYjA.js";import"./useRef-DpTmSntJ.js";import"./LoadingSpinner-CjZME6JA.js";import"./remote-BheCwFS8.js";import"./Heading-BFrSNe6W.js";import"./useFormValidation-5isdk9bY.js";import"./Input-CCUGOCeS.js";import"./EmulatedBoldText-BFXdzchX.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
