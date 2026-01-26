import{r as x,j as e}from"./iframe-CBKKDtut.js";import{F as t}from"./FileDropZone-_GFqtu4E.js";import{S as d}from"./Section-DXY5zwlF.js";import{F as u}from"./FileCardList-5p0JDvrA.js";import{F}from"./FileCard-CzxoY_GU.js";import{u as S,F as C,t as D}from"./Form-CPgp_8OF.js";import{S as y}from"./ResetButton-CJb_sarw.js";import{B as f}from"./Button-B9OQWjLR.js";import{A as b}from"./ActionGroup-CTEI8oZ1.js";import{$ as j,a0 as B}from"./IconWarning-BGeLtjSH.js";import{H as g}from"./Heading-i6OL6vOG.js";import{F as h}from"./FileField-C5XmJLLB.js";import{T as O}from"./Text-DXycmlPy.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-CpHEdqir.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D-Qq6Xd6.js";import"./index-Q7U-5PA1.js";import"./index-fGZr3eAJ.js";import"./useFieldComponent-377eOR22.js";import"./utils-CzD9rXMA.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BipkjXt2.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BGNrCt7d.js";import"./useFocus-BrZp4zBY.js";import"./useCollator-DdKTTQqQ.js";import"./context-Bvh_z46p.js";import"./useLocalizedStringFormatter-Cg2HsiHj.js";import"./Button-DyYsKNHg.js";import"./ProgressBar-BptIcMSV.js";import"./Label-BzrfGAM1.js";import"./Hidden-BMhHdfnU.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CCG6AvGE.js";import"./useFocusRing-CCYWTYc5.js";import"./useFocusable-DQlHlYMC.js";import"./VisuallyHidden-BTRh3ybS.js";import"./ContextMenuSection-CIoY6k-y.js";import"./Action-DoBIVRDz.js";import"./context-B4Ey35Kl.js";import"./useStatic-n8g6U0tI.js";import"./browser-C9q5kf03.js";import"./getActionGroupSlot-CKDi87pY.js";import"./dynamic-C3t3tmF9.js";import"./Dialog-DqG8ZP0V.js";import"./RSPContexts-B9p0Af0m.js";import"./OverlayArrow-BBLTZ4Zv.js";import"./useControlledState-1Ujh64WW.js";import"./Collection-Ci7EvgUR.js";import"./CollectionBuilder-BsNn1R8F.js";import"./SelectionIndicator-D8RCowii.js";import"./Separator-CntAjx1Z.js";import"./SelectionManager-DFjBPYMf.js";import"./useEvent-BEHLnBZB.js";import"./FocusScope-Ds7_8mr5.js";import"./ColumnLayout-B_pjWKmU.js";import"./Avatar-CGZ6Kc2Z.js";import"./AlertIcon-R8qprUXz.js";import"./Image-DOGnYbw7.js";import"./Link-BONjZ3IX.js";import"./OptionsButton-_Zebb4wV.js";import"./ButtonView-CJxWzuRc.js";import"./ContextMenuTriggerView-et5GBTq7.js";import"./ContextMenuTrigger-C6LzS5MO.js";import"./OverlayTrigger-CgRJiL0z.js";import"./OverlayContextProvider-C-EovWON.js";import"./FieldError-ncR-D_4-.js";import"./FieldError-6zsCD2mI.js";import"./AlertText-BqYQV5FR.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-DZEwAE_i.js";import"./LoadingSpinner-BvfPlxYK.js";import"./remote-d08GjPRF.js";import"./Heading-BVbeBqwL.js";import"./useFormValidation-FH2NBgqd.js";import"./Input-DA2pnuWC.js";import"./EmulatedBoldText-eA5g4YLr.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=D();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
