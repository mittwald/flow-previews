import{r as x,j as e}from"./iframe-B_VLmVOf.js";import{F as t}from"./FileDropZone-BckszZmt.js";import{S as d}from"./Section-C8rH5F8Y.js";import{F as u}from"./FileCardList-DW-JzT7A.js";import{F}from"./FileCard-OnwpG91m.js";import{u as S,F as C,t as D}from"./Form-CYwbn_Ej.js";import{S as y}from"./ResetButton-CT-MbADY.js";import{B as f}from"./Button-Bx9uZJMk.js";import{A as b}from"./ActionGroup-BpNSiWp6.js";import{$ as j,a0 as B}from"./IconWarning-COj126FB.js";import{H as g}from"./Heading-CnR3VTEF.js";import{F as h}from"./FileField-tNsEwSNT.js";import{T as O}from"./Text-DLyTxpXl.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-DkYLBfE4.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Bc5-OX5Z.js";import"./index-GX3ioGoD.js";import"./index-Cpfd6Pim.js";import"./useFieldComponent-CG-gR-7X.js";import"./utils-C3gFrn3p.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-Cz72Ll4P.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-3m37nTep.js";import"./useFocus-BThPJxs2.js";import"./useCollator-C3rClAMq.js";import"./context-x63-ahNn.js";import"./useLocalizedStringFormatter-HtYu0JJ-.js";import"./Button-sEz_Ftmo.js";import"./ProgressBar-B-kO7AM1.js";import"./Label-BcEUcVG2.js";import"./Hidden-BDeD6EhR.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-dvDnySA_.js";import"./useFocusRing-CqgXonXS.js";import"./useFocusable-D136elhd.js";import"./VisuallyHidden-neYV3Owd.js";import"./ContextMenuSection-Bn3YLQv6.js";import"./Action-Ct3jXlr4.js";import"./context-DKzx1USb.js";import"./useStatic-Ch5ZGK2l.js";import"./browser-BI-ei-gA.js";import"./getActionGroupSlot-DWxJJpa_.js";import"./dynamic-BPLgH_zA.js";import"./Dialog-B23HRyeo.js";import"./RSPContexts-CewByvV8.js";import"./OverlayArrow-BqV4egk9.js";import"./useControlledState-Cy2UyDQ-.js";import"./Collection-gtDJcyu2.js";import"./CollectionBuilder-DNk5Dmq7.js";import"./SelectionIndicator-BccBPPpV.js";import"./Separator-2P5ZQBAJ.js";import"./SelectionManager-DSvZPYB7.js";import"./useEvent-CYdGT-0S.js";import"./FocusScope-PhJ8RGzw.js";import"./ColumnLayout-CtCqSKiC.js";import"./Avatar-CUJWVHuI.js";import"./AlertIcon-CQ3Ik0rE.js";import"./Image-CNmc7xSc.js";import"./Link-CcdFK-i8.js";import"./OptionsButton-CsPUqE-R.js";import"./ButtonView-WUiEtFbg.js";import"./ContextMenuTriggerView-D7yJXhmX.js";import"./ContextMenuTrigger-CJxU4qkN.js";import"./OverlayTrigger-r-EuZvmq.js";import"./OverlayContextProvider-BI7L_fxB.js";import"./FieldError-Daf8utl3.js";import"./FieldError-DsHbeww2.js";import"./AlertText-DdDDd0bO.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-ktlGpVd-.js";import"./LoadingSpinner-8NlAwzA_.js";import"./remote-D8h-jp0X.js";import"./Heading-CCNcjRWR.js";import"./useFormValidation-BmcsTB_W.js";import"./Input-CDIp8Otf.js";import"./EmulatedBoldText-C4lFh4eF.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=D();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
