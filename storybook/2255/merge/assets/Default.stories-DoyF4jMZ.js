import{r as x,j as e}from"./iframe-DEsugzBP.js";import{F as t}from"./FileDropZone-CLUXZets.js";import{S as d}from"./Section-Xyeq4Po7.js";import{F as u}from"./FileCardList-t4zeg_kI.js";import{F}from"./FileCard-iJppXjVL.js";import{u as S,F as C,t as D}from"./Form-B8dgGO3Z.js";import{S as y}from"./ResetButton-Dh103bg6.js";import{B as f}from"./Button-Bh57nksp.js";import{A as b}from"./ActionGroup-BfLYMaYj.js";import{$ as j,a0 as B}from"./IconWarning-qDYXGw-D.js";import{H as g}from"./Heading-Di_kcqRZ.js";import{F as h}from"./FileField-CHJGHY3s.js";import{T as O}from"./Text-CGG2whlc.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-DFI8Xyy2.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B7M9EemL.js";import"./index-JNFFaqnL.js";import"./index-DvVsbrc7.js";import"./useFieldComponent-CoV9Rbdv.js";import"./utils-k3goWFVI.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CGX30jhe.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Bn9RRRKS.js";import"./useFocus-B3AZuBYY.js";import"./useCollator-DjsjFHtz.js";import"./context-BA9NBDMH.js";import"./useLocalizedStringFormatter-DuBUNj0e.js";import"./Button-D-exCq-2.js";import"./ProgressBar-C-Sj7koa.js";import"./Label-CT9VczkM.js";import"./Hidden-B9rA9ATP.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CsaWzeZC.js";import"./useFocusRing-DuZx28fv.js";import"./useFocusable-Bwqhhmq3.js";import"./VisuallyHidden-DVFgokJG.js";import"./ContextMenuSection-EcetDiW1.js";import"./Action-DUjscWwq.js";import"./context-20QbnAW8.js";import"./useStatic-BMQe5ifs.js";import"./browser-DSOUTdOR.js";import"./getActionGroupSlot-d_28ev7h.js";import"./dynamic-FU-wbqWq.js";import"./Dialog-B0UO0Xtu.js";import"./RSPContexts-BS5BTC1y.js";import"./OverlayArrow-CBh5kmtO.js";import"./useControlledState-Dcr_irR6.js";import"./Collection-YQKIf0Qf.js";import"./CollectionBuilder-CkaEUbci.js";import"./SelectionIndicator-BsQYAog2.js";import"./Separator-DPTgStgW.js";import"./SelectionManager-CV2D7rSd.js";import"./useEvent-Dk4Rqcvb.js";import"./FocusScope-BvFRWRMs.js";import"./ColumnLayout-kKoMxbwM.js";import"./Avatar-D8O5X1wo.js";import"./AlertIcon-CMe_dxq6.js";import"./Image-nvqBBkX_.js";import"./Link-DfJDbkJP.js";import"./OptionsButton-BEk72-It.js";import"./ButtonView-CimpCjSg.js";import"./ContextMenuTriggerView-CnlVfZ85.js";import"./ContextMenuTrigger-CXVNrJjA.js";import"./OverlayTrigger-CImrZmh1.js";import"./OverlayContextProvider-CajcDkAh.js";import"./FieldError-D0RH6F7V.js";import"./FieldError-DL7mdN7X.js";import"./AlertText-B9jVXJTC.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-VricRyXd.js";import"./LoadingSpinner-DJgoXeas.js";import"./remote-Bm53ArvY.js";import"./Heading-B1qRR7lK.js";import"./useFormValidation-DCx77s5O.js";import"./Input-B5rLIpjG.js";import"./EmulatedBoldText-6jL3QUey.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=D();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
