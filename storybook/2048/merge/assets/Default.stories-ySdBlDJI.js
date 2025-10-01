import{r as x,j as e}from"./iframe-BdvCKsbF.js";import{F as t}from"./FileDropZone-Cj9uc1Ot.js";import{S as u}from"./Section-Jzko1FZT.js";import{F}from"./FileCardList-DPEx2rGr.js";import{F as f}from"./FileCard-KJGId9VB.js";import{u as E,F as W,t as G}from"./Form-C_oFPc-t.js";import{B as s}from"./Button-CEcdxUV1.js";import{A as M}from"./ActionGroup-8hqY-sJD.js";import{_ as j,$ as q}from"./IconWarning-P52nLd_s.js";import{H as g}from"./Heading-DMBcew2u.js";import{F as h}from"./FileField-BY0m6Lw9.js";import{T as v}from"./Text-JqEaJ00k.js";import"./index-Cun1SEai.js";import"./IllustratedMessage-DxY6pJUG.js";import"./clsx-B-dksMZM.js";import"./flowComponent-pHCscBgm.js";import"./index-CcTYzsK6.js";import"./index-nNeao2-W.js";import"./utils-BbupUKpI.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-C3C-Y4LW.js";import"./filterDOMProps-CghfNOdR.js";import"./Label-6ghd3nSI.js";import"./Hidden-DHl5AEyE.js";import"./useFocus-BlE0zHW0.js";import"./useCollator-EaQty6uw.js";import"./context-DElBd4UT.js";import"./useLocalizedStringFormatter-CqStrOIa.js";import"./Button-rqlppWuO.js";import"./ProgressBar-kDZvVta4.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DSXZ_FtS.js";import"./useFocusRing-CkzTFAtm.js";import"./useFocusable-F8xU0DHg.js";import"./VisuallyHidden-Nt_GLLf_.js";import"./ContextMenuSection-BnE57rKt.js";import"./Action-CY3HJwZy.js";import"./context-CCm7d4ti.js";import"./useStatic-PYikJUKS.js";import"./browser-1fV_VPE3.js";import"./getActionGroupSlot-B9XM3kr8.js";import"./dynamic-a4vM_yKz.js";import"./Dialog-CKgg94zq.js";import"./RSPContexts-Bh8BGw74.js";import"./OverlayArrow-Ck2ASDGt.js";import"./useControlledState-DFl6XB3S.js";import"./Collection-BLnLf1sz.js";import"./CollectionBuilder-C6WQfqbB.js";import"./context-BhDiC0Wn.js";import"./Separator-CZgxguF8.js";import"./SelectionManager-qFHbh8Rk.js";import"./useEvent-DnBkuKjZ.js";import"./FocusScope-pfm_0aY5.js";import"./ColumnLayout-ZD9MZPnO.js";import"./Avatar-Dr4Aep2B.js";import"./AlertIcon-8N6h8oxE.js";import"./Image-7tEJ7RYQ.js";import"./Link-CYuL7qHB.js";import"./ButtonView-CSUXdX6s.js";import"./ContextMenuTriggerView-BGLZQ6i-.js";import"./ContextMenuTrigger-KcV7tGV0.js";import"./OverlayTrigger-COQc48B1.js";import"./ControlledNotification-FezNhtwt.js";import"./OverlayContextProvider-DLByYP72.js";import"./FieldError-CdPfgsKF.js";import"./FieldError-CxS3H1fm.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-2grY-J-m.js";import"./Heading-av54CM7K.js";import"./FormField.module-CqWyJNQI.js";import"./useFormValidation-CYJuvObN.js";import"./Input-i8756tn3.js";import"./useMakeFocusable-BRRRy5hj.js";import"./EmulatedBoldText-Bq1I9eFa.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,ur={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},l={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(b=(O=l.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};var B,L,H;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...(H=(L=m.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,_,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(I=(_=p.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var R,T,Z;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(Z=(T=c.parameters)==null?void 0:T.docs)==null?void 0:Z.source}}};var k,U,w;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(w=(U=d.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};const Fr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,l as Disabled,c as Multiple,m as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,Fr as __namedExportsOrder,ur as default};
