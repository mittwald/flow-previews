import{r as x,j as e}from"./iframe-BMquwUxp.js";import{F as t}from"./FileDropZone-DaSWBLTc.js";import{S as d}from"./Section-Cjc_LDxh.js";import{F as u}from"./FileCardList-CU1Xgjzl.js";import{F}from"./FileCard-DoTM-Xay.js";import{u as S,F as C,t as D}from"./Form-CH4Jd3Vi.js";import{S as y}from"./ResetButton-BmqhXreY.js";import{B as f}from"./Button-DvE0An6z.js";import{A as b}from"./ActionGroup-CFM0ipne.js";import{$ as j,a0 as B}from"./IconWarning-wcTYZTVE.js";import{H as g}from"./Heading-DmFdEGik.js";import{F as h}from"./FileField--T5XOwYU.js";import{T as O}from"./Text-EG4UQ_l2.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-DqqG3qkT.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DgzAUF5h.js";import"./index-BYK8miAY.js";import"./index-cAMRUrux.js";import"./useFieldComponent-7OMeXUSU.js";import"./utils-C54becjs.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CPXkgTZA.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BNLCM250.js";import"./useFocus-DaRXVXg_.js";import"./useCollator-BviFHu9Y.js";import"./context-BcuHL9mG.js";import"./useLocalizedStringFormatter-C4X4wsGr.js";import"./Button-CwpJPQ3S.js";import"./ProgressBar-ztA157SI.js";import"./Label-BA-uOG5q.js";import"./Hidden-DXpev5BT.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-B-RZvczw.js";import"./useFocusRing-CjhJ1DIN.js";import"./useFocusable-DNP9d3st.js";import"./VisuallyHidden-D31Z6xaf.js";import"./ContextMenuSection-DHh_hwVu.js";import"./Action-4VgG125V.js";import"./context-BbITb74L.js";import"./useStatic-BMpae3_g.js";import"./browser-CBlt42Oy.js";import"./getActionGroupSlot-D40b9Kwq.js";import"./dynamic-B-3tImXr.js";import"./Dialog-Dx0VK2pV.js";import"./RSPContexts-BjvY3wPf.js";import"./OverlayArrow-LMfUU-b0.js";import"./useControlledState-C-7-yrsk.js";import"./Collection-CkKzGnvH.js";import"./CollectionBuilder-C63eWLYU.js";import"./SelectionIndicator-BIlCebKJ.js";import"./Separator-CIx6Mbjl.js";import"./SelectionManager-WBqA1WyO.js";import"./useEvent-DDWvHjPW.js";import"./FocusScope-BR9ShKUP.js";import"./ColumnLayout-BBdxzWH-.js";import"./Avatar-Cj8aif8C.js";import"./AlertIcon-COvVg6Bc.js";import"./Image-D0iMbonZ.js";import"./Link-BG06YpsI.js";import"./OptionsButton-kWTB8oq1.js";import"./ButtonView-Bn6PP7IX.js";import"./ContextMenuTriggerView-BTiVUlOZ.js";import"./ContextMenuTrigger-Bzz3A5D4.js";import"./OverlayTrigger-C_Vz8Pl3.js";import"./OverlayContextProvider-Box79lc0.js";import"./FieldError-DmIKwRtH.js";import"./FieldError-D0s5eFn1.js";import"./InlineAlert-AYUYuGXv.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-DMo9v2cQ.js";import"./LoadingSpinner-BPW5hp_J.js";import"./remote-CiXlw4PI.js";import"./Heading-DxuUq0JW.js";import"./useFormValidation-BU69543b.js";import"./Input-DU1QpXVG.js";import"./EmulatedBoldText-CntJSrfE.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=D();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
