import{r as x,j as e}from"./iframe-lphi5Fln.js";import{F as t}from"./FileDropZone-dijl-99w.js";import{S as d}from"./Section-C4YcVKXh.js";import{F as u}from"./FileCardList-CEboDupR.js";import{F}from"./FileCard-Dgukm19L.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-BQBpjzpk.js";import{B as f}from"./Button-Luzxnqg_.js";import{A as b}from"./ActionGroup-B4BBpMWh.js";import{a0 as j,a1 as B}from"./IconWarning-Dv_szZY_.js";import{H as g}from"./Heading-CdmYtBXv.js";import{F as h}from"./FileField-D2Yt5kr5.js";import{T as O}from"./Text-DhRxTRp1.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-DExqTV5S.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D0jdWuAG.js";import"./index-BDdjr3yJ.js";import"./index-BirbEfWe.js";import"./useFieldComponent-6mmayeW0.js";import"./utils-Is-sFETw.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CwPOMTFI.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B3jPjt5T.js";import"./useFocus-BYwX3hbJ.js";import"./useCollator-wUqkBaab.js";import"./context-hul-JKEa.js";import"./useLocalizedStringFormatter-ZZw30b7A.js";import"./useFocusRing-y2NKP0hv.js";import"./Button-DBLw-vMJ.js";import"./ProgressBar-BlIkh8Rr.js";import"./Label-mBHJjPT6.js";import"./Hidden-B_Gq1hkl.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-ByR9A8gc.js";import"./useFocusable-CWG73OOy.js";import"./VisuallyHidden-DjAmLvSg.js";import"./ContextMenuSection-WR0YVO70.js";import"./Action-DdOAmdm4.js";import"./context-D_Cvxd07.js";import"./useStatic-DoydbngC.js";import"./browser-DxP0Rs6D.js";import"./getActionGroupSlot-4pUh-G0A.js";import"./dynamic-Dz56l0zD.js";import"./Dialog-any5Q92a.js";import"./RSPContexts-D5Dv-vEP.js";import"./OverlayArrow-CILdtqTg.js";import"./useControlledState-D2ulvinQ.js";import"./Collection-CsOde2Lf.js";import"./CollectionBuilder-Cmca66tQ.js";import"./SelectionIndicator-Dfc-TPkO.js";import"./Separator-DfUDQJPV.js";import"./SelectionManager-DEgIHQ63.js";import"./useEvent-CjOYrEf7.js";import"./FocusScope-DRoVwcjL.js";import"./ColumnLayout-BJbkd0vf.js";import"./Avatar-kIS_rMIm.js";import"./AlertIcon-Tp_Bhr3n.js";import"./Image-BvlB1P2-.js";import"./Link-D6SscMcU.js";import"./OptionsButton-BOMuX7Ke.js";import"./ButtonView-Cs6C0-sY.js";import"./ContextMenuTriggerView-DrRpHX9u.js";import"./ContextMenuTrigger-D1hDWL_K.js";import"./OverlayTrigger-DqdhJFXL.js";import"./OverlayContextProvider-Cdtv7zJY.js";import"./FieldError-CHFlSzPg.js";import"./FieldError-nA_6I3J3.js";import"./AlertText-BlI1Muxp.js";import"./useRef-jLzozQB2.js";import"./LoadingSpinner-Bhcgxzhg.js";import"./remote-B9VD8JHH.js";import"./Heading-DnWdAz5V.js";import"./useFormValidation-fTAeqOxz.js";import"./Input-CYD73VvK.js";import"./EmulatedBoldText-5wQJnzOA.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Xe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=y();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
