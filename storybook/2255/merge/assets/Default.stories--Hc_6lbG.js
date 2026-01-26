import{r as x,j as e}from"./iframe-CO_SbVCH.js";import{F as t}from"./FileDropZone-mj1F3yrz.js";import{S as d}from"./Section-DzQL888J.js";import{F as u}from"./FileCardList-CVKSJ_k9.js";import{F}from"./FileCard-DkynJOL7.js";import{u as S,F as C,t as D}from"./Form-CKDpo35Y.js";import{S as y}from"./ResetButton-DQlSeI9_.js";import{B as f}from"./Button-D1ylE5rB.js";import{A as b}from"./ActionGroup-Y22B5gXp.js";import{$ as j,a0 as B}from"./IconWarning-DnAYmwAM.js";import{H as g}from"./Heading-CF6gKKdb.js";import{F as h}from"./FileField-BElRrwgA.js";import{T as O}from"./Text-DxwcuI28.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-uhK0Moxo.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CeLLqyNG.js";import"./index-BeUgZiCh.js";import"./index-CiuYSwxA.js";import"./useFieldComponent-DVhqfPKz.js";import"./utils-D6Fob7yO.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CKhrTn1e.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Dm4P9x_e.js";import"./useFocus-CPWqIWXE.js";import"./useCollator-BikNysJq.js";import"./context-CagKbUB8.js";import"./useLocalizedStringFormatter-CAz6Kqbv.js";import"./Button-B5AHzCCb.js";import"./ProgressBar-B7Qw6Oz5.js";import"./Label-DuIRh-OA.js";import"./Hidden-ZdS7KL-c.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Dh95oJrl.js";import"./useFocusRing-BEFuW2jQ.js";import"./useFocusable-CMm0HKMh.js";import"./VisuallyHidden-DDIsYkXL.js";import"./ContextMenuSection-m6biFtp2.js";import"./Action-0SsHJzT_.js";import"./context-BbDJJF8K.js";import"./useStatic-D6cqHfiz.js";import"./browser-DqZUP5aL.js";import"./getActionGroupSlot-DAKAs_h9.js";import"./dynamic-7BzGeVfl.js";import"./Dialog-UmHwq-hs.js";import"./RSPContexts-BwOC89i_.js";import"./OverlayArrow-D4OM36Ak.js";import"./useControlledState-BplPLiu_.js";import"./Collection-ghLLd_h5.js";import"./CollectionBuilder-BVAhjiTU.js";import"./SelectionIndicator-Ca0su_yA.js";import"./Separator-CUNyVGir.js";import"./SelectionManager-XN_Qhkpg.js";import"./useEvent-BzLyT1Z_.js";import"./FocusScope-Ptf693hL.js";import"./ColumnLayout-DWCumkI4.js";import"./Avatar-CHREJjs8.js";import"./AlertIcon-3Vdm-iqE.js";import"./Image-CmTrsb2g.js";import"./Link-Errn0UdC.js";import"./OptionsButton-CsMGiNb3.js";import"./ButtonView-Cwch5mTd.js";import"./ContextMenuTriggerView-BMimYNrp.js";import"./ContextMenuTrigger-DNNBan8l.js";import"./OverlayTrigger-zJBbildq.js";import"./OverlayContextProvider-6b1aLjhJ.js";import"./FieldError-ApIzqFqI.js";import"./FieldError-C8I7NIV7.js";import"./AlertText-BQJ0P8Cx.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-BtpKrvaf.js";import"./LoadingSpinner-d-LCgLDQ.js";import"./remote-CpzHRyGl.js";import"./Heading-Ij8bChZd.js";import"./useFormValidation-Cv-TUnys.js";import"./Input-Cf-031DZ.js";import"./EmulatedBoldText-f0IFAvFk.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=D();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
