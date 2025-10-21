import{r as x,j as e}from"./iframe-DwkHntCQ.js";import{F as t}from"./FileDropZone-BfUCLyFk.js";import{S as u}from"./Section-Cq1uXunU.js";import{F}from"./FileCardList-DrBtSf2R.js";import{F as f}from"./FileCard-JUfXnoOe.js";import{u as S,F as C,t as D}from"./Form-YW79t4FO.js";import{B as s}from"./Button-DN4_LEM9.js";import{A as y}from"./ActionGroup-BUhBVZaF.js";import{_ as j,$ as O}from"./IconWarning-CscgxAB5.js";import{H as g}from"./Heading-BH424ajP.js";import{F as h}from"./FileField-BVCqORT-.js";import{T as b}from"./Text-DBgNVic9.js";import"./index-nuYtCEEu.js";import"./IllustratedMessage-DD48oXXW.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CDVCCqgo.js";import"./index-90CY5obj.js";import"./index-Cx9MYi32.js";import"./useFieldComponent-DTLstJQQ.js";import"./utils-Di7WFWpe.js";import"./Text-BtFh1iC6.js";import"./filterDOMProps-i7L6S0l1.js";import"./react-children-utilities-C8UOdL4T.js";import"./ClearPropsContext-D7-qaIYX.js";import"./intlStrings-ZMTSFH_M.js";import"./useLabel-DPc8RWv0.js";import"./utils-BgD92WZP.js";import"./useFocus-GoSUCcJ3.js";import"./useCollator-DA-keOw9.js";import"./context-BkqugFd7.js";import"./useLocalizedStringFormatter-ClJgDr8F.js";import"./Button-BrfRNilt.js";import"./ProgressBar-BJChhODk.js";import"./Label-CkXLKyn5.js";import"./Hidden-CTKHA4Af.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BCP8B4jj.js";import"./useFocusWithin-tqcFW1Po.js";import"./useFocusable-Bnl-RQKa.js";import"./useFocusRing-B6zRS2mI.js";import"./VisuallyHidden-CVpyzdGa.js";import"./ContextMenuSection-BIxoue0C.js";import"./Action-BTZgUlHV.js";import"./context-DyX3upIJ.js";import"./useStatic-BqeeL3zA.js";import"./browser-DfU0u7Y9.js";import"./getActionGroupSlot-HBCgi1hX.js";import"./dynamic-A00wcWEh.js";import"./Dialog-Cj1dv_FM.js";import"./RSPContexts-CHr_tkrx.js";import"./OverlayArrow-BCGgH0Vq.js";import"./useControlledState-DyDKUpf4.js";import"./Collection-C9EPSj0q.js";import"./CollectionBuilder-CpTUcuaV.js";import"./SelectionIndicator-BmVEKeRD.js";import"./Separator-D5X37L1x.js";import"./SelectionManager-BDJUyJ7N.js";import"./useEvent-N-KGhH9j.js";import"./FocusScope-wRqNTiuk.js";import"./ColumnLayout-5bvtlOOp.js";import"./Avatar-CMtlEgDg.js";import"./AlertIcon-DKibw3us.js";import"./Image-DouymOMf.js";import"./Link-D97UElYb.js";import"./ButtonView-DVdQseSU.js";import"./ContextMenuTriggerView-B5kUp86Y.js";import"./ContextMenuTrigger-BAl4pRWO.js";import"./OverlayTrigger-Dz-k30Wm.js";import"./ControlledNotification-B20ejBs1.js";import"./OverlayContextProvider-DEtKF3P2.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-Bd24wSd4.js";import"./Heading-8J-pRNKz.js";import"./useFormValidation-D01J8um2.js";import"./Input-CxNU6sM9.js";import"./useMakeFocusable-e4U3WnWM.js";import"./EmulatedBoldText-CNqdjroB.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...n??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},L=B("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(O,{}),e.jsx(g,{children:"Drop image"}),e.jsx(b,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...n??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...n??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:L,children:[e.jsxs(u,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(F,{children:[...n.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const Xe=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,m as Disabled,c as Multiple,l as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,Xe as __namedExportsOrder,Qe as default};
