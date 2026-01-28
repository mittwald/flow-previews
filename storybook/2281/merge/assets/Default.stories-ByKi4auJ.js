import{r as x,j as e}from"./iframe-B-26223i.js";import{F as t}from"./FileDropZone-DVn2P7Wk.js";import{S as d}from"./Section-Dq69RUil.js";import{F as u}from"./FileCardList-toJPB7Hb.js";import{F}from"./FileCard-DVEUsPSP.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-BQyw1x6f.js";import{B as f}from"./Button-B60fo84_.js";import{A as b}from"./ActionGroup-BPwiJ8d1.js";import{$ as j,a0 as B}from"./IconWarning-CfZm6euj.js";import{H as g}from"./Heading-BATksAHi.js";import{F as h}from"./FileField-CDv0Sc9D.js";import{T as O}from"./Text-C25EED6m.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-OlloDjg9.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Cm2ULMwR.js";import"./index-C96xSvbi.js";import"./index-CMj-JRml.js";import"./useFieldComponent-eul3OsXk.js";import"./utils-CprJ_klo.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CrdzXlCc.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DUREvcwl.js";import"./useFocus-DYSsUR82.js";import"./useCollator-cEvXopFB.js";import"./context-B9n95xcZ.js";import"./useLocalizedStringFormatter-CHKosLk9.js";import"./useFocusRing-DATGHg9y.js";import"./Button-C9Zg0tM0.js";import"./ProgressBar-DwD1l90a.js";import"./Label-Ddb5Z1yf.js";import"./Hidden-BAuAU20u.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BlwAXRn7.js";import"./useFocusable-CRgLtiVg.js";import"./VisuallyHidden-DpBOnOEH.js";import"./ContextMenuSection-EzbGflNa.js";import"./Action-CKtvTujB.js";import"./context-JKAIHclB.js";import"./useStatic-DyURBROl.js";import"./browser-DNWQphaZ.js";import"./getActionGroupSlot-BO_i0UUK.js";import"./dynamic-DWm47R25.js";import"./Dialog-COoPEj_z.js";import"./RSPContexts-Braq8AdO.js";import"./OverlayArrow-Cnkc5XCY.js";import"./useControlledState-CCY4nzRh.js";import"./Collection-DFxwbH7P.js";import"./CollectionBuilder-BqJ1MbN-.js";import"./SelectionIndicator-DrGDjKtL.js";import"./Separator-Bc4LdP2j.js";import"./SelectionManager-BbjsNIkI.js";import"./useEvent-C1z2hzAA.js";import"./FocusScope-BG92zKg5.js";import"./ColumnLayout-BtTcbjxk.js";import"./Avatar-Q5gI0VPL.js";import"./AlertIcon-Bi7YC7dH.js";import"./Image-Dwa1XvD9.js";import"./Link-BQLubbaG.js";import"./OptionsButton-BH0Urnof.js";import"./ButtonView-N6QWot1B.js";import"./ContextMenuTriggerView-B_21hL2J.js";import"./ContextMenuTrigger-Da1fN95X.js";import"./OverlayTrigger-DHG4FXf-.js";import"./OverlayContextProvider-DL8WNCgz.js";import"./FieldError-DKJxt2u7.js";import"./FieldError-B1RwUwkr.js";import"./AlertText-SDytihrL.js";import"./useRef-BniYW6fy.js";import"./LoadingSpinner-CNdw31t2.js";import"./remote-CUr3PG4h.js";import"./Heading-BVbzfdRb.js";import"./useFormValidation-CodwuA9r.js";import"./Input-C02u9QAf.js";import"./EmulatedBoldText-Co4v7GV8.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
