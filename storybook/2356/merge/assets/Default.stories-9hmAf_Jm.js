import{r as x,j as e}from"./iframe-1Z6hWL0q.js";import{F as t}from"./FileDropZone-zpvtcUy1.js";import{S as d}from"./Section-DeLmOfWa.js";import{F as u}from"./FileCardList-D3qNJ72r.js";import{F}from"./FileCard-C_s0Kfg4.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-DGt7cfbK.js";import{B as f}from"./Button-Up8_TRdV.js";import{A as b}from"./ActionGroup-D0Uu4uF5.js";import{a0 as j,a1 as B}from"./IconWarning-CstRa6-6.js";import{H as g}from"./Heading-Dc2YOm8x.js";import{F as h}from"./FileField-BJUCJfz1.js";import{T as O}from"./Text-NSg919ow.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-B-ztPDmY.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CQSqsFz-.js";import"./index-CPV4-njg.js";import"./index-OoNE8c9e.js";import"./useFieldComponent-DdzfuZRi.js";import"./utils-B0Ub4KXD.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DPhytgE2.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B8l-Wr5R.js";import"./useFocus-MFE9JzzM.js";import"./useCollator-wpyuYlTN.js";import"./context-DCww6zBl.js";import"./useLocalizedStringFormatter-FfFR6yJN.js";import"./useFocusRing-EnMEiTgA.js";import"./Button-DpyZuV_i.js";import"./ProgressBar-BV7ioShA.js";import"./Label-Berd7YBY.js";import"./Hidden-CX4T_I8z.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bgz5j4W3.js";import"./useFocusable-BrwqamRV.js";import"./VisuallyHidden-CCJLIB7u.js";import"./ContextMenuSection-DH07SvAX.js";import"./ActionBatch-B4cDzNNZ.js";import"./useOverlayController-zDyCyx1O.js";import"./useStatic-BMrg-KZz.js";import"./browser-OyZXUgp8.js";import"./getActionGroupSlot-jkvbnKjz.js";import"./dynamic-CeVErRgL.js";import"./Dialog-BOSurAfE.js";import"./RSPContexts-BZtvqclp.js";import"./OverlayArrow-0_UUlvtG.js";import"./useControlledState-DfFBi8JJ.js";import"./Collection-5lvTrIT4.js";import"./CollectionBuilder-zke4D84b.js";import"./SelectionIndicator-CEn-3elL.js";import"./Separator-CYJUtDva.js";import"./SelectionManager-CPzu3hBL.js";import"./useEvent-B2NydoIp.js";import"./FocusScope-Dlwlk6_J.js";import"./ColumnLayout-DV89zfIl.js";import"./Avatar-CeUEcGAO.js";import"./AlertIcon-Blha7MMy.js";import"./Image-DSqzcNt2.js";import"./Link-hyXaXYHi.js";import"./OptionsButton-BLUDpBLd.js";import"./ButtonView-CzNSGQ0T.js";import"./ContextMenuTriggerView--PYHkaDo.js";import"./ContextMenuTrigger-0qkKxpGM.js";import"./OverlayTrigger-RBcMGmOK.js";import"./OverlayContextProvider-BlmnF6zY.js";import"./FieldError-CSszVQO8.js";import"./FieldError-CZQJbtEC.js";import"./AlertText-BJ3sSdkZ.js";import"./ActionGroupView-BsDKFWxT.js";import"./Content-BI990Rgh.js";import"./Modal-DHg5t4ae.js";import"./Overlay-DFEnDYi7.js";import"./LoadingSpinner-B9ElqUFv.js";import"./Flex-Vk66B6a6.js";import"./useRef-B1h6Z-hA.js";import"./remote-BXzLQ_GS.js";import"./Heading-BTDLHxEZ.js";import"./useFormValidation-B95RxpRV.js";import"./Input-DsXoSrKb.js";import"./EmulatedBoldText-CsGTmPK_.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const nr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,nr as __namedExportsOrder,or as default};
