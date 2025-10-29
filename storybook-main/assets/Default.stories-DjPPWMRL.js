import{r as x,j as e}from"./iframe-BO4how7V.js";import{F as t}from"./FileDropZone-BJKnIp3k.js";import{S as u}from"./Section-L1VuE5li.js";import{F}from"./FileCardList-BSI5Bgbm.js";import{F as f}from"./FileCard-BJrs3n2l.js";import{u as S,F as C,t as D}from"./Form-5BACG0Xr.js";import{B as s}from"./Button-BRSyykRx.js";import{A as y}from"./ActionGroup-1g_0PgZz.js";import{_ as j,$ as O}from"./IconWarning-riXPckyc.js";import{H as g}from"./Heading-CDkPtIgK.js";import{F as h}from"./FileField-B_csUIsX.js";import{T as b}from"./Text-k4VuksKp.js";import"./index-nuYtCEEu.js";import"./IllustratedMessage-B41eKwCk.js";import"./clsx-B-dksMZM.js";import"./flowComponent-_BWaP51b.js";import"./index-B3PYSYUw.js";import"./index-CzMnHAtb.js";import"./useFieldComponent-CjWlILZl.js";import"./utils-BpiWkIEZ.js";import"./Text-BwppUNzg.js";import"./filterDOMProps-i7L6S0l1.js";import"./react-children-utilities-aRBIKRzv.js";import"./ClearPropsContext-Cr48Xe01.js";import"./intlStrings-ZMTSFH_M.js";import"./useLabel-R_XjJcRU.js";import"./useFocus-CFrGhCIR.js";import"./useCollator-fJkQzVou.js";import"./context-n99Hur2q.js";import"./useLocalizedStringFormatter-Byhh4L4X.js";import"./Button-T2VJnm-n.js";import"./ProgressBar-Cb_Q8Aey.js";import"./Label-HRe2PJ1I.js";import"./Hidden-cuI6d2d2.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-C-n8mYYh.js";import"./useFocusRing-cZUm55wA.js";import"./useFocusable-Dm6zCBge.js";import"./VisuallyHidden-BldPGQAk.js";import"./ContextMenuSection-D98yvfja.js";import"./Action-BcCpRMgW.js";import"./context-DS1PliZx.js";import"./useStatic-BYOxqZVF.js";import"./browser-9RCZAQdm.js";import"./getActionGroupSlot-DNMgIyad.js";import"./dynamic-DPbzu-N4.js";import"./Dialog-9TwJqweV.js";import"./RSPContexts-C8zlTsZJ.js";import"./OverlayArrow-6T1AUm1N.js";import"./useControlledState-Dy2CU0s2.js";import"./Collection-7Jhx6ozR.js";import"./CollectionBuilder-NvmcR0Ec.js";import"./SelectionIndicator-qPgcj5gy.js";import"./Separator-CDyVGVx6.js";import"./SelectionManager-CUJzsbBx.js";import"./useEvent-BsUSX18g.js";import"./FocusScope-BDHPNMgd.js";import"./ColumnLayout-BwsKD-YL.js";import"./Avatar-1iI5H5M5.js";import"./AlertIcon-Yi86FBzt.js";import"./Image-BN7KU0OW.js";import"./Link-D-rJ9IkI.js";import"./ContextMenuTriggerView-D5nGXB6p.js";import"./ContextMenuTrigger-C-5zJ7lB.js";import"./OverlayTrigger-CxD_iiL6.js";import"./ControlledNotification-2HQhcMSc.js";import"./OverlayContextProvider-B4IpX5aH.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-Bt5VpGJB.js";import"./Heading-DCJd85qW.js";import"./useFormValidation-BHRl0fwc.js";import"./Input-C8s0JVaR.js";import"./useMakeFocusable-D5dCcyqU.js";import"./EmulatedBoldText-B4e_rnhx.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,$e={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},L=B("submit"),a={},l={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(O,{}),e.jsx(g,{children:"Drop image"}),e.jsx(b,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:L,children:[e.jsxs(u,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
          <Button type="submit">Upload</Button>
        </ActionGroup>
      </Form>;
  }
}`,...d.parameters?.docs?.source}}};const ze=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,l as Disabled,c as Multiple,m as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,ze as __namedExportsOrder,$e as default};
