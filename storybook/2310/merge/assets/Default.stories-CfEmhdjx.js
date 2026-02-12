import{r as x,j as e}from"./iframe-BO07bPAa.js";import{F as t}from"./FileDropZone-BBkz0usj.js";import{S as d}from"./Section-DvElnkSb.js";import{F as u}from"./FileCardList-Bb29gozN.js";import{F}from"./FileCard-anjXtnia.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-CmT4K3eb.js";import{B as f}from"./Button-CCtz8EXc.js";import{A as b}from"./ActionGroup-BkcQ2vZG.js";import{a0 as j,a1 as B}from"./IconWarning-ClLv5I07.js";import{H as g}from"./Heading-DF6E_MT5.js";import{F as h}from"./FileField-BCaObNty.js";import{T as O}from"./Text-CwdryKSs.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-D0nNvYNg.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BaceyrB2.js";import"./index-CQGDGAsD.js";import"./index-C__iODou.js";import"./useFieldComponent-B5uAaQ_H.js";import"./utils-DpF9Snp1.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-sIV6FVOB.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Dans5Mom.js";import"./useFocus-ntzScLPi.js";import"./useCollator-82KNa-4u.js";import"./context-DKHz4OX0.js";import"./useLocalizedStringFormatter-CYJTPAtB.js";import"./useFocusRing-DXebh_G-.js";import"./Button-CPst5v-a.js";import"./ProgressBar-BUHmhWxP.js";import"./Label-DlbijyYq.js";import"./Hidden-Bl2ixnRR.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-UbwEnmrk.js";import"./useFocusable-C66-pRTt.js";import"./VisuallyHidden-DCYSiy07.js";import"./ContextMenuSection-CU407IGI.js";import"./Action-CP6j8Viu.js";import"./context-D6FqIPNt.js";import"./useStatic-Dc6GYAIK.js";import"./browser-B0pBncgx.js";import"./dynamic-CShChD8Y.js";import"./getActionGroupSlot-CHQAyQmW.js";import"./Dialog-BBC5U6gG.js";import"./RSPContexts-BnTR6z_r.js";import"./OverlayArrow-BbflWQr7.js";import"./useControlledState-DyIed2bM.js";import"./Collection-BC2XOQqq.js";import"./CollectionBuilder-CRw4EwC7.js";import"./SelectionIndicator-Dw6-XKp3.js";import"./Separator-DdhmoA8S.js";import"./SelectionManager-Chxg5cEr.js";import"./useEvent-D6dqrA9f.js";import"./FocusScope-BA1MxA3e.js";import"./ColumnLayout-Dvp2IRlA.js";import"./Avatar-C4TyhZvQ.js";import"./AlertIcon-CagNIYo0.js";import"./Image-DPf8iJqA.js";import"./Link-B89XE_Hk.js";import"./OptionsButton-CSbwYHlc.js";import"./ButtonView-BuOsec3O.js";import"./ContextMenuTriggerView-B1ZMxxVE.js";import"./ContextMenuTrigger-BCWWGpeX.js";import"./OverlayTrigger-C8_iNjRX.js";import"./OverlayContextProvider-D038r4mb.js";import"./FieldError-DlyPLChi.js";import"./FieldError-cxGJZPY3.js";import"./AlertText-Ca5jxNB-.js";import"./useRef-DKBU6sSn.js";import"./LoadingSpinner-BTNHBT1C.js";import"./remote-C9jEPRv0.js";import"./Heading-Dnio4EBF.js";import"./useFormValidation-CRjEiOmE.js";import"./Input-Drs8jYRG.js";import"./EmulatedBoldText-Bl01c38V.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Xe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=y();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
