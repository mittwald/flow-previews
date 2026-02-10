import{r as x,j as e}from"./iframe-HxmydubW.js";import{F as t}from"./FileDropZone-C9lJ4J36.js";import{S as d}from"./Section-DaADFqCH.js";import{F as u}from"./FileCardList-B-Tc7mvu.js";import{F}from"./FileCard-DeFIkUlz.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-H0M11BQL.js";import{B as f}from"./Button-CfZWs4w7.js";import{A as b}from"./ActionGroup-D6Gqna5x.js";import{a0 as j,a1 as B}from"./IconWarning-C9xwJqAl.js";import{H as g}from"./Heading-C9JwdE7Y.js";import{F as h}from"./FileField-DBRAx_d6.js";import{T as O}from"./Text-CUJOJiDD.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-B8SmO1Yg.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DGGyXaO_.js";import"./index-Ck9gKEcY.js";import"./index-CEuE-GZL.js";import"./useFieldComponent-Bahj-THY.js";import"./utils-QtLN3P4K.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CyO0jXov.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CkTRhQb0.js";import"./useFocus-AF-IcVAt.js";import"./useCollator-qjE4hkog.js";import"./context-CAIZZp13.js";import"./useLocalizedStringFormatter-Bu1c0OhT.js";import"./useFocusRing-CAJt6BJw.js";import"./Button-B_Zn8gpO.js";import"./ProgressBar-BLMl0tpz.js";import"./Label-DaNiLy_u.js";import"./Hidden-CAR-DQuE.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-yluX3X-J.js";import"./useFocusable-H6SSWU_B.js";import"./VisuallyHidden-BPW-z4K2.js";import"./ContextMenuSection-DBGHgVvh.js";import"./ActionBatch-ChYSHCOJ.js";import"./context-I_ID-Cd_.js";import"./useStatic-ffXkYFOn.js";import"./browser-XpDtWA4a.js";import"./getActionGroupSlot-CHtGBuk8.js";import"./dynamic-D7w-3Mi4.js";import"./Dialog-BZeO2Xjo.js";import"./RSPContexts-Cjdg_leM.js";import"./OverlayArrow-CRirkybg.js";import"./useControlledState-N-j6hnQm.js";import"./Collection-Dh0U_T2u.js";import"./CollectionBuilder-DZvSqS6p.js";import"./SelectionIndicator-dYnAwztx.js";import"./Separator-D3qRtCTd.js";import"./SelectionManager-BhAKHVOw.js";import"./useEvent-Br9MlQ6p.js";import"./FocusScope-D_FLL8Ht.js";import"./ColumnLayout-BL0yItzL.js";import"./Avatar-BbAtdfTe.js";import"./AlertIcon-BFPz9yZd.js";import"./Image-C5yUK0KE.js";import"./Link-otQh8KUZ.js";import"./OptionsButton-D6LFjdND.js";import"./ButtonView-BtepizEV.js";import"./ContextMenuTriggerView-8VIOrFzX.js";import"./ContextMenuTrigger-6_7qmb3j.js";import"./OverlayTrigger-DvKHyWhH.js";import"./OverlayContextProvider-e8rtjnFo.js";import"./FieldError-431GXjJZ.js";import"./FieldError-BaqMj9An.js";import"./AlertText-CJjUY60n.js";import"./useRef-D0OjaGz6.js";import"./LoadingSpinner-CzIk11gH.js";import"./remote-fubbDoJI.js";import"./Heading-B7f00fHt.js";import"./useFormValidation-BHp8DdfT.js";import"./Input-Bo21dlHq.js";import"./EmulatedBoldText-tUaMuzLe.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Xe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=y();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
