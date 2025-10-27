import{r as x,j as e}from"./iframe-C3YinX3s.js";import{F as t}from"./FileDropZone-D3JPvQUZ.js";import{S as u}from"./Section-C_5nF8l2.js";import{F}from"./FileCardList-QNWFqpxn.js";import{F as f}from"./FileCard-D4WPNWZj.js";import{u as S,F as C,t as D}from"./Form-C_5hYMpv.js";import{B as s}from"./Button-B9MewrUz.js";import{A as y}from"./ActionGroup-BpJBuAaq.js";import{_ as j,$ as O}from"./IconWarning-6TASCfRR.js";import{H as g}from"./Heading-BWuvehcD.js";import{F as h}from"./FileField-BD0rqftW.js";import{T as b}from"./Text-40KOd3GJ.js";import"./index-nuYtCEEu.js";import"./IllustratedMessage-DlIrX_88.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DbYaKppP.js";import"./index-PmbawSGG.js";import"./index-BppZCGPZ.js";import"./useFieldComponent-unfYr68o.js";import"./utils-CkQtaKCN.js";import"./Text-2o-hGpxv.js";import"./filterDOMProps-i7L6S0l1.js";import"./react-children-utilities-Tlnpa_z4.js";import"./ClearPropsContext-CJ1szkV5.js";import"./intlStrings-ZMTSFH_M.js";import"./useLabel-6oysTp78.js";import"./useFocus-DuIK45_5.js";import"./useCollator-DJ52WOHW.js";import"./context-XadyItFl.js";import"./useLocalizedStringFormatter-D8x_j-oY.js";import"./Button-CBEcZBzR.js";import"./ProgressBar-DHxU0Tpr.js";import"./Label-uL4LTRYY.js";import"./Hidden-RtymAw99.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CEE7eirG.js";import"./useFocusRing-BT4tpo7d.js";import"./useFocusable-Cpx8bVI7.js";import"./VisuallyHidden-Bah8oUIC.js";import"./ContextMenuSection-ko5_btdi.js";import"./Action-DH4q3DMK.js";import"./context-C6PcGqQE.js";import"./useStatic-K2T119cA.js";import"./browser-DlgIuTl3.js";import"./getActionGroupSlot-DrHtarua.js";import"./dynamic-BlWCyvfa.js";import"./Dialog-CifFL37q.js";import"./RSPContexts-DbIyirJn.js";import"./OverlayArrow-Bx4uFTPE.js";import"./useControlledState-DTNxqflL.js";import"./Collection-CFBStWe-.js";import"./CollectionBuilder-YYQa8BK8.js";import"./SelectionIndicator-CWOLS5ft.js";import"./Separator-BjhRMKQy.js";import"./SelectionManager-C2fMWUbc.js";import"./useEvent-NeYNfT16.js";import"./FocusScope-fcPAzZ97.js";import"./ColumnLayout-D2J7tdP1.js";import"./Avatar-BLONz5y5.js";import"./AlertIcon-Byy9-PrH.js";import"./Image-CE2u6QKq.js";import"./Link-CZlnRLHJ.js";import"./ButtonView-BRFdUSD4.js";import"./ContextMenuTriggerView-BNcnlXHR.js";import"./ContextMenuTrigger-D3c7IQEW.js";import"./OverlayTrigger-CcK_N3rx.js";import"./ControlledNotification-8cMq_6Ir.js";import"./OverlayContextProvider-BLqueKvq.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-BiveWKkE.js";import"./Heading-DtjPUsAn.js";import"./useFormValidation-mKao3Dkx.js";import"./Input-MWLT5DSw.js";import"./useMakeFocusable-DG0DAth_.js";import"./EmulatedBoldText-DmHQDGMB.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,ze={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},L=B("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(O,{}),e.jsx(g,{children:"Drop image"}),e.jsx(b,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:L,children:[e.jsxs(u,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
