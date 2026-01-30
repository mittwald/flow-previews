import{r as x,j as e}from"./iframe-CZIIjdGx.js";import{F as t}from"./FileDropZone-BevtuFPR.js";import{S as d}from"./Section-B_Dc3QaP.js";import{F as u}from"./FileCardList-BoNfrzYY.js";import{F}from"./FileCard-CdtuUfn3.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-DxytxUCJ.js";import{B as f}from"./Button-ECMB5KMY.js";import{A as b}from"./ActionGroup-CZoVtz00.js";import{_ as j,$ as B}from"./IconWarning-CoTQUaDh.js";import{H as g}from"./Heading-4cAYx9fy.js";import{F as h}from"./FileField-BqFP35jG.js";import{T as O}from"./Text-B-NqQsb3.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-B_51e8_j.js";import"./clsx-B-dksMZM.js";import"./flowComponent-fB-3SEHh.js";import"./index-BsTtmOW1.js";import"./index-7Gan3Sd3.js";import"./useFieldComponent-DWG920Yi.js";import"./utils-CzlwFdSi.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-B_tooMjG.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CmRl_D3U.js";import"./useFocus-BLv7u4S3.js";import"./useCollator-Bwo3lAGD.js";import"./context-B5Owy1-_.js";import"./useLocalizedStringFormatter-KKcnPxqh.js";import"./useFocusRing-CqWo6_om.js";import"./Button-NmLihlhr.js";import"./ProgressBar-DT5pCrN6.js";import"./Label-DuyHno6H.js";import"./Hidden-BdFAzqYk.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DFDeIEOr.js";import"./useFocusable-deUO30SV.js";import"./VisuallyHidden-CZJGc0hQ.js";import"./ContextMenuSection-BEfLxAcM.js";import"./Action-Bw6l21lc.js";import"./context-D5Js5cga.js";import"./useStatic-BkmFYiV8.js";import"./browser-Cl51s5Ql.js";import"./getActionGroupSlot-DTbiEWtg.js";import"./dynamic-gRVBa7iD.js";import"./Dialog-Cut31Nqj.js";import"./RSPContexts-BcZ6F9IB.js";import"./OverlayArrow-PNzJR_LP.js";import"./useControlledState-DqlM9bHJ.js";import"./Collection-Bj-AJMsc.js";import"./CollectionBuilder-Bvr2YvjZ.js";import"./SelectionIndicator-Ct_3iIN2.js";import"./Separator-BolqqnXN.js";import"./SelectionManager-BubBwhwk.js";import"./useEvent-Q3wTfOgv.js";import"./FocusScope-Biunv2Bw.js";import"./ColumnLayout-Ch70XwSX.js";import"./Avatar-lhD-lMow.js";import"./AlertIcon-WrrDZg35.js";import"./Image-DJk4WXtM.js";import"./Link-BEFP1Tne.js";import"./OptionsButton-1TVrbRnJ.js";import"./ButtonView-H4guPIkA.js";import"./ContextMenuTriggerView-l_R_XxCd.js";import"./ContextMenuTrigger-CEer3B8h.js";import"./OverlayTrigger-By5gsgrK.js";import"./OverlayContextProvider-Dc5mpEmz.js";import"./FieldError-BwbB6Ytj.js";import"./FieldError-Cm712Nbp.js";import"./AlertText-C2y0FN89.js";import"./useRef-DQnLGkfA.js";import"./LoadingSpinner-pfinSAIk.js";import"./remote-BLk-VuSO.js";import"./Heading-CVLd5xWO.js";import"./useFormValidation-Bw0zMO4k.js";import"./Input-_8yUIV9x.js";import"./EmulatedBoldText-BBfJQ4d1.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
