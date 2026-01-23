import{r as x,j as e}from"./iframe-iY_Mn_oy.js";import{F as t}from"./FileDropZone-BUhMEUlp.js";import{S as d}from"./Section-CuJxl25L.js";import{F as u}from"./FileCardList-BzD3ZbVG.js";import{F}from"./FileCard-DEHNcnTx.js";import{u as S,F as C,t as D}from"./Form-BNcFjNMX.js";import{S as y}from"./ResetButton-BUk85j1K.js";import{B as f}from"./Button-BXdn408E.js";import{A as b}from"./ActionGroup-pEn2FCmY.js";import{$ as j,a0 as B}from"./IconWarning-B803z1sh.js";import{H as g}from"./Heading-GKx2aQmx.js";import{F as h}from"./FileField-D4LhgYrZ.js";import{T as O}from"./Text-C2ZCo6gl.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-BVBPZkHf.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DM--TRa4.js";import"./index-BDAsCxdA.js";import"./index-IKthRYIx.js";import"./useFieldComponent-Cxjop7r-.js";import"./utils-C-pMCGM-.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CktBEW1F.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-8EVB-03H.js";import"./useFocus-Nxno6ZgW.js";import"./useCollator-Daexx-65.js";import"./context-DIbVk5_z.js";import"./useLocalizedStringFormatter-DmQ_f8mX.js";import"./Button-BELa7hv8.js";import"./ProgressBar-DKU-k64e.js";import"./Label-DWRUfm9N.js";import"./Hidden-BMoxskLs.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-B5dXj1sU.js";import"./useFocusRing-BNNZSKMh.js";import"./useFocusable-Bi19l3La.js";import"./VisuallyHidden-DEFkQEyo.js";import"./ContextMenuSection-DufqnfrN.js";import"./Action-iMWR4bsW.js";import"./context-AuWKQf6d.js";import"./useStatic-BNEy2A13.js";import"./browser-DK9hE6UN.js";import"./getActionGroupSlot-DnzDvT0Q.js";import"./dynamic-CDOrKiJc.js";import"./Dialog-BSCAVunC.js";import"./RSPContexts-CRnPLFal.js";import"./OverlayArrow-KAH5W0sM.js";import"./useControlledState-DUH-ni6I.js";import"./Collection-p0j0j4rV.js";import"./CollectionBuilder-CBi7m5Jq.js";import"./SelectionIndicator-C9Y7msNP.js";import"./Separator-DvCWPy9d.js";import"./SelectionManager-jr_LZpLG.js";import"./useEvent-BHEixncs.js";import"./FocusScope-Crvk_gLu.js";import"./ColumnLayout-BPed7D2x.js";import"./Avatar-VEmfUtB1.js";import"./AlertIcon-Dw605mNU.js";import"./Image-CEmJ2Aqa.js";import"./Link-DReQH9zY.js";import"./OptionsButton-DZK_Q0QP.js";import"./ButtonView-CZq0YFZA.js";import"./ContextMenuTriggerView-CgqV37WR.js";import"./ContextMenuTrigger-Cr6Wbv0a.js";import"./OverlayTrigger-D-Sv7Auh.js";import"./OverlayContextProvider-CEfkP99K.js";import"./FieldError-rrdHjYdT.js";import"./FieldError-BP_EVNQV.js";import"./AlertText-BLXtcQ-I.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-BXSpDy4V.js";import"./LoadingSpinner-C14k5CPB.js";import"./remote-CIrN4__o.js";import"./Heading-BsXYKZvI.js";import"./useFormValidation-B6OmY3vR.js";import"./Input-B3denzrL.js";import"./EmulatedBoldText-CHIJjbeg.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=D();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
