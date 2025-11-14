import{r as x,j as e}from"./iframe-U-SQzk2U.js";import{I as t,r as u}from"./TimeField-CC_Pyjeg.js";import{S as F}from"./Section-Cs2_EqxV.js";import{F as f,b as g}from"./FileCardList-BFx3LKHI.js";import{u as S,F as C,t as D}from"./Form-ChZcpzhu.js";import"./ResetButton-6yNuBxVS.js";import{B as s}from"./Button-B_mH5guI.js";import{A as y}from"./ActionGroup-QOnDMJ0K.js";import{_ as j,$ as b}from"./IconWarning-CDCEBJyf.js";import{H as h}from"./Heading-LgN9kaRj.js";import{T as O}from"./Text-MZxPcWY_.js";import"./index-nuYtCEEu.js";import"./flowComponent-B4D8aI1U.js";import"./index-CCRDw9Jm.js";import"./clsx-B-dksMZM.js";import"./index-CS9SnKd_.js";import"./utils-DoPZZ_D6.js";import"./Accordion-ZeIRJCaw.js";import"./dynamic-BNi_8Fxs.js";import"./Alert-PBaqSyU5.js";import"./AlertIcon-81NvLES1.js";import"./useLocalizedStringFormatter-DxYjk-pp.js";import"./context-DG48XepE.js";import"./AlertBadge-BDdG2Xyu.js";import"./Align-BaKWMIPi.js";import"./Popover-BJPafbQW.js";import"./context-ChAoIJrl.js";import"./Button-DBw5Ol_w.js";import"./ProgressBar-CipRA_mB.js";import"./Hidden-D2mi6DaR.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-B2IDcSiC.js";import"./useFocusable-Ctp8Cukd.js";import"./RSPContexts-CXcRuCAV.js";import"./Collection-D30Phmso.js";import"./CollectionBuilder-CnentVFR.js";import"./SelectionIndicator-CV40_W2v.js";import"./Separator-BXP_D1Un.js";import"./browser-w1PF0DBJ.js";import"./useStatic-BAhUJhAM.js";import"./OverlayTrigger-BjYUeewY.js";import"./ControlledNotification-CprxFH82.js";import"./TableFooterRow-DhmvhUbW.js";import"./SkeletonText-B7Idi9Co.js";import"./Avatar-Dp_xN1xq.js";import"./AvatarStack-BziCuf6l.js";import"./Badge-DINRYIZ4.js";import"./BigNumber-DxxIndo0.js";import"./Breadcrumb-C7c-KnuV.js";import"./Link-C1W3HrwR.js";import"./Legend-Iz7Sss5n.js";import"./Color-DHmCSMDw.js";import"./Content-DqP6eARh.js";import"./Label-C3BVuxS7.js";import"./ContextualHelpTrigger-G5U05qXX.js";import"./CounterBadge-DERld0YM.js";import"./DonutChart-CG4udGsV.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CQRWQTua.js";import"./Header-D2ZfwLZJ.js";import"./Image-fMegGqHo.js";import"./Initials-CdiKdV33.js";import"./InlineCode-CY3vRQgR.js";import"./PopoverTrigger-Coxd46NM.js";import"./LoadingSpinner-CC-MYLRK.js";import"./Separator-DjGJVRMe.js";import"./Message-DV2VcofZ.js";import"./MessageSeparator-DMC7QGGP.js";import"./NavigationGroup-BXxl9KBJ.js";import"./Notification-tY-Mb6kR.js";import"./NotificationProvider-BrhLMx6A.js";import"./ProgressBar-BwkFEgmn.js";import"./Rating-worVxwfb.js";import"./Skeleton-D7CUbSzy.js";import"./getActionGroupSlot-BsOJ1KeF.js";import"./EmulatedBoldText-2j5mm0bP.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,ze={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(F,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(u,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(f,{children:[...i??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]})}},L=B("submit"),a={},l={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(F,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(b,{}),e.jsx(h,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(u,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(f,{children:[...i??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(F,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop files"}),e.jsx(u,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(f,{children:[...i??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]})}},d={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:L,children:[e.jsxs(F,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(u,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(f,{children:[...i.watch("file")??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const Je=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,l as Disabled,c as Multiple,m as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,Je as __namedExportsOrder,ze as default};
