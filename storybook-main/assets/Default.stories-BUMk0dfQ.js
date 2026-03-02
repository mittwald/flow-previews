import{r as x,j as e}from"./iframe-gtGtPSGX.js";import{F as t}from"./FileDropZone-CzwdkXqc.js";import{S as d}from"./Section-BQknUcw4.js";import{F as u}from"./FileCardList-B7ezKWwV.js";import{F}from"./FileCard-Yxxybc4j.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-B2s8Dmn4.js";import{B as f}from"./Button-CvhKZeTQ.js";import{A as b}from"./ActionGroup-CLeHwFAs.js";import{a0 as j,a1 as B}from"./IconWarning-BtUUciVj.js";import{H as g}from"./Heading-DqsWSEZ3.js";import{F as h}from"./FileField-Celzihfz.js";import{T as O}from"./Text-QzTdDFQg.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-CbcLbJsI.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BXctKB_l.js";import"./index-D4jcCax4.js";import"./index-CkPgzcm3.js";import"./useFieldComponent-BaX-M8wV.js";import"./utils-1b_KoCGs.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-B8kBB-Il.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BqGs6HWh.js";import"./useFocus-BGYZap87.js";import"./useCollator-C3hQgpVA.js";import"./context-B_6Y7rB4.js";import"./useLocalizedStringFormatter-BxxPIcIh.js";import"./useFocusRing-jJpNIKKF.js";import"./Button-Bw2A7mA1.js";import"./ProgressBar-D4vmn95_.js";import"./Label-Ca_2SnGY.js";import"./Hidden-DP7zwehU.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-ub7fcIm5.js";import"./useFocusable-uEYYPBvA.js";import"./VisuallyHidden-D8bGSG_p.js";import"./ContextMenuSection-CDCzjc8m.js";import"./ActionBatch-C6WY1Daf.js";import"./useOverlayController-ljUuhRV3.js";import"./useStatic-CcUMZ2Ma.js";import"./browser-BLXRbgM1.js";import"./getActionGroupSlot-c8xeMW3D.js";import"./dynamic-CLlIyxqz.js";import"./Dialog-_BBlF040.js";import"./RSPContexts-L8MWaJ6n.js";import"./OverlayArrow-D9TvGvP1.js";import"./useControlledState-a_M_Sxv2.js";import"./Collection-B35z872H.js";import"./CollectionBuilder-BwhyDG2L.js";import"./SelectionIndicator-DuOMWJ4l.js";import"./Separator-WOt-iCvu.js";import"./SelectionManager-ab1NruD8.js";import"./useEvent-BWe1IiIa.js";import"./FocusScope-d04sRaMv.js";import"./ColumnLayout-QU4_RQ60.js";import"./Avatar-BL2jrYvb.js";import"./AlertIcon-BrLsNTwF.js";import"./Image-1XMwESyI.js";import"./Link-DAYvgODO.js";import"./OptionsButton-Dic9XABz.js";import"./ButtonView-VtGuDE6z.js";import"./ContextMenuTriggerView-BNL8wyfv.js";import"./ContextMenuTrigger-D1jiwTPQ.js";import"./OverlayTrigger-CmRNrsxN.js";import"./OverlayContextProvider-BlsD-E7F.js";import"./FieldError-co03Ctd_.js";import"./FieldError-DenhE7nb.js";import"./AlertText-BWmstvFc.js";import"./ActionGroupView-D0kXKbJs.js";import"./Content-BghcAC3J.js";import"./Modal-d042eYeA.js";import"./Overlay-CLrFplCq.js";import"./LoadingSpinner-DnqSg6_k.js";import"./Flex-D8ogRMIF.js";import"./useRef-IjWKQgTn.js";import"./remote-DGcAtBID.js";import"./Heading-BlK6Cy5i.js";import"./useFormValidation-BQy4AKy0.js";import"./Input-1coMMItc.js";import"./EmulatedBoldText-Cj02Cwni.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
