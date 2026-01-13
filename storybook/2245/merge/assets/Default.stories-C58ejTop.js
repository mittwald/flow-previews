import{r as x,j as e}from"./iframe-DoM-BIwg.js";import{F as t}from"./FileDropZone-CAi_YsO2.js";import{S as d}from"./Section-CRx22udC.js";import{F as u}from"./FileCardList-BtRPbo1x.js";import{F}from"./FileCard-CzaEshEK.js";import{u as S,F as C,t as D}from"./Form-B5Pnwm63.js";import{S as y}from"./ResetButton-albeSaC2.js";import{B as f}from"./Button-CT5Y8uWS.js";import{A as b}from"./ActionGroup-Bn43YAdA.js";import{$ as j,a0 as B}from"./IconWarning-BD_MiEVG.js";import{H as g}from"./Heading-BBlWC_ix.js";import{F as h}from"./FileField-CHHj5ufv.js";import{T as O}from"./Text-lsEUOuuk.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-Bh5OahoV.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Bw05Ss5u.js";import"./index-B9vDCLP1.js";import"./index-BXuzzWnK.js";import"./useFieldComponent-CZ4YFclL.js";import"./utils-D5il_mPj.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CiXcXSql.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Cp7FQmHU.js";import"./useFocus-ClxCJYgX.js";import"./useCollator-DkqZ4sPc.js";import"./context-CSqA08Z3.js";import"./useLocalizedStringFormatter-BiPCXUs5.js";import"./Button-BXmw0khj.js";import"./ProgressBar-BJTn-fHy.js";import"./Label-DE9HqL8_.js";import"./Hidden-DgtxAirB.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-v4r7x8aW.js";import"./useFocusRing-Bar7hbU_.js";import"./useFocusable-Cy5CQHPW.js";import"./VisuallyHidden-GPtOnQVg.js";import"./ContextMenuSection-fUiEQtti.js";import"./Action-KkrISRwO.js";import"./context-DP2lyaT2.js";import"./useStatic-BCI8JZji.js";import"./browser-COZAGKbB.js";import"./getActionGroupSlot-CjJPVShT.js";import"./dynamic-CkeXur7S.js";import"./Dialog-BESdyj17.js";import"./RSPContexts-BpmX7ICR.js";import"./OverlayArrow-Di4XgwVw.js";import"./useControlledState--GEywRyg.js";import"./Collection-BU4jsGpu.js";import"./CollectionBuilder-DJn4hq3P.js";import"./SelectionIndicator-D4zCj7sf.js";import"./Separator-nJ0RJQXk.js";import"./SelectionManager-6w1Kk-2_.js";import"./useEvent-8dtJi2Bo.js";import"./FocusScope-DbX1j6h6.js";import"./ColumnLayout-y6wtjrbv.js";import"./Avatar-_EfPfu08.js";import"./AlertIcon-Mg7Q3zgv.js";import"./Image-QAdDKG7N.js";import"./Link-CVu6uEhJ.js";import"./OptionsButton-DDGNjhy9.js";import"./ButtonView-CsTLUfbB.js";import"./ContextMenuTriggerView-laxeBppj.js";import"./ContextMenuTrigger-uZXkOw7N.js";import"./OverlayTrigger-6Bd8m9uJ.js";import"./OverlayContextProvider-Evthga4H.js";import"./FieldError-D1hjQVoV.js";import"./FieldError-CHU7gQK7.js";import"./AlertText-DEPqS5ry.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-zKWnsD4B.js";import"./LoadingSpinner-CPr3D27j.js";import"./remote-BDffDiLd.js";import"./Heading-Bf3wZM4z.js";import"./useFormValidation-lvugQbRf.js";import"./Input-V-OR_KLg.js";import"./EmulatedBoldText-DPZf3ZEq.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=D();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const rr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,rr as __namedExportsOrder,er as default};
