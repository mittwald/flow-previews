import{r as x,j as e}from"./iframe-BAsHckrK.js";import{F as t}from"./FileDropZone-DlfQkfje.js";import{S as d}from"./Section-NIPDFOQA.js";import{F as u}from"./FileCardList-CbncDZej.js";import{F}from"./FileCard-Db6gXA2Y.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-DSkmlm83.js";import{B as f}from"./Button-CAoYj-yB.js";import{A as b}from"./ActionGroup-CumlRKzq.js";import{_ as j,$ as B}from"./IconWarning-DHq1gdF3.js";import{H as g}from"./Heading-CuVtTPS-.js";import{F as h}from"./FileField-Av8OEowN.js";import{T as O}from"./Text-B__BY7tJ.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-CUSuYgO2.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B65nQAul.js";import"./index-CyIJxzCh.js";import"./index-Cf_R1xcK.js";import"./useFieldComponent-uzP_CJXZ.js";import"./utils-AcXTY-LA.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CORhkzC6.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Zs1yjNWV.js";import"./useFocus-DSg5hzPG.js";import"./useCollator-1De53UJM.js";import"./context-BKg0mO6Y.js";import"./useLocalizedStringFormatter-CGl9WC2_.js";import"./useFocusRing-PAL8hD_p.js";import"./Button-v8rEwTVX.js";import"./ProgressBar-BYgBobO-.js";import"./Label-Cla8ySRz.js";import"./Hidden-CitD2GXi.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BtuPSsUz.js";import"./useFocusable-DEw7yEFU.js";import"./VisuallyHidden-BIPiOxSh.js";import"./ContextMenuSection-BquW4vGk.js";import"./Action-WxgR-8km.js";import"./context-BHkWm8Gn.js";import"./useStatic-CHwNqk00.js";import"./browser-tZCM2k1B.js";import"./getActionGroupSlot-B1R4nGn3.js";import"./dynamic-CGZuOMtH.js";import"./Dialog-BI9ufNdz.js";import"./RSPContexts-CrAnBcro.js";import"./OverlayArrow-BEZkQ9dz.js";import"./useControlledState-DIA42IR3.js";import"./Collection-B6YyQZIk.js";import"./CollectionBuilder-Ciu-gQv8.js";import"./SelectionIndicator-ClkIlDZY.js";import"./Separator-ClsU7Cqa.js";import"./SelectionManager-DTu8mNRc.js";import"./useEvent-BI0qkTtn.js";import"./FocusScope-BSJXv8u1.js";import"./ColumnLayout-BpfPCUmd.js";import"./Avatar-DNxKhkqD.js";import"./AlertIcon-C2q1LJ0F.js";import"./Image-CdVKb_3q.js";import"./Link-BhxfUhLW.js";import"./OptionsButton-DHrrPwsP.js";import"./ButtonView-ANSEPiju.js";import"./ContextMenuTriggerView-DuAQxPXn.js";import"./ContextMenuTrigger-DtGLLFbz.js";import"./OverlayTrigger-DKYW-gxq.js";import"./OverlayContextProvider-BJO-3hwU.js";import"./FieldError-ZX2j7DJQ.js";import"./FieldError-Ch8lYR65.js";import"./AlertText-CZdsx7H2.js";import"./useRef-CAXD_NwY.js";import"./useOverlayController-BBLTL3Hv.js";import"./LoadingSpinner-fmonyGhO.js";import"./remote-5f3Q71VQ.js";import"./Heading-D3ETNjbu.js";import"./useFormValidation-l5tjlCjY.js";import"./Input-DVOtN3yU.js";import"./EmulatedBoldText-BuJbkCoS.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Xe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const er=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,er as __namedExportsOrder,Xe as default};
