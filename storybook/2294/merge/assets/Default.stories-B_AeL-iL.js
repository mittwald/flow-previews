import{r as x,j as e}from"./iframe-Da9Lw8R_.js";import{F as t}from"./FileDropZone-B4EYVSTj.js";import{S as d}from"./Section-CjTpAbFV.js";import{F as u}from"./FileCardList-BIoFSpBK.js";import{F}from"./FileCard-BhqY1wC6.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-DAXeM7OM.js";import{B as f}from"./Button-CkcTXATp.js";import{A as b}from"./ActionGroup-n4kQwCcc.js";import{_ as j,$ as B}from"./IconWarning-BYkwpstY.js";import{H as g}from"./Heading-p9-3Hmaq.js";import{F as h}from"./FileField-Ct2cysxQ.js";import{T as O}from"./Text-l_fYsQ08.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-Cj6g0RGG.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DSxpIroI.js";import"./index-CM0YhoHL.js";import"./index-TT_JC2bB.js";import"./useFieldComponent-yufHgNqa.js";import"./utils-Cwd4tFKX.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CpGlsQu3.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CzV-HlgB.js";import"./useFocus-BBVXnzgP.js";import"./useCollator-D6vsHj3W.js";import"./context-CsdpTyhd.js";import"./useLocalizedStringFormatter-BWd2uPhV.js";import"./useFocusRing-BItT14i_.js";import"./Button-CzbwBi45.js";import"./ProgressBar-Chvpo8FD.js";import"./Label-CkI4JdYz.js";import"./Hidden-BIMJR4Fs.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BIogNAwh.js";import"./useFocusable-CwPW854N.js";import"./VisuallyHidden-gkajg-fe.js";import"./ContextMenuSection-CnBpObAx.js";import"./Action-CSMihAu4.js";import"./context-DT0iENXB.js";import"./useStatic-BOFCRskE.js";import"./browser-DDWH8I0V.js";import"./getActionGroupSlot-DWoHNcNE.js";import"./dynamic-bM8H28Zu.js";import"./Dialog-Cw1z9AtQ.js";import"./RSPContexts-CqxOCNft.js";import"./OverlayArrow-Cf3S1QD1.js";import"./useControlledState-B4YxKAgg.js";import"./Collection-Gkv_ybXQ.js";import"./CollectionBuilder-uz1z8vZv.js";import"./SelectionIndicator-DjHwUAme.js";import"./Separator-VHKWzJTM.js";import"./SelectionManager-42CnKCgE.js";import"./useEvent-DSYhgwkh.js";import"./FocusScope-BpnzFkst.js";import"./ColumnLayout-CsQ4TzDm.js";import"./Avatar-CJCYVAwA.js";import"./AlertIcon-Co0MJDJf.js";import"./Image-Dj130f5M.js";import"./Link-E8fc7JGi.js";import"./OptionsButton-CDX8-3Vk.js";import"./ButtonView-C0Td427Q.js";import"./ContextMenuTriggerView-CbXf6Sw2.js";import"./ContextMenuTrigger-DIoDWCy5.js";import"./OverlayTrigger-BJ63rVtT.js";import"./OverlayContextProvider-BnH0GpUl.js";import"./FieldError-DXoqYbez.js";import"./FieldError-DSdSdK3H.js";import"./AlertText-bxsLSC5L.js";import"./useRef-Dm7IxWdg.js";import"./useOverlayController-DXJN5Feb.js";import"./LoadingSpinner-DXGsR4uF.js";import"./remote-CsFbcl9r.js";import"./Heading-CheJhR1R.js";import"./useFormValidation-DjSyrx87.js";import"./Input-inZV5DIC.js";import"./EmulatedBoldText-CVyVzJMR.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Xe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
