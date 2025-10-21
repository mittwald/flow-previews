import{r as x,j as e}from"./iframe-BJcrhiyS.js";import{F as t}from"./FileDropZone-PyXYjjOK.js";import{S as u}from"./Section-DHFbYsCk.js";import{F}from"./FileCardList-DeZ06pzO.js";import{F as f}from"./FileCard-DEoFLxMv.js";import{u as S,F as C,t as D}from"./Form-CJrts3Ir.js";import{B as s}from"./Button-DDexK_tB.js";import{A as y}from"./ActionGroup-B0txZhJy.js";import{_ as j,$ as O}from"./IconWarning-DHKN92dZ.js";import{H as g}from"./Heading-CUXx9jgP.js";import{F as h}from"./FileField-CGoPrl-6.js";import{T as b}from"./Text-CzGb6jtw.js";import"./index-nuYtCEEu.js";import"./IllustratedMessage-CDJnN8pd.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CUnmKrjI.js";import"./index-BWslXHRv.js";import"./index-Clh-7_IP.js";import"./useFieldComponent-BTSjCSDH.js";import"./utils-MMz0RNDK.js";import"./Text-BpL6_bME.js";import"./filterDOMProps-i7L6S0l1.js";import"./react-children-utilities-DZ5iFmYj.js";import"./ClearPropsContext-Bddw_Fzg.js";import"./intlStrings-ZMTSFH_M.js";import"./useLabel-_fpNspWn.js";import"./useFocus-B02RLksg.js";import"./useCollator-DUTRWdjd.js";import"./context-C9wRNNkX.js";import"./useLocalizedStringFormatter-BYGjl_Ur.js";import"./Button-DLFIfSVU.js";import"./ProgressBar-BnMTPpQD.js";import"./Label-BomZPPry.js";import"./Hidden-BPKHXv4N.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-D-MZIwgU.js";import"./useFocusRing-Cs9uIsYW.js";import"./useFocusable-o2EAaEwJ.js";import"./VisuallyHidden-DT9WK7BB.js";import"./ContextMenuSection-B4NyQI2O.js";import"./Action-Cl9B75AE.js";import"./context-OYcKy-iK.js";import"./useStatic-DD6IIAig.js";import"./browser-CleZYiuo.js";import"./getActionGroupSlot-i3rgbr5j.js";import"./dynamic-D98kNBqL.js";import"./Dialog-BQ_EXD94.js";import"./RSPContexts-C2e5xu0T.js";import"./OverlayArrow-DSSzOs3h.js";import"./useControlledState-CmFRf9bT.js";import"./Collection-_lGiyPCh.js";import"./CollectionBuilder-B7Z337h2.js";import"./SelectionIndicator-lJ8kUAUa.js";import"./Separator-B85zM0Ob.js";import"./SelectionManager-CQyc1rjw.js";import"./useEvent-hhr9af5x.js";import"./FocusScope-DZerhXt6.js";import"./ColumnLayout-ZSmCAwYQ.js";import"./Avatar-BzTJ5xS-.js";import"./AlertIcon-Bj9aQqIk.js";import"./Image-DwNgkPJb.js";import"./Link-Btgj-tjP.js";import"./ButtonView-BcPdxPf9.js";import"./ContextMenuTriggerView-DU_l0_Wn.js";import"./ContextMenuTrigger-Co3M4dKW.js";import"./OverlayTrigger-D4TYFed6.js";import"./ControlledNotification-BDMyAvnK.js";import"./OverlayContextProvider-DM6mTtug.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-DIhYtINq.js";import"./Heading-DJUV0n03.js";import"./useFormValidation-ofRqxeQo.js";import"./Input-BVWAA476.js";import"./useMakeFocusable-CqrVk7-z.js";import"./EmulatedBoldText-BXLeVkdu.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,ze={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},L=B("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(O,{}),e.jsx(g,{children:"Drop image"}),e.jsx(b,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:L,children:[e.jsxs(u,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
