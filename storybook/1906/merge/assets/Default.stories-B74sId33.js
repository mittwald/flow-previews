import{r as g,j as e}from"./iframe-CB_IvR8I.js";import{F as t}from"./FileDropZone-D9n_maho.js";import{S as d}from"./Section-ChgdckCA.js";import{F as u}from"./FileCardList-CsCpxAss.js";import{F}from"./FileCard-BteIgSDu.js";import{u as k,F as U,t as w}from"./Form-DpTUUNrZ.js";import{B as s}from"./Button-B6pH5E7T.js";import{A as E}from"./ActionGroup-BUPr_rwT.js";import{_ as x,$ as R}from"./IconWarning-DHvxn9zQ.js";import{H as f}from"./Heading-5jxFfyfL.js";import{F as h}from"./FileField-CuEjSdYq.js";import{T as W}from"./Text-C_h1oOw9.js";import"./IllustratedMessage-8hvBGmm5.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CQ73sAu4.js";import"./mergeRefs-CSVQQCMz.js";import"./index-dvXJvLk3.js";import"./utils-g_K47B_Q.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-B8w1c0_W.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DNzpHOuu.js";import"./useFocus-B0PqsM1A.js";import"./useCollator-3DG3Mrdl.js";import"./context-CQpLcUPr.js";import"./useLocalizedStringFormatter-BKMvXLmW.js";import"./Button-BNZImaSB.js";import"./ProgressBar-DB_rXcaP.js";import"./Label-kjSyRRrG.js";import"./Hidden-jmCIdXP6.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BSSkfFZ6.js";import"./useFocusRing-gt8SzE7T.js";import"./useFocusable-B2StGM5o.js";import"./VisuallyHidden-D4WM3JvY.js";import"./ContextMenuSection-CCIV1sJL.js";import"./Action-DXrBr-ZU.js";import"./context-B4EC4nRx.js";import"./useStatic-y0oZYxL5.js";import"./browser-CyPw7Cgt.js";import"./getActionGroupSlot-Bj-rdEEm.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-nVDPewl7.js";import"./RSPContexts-PWzkBgmU.js";import"./OverlayArrow-01R9fjkr.js";import"./useControlledState-CS3WyH2d.js";import"./Collection-BYXnLO4u.js";import"./CollectionBuilder-opZAg4uy.js";import"./Separator-Bv7qspKp.js";import"./Group-BtoN_DlS.js";import"./SearchField-CR8AG0pb.js";import"./FieldError-7I8SRRkd.js";import"./Form-BSDtEK6z.js";import"./useTextField-Dvn-D0Cy.js";import"./useFormReset-DVL0Bkgs.js";import"./TextField-nXjEyJdg.js";import"./useEvent--a1AA2TN.js";import"./SelectionManager-DyWAPqsT.js";import"./FocusScope-2f5e0YPn.js";import"./ColumnLayout-6Jhkzuia.js";import"./Avatar-5DKDAMFz.js";import"./AlertIcon-BlCkjLsM.js";import"./Image-CRdNADlC.js";import"./Link-z4v83iI8.js";import"./ButtonView-BKH7_-Wq.js";import"./ContextMenuContent-DAqLH-HX.js";import"./Popover-7BARD7J6.js";import"./DialogTriggerView-SiWvQg2j.js";import"./Switch-C6Bv0M9b.js";import"./Label-DQjiInKi.js";import"./useToggleState-CSHG9nms.js";import"./FieldError-COPLGoQY.js";import"./LoadingSpinner-B018WmYG.js";import"./Heading-9QvowWck.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-B-vVao8K.js";const{action:G}=__STORYBOOK_MODULE_ACTIONS__,cr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(f,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},M=G("submit"),a={},m={args:{isDisabled:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(R,{}),e.jsx(f,{children:"Drop image"}),e.jsx(W,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(f,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=k(),i=w();return e.jsxs(U,{form:n,onSubmit:M,children:[e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(f,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(E,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var j,S,C;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(C=(S=a.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var D,b,y;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(y=(b=m.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var B,L,H;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,_,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(I=(_=p.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var O,T,Z;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: props => {
    const form = useForm<{
      file: FileList | null;
    }>();
    const Field = typedField(form);
    return <Form form={form} onSubmit={submitAction}>
        <Section>
          <FileDropZone {...props} onChange={f => form.setValue("file", f)}>
            <IconUpload />
            <Heading>Drop file</Heading>
            <Field name="file" rules={{
            required: "Please choose a file"
          }}>
              <FileField>
                <Button variant="outline" color="dark">
                  Select file
                </Button>
              </FileField>
            </Field>
          </FileDropZone>

          <FileCardList>
            {[...(form.watch("file") ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
          </FileCardList>
        </Section>
        <ActionGroup>
          <Button type="submit">Upload</Button>
        </ActionGroup>
      </Form>;
  }
}`,...(Z=(T=c.parameters)==null?void 0:T.docs)==null?void 0:Z.source}}};const dr=["Default","Disabled","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,m as Disabled,p as Multiple,l as WithAcceptedTypes,c as WithReactHookForm,dr as __namedExportsOrder,cr as default};
