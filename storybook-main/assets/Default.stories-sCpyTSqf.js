import{r as x,j as e}from"./iframe-CP5fTbjA.js";import{F as t}from"./FileDropZone-Cu6fBeuE.js";import{S as u}from"./Section-DiXKzprR.js";import{F}from"./FileCardList-B2m7afhB.js";import{F as f}from"./FileCard-1bTVvuQa.js";import{u as E,F as W,t as G}from"./Form-DYPer1qA.js";import{B as s}from"./Button-LzGPdYwx.js";import{A as M}from"./ActionGroup-Cxrl3sEx.js";import{_ as j,$ as q}from"./IconWarning-YasB_Ei3.js";import{H as g}from"./Heading-BRj9pACc.js";import{F as h}from"./FileField-COozahyC.js";import{T as v}from"./Text-CHvdz95V.js";import"./index-Cun1SEai.js";import"./IllustratedMessage-C-kZoTRZ.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CTnt5eSB.js";import"./index-hIOjYjaD.js";import"./index-DskZqzrG.js";import"./utils-D6GTtcOE.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BAGiBnj-.js";import"./filterDOMProps-CghfNOdR.js";import"./Label-CxfqiuLL.js";import"./Hidden-CR2rUGYE.js";import"./useFocus-wlnmJgKA.js";import"./useCollator-NOEQaEQX.js";import"./context-pkC0B_Pd.js";import"./useLocalizedStringFormatter-DGz7N0CE.js";import"./Button-DcNEz-W6.js";import"./ProgressBar-DPdjuR9Z.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BOoZUp13.js";import"./useFocusRing-Cgj30sRP.js";import"./useFocusable-BoWde-QA.js";import"./VisuallyHidden-umqttFyt.js";import"./ContextMenuSection-V-zZv8b3.js";import"./Action-BkjzGa_I.js";import"./context-DXGAVSML.js";import"./useStatic-CBwN_HzY.js";import"./browser-BxAQ3I6S.js";import"./getActionGroupSlot-DggKykPy.js";import"./dynamic-e5X8hiwW.js";import"./Dialog-DAzhbt-W.js";import"./RSPContexts-BW6Q5n3-.js";import"./OverlayArrow-CtZDvQgB.js";import"./useControlledState-5yv2Ipvc.js";import"./Collection-BOIgwszt.js";import"./CollectionBuilder-HzejECpA.js";import"./context-BoN7p6BF.js";import"./Separator-CXM6la1d.js";import"./SelectionManager-zDFJDssk.js";import"./useEvent-B3kJFynN.js";import"./FocusScope-OWR7C_89.js";import"./ColumnLayout-Yhq-KmU5.js";import"./Avatar-eN0_0E9B.js";import"./AlertIcon-Cv4p52bu.js";import"./Image-CFkM70j8.js";import"./Link-DvfzK0RM.js";import"./ButtonView-C0y12kRV.js";import"./ContextMenuTriggerView-B1CLGRuY.js";import"./ContextMenuTrigger-BpdQBYRr.js";import"./OverlayTrigger-CR77EUIN.js";import"./ControlledNotification-r3JJBIQm.js";import"./OverlayContextProvider-DdAgShMM.js";import"./FieldError-De2xyHB9.js";import"./FieldError-CsW0lZ5n.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-B6JgwtAG.js";import"./Heading-6kSboyTb.js";import"./FormField.module-CqWyJNQI.js";import"./useFormValidation-Lrzd87zJ.js";import"./Input-DKZrAi90.js";import"./useMakeFocusable-D5Xsb7wJ.js";import"./EmulatedBoldText-CnmkyqOO.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,ur={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},l={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
