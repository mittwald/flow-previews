import{r as x,j as e}from"./iframe-C72LIGrp.js";import{F as t}from"./FileDropZone-DoAM11oe.js";import{S as u}from"./Section-CMWdy8sM.js";import{F}from"./FileCardList-BNNl1xQL.js";import{F as f}from"./FileCard-B_7Xa4Mh.js";import{u as E,F as W,t as G}from"./Form-BrAeY_1h.js";import{B as s}from"./Button-Dmf_fI6U.js";import{A as M}from"./ActionGroup-BgMPlWay.js";import{_ as j,$ as q}from"./IconWarning-DoRUMKye.js";import{H as g}from"./Heading-CQTj2TvE.js";import{F as h}from"./FileField-DB3XXmm2.js";import{T as v}from"./Text-CvlnZLd7.js";import"./index-Cun1SEai.js";import"./IllustratedMessage-COe8yxw6.js";import"./clsx-B-dksMZM.js";import"./flowComponent-iVWHpCHC.js";import"./index-D0tOGuOJ.js";import"./index-D1phmMZw.js";import"./utils-Day1TTYQ.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-_4m1t08i.js";import"./filterDOMProps-CghfNOdR.js";import"./Label-CF9BgwC5.js";import"./Hidden-qTQe9qE3.js";import"./useFocus-B4vRNHSZ.js";import"./useCollator-BOhm7rcx.js";import"./context-BWimVEWy.js";import"./useLocalizedStringFormatter-BdEN-g86.js";import"./Button-BS54933W.js";import"./ProgressBar-BXSV1RNz.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CqQxVakl.js";import"./useFocusRing-DuRh0iim.js";import"./useFocusable-Dej5ci1L.js";import"./VisuallyHidden-BStPS_vY.js";import"./ContextMenuSection-DZErrfjN.js";import"./Action-BbbbpS8d.js";import"./context-BXphONxA.js";import"./useStatic-DPVFgY8A.js";import"./browser-Bf0-GHuQ.js";import"./getActionGroupSlot-CHOOOagJ.js";import"./dynamic-M8RwUexW.js";import"./Dialog-DSx4rsSv.js";import"./RSPContexts-CxFI_fU2.js";import"./OverlayArrow-CdAhbmJ_.js";import"./useControlledState-BbMqle0_.js";import"./Collection-CdRuOc0_.js";import"./CollectionBuilder-CIcvBtxV.js";import"./context-yrxx87JI.js";import"./Separator-B7O3kRSm.js";import"./SelectionManager-BcjpThhu.js";import"./useEvent-C77oyAsY.js";import"./FocusScope-CCmAn32n.js";import"./ColumnLayout-CJcwC2YA.js";import"./Avatar-C-FGV6wr.js";import"./AlertIcon-CEvw8Cx2.js";import"./Image-BUVNJrrs.js";import"./Link-XTU_bSRD.js";import"./ButtonView-b3o-zoCr.js";import"./ContextMenuTriggerView-sPwXjAL8.js";import"./ContextMenuTrigger-5S7K5WOT.js";import"./OverlayTrigger-FJ2Pyz9u.js";import"./ControlledNotification-DkB8_49S.js";import"./OverlayContextProvider-C5iPb09x.js";import"./FieldError-D1AwEDR1.js";import"./FieldError-DSjxrI1_.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-_EHg-BbH.js";import"./Heading-BNkuiER5.js";import"./FormField.module-CqWyJNQI.js";import"./useFormValidation-wW6D6XQK.js";import"./Input-Dda4VuA-.js";import"./useMakeFocusable-cMpHNIXZ.js";import"./EmulatedBoldText-CkSYZpi_.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,ur={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},l={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
