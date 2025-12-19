import{r as x,j as e}from"./iframe-CywxDTj6.js";import{F as t}from"./FileDropZone-Wkg2jxuy.js";import{S as d}from"./Section-DFnKKkTa.js";import{F as u}from"./FileCardList-MyDK55vH.js";import{F}from"./FileCard-D61VW2QB.js";import{u as S,F as C,t as D}from"./Form-CB7Mj76y.js";import{S as y}from"./ResetButton-DuDCjHVj.js";import{B as f}from"./Button-Dt6rqZC2.js";import{A as b}from"./ActionGroup-C_Gw-9qw.js";import{Z as j,_ as B}from"./IconWarning-BQFONsdl.js";import{H as g}from"./Heading-DXOJNO6C.js";import{F as h}from"./FileField-cXXEVuEy.js";import{T as O}from"./Text-vlJOJK2L.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-BRdnHc_j.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DIqRYGZg.js";import"./index-BVyD66xE.js";import"./index-CFicy-UB.js";import"./useFieldComponent-DA2iK2GC.js";import"./utils-JmAwA3ix.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-Dc57gZlo.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CtuLxX2S.js";import"./useFocus-DDJfJTZx.js";import"./useCollator-Dm-KYvmX.js";import"./context-Wz-N3Tdz.js";import"./useLocalizedStringFormatter-OykjdJOp.js";import"./Button-DzvzizsP.js";import"./ProgressBar-BoAFCcAD.js";import"./Label-B7but0VW.js";import"./Hidden-D_vom6ZC.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CStV9ujD.js";import"./useFocusRing-D1WKjA4v.js";import"./useFocusable-D7CLIfGa.js";import"./VisuallyHidden-CBo5v6jz.js";import"./ContextMenuSection-DDk2X5KZ.js";import"./Action-DyuzWneU.js";import"./context-DM4I0BsB.js";import"./useStatic-B4t8cENg.js";import"./browser-CaezisB_.js";import"./getActionGroupSlot-CAhf_Uni.js";import"./dynamic-D64zpBY8.js";import"./Dialog-RfbYVzK-.js";import"./RSPContexts-DB0ICqF0.js";import"./OverlayArrow-kC1F2-h6.js";import"./useControlledState-CrIAtAXB.js";import"./Collection-DZTo--rr.js";import"./CollectionBuilder-CNb94HNq.js";import"./SelectionIndicator-B2WWcQye.js";import"./Separator-DF0yS6SS.js";import"./SelectionManager-Mk_lDA9T.js";import"./useEvent-CDXAxsds.js";import"./FocusScope-CPNFfVyd.js";import"./ColumnLayout-DcAEY6Le.js";import"./Avatar-BSXYKNkw.js";import"./AlertIcon-B_eZBptx.js";import"./Image-CcukxnlB.js";import"./Link-CgBMMf-o.js";import"./OptionsButton-DoOQFLid.js";import"./ButtonView-DTqaotBM.js";import"./ContextMenuTriggerView-BoT7G68A.js";import"./ContextMenuTrigger-Dpjwo80_.js";import"./OverlayTrigger-DpHz--ek.js";import"./OverlayContextProvider-C85v0gvj.js";import"./FieldError-zwomljJ3.js";import"./FieldError-fWQdbmrt.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-B_Nq6vS0.js";import"./LoadingSpinner-Byj--1Pk.js";import"./remote-DxJecAWu.js";import"./Heading-C30wQAmC.js";import"./useFormValidation-CXUK0Gt0.js";import"./Input-CoVkAmRj.js";import"./EmulatedBoldText-Vtu08ir6.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,$e={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=D();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
