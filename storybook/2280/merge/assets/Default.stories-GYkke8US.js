import{r as x,j as e}from"./iframe-Cx5kJuuA.js";import{F as t}from"./FileDropZone-C_ctcRCN.js";import{S as d}from"./Section-C2A-3Iy5.js";import{F as u}from"./FileCardList-Dpyi7s_c.js";import{F}from"./FileCard-DQrxY239.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-CwpPjJvG.js";import{B as f}from"./Button-OP9_q8AM.js";import{A as b}from"./ActionGroup-SYctAZp6.js";import{_ as j,$ as B}from"./IconWarning-BDhnLpaV.js";import{H as g}from"./Heading-p9Lbmv6e.js";import{F as h}from"./FileField-aLteg4JF.js";import{T as O}from"./Text-C98Jvmov.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-DUIm800N.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CLOWDrbo.js";import"./index-DK83sfEz.js";import"./index-BqoyVlZ7.js";import"./useFieldComponent-DpBpP7du.js";import"./utils-Nk4paMN-.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CA_aswYo.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B4Wunpgz.js";import"./useFocus-DbL3EqSH.js";import"./useCollator-BUzaHxjg.js";import"./context-CpMzWCEP.js";import"./useLocalizedStringFormatter-CIuieC62.js";import"./useFocusRing-idhb0ztA.js";import"./Button-BlKGeUP9.js";import"./ProgressBar-DpP1vNCR.js";import"./Label-DPB2sN32.js";import"./Hidden-BIWwaIRP.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-LbgF0OFY.js";import"./useFocusable-BtlUXhgP.js";import"./VisuallyHidden-i8gu61hs.js";import"./ContextMenuSection-DO6s1iXZ.js";import"./Action-CnBQ_Jk4.js";import"./context-BmiLu6TN.js";import"./useStatic-C9KIiqww.js";import"./browser-D-pbaBij.js";import"./getActionGroupSlot-BGN_K6ot.js";import"./dynamic-RASAkScQ.js";import"./Dialog-CDKKMn1j.js";import"./RSPContexts-CFLmy0zp.js";import"./OverlayArrow-BNHP_74G.js";import"./useControlledState-D1xezhK5.js";import"./Collection-B4Kq3uAS.js";import"./CollectionBuilder-CZTuuany.js";import"./SelectionIndicator-Dp8Rqhcc.js";import"./Separator-e9wjh8FO.js";import"./SelectionManager-BVVbqoWQ.js";import"./useEvent-3su7RyU0.js";import"./FocusScope-wgzi2f-G.js";import"./ColumnLayout-CnDOjd85.js";import"./Avatar-Bb6YmmXB.js";import"./AlertIcon-DvMPToF_.js";import"./Image-BZQf9yl4.js";import"./Link-CczK6Q9j.js";import"./OptionsButton-Blw_Tu-y.js";import"./ButtonView-CiX34n3K.js";import"./ContextMenuTriggerView-Ts0Lk_i2.js";import"./ContextMenuTrigger-D__wlTjl.js";import"./OverlayTrigger-CDfftEDM.js";import"./OverlayContextProvider-MJQePfMZ.js";import"./FieldError-BCxxTn6h.js";import"./FieldError-UHRLTLut.js";import"./AlertText-BwdeDomp.js";import"./useRef-BzM_ReLH.js";import"./LoadingSpinner-BWQXNo8s.js";import"./remote-C9UyjJTP.js";import"./Heading-BkX6j8w8.js";import"./useFormValidation-CmFpdOnE.js";import"./Input-DHKVlQVM.js";import"./EmulatedBoldText--C3vSC84.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const Xe=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,Xe as __namedExportsOrder,Qe as default};
