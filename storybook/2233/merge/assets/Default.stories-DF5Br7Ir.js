import{r as x,j as e}from"./iframe-DqAMh1gn.js";import{F as t}from"./FileDropZone-DRChAc9C.js";import{S as d}from"./Section-DqN2VLIl.js";import{F as u}from"./FileCardList-CCjBk-AI.js";import{F}from"./FileCard-CaQ5liJy.js";import{u as S,F as C,t as D}from"./Form-roJCToDo.js";import{S as y}from"./ResetButton-BVQp8rEx.js";import{B as f}from"./Button-BzL2mXU9.js";import{A as b}from"./ActionGroup-DpF-aUms.js";import{$ as j,a0 as B}from"./IconWarning-BV3xGinn.js";import{H as g}from"./Heading-Cop9Lz_q.js";import{F as h}from"./FileField-BM3wa_Jb.js";import{T as O}from"./Text-1p9r91sB.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-DpME0KmT.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BNeqdfjc.js";import"./index-BXU2S61h.js";import"./index-By9mRA0t.js";import"./useFieldComponent-CgfE5MLg.js";import"./utils-WhkxUCK6.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DmUxfOW-.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BKYm2rJO.js";import"./useFocus-Cr8fiyXD.js";import"./useCollator-DvzaADfo.js";import"./context-DRhwbml9.js";import"./useLocalizedStringFormatter-CZ172l8h.js";import"./Button-DRXTkefG.js";import"./ProgressBar-CxeXPRaQ.js";import"./Label-iT_mUFNC.js";import"./Hidden-BzHkL3wJ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-ClkvTl3z.js";import"./useFocusRing-BN14JWVs.js";import"./useFocusable-DO1mJmot.js";import"./VisuallyHidden-B3gyx1tV.js";import"./ContextMenuSection-CNlzjKiC.js";import"./Action-B_T5lnyR.js";import"./context-ChmspXAM.js";import"./useStatic-BuuX2mtG.js";import"./browser-CSMWWW9k.js";import"./getActionGroupSlot-BJX70W99.js";import"./dynamic-CAN3WNRI.js";import"./Dialog-AIPHRx2P.js";import"./RSPContexts-A1MHH_Cz.js";import"./OverlayArrow-DNiZVgAH.js";import"./useControlledState-ChPR7hzM.js";import"./Collection-CQjuLfpr.js";import"./CollectionBuilder-Dk_6EAPH.js";import"./SelectionIndicator-Qt-acHPk.js";import"./Separator-CEkzsxq5.js";import"./SelectionManager-CsReWWw0.js";import"./useEvent-DRkjAlB5.js";import"./FocusScope-azgg1m0B.js";import"./ColumnLayout-C13WXOtQ.js";import"./Avatar-TT3EetV-.js";import"./AlertIcon-C7t-BIgM.js";import"./Image-61qoOJfE.js";import"./Link-D-GaayyF.js";import"./OptionsButton-C6RlsvOl.js";import"./ButtonView-CNuhPFwe.js";import"./ContextMenuTriggerView-DZgcV2K9.js";import"./ContextMenuTrigger-CeKTXG0n.js";import"./OverlayTrigger-Yhwsf07R.js";import"./OverlayContextProvider-BmY6HjYo.js";import"./FieldError-DFC5bA5N.js";import"./FieldError-Cat2GNj4.js";import"./InlineAlert-DL5f4hl1.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-B2o974i1.js";import"./LoadingSpinner-BWCnwVbS.js";import"./remote-BXLOBgAx.js";import"./Heading-DO-ilkLm.js";import"./useFormValidation-Bmx8yPSj.js";import"./Input-OeHygm-T.js";import"./EmulatedBoldText-CnA8uKsC.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=D();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
