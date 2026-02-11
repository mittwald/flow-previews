import{r as x,j as e}from"./iframe-CLDMeli7.js";import{F as t}from"./FileDropZone-BN_U3zF-.js";import{S as d}from"./Section-28IJbL-t.js";import{F as u}from"./FileCardList-BhlTZw3y.js";import{F}from"./FileCard-Cxb8W_DG.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-B9K5TeM3.js";import{B as f}from"./Button-BzVheXKP.js";import{A as b}from"./ActionGroup-BbpNtRTX.js";import{a0 as j,a1 as B}from"./IconWarning-p4W4x8Yn.js";import{H as g}from"./Heading-Cd0Jc4Sk.js";import{F as h}from"./FileField-BplY_hV0.js";import{T as O}from"./Text-CP7Ip6pC.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-DYgjEM8y.js";import"./clsx-B-dksMZM.js";import"./flowComponent-oV-3iEWg.js";import"./index-qO7MtLeC.js";import"./index-9eDA9WpJ.js";import"./useFieldComponent-BtEJhhry.js";import"./utils-CeJP1xg2.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-Doo8ujkC.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BXv9j1Wx.js";import"./useFocus-DccW9XIs.js";import"./useCollator-CMIPrcXy.js";import"./context-CJeO-2nS.js";import"./useLocalizedStringFormatter-BL7vQ06a.js";import"./useFocusRing-D-0mJeTX.js";import"./Button-DkOX4zii.js";import"./ProgressBar-DFW8NzQ8.js";import"./Label-CvZQpZvf.js";import"./Hidden-B_4q2AdF.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-5-cRdm9R.js";import"./useFocusable-B-HKy_Nj.js";import"./VisuallyHidden--NZ_Ses-.js";import"./ContextMenuSection-BNGygWDz.js";import"./Action-B36_bDyV.js";import"./context-ZEvjkl_L.js";import"./useStatic-CZ7UkCej.js";import"./browser-DchrXhwC.js";import"./getActionGroupSlot-C0uwUGhO.js";import"./dynamic-CQUXTbxb.js";import"./Dialog-BqnORwX4.js";import"./RSPContexts-SpTJ-p__.js";import"./OverlayArrow-B5yP7TKG.js";import"./useControlledState-DtGWcuCb.js";import"./Collection-BC2ZOpJQ.js";import"./CollectionBuilder-CH8X2SMa.js";import"./SelectionIndicator-DBZDkcHI.js";import"./Separator-CSbFrQJI.js";import"./SelectionManager-Cf9boCVT.js";import"./useEvent-BRgO1QZf.js";import"./FocusScope-CDi_kcpI.js";import"./ColumnLayout-Bd91huSi.js";import"./Avatar-BVG1pB6K.js";import"./AlertIcon-BgEbwDh4.js";import"./Image-B6ot2O7n.js";import"./Link-D93xlOwJ.js";import"./OptionsButton-KfdsAa1J.js";import"./ButtonView-DsZzpVxf.js";import"./ContextMenuTriggerView-BYzOcxuz.js";import"./ContextMenuTrigger-44VHRqHU.js";import"./OverlayTrigger-BIW3wf-9.js";import"./OverlayContextProvider-D58HtU5y.js";import"./FieldError-DepvOCr4.js";import"./FieldError-DzENXQGA.js";import"./AlertText-tt9Tj7ZR.js";import"./useRef-DgpT8kFB.js";import"./LoadingSpinner-DoDeCRPK.js";import"./remote-B4IT0gy2.js";import"./Heading-6_ezcD4u.js";import"./useFormValidation-DfHAcEvH.js";import"./Input-imA8gTQv.js";import"./EmulatedBoldText-B7dHFZ_g.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Xe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=y();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
