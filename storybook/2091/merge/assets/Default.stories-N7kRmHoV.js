import{r as x,j as e}from"./iframe-CgV0BA21.js";import{F as t}from"./FileDropZone-BqvYrrKi.js";import{S as u}from"./Section-sLT7TF5r.js";import{F}from"./FileCardList-Bt-UYf-Y.js";import{F as f}from"./FileCard-B7aJZgKu.js";import{u as S,F as C,t as D}from"./Form-Njtp-qwK.js";import{B as s}from"./Button-CNT8DxS9.js";import{A as y}from"./ActionGroup-uSz-erXb.js";import{_ as j,$ as O}from"./IconWarning-Cjg_6qhe.js";import{H as g}from"./Heading--VfPtVyJ.js";import{F as h}from"./FileField-DHvkCqtR.js";import{T as b}from"./Text-BKw3N1Oz.js";import"./index-nuYtCEEu.js";import"./IllustratedMessage-CDOfkDSa.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C-HH3qvd.js";import"./index-DDuhgqRy.js";import"./index-LOR_5P9o.js";import"./useFieldComponent-D1IKYPO_.js";import"./utils-BtxgbS4l.js";import"./Text-DoKxmv7q.js";import"./filterDOMProps-i7L6S0l1.js";import"./react-children-utilities-D5-pLFdL.js";import"./ClearPropsContext-BLhIxcUa.js";import"./intlStrings-ZMTSFH_M.js";import"./useLabel-B3KDK_sh.js";import"./useFocus-DCA5O52l.js";import"./useCollator-vRN69CzX.js";import"./context-DHnf2uKc.js";import"./useLocalizedStringFormatter-ByloWLWI.js";import"./Button-DxfThd7-.js";import"./ProgressBar-Buubgbe8.js";import"./Label-CttY7hce.js";import"./Hidden-jMQa5TyR.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Dh998neg.js";import"./useFocusRing-D4YLibcx.js";import"./useFocusable-CmuVkcp6.js";import"./VisuallyHidden-7bLCXWCd.js";import"./ContextMenuSection-DduOvbG6.js";import"./Action-DZ2Xrd6d.js";import"./context-CRjcTZWJ.js";import"./useStatic-BN9Sd72d.js";import"./browser-BkNcCpiL.js";import"./getActionGroupSlot-rfX1hTYj.js";import"./dynamic-BuNxxpAs.js";import"./Dialog-BuxTXh7Q.js";import"./RSPContexts-B0Fd51Ht.js";import"./OverlayArrow-B-9LgXoP.js";import"./useControlledState-REzwF7fx.js";import"./Collection-PQKx517l.js";import"./CollectionBuilder-BH1gKqtM.js";import"./SelectionIndicator-Bn-FIAma.js";import"./Separator-DWGZbVju.js";import"./SelectionManager-QPmO5O-V.js";import"./useEvent-DaVswHd3.js";import"./FocusScope-0arVmBSz.js";import"./ColumnLayout-D2XKNJMs.js";import"./Avatar-DHdUkEQ6.js";import"./AlertIcon-DHrnYK5i.js";import"./Image-CpilzWRs.js";import"./Link-CjJ87925.js";import"./ButtonView-D4FRAmJU.js";import"./ContextMenuTriggerView-lx9wYpwd.js";import"./ContextMenuTrigger-BVLpQfNI.js";import"./OverlayTrigger-BQrHQUPN.js";import"./ControlledNotification-Dx7XpGvC.js";import"./OverlayContextProvider-DUFKTZaq.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-CAf9aLu0.js";import"./Heading-CdcvmK3e.js";import"./useFormValidation-AnXxOg_8.js";import"./Input-CWgJEKQk.js";import"./useMakeFocusable-BcUeToCB.js";import"./EmulatedBoldText-DlIqC6uZ.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,ze={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},L=B("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(O,{}),e.jsx(g,{children:"Drop image"}),e.jsx(b,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:L,children:[e.jsxs(u,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const Je=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,m as Disabled,c as Multiple,l as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,Je as __namedExportsOrder,ze as default};
