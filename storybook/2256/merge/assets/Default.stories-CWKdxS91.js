import{r as x,j as e}from"./iframe-W1iyoXhf.js";import{F as t}from"./FileDropZone-BswfHHoR.js";import{S as d}from"./Section-CeOL9WXO.js";import{F as u}from"./FileCardList-Ng536RZh.js";import{F}from"./FileCard-D89ik0SZ.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-VIcfaLD7.js";import{B as f}from"./Button-IzhK2U-6.js";import{A as b}from"./ActionGroup-C1jzAEQv.js";import{$ as j,a0 as B}from"./IconWarning-Cnnsa5dA.js";import{H as g}from"./Heading-CkZ0B9ED.js";import{F as h}from"./FileField-D9CU-j_b.js";import{T as O}from"./Text-DcDEk3cp.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-DX1S9_GH.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DadfXi8i.js";import"./index-BH3DQIUR.js";import"./index-BUhRJiS3.js";import"./useFieldComponent-CeQ6dqWY.js";import"./utils-Co92dFN-.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DMuz8jzh.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-C8GMPbyu.js";import"./useFocus-BF1azJZZ.js";import"./useCollator-CZzcr_Mi.js";import"./context-Dx3ASvxi.js";import"./useLocalizedStringFormatter-Be5s6ZhG.js";import"./Button-DSUkPhZw.js";import"./ProgressBar-o5FIdMg8.js";import"./Label-16XGOc-L.js";import"./Hidden-C0j9T0K5.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DwtcUURT.js";import"./useFocusRing-D7D1hXRw.js";import"./useFocusable-CYBapKrT.js";import"./VisuallyHidden-9GsfRhh1.js";import"./ContextMenuSection-DWjrG_wk.js";import"./Action-BaKsvCHV.js";import"./context-Cx4Tf49f.js";import"./useStatic-DFE9WV1t.js";import"./browser-D1HYvIQy.js";import"./getActionGroupSlot-nARO-zR5.js";import"./dynamic-X2nPVSXv.js";import"./Dialog-Dwmqa2yo.js";import"./RSPContexts-CkYyS58h.js";import"./OverlayArrow-DhCjeFi1.js";import"./useControlledState-BeXX8b-c.js";import"./Collection-H-B8rljE.js";import"./CollectionBuilder-BFDcIzLe.js";import"./SelectionIndicator--NYjhiR7.js";import"./Separator-BxaFcvwN.js";import"./SelectionManager-CBsBpJX-.js";import"./useEvent-D9hyQfDj.js";import"./FocusScope-mUzTN5zH.js";import"./ColumnLayout-BdRXYGJA.js";import"./Avatar-C3c586bK.js";import"./AlertIcon-Cyqu-_3z.js";import"./Image-GOW5uX9s.js";import"./Link-BoIZb-Mx.js";import"./OptionsButton-CFRJJ9ma.js";import"./ButtonView-DeVNGu_o.js";import"./ContextMenuTriggerView-CJ2jqpkt.js";import"./ContextMenuTrigger-Cqh-K55E.js";import"./OverlayTrigger-CDdGESRy.js";import"./OverlayContextProvider-CtixpOlY.js";import"./FieldError-V9E4UopR.js";import"./FieldError-CaERYIVC.js";import"./AlertText-x_xx3UIw.js";import"./useRef-HGB3QOF9.js";import"./LoadingSpinner-BMAt0-EL.js";import"./remote-CbMcOagV.js";import"./Heading-DW_b7ElP.js";import"./useFormValidation-aWhqwd0R.js";import"./Input-lNMUeypu.js";import"./EmulatedBoldText-BfE11w5D.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
