import{r as x,j as e}from"./iframe-7dgBHkjI.js";import{F as t}from"./FileDropZone-B92W0-Yo.js";import{S as u}from"./Section-BTwbdvzE.js";import{F}from"./FileCardList-vNrhuNM0.js";import{F as f}from"./FileCard-DrWiN0Oq.js";import{u as E,F as W,t as G}from"./Form-ChLUzjHn.js";import{B as s}from"./Button-C4xC-ENb.js";import{A as M}from"./ActionGroup-DgEWvKip.js";import{_ as j,$ as q}from"./IconWarning-CHzLfKjq.js";import{H as g}from"./Heading-DA-R3l6v.js";import{F as h}from"./FileField-Bs4wPK8C.js";import{T as v}from"./Text-CPbpE1eA.js";import"./index-Cun1SEai.js";import"./IllustratedMessage-DtNeQm4u.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BTLDR_wZ.js";import"./index-gL3AvcBv.js";import"./index-DzRRQR_A.js";import"./utils-skLZq2rT.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CcEbIf7j.js";import"./filterDOMProps-CghfNOdR.js";import"./Label-DDrFPz8N.js";import"./Hidden-C8BM-Xlw.js";import"./useFocus-BVcT7Cmq.js";import"./useCollator-aaYKjyL1.js";import"./context-DLyAckLP.js";import"./useLocalizedStringFormatter-ihca5feJ.js";import"./Button-DA_owd3b.js";import"./ProgressBar-m_J970Ss.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-C40tO5Ld.js";import"./useFocusRing-DpIlZv5r.js";import"./useFocusable-CjOl0zdL.js";import"./VisuallyHidden-DxfkSq7z.js";import"./ContextMenuSection-P3ZBunxW.js";import"./Action-aBxNfjGZ.js";import"./context-CM0pxKNs.js";import"./useStatic-BofYKATW.js";import"./browser-BYuTkZ2t.js";import"./getActionGroupSlot-p5Itb_hd.js";import"./dynamic-3ixFNiB4.js";import"./Dialog-RmwKLDR6.js";import"./RSPContexts-DU60rLWV.js";import"./OverlayArrow-CimrvBmG.js";import"./useControlledState-U7vX1g_u.js";import"./Collection-BoyNLLEq.js";import"./CollectionBuilder-BVEyhuGf.js";import"./context-CWPPwc3G.js";import"./Separator-zM5l-9RV.js";import"./SelectionManager-CRbs3IKU.js";import"./useEvent-CJDlXvBr.js";import"./FocusScope-iWt5Cohm.js";import"./ColumnLayout-BWVqPknu.js";import"./Avatar-9Zgj_pNk.js";import"./AlertIcon-BGMOo4qZ.js";import"./Image-Bk8AnGDK.js";import"./Link-rF8V2HfC.js";import"./ButtonView-BJxWnN6P.js";import"./ContextMenuTriggerView-CBaRDv1C.js";import"./ContextMenuTrigger-8aWh7jQM.js";import"./OverlayTrigger-B48aJ6SQ.js";import"./ControlledNotification-D2eg1ueK.js";import"./OverlayContextProvider-hM9hqaVX.js";import"./FieldError-XEHbUqlq.js";import"./FieldError-DQvJzSCl.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-BhdyCwx7.js";import"./Heading-C_3CsfJi.js";import"./FormField.module-CqWyJNQI.js";import"./useFormValidation-lhUbjjow.js";import"./Input-pFk5V5wL.js";import"./useMakeFocusable-DAYaUZS_.js";import"./EmulatedBoldText-wnDp19Ns.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,ur={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},l={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
