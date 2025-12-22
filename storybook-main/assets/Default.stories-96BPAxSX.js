import{r as x,j as e}from"./iframe-a9513Vq6.js";import{F as t}from"./FileDropZone-Dk_IkK9f.js";import{S as d}from"./Section-C8UMRpV9.js";import{F as u}from"./FileCardList-ClntQLde.js";import{F}from"./FileCard-CG2iTZ_h.js";import{u as S,F as C,t as D}from"./Form-v8TMyo2H.js";import{S as y}from"./ResetButton-5AR8fVnz.js";import{B as f}from"./Button-CbZraw7Z.js";import{A as b}from"./ActionGroup-CEk1ZVey.js";import{Z as j,_ as B}from"./IconWarning-BPr7HnMX.js";import{H as g}from"./Heading-Bm0lzmg4.js";import{F as h}from"./FileField-QuEecIAe.js";import{T as O}from"./Text-hxI3a1Rs.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-Bm9InLVZ.js";import"./clsx-B-dksMZM.js";import"./flowComponent-ClX3KjCn.js";import"./index-BqXFMVtG.js";import"./index-CgKgRbSB.js";import"./useFieldComponent-DoOT3wm0.js";import"./utils-Q60aVnZq.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-KDVUHE9w.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-nB2pk6qM.js";import"./useFocus-CH_x6C_j.js";import"./useCollator-BiekIj1S.js";import"./context-CGjHIvvu.js";import"./useLocalizedStringFormatter-CqunH7JG.js";import"./Button-CbYmiDFL.js";import"./ProgressBar-ZGOw6r6D.js";import"./Label-THT_xKrE.js";import"./Hidden-CBXUgXzH.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CyOdCqvu.js";import"./useFocusRing-CmMhl12v.js";import"./useFocusable-lL6lq36R.js";import"./VisuallyHidden-C2yGzMiQ.js";import"./ContextMenuSection-BAncSsp2.js";import"./Action-CS14UEhl.js";import"./context-RLH4ysrR.js";import"./useStatic-BYKWrdXY.js";import"./browser-CuCeyixq.js";import"./getActionGroupSlot-gpXu2eix.js";import"./dynamic-D7T7LY8j.js";import"./Dialog-C14EYRfp.js";import"./RSPContexts-DpIEdSL7.js";import"./OverlayArrow-BuQIV4ze.js";import"./useControlledState-CemUvUps.js";import"./Collection-D4DMEnaD.js";import"./CollectionBuilder-DV1hsabw.js";import"./SelectionIndicator-ZvhngIUd.js";import"./Separator-CV17wQ8T.js";import"./SelectionManager-CS8x0YuZ.js";import"./useEvent-CPsIFNqP.js";import"./FocusScope-BnHRmLRH.js";import"./ColumnLayout-CN0TaETk.js";import"./Avatar-Am-tWVvt.js";import"./AlertIcon-BNVWQsAg.js";import"./Image-COiQ5aMN.js";import"./Link-Dnav6fqI.js";import"./OptionsButton-DUD2nePJ.js";import"./ButtonView-6ZkuEGSv.js";import"./ContextMenuTriggerView-Dv2RAU8Z.js";import"./ContextMenuTrigger-CdrZ21af.js";import"./OverlayTrigger-BDC2N0WV.js";import"./OverlayContextProvider-BhvlUAAP.js";import"./FieldError-WoUSVR_n.js";import"./FieldError-C3zvz5gI.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-Do3Y2xpl.js";import"./LoadingSpinner-CjOt6fEt.js";import"./remote-CGHUze9I.js";import"./Heading-35mryU7d.js";import"./useFormValidation-vP3SVKb2.js";import"./Input-CtQP6IcM.js";import"./EmulatedBoldText-mDi0QmS0.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,$e={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=D();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const er=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,er as __namedExportsOrder,$e as default};
