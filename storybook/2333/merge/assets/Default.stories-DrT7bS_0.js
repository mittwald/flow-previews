import{r as x,j as e}from"./iframe-DQkRMfo_.js";import{F as t}from"./FileDropZone-DTaY-0eP.js";import{S as d}from"./Section-L3monAfc.js";import{F as u}from"./FileCardList-kmM_I9e-.js";import{F}from"./FileCard-DWBKs5qg.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-CYoqNksw.js";import{B as f}from"./Button-CTuc7Sb1.js";import{A as b}from"./ActionGroup-CsHM66H4.js";import{a0 as j,a1 as B}from"./IconWarning-D2qqMRrO.js";import{H as g}from"./Heading-fqnL9RrB.js";import{F as h}from"./FileField-BdeU2I2v.js";import{T as O}from"./Text-DZXogYJp.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-BoulLF5K.js";import"./clsx-B-dksMZM.js";import"./flowComponent-COr712P3.js";import"./index-BIVF9xJy.js";import"./index-BmRrr2ih.js";import"./useFieldComponent-DKGKIVkH.js";import"./utils-Bfb5K-41.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BXxFgtol.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BKmqgaQh.js";import"./useFocus-BSyQYzHK.js";import"./useCollator-DSD1PPYr.js";import"./context-XfcuIoVT.js";import"./useLocalizedStringFormatter-DNh09jdA.js";import"./useFocusRing-CrR0o1Yj.js";import"./Button-BqHvWFWe.js";import"./ProgressBar-D5_QzmmX.js";import"./Label-BXbqiwP4.js";import"./Hidden-xLATKa2n.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-D8-KGEPi.js";import"./useFocusable-BWtjl4YZ.js";import"./VisuallyHidden-CreEQc-P.js";import"./ContextMenuSection-CK2JeTTJ.js";import"./ActionBatch-CnbeSwOL.js";import"./useOverlayController-CkVtRdpi.js";import"./useStatic-D2wW9JFL.js";import"./browser-BnHwZVCd.js";import"./getActionGroupSlot-BzFwuQYP.js";import"./dynamic-Bf6rAVHb.js";import"./Dialog-cFet4L4X.js";import"./RSPContexts-Bk8qKDL5.js";import"./OverlayArrow-CqKSMCIB.js";import"./useControlledState-CA4wGiI1.js";import"./Collection-D_m0oZ4K.js";import"./CollectionBuilder-DaRvbySL.js";import"./SelectionIndicator-D4WNQsp1.js";import"./Separator-6qwbqbNk.js";import"./SelectionManager-pbpEpJnu.js";import"./useEvent-qZsiEiZh.js";import"./FocusScope-DAhxUr4_.js";import"./ColumnLayout-CZuVVkD3.js";import"./Avatar-BzesQfiP.js";import"./AlertIcon-x4dcgk_u.js";import"./Image-DihR5W5v.js";import"./Link-OZkk74Cu.js";import"./OptionsButton-wK2_s6wt.js";import"./ButtonView-CdT4dZVW.js";import"./ContextMenuTriggerView-gr0gidVi.js";import"./ContextMenuTrigger-DO5VZIhA.js";import"./OverlayTrigger-0AVD2RuP.js";import"./OverlayContextProvider-jcPJZwNr.js";import"./FieldError-Bk57uQQs.js";import"./FieldError-BDV0g7vQ.js";import"./AlertText-CwnG_GRo.js";import"./ActionGroupView-3Ij1E1q5.js";import"./Content-o4sDFduR.js";import"./Modal-CJ5SZ1IH.js";import"./Overlay-Z1E506pH.js";import"./LoadingSpinner-BfuFQdyU.js";import"./Flex-DdCAiEkA.js";import"./useRef-D8jPCy5Y.js";import"./remote-CkmXCgJk.js";import"./Heading-CDc2BCk7.js";import"./useFormValidation-Baae3HaH.js";import"./Input-DgbrTWmb.js";import"./EmulatedBoldText-BSCRafBI.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
