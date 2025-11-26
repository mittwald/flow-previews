import{r as x,j as e}from"./iframe-BZ309vyP.js";import{H as t,q as u}from"./TimeField-XG7fVuks.js";import{S as F}from"./Section-8HxUyc4l.js";import{F as f,b as g}from"./FileCardList-Uss-bJOP.js";import{u as S,F as C,t as D}from"./Form-B3YyVIIh.js";import"./ResetButton-DiyKUpBb.js";import{B as s}from"./Button-D_IowAzf.js";import{A as y}from"./ActionGroup-DcCFpoHe.js";import{_ as j,$ as b}from"./IconWarning-DvQ_83sT.js";import{H as h}from"./Heading-BsbQC_AI.js";import{T as O}from"./Text-C4LG1QU9.js";import"./index-nuYtCEEu.js";import"./PropsContextProvider-P_wGPXL3.js";import"./mergeRefs-DOKtgXIl.js";import"./index-D_qUUaJn.js";import"./clsx-B-dksMZM.js";import"./Accordion-DBJYoG6f.js";import"./dynamic-BlbD8p9A.js";import"./Alert-DPsJkmhp.js";import"./AlertIcon-B-mY0RH1.js";import"./useLocalizedStringFormatter-D2Npicej.js";import"./context-B2ssQm4M.js";import"./AlertBadge-R-mVKmEC.js";import"./Align-DS4_04QJ.js";import"./Popover-X1T8rxjL.js";import"./context-DqVMPo4j.js";import"./Button-CF0FSAUf.js";import"./utils-JyFk5TTa.js";import"./ProgressBar-BUFkxRcJ.js";import"./Hidden-Dy-Kvk-F.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BtfZpnq2.js";import"./useFocusable-CnzH4q2c.js";import"./RSPContexts-CvJVTBp5.js";import"./Collection-Jfb5Oz2B.js";import"./CollectionBuilder-BxUVDWC-.js";import"./SelectionIndicator-B3TjwCoM.js";import"./Separator-Dgou7g2f.js";import"./browser-6QOIIU7n.js";import"./useStatic-5dWEA-L1.js";import"./OverlayTrigger-D_yTwUd7.js";import"./TableFooterRow-CiOqHLtA.js";import"./SkeletonText-DFDkwTxU.js";import"./Avatar-B3lmaioZ.js";import"./AvatarStack-BG3RCwzr.js";import"./Badge--3MWN732.js";import"./BigNumber-BkKE9hXG.js";import"./Breadcrumb-B7PRg9RF.js";import"./Link-m-wa_u5M.js";import"./Legend-C53VbU31.js";import"./Color-DAFsRmWC.js";import"./Content-BkJWB-QG.js";import"./Label-DaB9u04W.js";import"./ContextualHelpTrigger-CvFvqIHG.js";import"./CounterBadge-FgsOg61J.js";import"./DonutChart-Cgkf9wPz.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DQqFYPly.js";import"./Header-_hwWlC9P.js";import"./Image-K3vcbe26.js";import"./Initials-CtNkodNC.js";import"./InlineCode-Dinyx0TJ.js";import"./PopoverTrigger-fvbDiyfk.js";import"./LoadingSpinner-CP4vAouS.js";import"./Separator-n_z7rKib.js";import"./Message-D2YQcln4.js";import"./MessageSeparator-DajKPYBq.js";import"./NavigationGroup-DO1RxFBf.js";import"./Notification-B0QimcaP.js";import"./NotificationProvider-CEg6afiq.js";import"./ProgressBar-DGfkaPcD.js";import"./Rating-BTXRmieV.js";import"./Skeleton-WCVj9B_-.js";import"./EmulatedBoldText-BN5KbGVs.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,Ye={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(F,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(u,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(f,{children:[...i??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]})}},H=B("submit"),a={},l={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(F,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(b,{}),e.jsx(h,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(u,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(f,{children:[...i??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(F,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop files"}),e.jsx(u,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(f,{children:[...i??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]})}},d={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:H,children:[e.jsxs(F,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(u,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(f,{children:[...i.watch("file")??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const $e=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,l as Disabled,c as Multiple,m as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,$e as __namedExportsOrder,Ye as default};
