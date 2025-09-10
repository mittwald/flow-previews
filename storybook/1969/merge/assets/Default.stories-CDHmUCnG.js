import{r as x,j as e}from"./iframe-BpdxrwIb.js";import{F as t}from"./FileDropZone-DAL8zqLl.js";import{S as u}from"./Section-Aj8NHk1U.js";import{F}from"./FileCardList-D2MkP0aO.js";import{F as f}from"./FileCard-CeRXIMu2.js";import{u as E,F as W,t as G}from"./Form-ChoNkt05.js";import{B as s}from"./Button-CwyQ24Il.js";import{A as M}from"./ActionGroup-Dk7-IbAC.js";import{_ as j,$ as q}from"./IconWarning-DfpVuNuz.js";import{H as g}from"./Heading-oG-P3IEC.js";import{F as h}from"./FileField-Bbm0Q6gE.js";import{T as v}from"./Text-DE4Q9wlE.js";import"./IllustratedMessage-WgL4YKJN.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DQxbhqBM.js";import"./mergeRefs-DF-I3_2K.js";import"./index-C0Vgww7F.js";import"./utils-60PhQC-u.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-s-uJNCfK.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BwWD19Pf.js";import"./useFocus-C0zYbozs.js";import"./useCollator-YHcMoLBN.js";import"./context-CefFUzIe.js";import"./useLocalizedStringFormatter-B3Ezl97M.js";import"./Button-0E_exH3L.js";import"./ProgressBar-2VJ7xBq6.js";import"./Label-CccUO69Q.js";import"./Hidden-DpRx3EBx.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CXS9utKX.js";import"./useFocusRing-s_pNlp3q.js";import"./useFocusable-DOYJV0v_.js";import"./VisuallyHidden-C_bZjV4d.js";import"./ContextMenuSection-DOSMoV2f.js";import"./Action-COhKRbVc.js";import"./context-Cy2K_ymr.js";import"./useStatic-_L-kGsxT.js";import"./browser-CjlkZb14.js";import"./getActionGroupSlot-8B6o1Jcn.js";import"./dynamic-DKDa4OpU.js";import"./Dialog--6GRJbyV.js";import"./RSPContexts-COprRsvg.js";import"./OverlayArrow-C7JKPmKj.js";import"./useControlledState-BiXfF0Y1.js";import"./Collection-DxypVpmd.js";import"./CollectionBuilder-DBkURgoe.js";import"./Separator-DodoKnoT.js";import"./Group-DJY0cn_B.js";import"./SearchField-DAJQjktq.js";import"./FieldError-CSYQEfgd.js";import"./Form-BBooAEet.js";import"./useTextField-BxOi2WYK.js";import"./useFormReset-BDGpTE2A.js";import"./TextField-Ikioio4Y.js";import"./useEvent-CgmVVSAd.js";import"./SelectionManager-u7tMSqsB.js";import"./FocusScope-CzMQYsxZ.js";import"./ColumnLayout-C-0T0WEl.js";import"./Avatar-D_gL7riO.js";import"./AlertIcon-BQwhegr5.js";import"./Image-IjXh8yB8.js";import"./Link-Dex6LQne.js";import"./ButtonView-UYp6GouB.js";import"./ContextMenuContent-DPi5Ldl6.js";import"./Popover-DtlXaqHk.js";import"./DialogTriggerView-B4FX_acS.js";import"./Switch-DgpucnUc.js";import"./Label-B05m9Jha.js";import"./useToggleState-B-GXNmnt.js";import"./FieldError-BNkV0zVI.js";import"./LoadingSpinner-CTxNA6YP.js";import"./Heading-xcfdV1Zm.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-BK7BqSsu.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,fr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
