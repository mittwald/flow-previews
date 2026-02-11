import{r as x,j as e}from"./iframe-CLJtUSH1.js";import{F as t}from"./FileDropZone-CyRnv5le.js";import{S as d}from"./Section-CZHmN5Jd.js";import{F as u}from"./FileCardList-CaVkFeMj.js";import{F}from"./FileCard-Dfcrr7fE.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-BLXcg6zO.js";import{B as f}from"./Button-BdSBoC_f.js";import{A as b}from"./ActionGroup-BIdm5xS5.js";import{a0 as j,a1 as B}from"./IconWarning-RoA_lEUP.js";import{H as g}from"./Heading-D34LHmW0.js";import{F as h}from"./FileField-CMMfVhTs.js";import{T as O}from"./Text-B6Fe6olk.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-Bl_Fv5X7.js";import"./clsx-B-dksMZM.js";import"./flowComponent-ddZp4AYb.js";import"./index-CLGZrIuY.js";import"./index-C5KxKItK.js";import"./useFieldComponent-BH0Y7qa0.js";import"./utils-DvtEjNbs.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-COsBjVJz.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DV7QK5Z-.js";import"./useFocus-CAJuP4TC.js";import"./useCollator-CG3ZLIsg.js";import"./context-DZMEEftG.js";import"./useLocalizedStringFormatter-DOmCW1HP.js";import"./useFocusRing-lsntDLZI.js";import"./Button-DGFUplit.js";import"./ProgressBar-eED3hhac.js";import"./Label-zeGTIhsR.js";import"./Hidden-BOcIw6_e.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-bTiOWaRI.js";import"./useFocusable-DsRGTtrf.js";import"./VisuallyHidden-CPqjoTjm.js";import"./ContextMenuSection-DdrBdwjw.js";import"./Action-B5Dc0NVU.js";import"./context-jvIE4x8v.js";import"./useStatic-Dks4Zmqh.js";import"./browser-BMt8iY1_.js";import"./getActionGroupSlot-Dbbh_IGy.js";import"./dynamic-6if2hzUD.js";import"./Dialog-BGKaFNBq.js";import"./RSPContexts-CY0Qb7bk.js";import"./OverlayArrow-Do6HgTy2.js";import"./useControlledState-BRozYY3l.js";import"./Collection-7_iGck5f.js";import"./CollectionBuilder-BRZppff8.js";import"./SelectionIndicator-Dn3j6216.js";import"./Separator-CviJc1fV.js";import"./SelectionManager-BfDKXohP.js";import"./useEvent-B0QpT_fK.js";import"./FocusScope-DhCz7nLk.js";import"./ColumnLayout-n_Jz4fiI.js";import"./Avatar-CqMvIYSu.js";import"./AlertIcon-Gt2BTk8C.js";import"./Image-CSgg8lWs.js";import"./Link-DvmAFOUy.js";import"./OptionsButton-CXVKeQnJ.js";import"./ButtonView-DmFKtMwL.js";import"./ContextMenuTriggerView-b5c_08Do.js";import"./ContextMenuTrigger-Ca6zLyWt.js";import"./OverlayTrigger-B7jN7CHJ.js";import"./OverlayContextProvider-BNfa_JMj.js";import"./FieldError-DOHJV3_t.js";import"./FieldError-DZmbq2tb.js";import"./AlertText-Cdx49GPM.js";import"./useRef-C6pb-qXv.js";import"./LoadingSpinner-D1C6LJRF.js";import"./remote-B_1lzL7i.js";import"./Heading-4RYn6yie.js";import"./useFormValidation-vO_E-FCH.js";import"./Input-CzVRJw_9.js";import"./EmulatedBoldText-BqLHzBf0.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Xe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=y();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
