import{r as x,j as e}from"./iframe-5GKEjLm3.js";import{F as t}from"./FileDropZone-BLsTiPWB.js";import{S as d}from"./Section-130PRHAT.js";import{F as u}from"./FileCardList-DUjO45nl.js";import{F}from"./FileCard-DcLDEEOp.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-BScoo_H0.js";import{B as f}from"./Button-DbzE4WUt.js";import{A as b}from"./ActionGroup-B4RftQ4W.js";import{a0 as j,a1 as B}from"./IconWarning-B10RUVd-.js";import{H as g}from"./Heading-BfDqySHg.js";import{F as h}from"./FileField-BzYBdUX6.js";import{T as O}from"./Text-4Jq61r3V.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-Lmg4b1O7.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BrPxhm-E.js";import"./index-DZHRuSdS.js";import"./index-CxI-AdtT.js";import"./useFieldComponent-B3twwSIL.js";import"./utils-DZdTZXxi.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-jTefV10v.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-sguPTXZB.js";import"./useFocus-BEqaOfOz.js";import"./useCollator-COkB7H3x.js";import"./context-CYoVNjzy.js";import"./useLocalizedStringFormatter-foHAfgmM.js";import"./useFocusRing-CsUwZj84.js";import"./Button-CslHKHnR.js";import"./ProgressBar-CehyS7IW.js";import"./Label-CD-Ily5W.js";import"./Hidden-CVK_WTqz.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CYa1OoRC.js";import"./useFocusable-BDWe4YTb.js";import"./VisuallyHidden-BfZLOvo3.js";import"./ContextMenuSection-BLAYEuJ8.js";import"./ActionBatch-C4EMIU3M.js";import"./useOverlayController-DTNq5pfb.js";import"./useStatic-BQSB_Jfu.js";import"./browser-DpyY6Jfh.js";import"./getActionGroupSlot-06aUfNYP.js";import"./dynamic-BSdZm6V5.js";import"./Dialog-BTalxjOJ.js";import"./RSPContexts-AhaMx3-_.js";import"./OverlayArrow-C_Skf-4I.js";import"./useControlledState-D9ovZV70.js";import"./Collection-DOmJuy3e.js";import"./CollectionBuilder-DAbTUazM.js";import"./SelectionIndicator-C_xwSetB.js";import"./Separator-BxdVDEg-.js";import"./SelectionManager-rbmArbuf.js";import"./useEvent-_LgPAmJ5.js";import"./FocusScope-BteWf5AP.js";import"./ColumnLayout-f7emYuut.js";import"./Avatar-BniHAPzD.js";import"./AlertIcon-xcA2PG-d.js";import"./Image-HKeXParI.js";import"./Link-jAKiSqkX.js";import"./OptionsButton-BimtR6Hv.js";import"./ButtonView-CWXAC1Vh.js";import"./ContextMenuTriggerView-BEBOYpY0.js";import"./ContextMenuTrigger-B1GDRxix.js";import"./OverlayTrigger-DMEpenBq.js";import"./OverlayContextProvider-CsuZ0G7f.js";import"./FieldError-qE1en1IM.js";import"./FieldError-DNER0k2B.js";import"./AlertText-BQlCz9t6.js";import"./ActionGroupView-CkXwMiBE.js";import"./Content-CfJLe_6_.js";import"./Modal-lgO2eFy3.js";import"./Overlay-BOgy6OMv.js";import"./LoadingSpinner-Bp8vDBpW.js";import"./Flex-tVpMcloB.js";import"./useRef-Dk-mLUQr.js";import"./remote-DrqTcZe1.js";import"./Heading-kRLjhOcq.js";import"./useFormValidation-Dje-UJVy.js";import"./Input-VyCJjbfE.js";import"./EmulatedBoldText-Dw9vtGzr.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
