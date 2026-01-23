import{r as x,j as e}from"./iframe-Pk_Kk4JL.js";import{F as t}from"./FileDropZone-DSQWn6Xv.js";import{S as d}from"./Section-CNK16UAG.js";import{F as u}from"./FileCardList-zaLP7mcG.js";import{F}from"./FileCard-DakVz9CX.js";import{u as S,F as C,t as D}from"./Form-Cv3LQ1Ee.js";import{S as y}from"./ResetButton-6SgmR9Ge.js";import{B as f}from"./Button-D9QX6l1e.js";import{A as b}from"./ActionGroup-Bf9c-qmg.js";import{$ as j,a0 as B}from"./IconWarning-BZbEOivs.js";import{H as g}from"./Heading-wNCcNm7o.js";import{F as h}from"./FileField-dvLKlsjE.js";import{T as O}from"./Text-yAUoHBmv.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-Cu1ozzr0.js";import"./clsx-B-dksMZM.js";import"./flowComponent-c6eRnhhg.js";import"./index-Cry2UgUa.js";import"./index-BO3AnCjb.js";import"./useFieldComponent-T3_INYSJ.js";import"./utils-CLxMEgR2.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-cuBcImQE.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-C5txBCfY.js";import"./useFocus-CG8bKOp6.js";import"./useCollator-Doi6oCed.js";import"./context-CrHSUJ76.js";import"./useLocalizedStringFormatter-DWczizNw.js";import"./Button-CmNC7e_S.js";import"./ProgressBar-R9Q052Y1.js";import"./Label-BhzG_WzN.js";import"./Hidden-D3BnJIdN.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BhJiygMU.js";import"./useFocusRing-Cf40KqTj.js";import"./useFocusable-6mL9jMN5.js";import"./VisuallyHidden-DaiW9JEZ.js";import"./ContextMenuSection-C_1sxa8j.js";import"./Action-C8SSnKxx.js";import"./context-DgSiNkYd.js";import"./useStatic-i-ZCX3ob.js";import"./browser-DxGxcnNA.js";import"./getActionGroupSlot-CPzpUO6W.js";import"./dynamic-I4mA0X6x.js";import"./Dialog-hqEaC_v2.js";import"./RSPContexts-DW-Mep96.js";import"./OverlayArrow-CX4Z7_7Y.js";import"./useControlledState-48Ld73MP.js";import"./Collection-BHxA-DrM.js";import"./CollectionBuilder-DoPbpSH9.js";import"./SelectionIndicator-yei3WI6a.js";import"./Separator-BBzznqX8.js";import"./SelectionManager-BkRtV5Co.js";import"./useEvent-CPz9WXw8.js";import"./FocusScope-CxdKQmWN.js";import"./ColumnLayout-C66JaOWU.js";import"./Avatar-CKA31q0Q.js";import"./AlertIcon-BQAdHRLg.js";import"./Image-C0mImCaU.js";import"./Link-1JSdLWw6.js";import"./OptionsButton-I9EL1YCg.js";import"./ButtonView-22oYLQp2.js";import"./ContextMenuTriggerView-24JD1o_n.js";import"./ContextMenuTrigger-CxKtmIZb.js";import"./OverlayTrigger-C6V65Cj9.js";import"./OverlayContextProvider-FOEyue6v.js";import"./FieldError-2o2dfDUN.js";import"./FieldError-Cm-TOrp1.js";import"./AlertText-B5n-OsOE.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-Dfd838tz.js";import"./LoadingSpinner-DPjJtv8A.js";import"./remote-jZTk_Znj.js";import"./Heading-CHcXaZb2.js";import"./useFormValidation-BDoYoAKM.js";import"./Input-DA7G6uHH.js";import"./EmulatedBoldText-B0MH6cxw.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=D();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
