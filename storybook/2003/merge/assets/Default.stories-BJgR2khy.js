import{r as x,j as e}from"./iframe-nPsKv9M3.js";import{F as t}from"./FileDropZone-CGjpXRtp.js";import{S as u}from"./Section-DpSzYka8.js";import{F}from"./FileCardList-BXAcxWxn.js";import{F as f}from"./FileCard-CPDP-MSr.js";import{u as E,F as W,t as G}from"./Form-L2pz2FU0.js";import{B as s}from"./Button-Cwt3YooV.js";import{A as M}from"./ActionGroup-DEp6kO8r.js";import{_ as j,$ as q}from"./IconWarning-D7ef3xYO.js";import{H as g}from"./Heading-O_CeYAYv.js";import{F as h}from"./FileField-CoIS7QLO.js";import{T as v}from"./Text-XZwmfgbx.js";import"./IllustratedMessage-DL5LXJT3.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BR7735qm.js";import"./mergeRefs-DGqX8NnL.js";import"./index-BHi6sGsK.js";import"./utils-8bL4GcU7.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BIdL4sNQ.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-VKnQkuTS.js";import"./useFocus-D6fxwPDF.js";import"./useCollator-Dm05pnhO.js";import"./context-mwZCjolN.js";import"./useLocalizedStringFormatter-DSEYfllN.js";import"./Button-_y3k4Es0.js";import"./ProgressBar-Bh2LZauY.js";import"./Label-BrXjgpUy.js";import"./Hidden-BiSDldQr.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CD1xEu4S.js";import"./useFocusRing-caiKUn6t.js";import"./useFocusable-QTkHwuSk.js";import"./VisuallyHidden-DzuuU_mQ.js";import"./ContextMenuSection-BLlKS18x.js";import"./Action-aMmcK7s7.js";import"./context-CC3ykTmh.js";import"./useStatic-CwmIPWCn.js";import"./browser-BzcSKw7f.js";import"./getActionGroupSlot-D41EShs_.js";import"./dynamic-wM-X8Xms.js";import"./Popover-DBvyH1F8.js";import"./DialogTriggerView-Cm1t_yF_.js";import"./RSPContexts-4Iqr_AQa.js";import"./ClearPropsContextView-R1wYtvDX.js";import"./useControlledState-CsXjitNs.js";import"./FocusScope-Bk-s4YOY.js";import"./Collection-BH5fUWZT.js";import"./CollectionBuilder-BsO6Q-Ae.js";import"./Separator-Cl85CK-5.js";import"./Group-N7Se0mQR.js";import"./SearchField-DpvPGqnX.js";import"./FieldError-BeWVHHOP.js";import"./Form-C8Y-x06x.js";import"./useTextField-5p-5mVZt.js";import"./useFormReset-JMfDIv5v.js";import"./TextField-Bthj1NJK.js";import"./useEvent-Lgym_IyA.js";import"./SelectionManager-_SjxoMvT.js";import"./Switch-hwfAc8Jc.js";import"./Label-C7MkaMDD.js";import"./useToggleState-B70h6BiI.js";import"./ColumnLayout-DyfDh1dQ.js";import"./Avatar-Cyy1ohMU.js";import"./AlertIcon-CTOBPlvm.js";import"./Image-BNOIs9a4.js";import"./Link-ByafqF-B.js";import"./ButtonView-D_SoO7dY.js";import"./ContextMenuTriggerView-DU6qK3Vj.js";import"./FieldError-DLcc93Kg.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-C1ZMRQIb.js";import"./Heading-MJ33d7ah.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-B79vZW6N.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,fr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(b=(O=m.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};var B,L,H;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,_,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(w=(U=d.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};const gr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,m as Disabled,c as Multiple,l as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,gr as __namedExportsOrder,fr as default};
