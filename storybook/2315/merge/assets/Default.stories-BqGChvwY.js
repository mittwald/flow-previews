import{r as x,j as e}from"./iframe-BKpTcuej.js";import{F as t}from"./FileDropZone-C8MvSOI5.js";import{S as d}from"./Section-fJmoAqS0.js";import{F as u}from"./FileCardList-DBpmnM-g.js";import{F}from"./FileCard-D0nvPMYO.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-C9cetwLM.js";import{B as f}from"./Button-CHR5Lto_.js";import{A as b}from"./ActionGroup-BFeEFdIr.js";import{a0 as j,a1 as B}from"./IconWarning-8R3XoFcV.js";import{H as g}from"./Heading-Dusm-uvD.js";import{F as h}from"./FileField-DH08Bzl9.js";import{T as O}from"./Text-ChzZQXaT.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-dgTa0XSb.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DoYqiHFv.js";import"./index-Dp43xhBx.js";import"./index-DwEhfHus.js";import"./useFieldComponent-AXq55mny.js";import"./utils-BuTqHWUg.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-_5F14b0c.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CLAZgdhb.js";import"./useFocus-C4QXJ0i2.js";import"./useCollator-28QKhnaq.js";import"./context-Bt___W0l.js";import"./useLocalizedStringFormatter-BpUbvorC.js";import"./useFocusRing-CL2qG9Ti.js";import"./Button-WezQgFMH.js";import"./ProgressBar-gtPQqryh.js";import"./Label--Zf6jHty.js";import"./Hidden-B0ayokwD.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BwvZqs_N.js";import"./useFocusable-8gC31DNg.js";import"./VisuallyHidden-DjSqpFWl.js";import"./ContextMenuSection-CP33TlWV.js";import"./Action-CRs_TTFg.js";import"./context-Do1O8LUQ.js";import"./useStatic-D1T02rpq.js";import"./browser-DdR_cYXU.js";import"./getActionGroupSlot-BVFFoNvG.js";import"./dynamic-D5pLUzdK.js";import"./Dialog-CnIAbR2d.js";import"./RSPContexts-CNLAcvzw.js";import"./OverlayArrow-BRMGn8Rx.js";import"./useControlledState-C61mrJlx.js";import"./Collection-DBuLuq_j.js";import"./CollectionBuilder-BAfr6v0X.js";import"./SelectionIndicator-CKzMTdaQ.js";import"./Separator-DsMLA7TC.js";import"./SelectionManager-DoV1m8OU.js";import"./useEvent-DisABsaa.js";import"./FocusScope-CaneGuiO.js";import"./ColumnLayout-H0xdtsX3.js";import"./Avatar-BfcE7SbP.js";import"./AlertIcon-BxMTL622.js";import"./Image-7KF-_y9K.js";import"./Link-QQGGWuEx.js";import"./OptionsButton-BQkSu-dV.js";import"./ButtonView-CBwiPc4X.js";import"./ContextMenuTriggerView-BIPt5G15.js";import"./ContextMenuTrigger-8hFta_2Z.js";import"./OverlayTrigger-C56VcKX9.js";import"./OverlayContextProvider-DjenE3bO.js";import"./FieldError-BmJ7-crS.js";import"./FieldError-Bf7-_15k.js";import"./AlertText-NjffNB6y.js";import"./useRef-DgPw_1ZE.js";import"./LoadingSpinner-CSX_cmFV.js";import"./remote-nPMBb6wO.js";import"./Heading-Bj0wrS_Z.js";import"./useFormValidation-6yUCZE8C.js";import"./Input-u4H7iO9I.js";import"./EmulatedBoldText-DTp9riJA.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Xe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=y();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
