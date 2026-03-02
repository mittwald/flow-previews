import{r as x,j as e}from"./iframe-bYrN4iqU.js";import{F as t}from"./FileDropZone-On40mSL9.js";import{S as d}from"./Section-K4GUZgJE.js";import{F as u}from"./FileCardList-N9ivBI1V.js";import{F}from"./FileCard-DOjADGgd.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-DRmRwOi9.js";import{B as f}from"./Button-BXFpqU-p.js";import{A as b}from"./ActionGroup-Cgs-Q9B3.js";import{_ as j,$ as B}from"./IconWarning-m_DFVeXI.js";import{H as g}from"./Heading-tEMYcZaF.js";import{F as h}from"./FileField-0iNqFltb.js";import{T as O}from"./Text-Ggj8lIEk.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-CbYlIyGK.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DKWMiQh4.js";import"./index-BecUo0Hm.js";import"./index-ByZhX1CH.js";import"./useFieldComponent-CM1iSrAB.js";import"./utils-B3voqzat.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-Dj7c1Gq2.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-xelku7uN.js";import"./useFocus-DIDqk3LI.js";import"./useCollator-CUuaB6UV.js";import"./context-Hrlbzros.js";import"./useLocalizedStringFormatter-gsFqTt9C.js";import"./useFocusRing-D4lo4_Zr.js";import"./Button-BmdWdjlP.js";import"./ProgressBar-Df7WbfFD.js";import"./Label-BHh_gacH.js";import"./Hidden-kCI5Fish.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CHP3pRkH.js";import"./useFocusable-fXM7Y9pN.js";import"./VisuallyHidden-DAWjrZx-.js";import"./ContextMenuSection-BqvB1DY5.js";import"./Action-BReqqCkr.js";import"./context-CIgtX0DK.js";import"./useStatic-ByHvTm37.js";import"./browser-CHbB-bBA.js";import"./getActionGroupSlot-9Vl-KgEl.js";import"./dynamic-CHbvz_qx.js";import"./Dialog-CxLv1-pk.js";import"./RSPContexts-CblVL1A7.js";import"./OverlayArrow-CBzM-Xoe.js";import"./useControlledState-hBcxnaS2.js";import"./Collection-k_p8jiFF.js";import"./CollectionBuilder-B7QPPD_O.js";import"./SelectionIndicator-MjQ5C6Rd.js";import"./Separator-CVohJStV.js";import"./SelectionManager-CkqK1ezZ.js";import"./useEvent-BnAk5cqF.js";import"./FocusScope-DaLeJatZ.js";import"./ColumnLayout-BJE5PH3z.js";import"./Avatar-DH9wr49V.js";import"./AlertIcon-fl_R2PKX.js";import"./Image-DJulf9ic.js";import"./Link-DPWKKiRI.js";import"./OptionsButton-AnaeEEfN.js";import"./ButtonView-Dq6BfzVS.js";import"./ContextMenuTriggerView-DrkYR7f7.js";import"./ContextMenuTrigger-De9uu2YY.js";import"./OverlayTrigger-Ck0Q03CL.js";import"./OverlayContextProvider-CcBeb8cT.js";import"./FieldError-DELvRCSS.js";import"./FieldError-BBcT2nDa.js";import"./AlertText-BULPfvI7.js";import"./useRef-2-y0_1ka.js";import"./LoadingSpinner-jOE_2qaU.js";import"./remote-zHy9wvpL.js";import"./Heading-CY9qodVf.js";import"./useFormValidation-CAwH-_ip.js";import"./Input-DaDcKDBm.js";import"./EmulatedBoldText-Dg0kR_8L.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
