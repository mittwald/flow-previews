import{r as x,j as e}from"./iframe-CgWIZppF.js";import{F as t}from"./FileDropZone-BSljMEse.js";import{S as d}from"./Section-DjNOq_vK.js";import{F as u}from"./FileCardList-CjZCaV17.js";import{F}from"./FileCard-Ps-4ck_9.js";import{u as S,F as C,t as D}from"./Form-DaCB2sWj.js";import{S as y}from"./ResetButton-CovhuYqQ.js";import{B as f}from"./Button-B2z86NVg.js";import{A as b}from"./ActionGroup-C2VcbEo2.js";import{Z as j,_ as B}from"./IconWarning-CJrmQcXC.js";import{H as g}from"./Heading-CfRE4X5D.js";import{F as h}from"./FileField-2JboNzTY.js";import{T as O}from"./Text-B7pZrZSG.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-Ckp1zC1u.js";import"./clsx-B-dksMZM.js";import"./flowComponent-n6uWZ_Yk.js";import"./index-DK9ZOg9l.js";import"./index-D8vpbAff.js";import"./useFieldComponent-BZyKlvwh.js";import"./utils-CqFMFg3g.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-C3p6npBl.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DMBsm_3O.js";import"./useFocus-ClWOKyYK.js";import"./useCollator-BRse2HwO.js";import"./context-DG5uy-SY.js";import"./useLocalizedStringFormatter-6cAQP3rP.js";import"./Button-C_sZyB84.js";import"./ProgressBar-CMi9IWJp.js";import"./Label-Bv5UhUCK.js";import"./Hidden-td7Ld2aU.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CoCxa2CI.js";import"./useFocusRing-pEE2Rwro.js";import"./useFocusable-Dp8viQw7.js";import"./VisuallyHidden-BDyUoc3v.js";import"./ContextMenuSection-BUslXVLP.js";import"./Action-ChgPhfJd.js";import"./context-B2MrOWQ_.js";import"./useStatic-CFKrTcwu.js";import"./browser-C8d3FCf4.js";import"./getActionGroupSlot-Bt3m4oNd.js";import"./dynamic-BqY2cEs-.js";import"./Dialog-R-LZrA7I.js";import"./RSPContexts-CAKQ_-J3.js";import"./OverlayArrow-CNLX7-2g.js";import"./useControlledState-ii3oWk08.js";import"./Collection-DXGs2lV9.js";import"./CollectionBuilder-CoS6mLvq.js";import"./SelectionIndicator-xmkzz9vO.js";import"./Separator-pxi-Jkjv.js";import"./SelectionManager-BFnz3p05.js";import"./useEvent-C_2qUUzn.js";import"./FocusScope-CYlUipby.js";import"./ColumnLayout-CWiDJsoh.js";import"./Avatar-WSdPbpuj.js";import"./AlertIcon-D3MSf42O.js";import"./Image-DwoXUJtX.js";import"./Link-HC91FLDg.js";import"./OptionsButton-CqJCtLmG.js";import"./ButtonView-DRUBn2V0.js";import"./ContextMenuTriggerView-Cownispe.js";import"./ContextMenuTrigger-Dz5Ek0-I.js";import"./OverlayTrigger-Ch4_MWoX.js";import"./OverlayContextProvider-BJpURIjJ.js";import"./FieldError-Dr7a0W2N.js";import"./FieldError-xtpbDfud.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-o2mxGtfc.js";import"./LoadingSpinner-nmzfTpX1.js";import"./remote-DVGHPh_8.js";import"./Heading-DOQpztPl.js";import"./useFormValidation-DKxVhdCK.js";import"./Input-jwk6Ly15.js";import"./EmulatedBoldText-iMswxomY.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,$e={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=D();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const er=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,er as __namedExportsOrder,$e as default};
